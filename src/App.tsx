import React, { useState, useRef, useEffect } from 'react';
import { botPicture } from './assets';
import { Send, User, RefreshCcw, ChevronLeft, MessageCircle, X, Minimize2, Settings, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { getMapUrl } from './utils/locationService';
import { getContentResult } from './utils/contentService';
import { DocumentInfo } from './data/documents';
import AdminPanel from './components/AdminPanel';


interface Message {
  id: string;
  role: 'user' | 'bot';
  text: string;
  timestamp: Date;
  mapUrl?: string;
  previewUrl?: string;
  linkUrl?: string;
  documentList?: DocumentInfo[];
}

export default function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'bot',
      text: 'Helo! Saya Charlie. Bagaimana saya boleh membantu anda hari ini?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickFaqs = [
    "Senarai Manual dan Garis Panduan",
    "Waktu operasi Klinik Kesihatan?",
    "Senarai borang",
    "Bagaimana cara hubungi JKWPL?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent, customText?: string) => {
    e?.preventDefault();
    const userText = customText || input.trim();
    if (!userText || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: userText,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // 1. Fetch from Backend API
      const res = await fetch(`/api/chat?q=${encodeURIComponent(userText)}`);
      const apiData = await res.json();

      // 2. Local Overrides (Maps/Documents)
      const locationResult = getMapUrl(userText);
      const contentResult = getContentResult(userText);
      
      const mapUrl = locationResult.mapUrl || apiData.mapUrl;
      const previewUrl = contentResult.previewUrl;
      const linkUrl = contentResult.linkUrl;
      const documentList = contentResult.documentList;
      const overrideMessage = locationResult.overrideMessage || contentResult.overrideMessage;

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: overrideMessage || apiData.text,
        timestamp: new Date(),
        mapUrl: mapUrl || undefined,
        previewUrl: previewUrl || undefined,
        linkUrl: linkUrl || undefined,
        documentList: documentList || undefined,
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: "Maaf, berlaku ralat sambungan ke pangkalan data. Sila cuba lagi sebentar.",
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
    }
  };
  const resetChat = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col w-full h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-6 h-20 border-b border-cyan-50 bg-gradient-to-r from-blue-950 to-indigo-900 text-white shadow-lg z-10">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img src={botPicture} alt="Bot" className="w-12 h-12 object-cover rounded-full border-2 border-cyan-400/30 shadow-sm"/>
            <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-blue-950" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight flex items-center gap-2">
              Charlie
            </h1>
            <p className="text-xs text-cyan-200/80 font-medium tracking-wide">i-Sihat JKWPL Assistant</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAdmin(true)}
            className="p-2.5 hover:bg-white/10 rounded-xl transition-colors group"
            title="Admin Panel"
          >
            <Settings className="w-5 h-5" />
          </button>
          <button
            onClick={resetChat}
            className="p-2.5 hover:bg-white/10 rounded-xl transition-colors group"
            title="Set Semula"
          >
            <RefreshCcw className="w-5 h-5 group-active:rotate-180 transition-transform duration-500" />
          </button>
        </div>
      </header>

      {showAdmin && <AdminPanel onClose={() => setShowAdmin(false)} />}

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 bg-cyan-50/20 scroll-smooth">
        <div className="max-w-4xl mx-auto space-y-6">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex gap-3 max-w-[90%] md:max-w-[80%] ${
                    msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1 shadow-sm ${
                      msg.role === 'user' ? 'bg-cyan-200' : 'bg-blue-950'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <User className="w-5 h-5 text-indigo-900" />
                    ) : (
                      <img src={botPicture} alt="Bot" className="w-8 h-8 object-cover rounded-full"/>
                    )}
                  </div>
                  <div
                    className={`p-4 rounded-2xl shadow-sm ${
                      msg.role === 'user'
                        ? 'bg-cyan-600 text-white rounded-tr-none'
                        : 'bg-white border border-cyan-50 text-indigo-900 rounded-tl-none'
                    }`}
                  >
                    <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    {msg.mapUrl && (
                      <div className="mt-4 overflow-hidden rounded-xl border border-zinc-100 shadow-sm">
                        <iframe
                          src={msg.mapUrl}
                          width="100%"
                          height="250"
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Google Maps"
                        />
                      </div>
                    )}
                    {msg.previewUrl && (
                      <div className="mt-4 overflow-hidden rounded-xl border border-zinc-100 shadow-sm bg-white">
                        <iframe
                          src={msg.previewUrl}
                          width="100%"
                          height="400"
                          style={{ border: 0 }}
                          loading="lazy"
                          title="Preview"
                        />
                      </div>
                    )}
                    {msg.linkUrl && (
                      <div className="mt-4">
                        <a 
                          href={msg.linkUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-cyan-700 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors border border-cyan-100"
                        >
                          Buka Pautan Luar
                        </a>
                      </div>
                    )}
                    {msg.documentList && (
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {msg.documentList.map((doc) => (
                          <button
                            key={doc.id}
                            onClick={() => handleSend(undefined, doc.name)}
                            className="text-left p-3.5 rounded-xl border border-sky-100 bg-sky-50/50 hover:bg-sky-100 transition-colors group"
                          >
                            <p className="text-xs font-bold text-blue-950 group-hover:text-blue-700">{doc.name}</p>
                            <p className="text-[10px] text-zinc-500 mt-1 line-clamp-1">{doc.description}</p>
                          </button>
                        ))}
                      </div>
                    )}
                    <span
                      className={`text-[10px] mt-2 block opacity-60 font-medium ${
                        msg.role === 'user' ? 'text-right' : 'text-left'
                      }`}
                    >
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
                {msg.id === '1' && messages.length === 1 && (
                  <div className="ml-11 mt-4 flex flex-wrap gap-2">
                    {quickFaqs.map((faq, index) => (
                      <button
                        key={index}
                        onClick={() => handleSend(undefined, faq)}
                        className="px-4 py-2.5 text-xs font-semibold text-blue-950 bg-white border border-sky-100 rounded-xl hover:bg-sky-50 transition-colors shadow-sm text-left"
                      >
                        {faq}
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="flex gap-3 items-center bg-white border border-cyan-50 p-4 rounded-2xl rounded-tl-none shadow-sm">
                <Loader2 className="w-4 h-4 animate-spin text-emerald-500" />
                <span className="text-sm text-zinc-500 font-medium">Sedang mencari...</span>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Input Area */}
      <footer className="p-4 md:p-6 bg-white border-t border-cyan-50 shadow-[0_-4px_20px_-5px_rgba(0,0,0,0.05)]">
        <div className="max-w-4xl mx-auto">
          <form
            onSubmit={handleSend}
            className="relative flex items-center gap-3 bg-cyan-50/30 p-2 rounded-2xl border border-cyan-100 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400/20 transition-all shadow-inner"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanya saya apa-apa..."
              className="flex-1 bg-transparent px-4 py-2.5 text-sm md:text-base text-zinc-900 focus:outline-none placeholder:text-zinc-400"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className={`p-3 rounded-xl transition-all ${
                !input.trim() || isLoading
                  ? 'text-zinc-300 bg-transparent'
                  : 'text-white bg-cyan-600 hover:bg-cyan-700 shadow-lg shadow-cyan-600/20 active:scale-95'
              }`}
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
          <div className="flex justify-between items-center mt-3 px-2">
            <div className="flex gap-4">
              <p className="text-[10px] text-zinc-400 font-medium">
                i-Sihat JKWPL Chatbot
              </p>
            </div>
            <p className="text-[10px] text-zinc-300">© 2024 JKWPL Labuan</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
