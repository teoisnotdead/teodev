import Image from "next/image";
import { SOCIALS } from '../data';
import type { SocialsProps } from '../types';

export const Socials = ({ socials = SOCIALS }: SocialsProps) => {
  return (
    <div className="flex space-x-6">
      {socials.map(({ name, icon, link }) => (
        <a
          key={name}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300"
        >
          <Image
            src={icon}
            alt={name}
            width={32}
            height={32}
            className="w-8 h-8 hover:scale-110 transition duration-300"
          />
        </a>
      ))}
    </div>
  );
};