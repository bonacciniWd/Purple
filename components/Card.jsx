import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

const Card = ({ imageSrc, name, description, whatsappMessage }) => {
  const whatsappNumber = "5511999999999"; // Substitua pelo número de telefone desejado
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      id="1"
      className="text-center border-4 bg-gray-950 bg-opacity-70 border-indigo-800 max-w-80 mx-6 p-6 rounded-lg shadow-lg mt-3 relative"
    >
      <div className="relative z-10">
        <div className="flex justify-center mb-8">
          <Image
            src={imageSrc}
            alt={name}
            width={120}
            height={120}
            className="relative rounded-full border-4 border-indigo-800 shadow-lg"
          />
        </div>

        {/* Nome */}
        <h2 className="text-xl text-indigo-500 font-bold mb-4 md:text-3xl lg:text-3xl">
          {name}
        </h2>

        {/* Descrição */}
        <p className="text-sm text-slate-200 md:text-lg lg:text-lg mb-8 mx-4 font-light">
          {description}
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          <FaWhatsapp className="w-5 h-5 mr-2 text-white" /> {/* Ícone do WhatsApp */}
          Fale conosco no WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Card;
