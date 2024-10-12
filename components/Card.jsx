// Card.jsx
import Image from 'next/image';

const Card = ({ imageSrc, name, description }) => {
  return (
    <div className="text-center border-4 border-indigo-800 max-w-xl mx-6 bg-white opacity-90 p-6 rounded-lg shadow-lg mt-3 relative"
>
  {/* Estilização com gradiente ao fundo */}
  <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-gray-100 rounded-lg opacity-30"></div>

  <div className="relative z-10">
    <div className="flex justify-center mb-8">
      <Image
        src={imageSrc}
        alt={name}
        width={180}
        height={180}
        className="relative rounded-full border-4 border-indigo-800 shadow-lg"
      />
    </div>
    
    {/* Nome */}
    <h2 className="text-2xl text-indigo-800 font-bold mb-4 md:text-3xl lg:text-3xl">
      {name}
    </h2>
    
    {/* Descrição */}
    <p className="text-base text-slate-800 md:text-lg lg:text-lg mb-8 mx-4 font-light">
      {description}
    </p>
  </div>
</div>

  );
};

export default Card;
