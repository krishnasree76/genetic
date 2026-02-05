import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/918143645716?text=Hello Geneticbio Solutions, I want to know more about your products."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center">
        <FaWhatsapp className="text-2xl" />
      </div>

      {/* Tooltip */}
      <span className="absolute right-16 bottom-3 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppFloat;
