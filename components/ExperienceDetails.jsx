"use client";

import { FaReact } from "react-icons/fa";

const ExperienceDetails = () => {
  // Configurações do carrossel

  return (
    <section
      id="1"
      className="space-y-10 max-w-full md:space-y-14 my-16 mx-4 lg:max-w-screen-lg lg:mx-auto bg-gray-950 bg-opacity-40 p-4 md:p-2 lg:p-8 rounded-2xl"
    >
      <div className="text-center my-6">
        <h4 className="text-xl md:text-2xl font-bold mb-4 text-tantra-light uppercase">
        Inovação Constante
        </h4>
        <p className="text-sm md:text-base text-tantra-light mx-6">
          Descubra como nossos serviços podem transformar seu negócio digital.
        </p>
      </div>

      {/* Seção de detalhes */}
      <div className="mt-6 md:mt-8 text-center space-y-4">
        <div
          className="mt-auto bg-slate-100 text-slate-800 z-10 py-5 rounded-md px-5 relative mx-auto border-4 border-gray-300"
        >
          <div className="mt-4 flex justify-center">
          <FaReact className="w-20 h-20 animate-slow-spin mb-6 text-purple-950" />
          </div>
          <ul className="list-disc pl-5 space-y-4 text-left text-base md:text-xl mb-8 font-normal mx-2">
            <li>
              <strong>Foco em Estratégia Integrada:</strong> Não se trata apenas de executar campanhas; a Purple Mind ajuda seus clientes a alinhar marketing, gestão de processos, desenvolvimento de produtos e inteligência emocional, criando uma base sólida para crescimento contínuo.
            </li>
            <li>
              <strong>Especialização em Co-Produção de Produtos Digitais:</strong> Além do marketing tradicional, a Purple Mind se destaca na co-produção e lançamento de produtos digitais, oferecendo expertise desde a criação até a monetização.
            </li>
            <li>
              <strong>Abordagem Personalizada:</strong> Cada cliente é tratado como um parceiro estratégico, com soluções personalizadas e ajustadas às necessidades e objetivos específicos de cada negócio, levando em consideração o nicho e o público-alvo.
            </li>
            <li>
              <strong>Apoio ao Desenvolvimento Pessoal do Empreendedor:</strong> Além de focar no sucesso do negócio, a Purple Mind se preocupa com o desenvolvimento emocional e mental.
            </li>
          </ul>
        </div>

        <div className="text-sm text-tantra-light mx-6 my-4">
          <p>
            Oferecemos soluções inovadoras que atendem às suas necessidades específicas, garantindo resultados significativos e duradouros.
          </p>
        </div>
      </div> 
    </section>
  );
};

export default ExperienceDetails;
