import { TECHNOLOGIES } from "../data/technologies";
import { EXPERIENCES } from "../data/experience";
import { Tags } from "../components/Tags";

export const Experience = () => {
  return (
    <section className="w-full mx-auto mt-24 mb-5">
      <h2 className="uppercase text-5xl mb-12 font-bold text-center">Experiencia</h2>
      <div className="space-y-8">
        {EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            className="flex p-6 rounded-lg border border-transparent hover:border-white/40 transition-colors"
          >
            <span className="w-1/3 text-xl font-semibold">{exp.date}</span>
            <div className="flex flex-col">
              <div className="flex items-center justify-end">
                <h2 className="text-2xl font-bold text-primary">{exp.position} - {exp.company}</h2>
              </div>
              <p className="mt-4">{exp.description}</p>
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
