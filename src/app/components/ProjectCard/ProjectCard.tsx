import Image from "next/image"
import { Tags } from "../Tags/Tags";

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

    <div className="flex justify-between dark:bg-project-card/40 rounded-md hover:border-secondary dark:hover:border-white border border-transparent transition-colors duration-300">
      <Image
        className="rounded-bl-lg rounded-tl-md object-cover w-4/12"
        src="/images/projects/beyondgame.png"
        alt="Beyond Game"
        width={484}
        height={387} />
      <div className="p-16 w-8/12">
        <Tags iconSrc="/images/technologies/react.png" tagName="React" />
        <div className="mt-6">
          <h2 className="text-3xl font-bold text-primary">BeyondGame</h2>
          <p className="text-xl font-bold text-secondary dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a accumsan nisi. Curabitur ut enim porta, tempus dui in, vestibulum urna. Phasellus lacinia lorem eu dapibus facilisis. Aliquam vulputate nec purus sed aliquam. Suspendisse et libero varius, sodales dui in.</p>
        </div>
        <div className="flex flex-wrap mt-14">
          <button className="text-[16px] font-normal bg-transparent border border-secondary dark:border-white text-secondary hover:bg-secondary/20 dark:hover:bg-white/20 dark:text-white py-3 px-8 rounded-full mr-7">Demo</button>
          <button className="text-[16px] font-normal bg-transparent border border-secondary dark:border-white text-secondary hover:bg-secondary/20 dark:hover:bg-white/20 dark:text-white py-3 px-8 rounded-full">Github</button>
        </div>
      </div>
    </div>
  );
};
