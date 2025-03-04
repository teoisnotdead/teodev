import Image from 'next/image';
import { Button } from '../components/Button';

export const Hero = () => {
  return (
    <>
      <div className='flex items-center mt-24 font-bold mx-auto justify-between mb-2'>
        <div className='w-2/3 leading-none pr-20'>
          <h1 className='uppercase text-[55px]'>Alfredo Saavedra</h1>
          <h2 className='uppercase text-primary text-[36px]'>Fullstack Developer</h2>
          <p className='text-xl mt-10'>
            Desarrollador con más de 5 años de experiencia,
            especializado en crear soluciones web innovadoras y eficientes.
            Creo proyectos de alta calidad con un enfoque en la funcionalidad,
            escalabilidad y una excelente experiencia de usuario.
            Comprometido con el aprendizaje continuo y el uso de herramientas modernas,
            aporto soluciones actualizadas y efectivas para mis clientes.
          </p>
        </div>
        <Image
          className='rounded-full w-96 h-96 object-cover items-center drop-shadow-light'
          src='/images/me.webp'
          alt='Alfredo Saavedra'
          width={300}
          height={300}
          priority
        />
      </div>
      <Button>Hablemos</Button>
    </>
  );
};
