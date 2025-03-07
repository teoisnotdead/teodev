'use client'

import Image from 'next/image';
import { Button, Socials } from '../components';

export const Hero = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section
        id="hero"
        className="flex flex-col md:flex-row items-center mt-24 font-bold mx-auto justify-between mb-2 text-center md:text-left"
      >
        {/* Texto */}
        <div className="w-full md:w-2/3 leading-none md:pr-20 px-6 md:px-0">
          <h1 className="uppercase text-[40px] md:text-[55px]">Alfredo Saavedra</h1>
          <h2 className="uppercase text-primary text-[28px] md:text-[36px]">
            Fullstack Developer
          </h2>
          <p className="text-lg md:text-xl my-6 md:my-10">
            Desarrollador con más de 5 años de experiencia,
            especializado en crear soluciones web innovadoras y eficientes.
            Creo proyectos de alta calidad con un enfoque en la funcionalidad,
            escalabilidad y una excelente experiencia de usuario.
            Comprometido con el aprendizaje continuo y el uso de herramientas modernas,
            aporto soluciones actualizadas y efectivas para mis clientes.
          </p>
          <div className="flex justify-center md:justify-start mb-5">
            <Socials />
          </div>
        </div>

        {/* Imagen */}
        <div className="w-full md:w-auto flex justify-center">
          <Image
            className="rounded-full w-56 h-56 md:w-96 md:h-96 object-cover drop-shadow-light"
            src="/images/me.webp"
            alt="Alfredo Saavedra"
            width={300}
            height={300}
            priority
          />
        </div>
      </section>

      {/* Botón */}
      <div className="flex justify-center md:justify-start mt-6">
        <Button onClick={handleScrollToContact}>Hablemos</Button>
      </div>
    </>

  );
};
