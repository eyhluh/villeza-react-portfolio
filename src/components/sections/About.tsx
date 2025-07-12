import { RevealOnScroll } from "../RevealOnScroll";
import React from "react";

type SkillCategory = string[];

export const About: React.FC = () => {
  const frontendSkills: SkillCategory = [
    "React",
    "HTML",
    "TailwindCSS",
    "CSS",
    "JavaScript",
    "ReactJS",
    "Bootstrap",
    "ReactJS",
  ];

  const backendSkills: SkillCategory = ["Node.js", "Python", "Django", "PHP"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
            <p className="text-gray-950 mb-6 text-justify">
              I am currently a college student pursuing a Bachelor of Science in
              Computer Science. Alongside my studies, I am passionate about
              photography and graphic design, using my creativity to capture and
              create compelling visuals. My skills in both tech and art allow me
              to approach projects with a unique and innovative perspective.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-gray-950">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(69,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-gray-950">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(69,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
              <h3 className="text-xl text-gray-950 font-bold mb-4">
                🏫 Education
              </h3>
              <ul className="list-disc list-inside text-gray-950 space-y-2 text-justify">
                <li>
                  <strong>Bachelor of Computer Science</strong> - Filamer
                  Christian University (2021 - 2026)
                </li>
                <li>
                  <strong>High School</strong> - Filamer Christian University
                  (2016 - 2020)
                </li>
                <li>
                  <strong>Elementary</strong> - Filamer Christian University
                  (2009 - 2016)
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
              <h3 className="text-xl text-gray-950 font-bold mb-4">
                💡Experience
              </h3>
              <div className="space-y-4 text-gray-950 text-justify">
                <div>
                  <h4 className="font-semibold">FCU CCS FITC Organization</h4>
                  <p>
                    Documented various events at FCU, capturing memorable
                    moments through photography and creating engaging
                    promotional materials. Managed the organization’s online
                    presence by sharing event highlights and updates on social
                    media.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Student Organizations</h4>
                  <p>
                    Active member of the Filamerian Information Technology
                    Circle (FIT-C), focusing on photography. I documented
                    various events, capturing memorable moments through
                    photography and managing the organization’s online presence
                    by sharing event highlights and updates on social media.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
