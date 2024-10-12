import { FaWhatsapp } from 'react-icons/fa'; // Ícone do WhatsApp

export default function FloatingWhatsAppButton() {
  return (
    <a
      href="https://chat.whatsapp.com/" // Substitua pelo seu número de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bg-opacity-50 boder-2 border-dourado z-[9999] bottom-[30px] right-[30px] bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
      style={{
        width: '60px',
        height: '60px',
      }}
    >
      <FaWhatsapp size={38} className="animate-pulse" />
    </a>
  );
}
