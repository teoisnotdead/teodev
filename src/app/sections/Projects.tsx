import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {
  return (
    <div className="flex flex-col items-center mt-24 font-bold mx-auto w-full">
      <h1 className="uppercase text-5xl mb-8 leading-none">Proyectos</h1>

      <ProjectCard
        title="BeyondGame"
        description="Tu portal de torneos y noticias de juegos."
        tags={["React"]}
        image="/images/projects/beyondgame.png"
        githubLink="https://github.com/teoisnotdead/beyondgame"
        demoLink="https://beyondgame.com"
      />
    </div>
  );
};
