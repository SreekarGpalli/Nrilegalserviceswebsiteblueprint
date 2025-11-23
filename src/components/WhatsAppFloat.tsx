import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919876543210?text=Hello, I need legal assistance', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 size-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="size-6" />
    </button>
  );
}
