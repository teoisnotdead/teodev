import { PROJECTS } from "../data";
import { ProjectCard } from "../components";
import { ProjectCardProps } from "../types";

const projects: ProjectCardProps[] = PROJECTS;

export const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center mt-24 font-bold mx-auto w-full">
      <h2 className="uppercase text-5xl mb-8 leading-none">Proyectos</h2>

      {projects.map(({ title, description, tags, image, githubLink, demoLink }) => (
        <ProjectCard
          key={title}
          title={title}
          description={description}
          tags={tags}
          image={image}
          githubLink={githubLink}
          demoLink={demoLink}
        />
      ))}
    </div>
  );
};
