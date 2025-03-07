import Image from 'next/image';
import { Socials } from '../components';

export const Footer = () => {
  return (
    <footer className="w-full mt-24 mb-4 text-center">
      <div className="flex flex-col items-center space-y-6">
        <Image src="/images/logo/teodev_dark.webp" alt="TEODEV Logo" height={30} width={180} priority />

        <div className="flex space-x-8 text-sm">
          <a href="#" className="hover:text-white transition">Términos y condiciones</a>
          <a href="#" className="hover:text-white transition">Política de Privacidad</a>
        </div>

        <Socials />

        <p className="text-sm text-gray-500 mt-4 uppercase font-bold">© 2025 Diseñado y desarrollado con 💖 por TEODEV</p>
      </div>
    </footer>
  );
};
