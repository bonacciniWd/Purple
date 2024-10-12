"use client"
import { FaSun, FaMoon, FaLeaf, FaUtensils, } from 'react-icons/fa'; // Importa ícones
import { FaLocationPin } from 'react-icons/fa6';


export default function Schedule() {
  return (
    <section className="py-16 bg-tantra-dark" id="schedule">
      <div className="max-w-3xl mx-auto px-4">
        {/* Título */}
        <h4 className="text-xl md:text-3xl bg-gray-950 border-2 border-dourado font-bold text-center text-tantra-light mb-8 bg- bg-opacity-40 rounded-xl p-5 text-shadow">
          Cronograma da Experiência
        </h4>

        {/* Roteiro do Dia */}
        <div className="space-y-14 bg-gray-950 bg-opacity-40 p-5 rounded-2xl border-dourado border-2">
          {/* Manhã */}
          <div className="relative">
            <div className="flex items-center">
              <FaSun className="text-orange-500 text-2xl mr-4 mt-5" />
              <h5 className="text-lg md:text-2xl font-bold text-tantra-light">
                Manhã (Início às 9:30)
              </h5>
            </div>
            <div className="mx-12 mt-4 border-l-2 border-tantra-light pl-6 space-y-4">
              <p className="text-tantra-light">
                <strong>Movimento de Constelação Familiar</strong> – com Tatiana Vanusa, líder de movimento feminino. Liberando bloqueios emocionais e energéticos.
              </p>
              <p className="text-tantra-light">
                <strong>Reprogramação Emocional</strong> – com Daiane Grison, preparando seu emocional para um dia de profunda transformação.
              </p>
            </div>
          </div>

          {/* Almoço */}
          <div className="relative">
            <div className="flex items-center">
              <FaUtensils className="text-gray-400 text-2xl mr-4" />
              <h5 className="text-lg md:text-2xl font-bold text-tantra-light">
                Almoço (12:00)
              </h5>
            </div>
            <div className="mx-12 mt-4 border-l-2 border-tantra-light pl-6 space-y-4">
              <p className="text-tantra-light">
                <strong>Almoço Natural e Saboroso</strong> – comidas leves e preparadas especialmente para a vivência, garantindo nutrição e bem-estar.
              </p>
            </div>
          </div>

          {/* Tarde */}
          <div className="relative">
            <div className="flex items-center">
              <FaLeaf className="text-green-400 text-2xl mr-4" />
              <h5 className="text-lg md:text-2xl font-bold text-tantra-light">
                Tarde
              </h5>
            </div>
            <div className="mx-12 mt-4 border-l-2 border-tantra-light pl-6 space-y-4">
              <p className="text-tantra-light">
                <strong>Vivências de Reconexão com a Essência</strong> – guiadas por Daiane Grison e Arjun, trazendo você de volta à sua essência.
              </p>
              <p className="text-tantra-light">
                <strong>Ativação da Energia Sexual</strong> – com Amanda Oliveira, despertando o poder do feminino e vitalidade para sua vida.
              </p>
            </div>
          </div>

          {/* Encerramento */}
          <div className="relative">
            <div className="flex items-center">
              <FaMoon className="text-yellow-300 text-2xl mr-4" />
              <h5 className="text-lg md:text-2xl font-bold text-tantra-light">
                Encerramento (Fim do dia)
              </h5>
            </div>
            <div className="mx-12 mt-4 border-l-2 border-tantra-light pl-6 space-y-4">
              <p className="text-tantra-light">
                <strong>Demonstração de Massagem Shiva e Shakti</strong> – com Daiane e Arjun, uma apresentação das técnicas de massagem tântrica para equilibrar as energias.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="flex items-center">
              <FaLocationPin className="text-red-600 text-2xl mr-4" />
              <h5 className="text-lg md:text-2xl font-bold text-tantra-light">
               Localização (Jardim Cristalino)
              </h5>
            </div>
            <div className="mb-8 ml-10 mt-4 border-l-2 border-tantra-light pl-6 space-y-4 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.8295970423005!2d-48.62847242455742!3d-27.003939676592967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b7224ff4128d%3A0x96588330a37ad0a3!2sJardim%20Cristalino!5e0!3m2!1spt-BR!2sbr!4v1726614342833!5m2!1spt-BR!2sbr"
                width="85%"
                height="400"  // Altura ajustável
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center my-8 text-shadow"> {/* Adicione uma div flex container */}
          <button
            className="pulse-button mx-auto text-shado mt-8 text-shadow uppercase"
            onClick={() => {
              window.location.href = "https://www.sympla.com.br/evento/experiencia--tantrica/2645932"; // Substitua pelo link desejado
            }}
          >
            Garanta sua vaga
          </button>
        </div>
       <div className="relative max-w-lg md:max-w-xl lg:max-w-2xl mx-auto -mt-4"> 
          <p className="items-center font- text-center text-slate-300 font opacity-70 uppercase text-xs  md:text-sm lg:text-sm">
              Vagas limitadas<span className="text-red-600 font-bold text-base">*</span>
          </p>
       </div> 
      </div>
    </section>
  );
}
