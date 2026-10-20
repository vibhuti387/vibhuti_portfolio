import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import "./Project.css";

function Projects() {
  const previewProjects = projects.slice(0, 3);

  return (
    <section className="projects" id="projects">
      <div className="projects-heading">
        <p className="projects-tag">03 / THINGS I'VE BUILT</p>

        <h2>
          Featured <span>Projects.</span>
        </h2>

        <p className="projects-subtitle">
          Ideas, experiments, and projects that reflect my learning journey.
        </p>
      </div>

      <div className="projects-grid">
        {previewProjects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>

      <div className="projects-view-all">
        <Link to="/projects" className="projects-view-all-btn">
          View All Projects <span>↗</span>
        </Link>
      </div>

      <div className="projects-footer">
        <p>MORE TO BUILD. MORE TO LEARN.</p>
        <span>✳</span>
      </div>
    </section>
  );
}

export default Projects;
