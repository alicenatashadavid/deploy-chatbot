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
  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT || "3306"),
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  // --- API ROUTES ---

  // 1. Chat/Search API (Keyword-based)
  app.get("/api/chat", async (req, res) => {
    const { q } = req.query;
    if (!q || typeof q !== "string") {
      return res.status(400).json({ error: "Query is required" });
    }

    const lowerQuery = q.toLowerCase();
    const keywords = lowerQuery.split(/\s+/);

    try {
      // Search in FAQs
      const [faqs]: any = await pool.query("SELECT * FROM faqs");
      const matchedFaq = faqs.find((f: any) => {
        const faqKeywords = f.keywords.toLowerCase().split(",");
        return faqKeywords.some((kw: string) => keywords.includes(kw.trim().toLowerCase()));
      });

      if (matchedFaq) {
        return res.json({
          role: "bot",
          text: matchedFaq.answer,
          category: matchedFaq.category,
        });
      }

      // Search in Bahagian
      const [bahagian]: any = await pool.query("SELECT * FROM bahagian");
      const matchedBahagian = bahagian.find((b: any) => {
        const bKeywords = b.keywords.toLowerCase().split(",");
        return bKeywords.some((kw: string) => keywords.includes(kw.trim().toLowerCase())) ||
               b.nama.toLowerCase().includes(lowerQuery);
      });

      if (matchedBahagian) {
        return res.json({
          role: "bot",
          text: `Maklumat Bahagian ${matchedBahagian.nama}:\n\n${matchedBahagian.peranan || ""}\n\nSeksyen:\n${matchedBahagian.seksyen || ""}`,
        });
      }

      // Search in Clinics
      const [clinics]: any = await pool.query("SELECT * FROM clinics");
      const matchedClinic = clinics.find((c: any) => {
        return c.name.toLowerCase().includes(lowerQuery) ||
               keywords.some((kw: string) => c.name.toLowerCase().includes(kw));
      });

      if (matchedClinic) {
        let statusText = matchedClinic.is_closed ? " (TUTUP KEKAL/SEMENTARA)" : "";
        return res.json({
          role: "bot",
          text: `${matchedClinic.name}${statusText}\nLokasi: ${matchedClinic.location}\nWaktu Operasi: ${matchedClinic.operating_hours}\nHubungi: ${matchedClinic.contact}`,
          mapUrl: matchedClinic.map_url,
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
    const [rows] = await pool.query("SELECT * FROM faqs");
    res.json(rows);
  });

  app.post("/api/admin/faqs", authenticateToken, async (req, res) => {
    const { category, question, keywords, answer } = req.body;
    await pool.query("INSERT INTO faqs (category, question, keywords, answer) VALUES (?, ?, ?, ?)", [category, question, keywords, answer]);
    res.json({ success: true });
  });

  app.put("/api/admin/faqs/:id", authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { category, question, keywords, answer } = req.body;
    await pool.query("UPDATE faqs SET category=?, question=?, keywords=?, answer=? WHERE id=?", [category, question, keywords, answer, id]);
    res.json({ success: true });
  });

  app.delete("/api/admin/faqs/:id", authenticateToken, async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM faqs WHERE id=?", [id]);
    res.json({ success: true });
  });

  // Clinics CRUD
  app.get("/api/admin/clinics", authenticateToken, async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM clinics");
    res.json(rows);
  });

  app.post("/api/admin/clinics", authenticateToken, async (req, res) => {
    const { name, type, location, operating_hours, contact, map_url, is_closed } = req.body;
    await pool.query("INSERT INTO clinics (name, type, location, operating_hours, contact, map_url, is_closed) VALUES (?, ?, ?, ?, ?, ?, ?)", [name, type, location, operating_hours, contact, map_url, is_closed]);
    res.json({ success: true });
  });

  app.put("/api/admin/clinics/:id", authenticateToken, async (req, res) => {
    const { id } = req.params;
    const { name, type, location, operating_hours, contact, map_url, is_closed } = req.body;
    await pool.query("UPDATE clinics SET name=?, type=?, location=?, operating_hours=?, contact=?, map_url=?, is_closed=? WHERE id=?", [name, type, location, operating_hours, contact, map_url, is_closed, id]);
    res.json({ success: true });
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
