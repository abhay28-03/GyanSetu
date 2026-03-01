import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

const Chatbot = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="fixed bottom-20 right-6 w-72 bg-card rounded-xl shadow-2xl border border-border overflow-hidden z-50 animate-in slide-in-from-bottom-4">
          <div className="gradient-primary px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-primary-foreground">
              <MessageCircle className="h-5 w-5" />
              <span className="font-bold text-sm">Chatbot</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-primary-foreground/80 hover:text-primary-foreground">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="p-4 h-40 flex items-start">
            <div className="bg-secondary rounded-lg px-3 py-2 text-sm font-semibold text-secondary-foreground">
              Hi! How can I help you today?
            </div>
          </div>
          <div className="px-3 pb-3">
            <div className="flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-transparent text-sm outline-none text-foreground placeholder:text-muted-foreground"
              />
              <button className="h-7 w-7 rounded-full gradient-primary flex items-center justify-center text-primary-foreground shrink-0">
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full gradient-primary shadow-xl flex items-center justify-center text-primary-foreground hover:shadow-2xl transition z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </>
  );
};

export default Chatbot;
