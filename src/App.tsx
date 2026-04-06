import React, { useState, useRef, useEffect } from 'react';
import { bahagianData, faqs } from './data';
import { botPicture } from './assets';
import { Send, User, Loader2, RefreshCcw, ChevronLeft, MessageCircle, X, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { chat, isDemoMode } from './services/geminiService';
import { getMapUrl } from './utils/locationService';
import { getContentResult } from './utils/contentService';
import { DocumentInfo } from './data/documents';


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
  const [isOpen, setIsOpen] = useState(false);
  const findFAQ = (input: string) => {
    const lowerInput = input.toLowerCase();
    return faqs.find(faq =>
      faq?.keywords?.some(keyword => {
        const lowerKeyword = keyword.toLowerCase();
        // Use word boundaries for all keywords to avoid partial matches
        const regex = new RegExp(`\\b${lowerKeyword}\\b`, 'i');
        return regex.test(lowerInput);
      })
    );
  };

  const findBahagian = (input: string) => {
    const lowerInput = input.toLowerCase();
    return bahagianData.find(b =>
      b?.keywords?.some(keyword => lowerInput.includes(keyword)) ||
      b?.nama?.toLowerCase().includes(lowerInput)
    );
  };

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

    const faqResult = findFAQ(userText);
    const bahagianResult = findBahagian(userText);

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
      const locationResult = getMapUrl(userText);
      const contentResult = getContentResult(userText);
      
      const mapUrl = locationResult.mapUrl;
      const previewUrl = contentResult.previewUrl;
      const linkUrl = contentResult.linkUrl;
      const documentList = contentResult.documentList;
      const overrideMessage = locationResult.overrideMessage || contentResult.overrideMessage;

      let botResponseText = "";

      if (overrideMessage) {
        botResponseText = overrideMessage;
      } else {
        // Construct prompt with available data
        let context = "";
        if (faqResult) {
          context += `[Skrip FAQ]: ${faqResult.answer}\n\n`;
        }
        if (bahagianResult) {
          context += `[Maklumat Bahagian]: ${JSON.stringify(bahagianResult)}\n\n`;
        }

        const prompt = context 
          ? `${context}[Soalan Pengguna]: ${userText}\n\nSila gunakan maklumat di atas untuk menjawab soalan pengguna dengan gaya yang mesra dan terperinci. Jangan perkenalkan diri anda semula atau memberi salam pembukaan.`
          : userText;

        const response = await chat.sendMessage({
          message: prompt,
        });
        botResponseText = response.text || "Maaf, saya tidak pasti bagaimana untuk menjawab itu. Boleh anda jelaskan lebih lanjut?";
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: botResponseText,
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
      text: "Maaf, berlaku ralat teknikal. Sila cuba lagi sebentar.",
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
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="pointer-events-auto flex flex-col w-[90vw] md:w-[400px] h-[600px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-cyan-100 overflow-hidden mb-4"
          >
            {/* Header */}
            <header className="flex items-center justify-between px-4 h-16 border-b border-cyan-50 bg-gradient-to-r from-blue-950 to-indigo-900 text-white">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src={botPicture} alt="Bot" className="w-10 h-10 object-cover rounded-full border-2 border-cyan-400/30 shadow-sm"/>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-blue-950" />
                </div>
                <div>
                  <h1 className="text-base font-bold tracking-tight flex items-center gap-2">
                    Charlie
                    {isDemoMode && (
                      <span className="text-[8px] bg-amber-400 text-amber-950 px-1.5 py-0.5 rounded-full font-black uppercase tracking-tighter shadow-sm border border-amber-300/50">
                        Demo
                      </span>
                    )}
                  </h1>
                  <p className="text-[10px] text-cyan-200/80 font-medium">i-Sihat JKWPL Assistant</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={resetChat}
                  className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                  title="Set Semula"
                >
                  <RefreshCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                  title="Minimum"
                >
                  <Minimize2 className="w-5 h-5" />
                </button>
              </div>
            </header>

            {/* Chat Area */}
            <main className="flex-1 overflow-y-auto p-4 space-y-4 bg-cyan-50/20">
              <div className="space-y-4">
                <AnimatePresence initial={false}>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`flex gap-2 max-w-[85%] ${
                          msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                        }`}
                      >
                        <div
                          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 ${
                            msg.role === 'user' ? 'bg-cyan-200' : 'bg-blue-950'
                          }`}
                        >
                          {msg.role === 'user' ? (
                            <User className="w-4 h-4 text-indigo-900" />
                          ) : (
                            <img src={botPicture} alt="Bot" className="w-6 h-6 object-cover rounded-full"/>
                          )}
                        </div>
                        <div
                          className={`p-3 rounded-2xl shadow-sm ${
                            msg.role === 'user'
                              ? 'bg-cyan-600 text-white rounded-tr-none'
                              : 'bg-white border border-cyan-50 text-indigo-900 rounded-tl-none'
                          }`}
                        >
                          <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                          {msg.mapUrl && (
                            <div className="mt-3 overflow-hidden rounded-xl border border-zinc-100 shadow-sm">
                              <iframe
                                src={msg.mapUrl}
                                width="100%"
                                height="180"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps"
                              />
                            </div>
                          )}
                          {msg.previewUrl && (
                            <div className="mt-3 overflow-hidden rounded-xl border border-zinc-100 shadow-sm bg-white">
                              <iframe
                                src={msg.previewUrl}
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                loading="lazy"
                                title="Preview"
                              />
                            </div>
                          )}
                          {msg.linkUrl && (
                            <div className="mt-3">
                              <a 
                                href={msg.linkUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold text-cyan-700 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition-colors border border-cyan-100"
                              >
                                Buka Pautan Luar
                              </a>
                            </div>
                          )}
                          {msg.documentList && (
                            <div className="mt-3 space-y-2">
                              {msg.documentList.map((doc) => (
                                <button
                                  key={doc.id}
                                  onClick={() => handleSend(undefined, doc.name)}
                                  className="w-full text-left p-2.5 rounded-xl border border-sky-100 bg-sky-50/50 hover:bg-sky-100 transition-colors group"
                                >
                                  <p className="text-[11px] font-bold text-blue-950 group-hover:text-blue-700">{doc.name}</p>
                                  <p className="text-[9px] text-zinc-500 mt-0.5 line-clamp-1">{doc.description}</p>
                                </button>
                              ))}
                            </div>
                          )}
                          <span
                            className={`text-[9px] mt-1.5 block opacity-60 ${
                              msg.role === 'user' ? 'text-right' : 'text-left'
                            }`}
                          >
                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      </div>
                      {msg.id === '1' && messages.length === 1 && (
                        <div className="ml-8 mt-3 flex flex-col gap-1.5">
                          {quickFaqs.map((faq, index) => (
                            <button
                              key={index}
                              onClick={() => handleSend(undefined, faq)}
                              className="px-3 py-2 text-[11px] font-semibold text-blue-950 bg-white border border-sky-100 rounded-xl hover:bg-sky-50 transition-colors shadow-sm text-left w-fit max-w-[250px]"
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
                    <div className="flex gap-2 items-center bg-white border border-cyan-50 p-3 rounded-2xl rounded-tl-none shadow-sm">
                      <Loader2 className="w-3 h-3 animate-spin text-emerald-500" />
                      <span className="text-xs text-zinc-500 font-medium">Sedang berfikir...</span>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </main>

            {/* Input Area */}
            <footer className="p-4 bg-white border-t border-cyan-50">
              <form
                onSubmit={handleSend}
                className="relative flex items-center gap-2 bg-cyan-50/30 p-1.5 rounded-2xl border border-cyan-100 focus-within:border-cyan-400 focus-within:ring-1 focus-within:ring-cyan-400 transition-all"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Tanya saya apa-apa..."
                  className="flex-1 bg-transparent px-3 py-1.5 text-sm text-zinc-900 focus:outline-none placeholder:text-zinc-400"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className={`p-2 rounded-xl transition-all ${
                    !input.trim() || isLoading
                      ? 'text-zinc-300 bg-transparent'
                      : 'text-white bg-cyan-600 hover:bg-cyan-700 shadow-lg shadow-cyan-600/20'
                  }`}
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <div className="flex justify-between items-center mt-2 px-1">
                <p className="text-[8px] text-zinc-400">
                  Dikuasakan oleh Gemini AI
                </p>
                <p className="text-[8px] text-zinc-400">
                  i-Sihat JKWPL Chatbot
                </p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-950 to-indigo-900 rounded-full shadow-2xl text-white hover:shadow-cyan-500/20 transition-shadow group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative"
            >
              <MessageCircle className="w-7 h-7" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-blue-950 animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute right-full mr-4 px-3 py-1.5 bg-white text-blue-950 text-xs font-bold rounded-xl shadow-xl border border-cyan-50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Tanya Charlie! 👋
          </div>
        )}
      </motion.button>
    </div>
  );
}
