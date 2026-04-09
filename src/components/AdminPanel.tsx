import React, { useState, useEffect } from "react";
import { X, Plus, Trash2, Edit2, LogOut, Save, Loader2, FileText, Book, Users, MessageSquare } from "lucide-react";

interface FAQ {
  id: number;
  category_id: number;
  category_name?: string;
  question: string;
  answer: string;
}

interface Bahagian {
  id: number;
  nama: string;
  peranan: string;
  visi_objektif: string;
  misi_wawasan: string;
}

interface Document {
  id: string;
  name: string;
  url: string;
  description: string;
}

interface Manual {
  id: string;
  name: string;
  url: string;
  description: string;
}

interface Category {
  id: number;
  name: string;
}

type TabType = "faqs" | "bahagian" | "documents" | "manuals";

export default function AdminPanel({ onClose }: { onClose: () => void }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [activeTab, setActiveTab] = useState<TabType>("faqs");
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [bahagian, setBahagian] = useState<Bahagian[]>([]);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [manuals, setManuals] = useState<Manual[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | number | null>(null);
  const [formData, setFormData] = useState<any>({});

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success) {
        setToken(data.token);
        setIsLoggedIn(true);
        fetchData(data.token);
      } else {
        alert("Login gagal!");
      }
    } catch (err) {
      alert("Ralat sambungan!");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchData = async (authToken: string) => {
    setIsLoading(true);
    try {
      const [faqRes, bahagianRes, docRes, manualRes, catRes] = await Promise.all([
        fetch("/api/admin/faqs", { headers: { Authorization: `Bearer ${authToken}` } }),
        fetch("/api/admin/bahagian", { headers: { Authorization: `Bearer ${authToken}` } }),
        fetch("/api/admin/documents", { headers: { Authorization: `Bearer ${authToken}` } }),
        fetch("/api/admin/manuals", { headers: { Authorization: `Bearer ${authToken}` } }),
        fetch("/api/admin/categories", { headers: { Authorization: `Bearer ${authToken}` } }),
      ]);

      setFaqs(await faqRes.json());
      setBahagian(await bahagianRes.json());
      setDocuments(await docRes.json());
      setManuals(await manualRes.json());
      setCategories(await catRes.json());
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsLoading(true);
    const url = `/api/admin/${activeTab}${editingId ? `/${editingId}` : ""}`;
    const method = editingId ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setEditingId(null);
        setFormData({});
        fetchData(token);
      }
    } catch (err) {
      alert("Gagal menyimpan!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string | number) => {
    if (!confirm("Adakah anda pasti?")) return;
    setIsLoading(true);
    try {
      const res = await fetch(`/api/admin/${activeTab}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) fetchData(token);
    } catch (err) {
      alert("Gagal memadam!");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl relative">
          <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-zinc-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold text-blue-950 mb-6">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-950 text-white py-3 rounded-xl font-bold hover:bg-blue-900 transition-colors flex items-center justify-center gap-2"
            >
              {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  const renderForm = () => {
    switch (activeTab) {
      case "faqs":
        return (
          <>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium mb-1">Kategori</label>
              <select
                value={formData.category_id || ""}
                onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                className="w-full p-3 rounded-xl border border-zinc-200 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Pilih Kategori</option>
                {categories.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Soalan</label>
              <input
                type="text"
                value={formData.question || ""}
                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                className="w-full p-3 rounded-xl border border-zinc-200 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Jawapan</label>
              <textarea
                value={formData.answer || ""}
                onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                className="w-full p-3 rounded-xl border border-zinc-200 outline-none focus:ring-2 focus:ring-blue-500 h-32"
              />
            </div>
          </>
        );
      case "bahagian":
        return (
          <>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Nama Bahagian</label>
              <input
                type="text"
                value={formData.nama || ""}
                onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                className="w-full p-3 rounded-xl border border-zinc-200 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Peranan</label>
              <textarea
                value={formData.peranan || ""}
                onChange={(e) => setFormData({ ...formData, peranan: e.target.value })}
                className="w-full p-3 rounded-xl border border-zinc-200 outline-none focus:ring-2 focus:ring-blue-500 h-24"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium mb-1">Visi & Objektif</label>
              <textarea
                value={formData.visi_objektif || ""}
                onChange={(e) => setFormData({ ...formData, visi_objektif: e.target.value })}
                className="w-full p-3 rounded-xl border border-zinc-200 outline-none focus:ring-2 focus:ring-blue-500 h-24"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium mb-1">Misi & Wawasan</label>
              <textarea
                value={formData.misi_wawasan || ""}
                onChange={(e) => setFormData({ ...formData, misi_wawasan: e.target.value })}
                className="w-full p-3 rounded-xl border border-zinc-200 outline-none focus:ring-2 focus:ring-blue-500 h-24"
              />
            </div>
          </>
        );
      case "documents":
      case "manuals":
        return (
          <>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium mb-1">ID</label>
              <input
                type="text"
                value={formData.id || ""}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                className="w-full p-3 rounded-xl border border-zinc-200 outline-none focus:ring-2 focus:ring-blue-500"
                disabled={!!editingId}
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium mb-1">Nama</label>
              <input
                type="text"
                value={formData.name || ""}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 rounded-xl border border-zinc-200 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">URL</label>
              <input
                type="text"
                value={formData.url || ""}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                className="w-full p-3 rounded-xl border border-zinc-200 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Penerangan</label>
              <textarea
                value={formData.description || ""}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full p-3 rounded-xl border border-zinc-200 outline-none focus:ring-2 focus:ring-blue-500 h-24"
              />
            </div>
          </>
        );
    }
  };

  const getTableData = () => {
    switch (activeTab) {
      case "faqs": return faqs;
      case "bahagian": return bahagian;
      case "documents": return documents;
      case "manuals": return manuals;
      default: return [];
    }
  };

  return (
    <div className="fixed inset-0 bg-zinc-50 z-50 flex flex-col">
      <header className="bg-blue-950 text-white p-6 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <nav className="flex gap-2 ml-8">
            <button
              onClick={() => setActiveTab("faqs")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                activeTab === "faqs" ? "bg-white text-blue-950" : "hover:bg-white/10"
              }`}
            >
              <MessageSquare className="w-4 h-4" /> FAQs
            </button>
            <button
              onClick={() => setActiveTab("bahagian")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                activeTab === "bahagian" ? "bg-white text-blue-950" : "hover:bg-white/10"
              }`}
            >
              <Users className="w-4 h-4" /> Bahagian
            </button>
            <button
              onClick={() => setActiveTab("documents")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                activeTab === "documents" ? "bg-white text-blue-950" : "hover:bg-white/10"
              }`}
            >
              <FileText className="w-4 h-4" /> Borang
            </button>
            <button
              onClick={() => setActiveTab("manuals")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                activeTab === "manuals" ? "bg-white text-blue-950" : "hover:bg-white/10"
              }`}
            >
              <Book className="w-4 h-4" /> Manual
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              setIsLoggedIn(false);
              setToken("");
            }}
            className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded-lg transition-colors text-sm"
          >
            <LogOut className="w-4 h-4" /> Logout
          </button>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-blue-950 capitalize">Urus {activeTab}</h2>
            <button
              onClick={() => {
                setEditingId(null);
                setFormData({});
              }}
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-emerald-700 transition-colors flex items-center gap-2 shadow-lg shadow-emerald-600/20"
            >
              <Plus className="w-5 h-5" /> Tambah Baru
            </button>
          </div>

          {/* Form Editor */}
          {(editingId !== null || Object.keys(formData).length > 0) && (
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-zinc-100 mb-12 animate-in fade-in slide-in-from-top-4">
              <h3 className="text-lg font-bold mb-6">{editingId ? "Edit" : "Tambah"} Rekod</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderForm()}
              </div>
              <div className="flex gap-3 mt-8">
                <button
                  onClick={handleSave}
                  disabled={isLoading}
                  className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Save className="w-5 h-5" /> Simpan
                </button>
                <button
                  onClick={() => {
                    setEditingId(null);
                    setFormData({});
                  }}
                  className="bg-zinc-100 text-zinc-600 px-8 py-3 rounded-xl font-bold hover:bg-zinc-200 transition-colors"
                >
                  Batal
                </button>
              </div>
            </div>
          )}

          {/* Data Table */}
          <div className="bg-white rounded-3xl shadow-xl border border-zinc-100 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-zinc-50 border-b border-zinc-100">
                <tr>
                  <th className="p-6 text-sm font-bold text-zinc-600">
                    {activeTab === "faqs" ? "Soalan" : "Nama"}
                  </th>
                  <th className="p-6 text-sm font-bold text-zinc-600">
                    {activeTab === "faqs" ? "Kategori" : "Penerangan"}
                  </th>
                  <th className="p-6 text-sm font-bold text-zinc-600 text-right">Tindakan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-50">
                {getTableData().map((item: any) => (
                  <tr key={item.id} className="hover:bg-zinc-50/50 transition-colors">
                    <td className="p-6">
                      <p className="font-medium text-blue-950">{item.question || item.nama || item.name}</p>
                      <p className="text-xs text-zinc-500 mt-1 line-clamp-1">
                        {item.answer || item.peranan || item.description}
                      </p>
                    </td>
                    <td className="p-6">
                      <span className="px-3 py-1 bg-zinc-100 rounded-full text-xs font-bold text-zinc-600 uppercase">
                        {item.category_name || (activeTab === "bahagian" ? "Bahagian" : "Dokumen")}
                      </span>
                    </td>
                    <td className="p-6 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => {
                            setEditingId(item.id);
                            setFormData(item);
                          }}
                          className="p-2 hover:bg-blue-50 text-blue-600 rounded-lg transition-colors"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {getTableData().length === 0 && !isLoading && (
              <div className="p-12 text-center text-zinc-400">Tiada rekod dijumpai.</div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
