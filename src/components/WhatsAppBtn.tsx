import React from "react";

const WhatsAppButton: React.FC = () => {
    const phoneNumber = '+5492346568711';
  
    return (
      <a
        href={`https://wa.me/${phoneNumber}`}
        className="fixed bottom-4 right-4 bg-green-200 text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-green-400 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <img
          src="https://mi-bienestar.mx/wp-content/uploads/2017/04/whatsapp-official-logo-png-download-300x300.png"
          alt="WhatsApp"
          className="w-10 h-10"
        />
      </a>
    );
  };
  
  export default WhatsAppButton;