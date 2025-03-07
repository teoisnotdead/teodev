import Image from "next/image";
import { Tags } from "./Tags";
import type { ProjectCardProps } from "../types";

export const ProjectCard = ({ title, description, tags, image, githubLink, demoLink }: ProjectCardProps) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:mb-5 bg-project-card/40 rounded-md border border-transparent hover:border-white/60 transition-colors duration-300 overflow-hidden">
      <Image
        className="object-cover w-full md:w-5/12"
        src={image}
        alt={title}
        width={484}
        height={387}
      />

      <div className="p-6 md:p-8 w-full md:w-7/12 flex flex-col">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">{title}</h2>
        <p className="text-lg md:text-xl font-bold mt-2">{description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <Tags key={index} iconSrc={`/images/technologies/${tag.toLowerCase()}.png`} tagName={tag} />
          ))}
        </div>

        <div className="flex flex-wrap mt-6 md:mt-10">
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <button className="text-[16px] cursor-pointer font-normal bg-transparent border border-white text-white hover:bg-white/20 py-3 px-6 rounded-full mr-4">
              Demo
            </button>
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <button className="text-[16px] cursor-pointer font-normal bg-transparent border border-white text-white hover:bg-white/20 py-3 px-6 rounded-full">
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
