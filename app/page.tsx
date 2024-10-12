"use client";
import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Headline from '../components/Headline';
import About from '../components/About';
import FAQAccordion from '../components/FAQAccordion';
import Testimonials from '../components/Testimonials';
import Spacebar from '../components/Spacebar';
import WhatsappButton from '../components/WhatsappButton';
import Footer from '@/components/Footer';
import Loader from '../components/Loader'; // Importa o loader

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null); // Cria a referência do vídeo

  // Usamos um efeito para verificar quando todos os recursos da página foram carregados
  useEffect(() => {
    const handlePageLoad = () => {
      setIsLoading(false); // Quando a página estiver carregada, o loader desaparece

      // Tenta reproduzir o vídeo automaticamente após o carregamento
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error("Erro ao tentar reproduzir o vídeo automaticamente:", error);
        });
      }
    };

    // Quando a página está completamente carregada
    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad); // Ouve o evento 'load' para garantir que todos os recursos sejam carregados
    }

    // Limpa o event listener
    return () => window.removeEventListener('load', handlePageLoad);
  }, []);

  return (
    <div className="min-h-screen bg-tantra-dark overflow-hidden">
      <Head>
        <title>Home | Experiência Tantrica</title>
        <meta name="description" content="A melhor experiência tantrica para seu crescimento pessoal e espiritual" />
        <meta name="keywords" content="experiência tântrica, tantra, meditação, crescimento pessoal, sexualidade, ejaculação precoce, orgasmo, despertar sexual," />
        <meta property="og:title" content="Experiência Tantrica" />
        <meta property="og:description" content="A melhor experiência tantrica para seu crescimento pessoal e espiritual" />
        <meta property="og:image" content="https://i.ibb.co/2nwWRsJ/Capa-Icone-Landing-Page.png" />
        <meta property="og:url" content="https://daiane-grison.vercel.app" />
      </Head>

      {/* Exibe o loader enquanto está carregando */}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* Passa o videoRef para o componente Headline */}
          <Headline videoRef={videoRef} />
          <Spacebar />
          <Spacebar />
          <About />
          <Spacebar />
          <Testimonials />
          <Spacebar />
          <FAQAccordion />
          <Spacebar />
          <Footer />
          <WhatsappButton />
        </>
      )}
    </div>
  );
}
