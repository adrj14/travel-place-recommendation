import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles, User, Bot } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your Yatrika AI assistant. Ask me anything about your next adventure!",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Mock AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        role: "assistant",
        content: "That sounds exciting! Based on your interest in " + input + ", I recommend exploring hidden trails in Darjeeling or the serene backwaters of Kerala.",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-3xl border border-white/20 bg-slate-950/40 backdrop-blur-2xl shadow-glow animate-in fade-in slide-in-from-bottom-4 duration-300 md:w-[400px]">
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-sunset px-6 py-4 text-white shadow-glass">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-display text-lg leading-none">Yatrika Assistant</h3>
                <span className="text-[10px] uppercase tracking-widest opacity-70">AI Powered</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 hover:bg-white/10 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/10">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex max-w-[85%] gap-3 ${
                      msg.role === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white shadow-glass ${
                      msg.role === "user" ? "bg-sky-500" : "bg-gradient-sunset"
                    }`}>
                      {msg.role === "user" ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                        msg.role === "user"
                          ? "bg-sky-500 text-white"
                          : "bg-white/10 text-slate-100 border border-white/5 backdrop-blur-sm"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Message Input */}
          <form
            onSubmit={handleSendMessage}
            className="border-t border-white/10 bg-white/5 p-4"
          >
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 pr-14 text-sm text-white placeholder-slate-400 outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="absolute right-2 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-white transition-all hover:bg-sky-400 active:scale-95 disabled:opacity-50 disabled:hover:bg-sky-500"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex h-16 w-16 items-center justify-center rounded-full shadow-glow transition-all duration-300 hover:scale-110 active:scale-95 ${
          isOpen ? "bg-slate-900 text-white" : "bg-gradient-sunset text-white"
        }`}
        aria-label="Toggle AI Chatbot"
      >
        {isOpen ? <X className="h-7 w-7 transition-transform rotate-0" /> : <MessageCircle className="h-7 w-7" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
          </span>
        )}
      </button>
    </div>
  );
}