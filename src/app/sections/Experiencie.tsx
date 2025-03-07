import { TECHNOLOGIES, EXPERIENCES } from "../data";
import { Tags } from "../components";

export const Experience = () => {
  return (
    <section id="experience" className="w-full mx-auto mt-24 mb-5">
      <h2 className="uppercase text-5xl mb-12 font-bold text-center">Experiencia</h2>
      <div className="space-y-8">
        {EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between p-6 rounded-lg border md:border-transparent hover:border-white/40 transition-colors"
          >
            {/* Fecha (Izquierda en escritorio, Arriba en móviles) */}
            <span className="text-xl font-semibold w-full md:w-auto mb-2 md:mb-0">
              {exp.date}
            </span>

            {/* Contenido (Derecha en escritorio, Apilado en móviles) */}
            <div className="w-full md:w-2/3 flex flex-col">
              <div className="flex md:justify-end">
                <h2 className="text-2xl font-bold text-primary">{exp.position} - {exp.company}</h2>
              </div>
              <p className="mt-4 text-sm md:text-base text-justify">{exp.description}</p>

              {/* Tecnologías utilizadas */}
              <div className="flex flex-wrap mt-4 gap-3">
                {exp.technologies.map((tech) => {
                  const techInfo = TECHNOLOGIES.find((t) => t.name.toLowerCase() === tech.toLowerCase());
                  return techInfo ? <Tags key={tech} iconSrc={techInfo.icon} tagName={tech} /> : null;
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
