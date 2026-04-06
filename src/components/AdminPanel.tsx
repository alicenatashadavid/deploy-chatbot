import React, { useState, useEffect } from "react";
import { X, Plus, Trash2, Edit2, LogOut, Save, Loader2 } from "lucide-react";

interface FAQ {
  id: number;
  category: string;
  question: string;
  keywords: string;
  answer: string;
}

interface Clinic {
  id: number;
  name: string;
  type: string;
  location: string;
  operating_hours: string;
  contact: string;
  map_url: string;
  is_closed: boolean;
}

export default function AdminPanel({ onClose }: { onClose: () => void }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [activeTab, setActiveTab] = useState<"faqs" | "clinics">("faqs");
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [clinics, setClinics] = useState<Clinic[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
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
      const faqRes = await fetch("/api/admin/faqs", {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      const clinicRes = await fetch("/api/admin/clinics", {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      setFaqs(await faqRes.json());
      setClinics(await clinicRes.json());
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

  const handleDelete = async (id: number) => {
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

  return (
    <div className="fixed inset-0 bg-zinc-50 z-50 flex flex-col">
      <header className="bg-blue-950 text-white p-6 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <nav className="flex gap-2 ml-8">
            <button
              onClick={() => setActiveTab("faqs")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "faqs" ? "bg-white text-blue-950" : "hover:bg-white/10"
              }`}
            >
              FAQs
            </button>
            <button
              onClick={() => setActiveTab("clinics")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === "clinics" ? "bg-white text-blue-950" : "hover:bg-white/10"
              }`}
            >
              Klinik
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
                {activeTab === "faqs" ? (
                  <>
                    <div className="md:col-span-1">
                      <label className="block text-sm font-medium mb-1">Kategori</label>
                      <input
                        type="text"
                        value={formData.category || ""}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full p-3 rounded-xl border border-zinc-200 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label className="block text-sm font-medium mb-1">Kata Kunci (Koma-separated)</label>
                      <input
                        type="text"
                        value={formData.keywords || ""}
                        onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                        className="w-full p-3 rounded-xl border border-zinc-200 outline-none focus:ring-2 focus:ring-blue-500"
                      />
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
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium mb-1">Nama Klinik</label>
                      <input
                        type="text"
                        value={formData.name || ""}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 rounded-xl border border-zinc-200 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Jenis</label>
                      <select
                        value={formData.type || "KD"}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full p-3 rounded-xl border border-zinc-200 outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Hospital">Hospital</option>
                        <option value="KK">Klinik Kesihatan</option>
                        <option value="KD">Klinik Desa</option>
                        <option value="Komuniti">Klinik Komuniti</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Lokasi</label>
                      <input
                        type="text"
                        value={formData.location || ""}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full p-3 rounded-xl border border-zinc-200 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Waktu Operasi</label>
                      <input
                        type="text"
                        value={formData.operating_hours || ""}
                        onChange={(e) => setFormData({ ...formData, operating_hours: e.target.value })}
                        className="w-full p-3 rounded-xl border border-zinc-200 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="flex items-center gap-2 mt-6">
                      <input
                        type="checkbox"
                        checked={formData.is_closed || false}
                        onChange={(e) => setFormData({ ...formData, is_closed: e.target.checked })}
                        className="w-5 h-5 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label className="text-sm font-medium">Tutup Kekal/Sementara</label>
                    </div>
                  </>
                )}
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
                    {activeTab === "faqs" ? "Kategori" : "Jenis"}
                  </th>
                  <th className="p-6 text-sm font-bold text-zinc-600 text-right">Tindakan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-50">
                {(activeTab === "faqs" ? faqs : clinics).map((item: any) => (
                  <tr key={item.id} className="hover:bg-zinc-50/50 transition-colors">
                    <td className="p-6">
                      <p className="font-medium text-blue-950">{item.question || item.name}</p>
                      <p className="text-xs text-zinc-500 mt-1 line-clamp-1">
                        {item.answer || item.location}
                      </p>
                    </td>
                    <td className="p-6">
                      <span className="px-3 py-1 bg-zinc-100 rounded-full text-xs font-bold text-zinc-600 uppercase">
                        {item.category || item.type}
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
            {(activeTab === "faqs" ? faqs : clinics).length === 0 && !isLoading && (
              <div className="p-12 text-center text-zinc-400">Tiada rekod dijumpai.</div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
