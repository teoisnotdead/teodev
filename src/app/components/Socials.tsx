import { SOCIALS } from '../data/socials';

export const Socials = () => {
  return (
    <div className="flex space-x-6">
      {SOCIALS.map((social) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300"
        >
          <img
            src={social.icon}
            alt={social.name}
            className="w-8 h-8 hover:scale-110 transition duration-300"
          />
        </a>
      ))}
    </div>
  );
};