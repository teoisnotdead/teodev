import Image from "next/image";
import { Tags } from "./Tags";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubLink: string;
  demoLink: string;
}

export const ProjectCard = ({ title, description, tags, image, githubLink, demoLink }: ProjectCardProps) => {
  return (
    <div className="w-full flex justify-between bg-project-card/40 rounded-md hover:border-white/60 border border-transparent transition-colors duration-300">
      <Image
        className="rounded-bl-lg rounded-tl-md object-cover w-4/12"
        src={image}
        alt={title}
        width={484}
        height={387}
      />
      <div className="p-16 w-8/12">
        {/* Mapeo dinámico de tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Tags key={index} iconSrc={`/images/technologies/${tag.toLowerCase()}.png`} tagName={tag} />
          ))}
        </div>
        <div className="mt-6">
          <h2 className="text-3xl font-bold text-primary">{title}</h2>
          <p className="text-xl font-bold">{description}</p>
        </div>
        <div className="flex flex-wrap mt-14">
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <button className="text-[16px] cursor-pointer font-normal bg-transparent border border-white text-white hover:bg-white/20 py-3 px-8 rounded-full mr-7">
              Demo
            </button>
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <button className="text-[16px] cursor-pointer font-normal bg-transparent border border-white text-white hover:bg-white/20 py-3 px-8 rounded-full">
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
