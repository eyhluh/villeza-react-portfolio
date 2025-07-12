import { RevealOnScroll } from "../RevealOnScroll";
import React from "react";

type ProjectProps = { allowCustomProps?: boolean }; // Optional props type if you'd like to make the projects section customizable later

export const Projects: React.FC<ProjectProps> = () => {
  const projects = [
    {
      title: "Laravel",
      stack: ["Blade", "PHP", "CSS", "JavaScript"],
      link: "https://github.com/eyhluh/laravel_project.git",
    },
    {
      title: "React App",
      stack: ["TypeScript", "HTML"],
      link: "https://github.com/eyhluh/react-app.git",
    },
    {
      title: "Laravel 2",
      stack: ["PHP", "Blade"],
      link: "https://github.com/eyhluh/CC6_VILLEZA_ELLADANIELLE_3_D_PROJECT.git",
    },
    {
      title: "React",
      stack: ["JavaScript", "CSS", "HTML"],
      link: "https://github.com/eyhluh/PORTFOLIO_VILLEZA.git",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 text-gray-950"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            PROJECTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition text-justify"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(69,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
