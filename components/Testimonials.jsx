"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Maria Silva",
    text: "A Purple Mind Marketing transformou meu negócio! A equipe é incrível e dedicada.",
    image: "/user1.jpg",
  },
  {
    name: "João Oliveira",
    text: "Profissionalismo e resultados são o que define a Purple Mind. Recomendo!",
    image: "/user2.jpg",
  },
  {
    name: "Diogo Fraga",
    text: "Experiência excelente! O suporte foi excepcional e os resultados falam por si.",
    image: "/user3.jpg",
  },
  {
    name: "Morgana V. Barreto",
    text: "Me sentia perdida durante o processo de digitalização da minha empresa, graças à Purple eu consegui expandir meus horizontes ♥",
    image: "/user4.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
    }, 30000); // Troca a cada 30 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  const displayTestimonials = testimonials.slice(currentIndex, currentIndex + 2);
  if (currentIndex + 2 > testimonials.length) {
    displayTestimonials.push(...testimonials.slice(0, (currentIndex + 2) % testimonials.length));
  }

  return (
    <div className="flex flex-wrap justify-center gap-8 my-8">
      {displayTestimonials.map((testimonial, index) => (
        <div
          key={index}
          className="relative border-2 bg-gray-950 bg-opacity-60 border-gray-200 p-6 rounded-3xl shadow-lg max-w-xs md:max-w-xl w-full text-center transition-transform transform hover:scale-105 hover:shadow-2xl"
          
        > 
          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <Image
                src={testimonial.image}
                alt={`Foto de ${testimonial.name}`}
                width={120}
                height={120}
                className="rounded-full border-4 border-gray-200 shadow-lg"
              />
            </div>

            {/* Estrelas de avaliação */}
            <div className="flex justify-center mb-3 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className="text-yellow-400 mr-1 transition-transform transform hover:scale-150"
                />
              ))}
            </div>

            {/* Depoimento */}
            <p className="text-white mb-4 italic leading-relaxed mx-4 md:mx-8 lg:mx-8">
              {testimonial.text}
            </p>
            <p className="bold text-white">- {testimonial.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
