import { SOCIALS } from '../data/socials';
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
          <img
            src={icon}
            alt={name}
            className="w-8 h-8 hover:scale-110 transition duration-300"
          />
        </a>
      ))}
    </div>
  );
};