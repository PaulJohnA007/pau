import React from "react"; 
import "./Project.mod.css";

const projects = [
  {
    id: 1,
    image: './assets/bigb.png',
    title: "Big Brew Website ",
    description: "A modern, responsive coffee shop website designed to streamline staff clock-in and clock-out with image capture for accurate time tracking.",
    github: "https://github.com/paulo-24/Bigbrew_website",
    live: "#",
  },
  {
    id: 2,
    image: './assets/poke.png',
    title: "Pokemon Mini Dex",
    description: "A mini Pokedex application built with React, allowing users to search for and view details of various Pokemon. It features a user-friendly interface and responsive design.",
    github: "https://github.com/KenTubio/pokeDex",
    live: "https://pokeymoen.netlify.app/",
  },
  {
    id: 3,
    image: './assets/calc.png',
    title: "Calculator React Project",
    description: "A advanced calculator built with React, featuring a sleek design and intuitive user interface. It supports basic arithmetic operations and more complex calculations.",
    github: "https://github.com/Angelo-Ando/Sci-Cal",
    live: "https://acaboandotubioscical.netlify.app/",
  },
  {
    id: 4,
    image: './assets/english.png',
    title: "Capstone English Learn",
    description: "A comprehensive English learning platform designed to help users improve their language skills through interactive lessons and resources. The platform is user-friendly and visually appealing.",
    github: "#",
    live: "https://englishlearning.click/",
  },
];

const Project = () => {
  return (
    <>
      <h1 className="project-header">PROJECTS</h1>
      <div className="project-page"> 
        {projects.map((project) => (
          <div key={project.id} className="project-box">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-button">
                View on GitHub
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-button">
                View Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
