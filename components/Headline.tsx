import Image from "next/image";
import { FaSortDown } from 'react-icons/fa';

interface HeadlineProps {
  videoRef: React.RefObject<HTMLVideoElement>; // Define o tipo explicitamente
}

export default function Headline({ videoRef }: HeadlineProps) {
  
  return (
    <main className="relative flex flex-col items-center justify-top h-screen text-center px-4 md:px-8 lg:px-16">
      
      {/* Vídeo de fundo */}
      <video
        ref={videoRef} // Atribui a ref ao vídeo
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-60"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
      >
        <source src="/videos/fundo.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>

      <div className="relative z-20 mt-14">
        <Image
          src="/logo-2.png"
          alt="Purple Mind Marketing"
          className="mx-auto animate-pulse"
          width={320} 
          height={320}
        />
      </div>
      
      <div className="relative z-30">
        
        <h1 className="text-xl mt-8 md:text-3xl lg:text-3xl font-bold text-white max-w-4xl mx-3 uppercase">
          Transforme suas ideias em soluções digitais
        </h1>
        
        <h2 className="mt-6 font-extralight text-lg md:text-2xl lg:text-2xl text-white max-w-3xl mx-6">
          Crie o futuro com a Purple Mind Marketing
        </h2>
      </div>

      <button
        className="text-slate-300 mt-10 font-semibold underline hover:text-white transition-colors duration-300"
        onClick={() => {
          document.getElementById('1')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <FaSortDown className="flex animate-bounce text-white size-8 mt-36"/>
      </button>
    </main>
  );
}
