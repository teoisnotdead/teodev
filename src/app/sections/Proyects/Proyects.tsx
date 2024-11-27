import { ProjectCard } from "@/app/components/ProjectCard/ProjectCard"

export const Proyects = () => {
  return (
    <div className="flex flex-col items-center mt-24 font-bold mx-auto w-full">
      <h1 className="uppercase text-5xl mb-8 text-secondary dark:text-white leading-none">Proyectos</h1>
      <ProjectCard />
    </div>
  )
}
