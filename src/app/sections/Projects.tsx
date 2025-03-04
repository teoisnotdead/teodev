import { PROJECTS } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {
  return (
    <div className="flex flex-col items-center mt-24 font-bold mx-auto w-full">
      <h2 className="uppercase text-5xl mb-8 leading-none">Proyectos</h2>

      {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
          />
        ))}
    </div>
  );
};
