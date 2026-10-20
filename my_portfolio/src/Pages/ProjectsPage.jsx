import { useEffect } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import ProjectCard from "../component/ProjectCard.jsx";
import "../component/Project.css";
import "./ProjectsPage.css";

function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <main className="projects projects-page">
      <div className="projects-page-header">
        <Link to="/" className="projects-back-link">
          <span>←</span> Back to Portfolio
        </Link>

        <div className="projects-page-intro">
          <p className="projects-tag">ALL WORK & EXPERIMENTS</p>
          <h2>
            All <span>Projects.</span>
          </h2>
          <p className="projects-subtitle">
            A comprehensive collection of my software applications, machine learning solutions, and practical web platforms.
          </p>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>

      <div className="projects-footer">
        <p>MORE TO BUILD. MORE TO LEARN.</p>
        <span>✳</span>
      </div>
    </main>
  );
}

export default ProjectsPage;
