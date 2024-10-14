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
        whatsappMessage="Olá, tenho interesse na Consultoria Estratégica. Pode me dar mais detalhes?"
      />

      <Card
        imageSrc="/social-media.png"
        name="Gestão de Mídias Sociais"
        description="Gestão completa das suas redes sociais para maximizar engajamento."
        whatsappMessage="Olá, gostaria de saber mais sobre a Gestão de Mídias Sociais."
      />

      <Card
        imageSrc="/ctc.png"
        name="Criação de Conteúdo"
        description="Produção de conteúdo criativo e relevante para seu público-alvo."
        whatsappMessage="Estou interessado na Criação de Conteúdo. Pode me dar mais informações?"
      />

      <Card
        imageSrc="/arjun.png"
        name="Desenvolvimento de Produtos Digitais"
        description="Gostaria de saber mais sobre o Desenvolvimento de Produtos Digitais."
        whatsappMessage="Gostaria de saber mais sobre o Desenvolvimento de Produtos Digitais."
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
