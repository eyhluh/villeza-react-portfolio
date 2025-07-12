import { RevealOnScroll } from "../RevealOnScroll";
import React from "react";

export const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <img
            src="src/assets/IMG_8628.JPEG"
            alt="Ella's personal banner"
            className="mx-auto mb-6 w-60 h-60 rounded-full object-cover shadow-lg"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Ella Danielle Villeza
          </h1>

          <p className="text-black text-lg mb-8 max-w-lg mx-auto">
            I am currently a college student pursuing a Bachelor of Science in
            Computer Science. Alongside my studies, I am passionate about
            photography and graphic design, using my creativity to capture and
            create compelling visuals. My skills in both tech and art allow me
            to approach projects with a unique and innovative perspective.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
