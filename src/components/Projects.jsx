import projects from "./data/projects.json";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import AOS from "aos"; // Import AOS library

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second animation duration
  }, []);

  return (
    <section id="projects">
      <div className="container py-5 md:py-14 mx-auto px-6 md:px-12">
        <h2
          className="text-4xl font-bold text-center text-white mb-10"
          data-aos="fade-up"
        >
          Projects
        </h2>
        {/* Project Card */}
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-item mx-auto flex flex-col items-center bg-gray-700 rounded-lg p-8 transition-all duration-300 hover:bg-gray-800 hover:shadow-2xl max-w-4xl mb-6"
            data-aos="fade-up"
            data-aos-delay={index * 200} // Add a staggered animation effect
          >
            {/* Project Image */}
            <img
              src={`../assets/projects/${project.imageSrc}`}
              alt={project.title}
              className="w-full h-60 object-cover rounded-lg transition-all duration-300 group-hover:scale-105"
            />

            {/* Project Info */}
            <div className="mt-6 text-center">
              <h3 className="text-3xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mt-4">{project.description}</p>
            </div>

            {/* Project Links (Live, GitHub Client, GitHub Server) */}
            <div className="mt-6 flex justify-center space-x-8">
              {/* Live Website */}
              <a
                href={project.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 flex flex-col items-center transition-all duration-300"
                title="Live Website"
              >
                <FaExternalLinkAlt size={24} />
                <p className="mt-2 text-sm">Live Link</p>
              </a>

              {/* Client GitHub */}
              <a
                href={project.clientGitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 flex flex-col items-center transition-all duration-300"
                title="Client GitHub"
              >
                <FaGithub size={24} />
                <p className="mt-2 text-sm">Client</p>
              </a>

              {/* Server GitHub */}
              <a
                href={project.serverGitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 flex flex-col items-center transition-all duration-300"
                title="Server GitHub"
              >
                <FaGithub size={24} />
                <p className="mt-2 text-sm">Server</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
