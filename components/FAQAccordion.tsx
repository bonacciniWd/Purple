"use client"
import { useState } from 'react';


const FAQAccordion = () => {
  const faqs = [
    {
      question: 'Qual o objetivo da Purple',
      answer: (
        <>
          <p>
          O principal objetivo da Purple Mind é capacitar empreendedores digitais a alcançarem o sucesso sustentável, oferecendo soluções estratégicas e personalizadas que integram os quatro pilares essenciais do empreendedorismo digital: desenvolvimento de produtos de alto valor, marketing eficaz, inteligência emocional e gestão eficiente de processos.
          </p>
          <p>
          Nossa missão é não apenas impulsionar negócios, mas também formar líderes preparados para navegar e prosperar no ambiente digital em constante transformação.
          </p>
        </>
      )
    },
    {
      question: 'Qual o diferencial da Purple?',
      answer: (
        <>
          <p>
          O que torna a Purple Mind diferente de outras empresas de marketing é sua abordagem estratégica e holística, focada não apenas em campanhas de marketing, mas na construção de negócios digitais de sucesso a longo prazo.
          </p>
        </>
      )
    },
    {
      question: 'O que é estratégia integrada?',
      answer: 'Não se trata apenas de executar campanhas; A Purple Mind ajuda seus clientes a alinhar marketing, gestão de processos, desenvolvimento de produtos e inteligência emocional, criando uma base sólida para crescimento contínuo.',
    },
   
    // Adicione mais perguntas e respostas aqui
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // Fecha se já estiver aberto
    } else {
      setOpenIndex(index); // Abre o FAQ clicado
    }
  };

  return (
    <div className="flex flex-col items-center h-80vh">
      <div className="max-w-3xl mx-3 my-20 md:mx-auto lg:mx-auto ">
        <h2 className="text-3xl lg:text-3xl font-bold text-center mt-4 mb-8 text-white">FAQ</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-300">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left py-4 px-4 rounded font-medium text-md md:text-xl bg-indigo-900 bg-opacity-90 text-white flex justify-between items-center"
            >
              {faq.question}
              <span className="ml-2">
                {openIndex === index ? '-' : '+'}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div
                className="mt-auto z-10 py-5 rounded-md px-5 relative mx-auto bg-indigo-900 bg-opacity-40"
              >
              <p className="px-4 py-2 text-md md:text-lg text-white">{faq.answer}</p>
             </div> 
            </div>
          </div>
        ))}
      </div>
    </div>  
  );
};

export default FAQAccordion;
