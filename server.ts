import express from "express";
import { createServer as createViteServer } from "vite";
import mysql from "mysql2/promise";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // MySQL Connection Pool
  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT || "3306"),
  };

  const isConfigured = dbConfig.host && dbConfig.user && dbConfig.database;

  if (!isConfigured) {
    console.warn("⚠️ DATABASE NOT CONFIGURED: Please add DB_HOST, DB_USER, DB_PASSWORD, and DB_NAME to your Environment Variables in Settings.");
  }

  const pool = mysql.createPool({
    ...dbConfig,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  // --- API ROUTES ---

  // 1. Chat/Search API (Keyword-based)
  app.get("/api/chat", async (req, res) => {
    if (!isConfigured) {
      return res.json({
        role: "bot",
        text: "Sistem pangkalan data belum dikonfigurasi. Sila hubungi admin untuk menetapkan kredential pangkalan data di Settings.",
      });
    }

    const { q } = req.query;
    if (!q || typeof q !== "string") {
      return res.status(400).json({ error: "Query is required" });
    }

    const lowerQuery = q.toLowerCase();
    const queryWords = lowerQuery.split(/\s+/).filter(w => w.length > 2); // Filter short words

    try {
      // 1. Search in FAQs via faq_keywords
      const [faqMatches]: any = await pool.query(`
        SELECT f.*, c.name as category_name 
        FROM faqs f
        JOIN faq_keywords fk ON f.id = fk.faq_id
        LEFT JOIN categories c ON f.category_id = c.id
        WHERE LOWER(fk.keyword) LIKE ? OR LOWER(f.question) LIKE ?
      `, [`%${lowerQuery}%`, `%${lowerQuery}%`]);

      if (faqMatches.length > 0) {
        return res.json({
          role: "bot",
          text: faqMatches[0].answer.replace(/\\n/g, '\n'),
          category: faqMatches[0].category_name,
        });
      }

      // 2. Search in Bahagian via keywords
      const [bahagianMatches]: any = await pool.query(`
        SELECT b.* 
        FROM bahagian b
        JOIN keywords k ON b.id = k.bahagian_id
        WHERE LOWER(k.keyword) LIKE ? OR LOWER(b.nama) LIKE ?
      `, [`%${lowerQuery}%`, `%${lowerQuery}%`]);

      if (bahagianMatches.length > 0) {
        const b = bahagianMatches[0];
        // Fetch sections for this bahagian
        const [sections]: any = await pool.query("SELECT * FROM seksyen_unit WHERE bahagian_id = ?", [b.id]);
        const sectionsText = sections.map((s: any) => `*${s.nama_seksyen}*\n${s.fungsi_tugas || ""}`).join('\n\n');
        
        return res.json({
          role: "bot",
          text: `*Maklumat Bahagian ${b.nama}*\n\n${b.peranan || ""}\n\n${b.visi_objektif || ""}\n\n${b.misi_wawasan || ""}\n\n*Seksyen/Unit:*\n${sectionsText}`,
        });
      }

      // 3. Search in Documents via document_keywords
      const [docMatches]: any = await pool.query(`
        SELECT d.* 
        FROM documents d
        JOIN document_keywords dk ON d.id = dk.document_id
        WHERE LOWER(dk.keyword) LIKE ? OR LOWER(d.name) LIKE ?
      `, [`%${lowerQuery}%`, `%${lowerQuery}%`]);

      if (docMatches.length > 0) {
        return res.json({
          role: "bot",
          text: `Saya menjumpai borang yang anda cari:\n\n*${docMatches[0].name}*\n${docMatches[0].description || ""}`,
          linkUrl: docMatches[0].url,
        });
      }

      // 4. Search in Manuals via manuals_keywords
      const [manualMatches]: any = await pool.query(`
        SELECT m.* 
        FROM manuals m
        JOIN manuals_keywords mk ON m.id = mk.manuals_id
        WHERE LOWER(mk.keywords) LIKE ? OR LOWER(m.name) LIKE ?
      `, [`%${lowerQuery}%`, `%${lowerQuery}%`]);

      if (manualMatches.length > 0) {
        return res.json({
          role: "bot",
          text: `Saya menjumpai manual/garis panduan yang anda cari:\n\n*${manualMatches[0].name}*\n${manualMatches[0].description || ""}`,
          linkUrl: manualMatches[0].url,
        });
      }

      // Default Response
      res.json({
        role: "bot",
        text: "Maaf, saya tidak mempunyai maklumat mengenai perkara ini. Sila cuba tanya tentang perkhidmatan lain atau hubungi JKWPL secara terus.",
      });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Gagal menyambung ke pangkalan data." });
    }
  });

  // 2. Admin Login
  app.post("/api/admin/login", async (req, res) => {
    const { username, password } = req.body;
    const defaultAdmin = process.env.ADMIN_USERNAME || "admin";
    const defaultPass = process.env.ADMIN_PASSWORD || "admin123";

    if (username === defaultAdmin && password === defaultPass) {
      const token = jwt.sign({ username }, process.env.JWT_SECRET || "secret", { expiresIn: "1h" });
      return res.json({ success: true, token });
    }

    res.status(401).json({ success: false, message: "Kredential tidak sah." });
  });

  // 3. Admin CRUD (Protected Middleware)
  const authenticateToken = (req: any, res: any, next: any) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET || "secret", (err: any, user: any) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  };

  // FAQs CRUD
  app.get("/api/admin/faqs", authenticateToken, async (req, res) => {
    const [rows] = await pool.query("SELECT f.*, c.name as category_name FROM faqs f LEFT JOIN categories c ON f.category_id = c.id");
    res.json(rows);
  });

  app.post("/api/admin/faqs", authenticateToken, async (req, res) => {
    const { category_id, question, answer } = req.body;
    await pool.query("INSERT INTO faqs (category_id, question, answer) VALUES (?, ?, ?)", [category_id, question, answer]);
    res.json({ success: true });
  });

  app.put("/api/admin/faqs/:id", authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { category_id, question, answer } = req.body;
    await pool.query("UPDATE faqs SET category_id=?, question=?, answer=? WHERE id=?", [category_id, question, answer, id]);
    res.json({ success: true });
  });

  app.delete("/api/admin/faqs/:id", authenticateToken, async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM faqs WHERE id=?", [id]);
    res.json({ success: true });
  });

  // Bahagian CRUD
  app.get("/api/admin/bahagian", authenticateToken, async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM bahagian");
    res.json(rows);
  });

  // Documents CRUD
  app.get("/api/admin/documents", authenticateToken, async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM documents");
    res.json(rows);
  });

  // Manuals CRUD
  app.get("/api/admin/manuals", authenticateToken, async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM manuals");
    res.json(rows);
  });

  // Categories (for dropdowns)
  app.get("/api/admin/categories", authenticateToken, async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM categories");
    res.json(rows);
  });

  // --- VITE MIDDLEWARE ---
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
