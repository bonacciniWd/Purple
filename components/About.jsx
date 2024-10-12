"use client";
import Image from 'next/image';
import Card from './Card';

const About = () => {
  
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-tantra-dark text-tantra-light" id="saiba-mais">
      <div className="flex flex-col md:flex-row lg:flex-row gap-8">
        <Card
          imageSrc="/gts.png"
          name="Consultoria Estratégica"
          description="Planejamento estratégico personalizado para seu negócio digital."
        />

        <Card
          imageSrc="/social-media.png" // Substitua pelo caminho correto da imagem
          name="Gestão de Mídias Sociais"
          description="Gestão completa das suas redes sociais para maximizar engajamento."
        />

        <Card
          imageSrc="/ctc.png" // Substitua pelo caminho correto da imagem
          name="Criação de Conteúdo"
          description="Produção de conteúdo criativo e relevante para seu público-alvo."
        />

        <Card     
          imageSrc="/arjun.png" // Substitua pelo caminho correto da imagem
          name="Desenvolvimento de Produtos Digitais"
          description="Auxílio na criação e lançamento de produtos digitais de sucesso."
        />

      </div>
      <div className="inset-0 flex justify-center items-center mt-14 z-20">
        <Image
          src="/logo.png"
          alt="Snake"
          width={180}
          height={90}
          className="animate-bounce"
        />
      </div>
    </section>
  );
};

export default About;
