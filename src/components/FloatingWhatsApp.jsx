import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917702461962"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-500 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} strokeWidth={1.5} />
      <span className="absolute right-full mr-6 bg-ink text-white text-xs font-light tracking-widest uppercase py-2 px-4 rounded-full shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
