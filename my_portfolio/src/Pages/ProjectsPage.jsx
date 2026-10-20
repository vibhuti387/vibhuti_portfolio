import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import ProjectCard from "../component/ProjectCard.jsx";
import "../component/Project.css";
import "./ProjectsPage.css";

function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    window.scrollTo(0, 0);
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Derive unique technologies dynamically from existing project data
  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    projects.forEach((p) => {
      const list = p.technologies || p.tags || [];
      list.forEach((t) => {
        if (t && typeof t === "string") techSet.add(t);
      });
    });
    return Array.from(techSet).sort((a, b) => a.localeCompare(b));
  }, []);

  // Filter and sort derived data
  const filteredAndSortedProjects = useMemo(() => {
    let result = projects.filter((project) => {
      if (selectedTech === "all") return true;
      const list = project.technologies || project.tags || [];
      return list.includes(selectedTech);
    });

    return [...result].sort((a, b) => {
      if (sortBy === "name-asc") {
        return (a.title || a.name || "").localeCompare(b.title || b.name || "");
      }
      if (sortBy === "name-desc") {
        return (b.title || b.name || "").localeCompare(a.title || a.name || "");
      }
      // Preserve default project order based on project number
      return (a.number || "").localeCompare(b.number || "");
    });
  }, [selectedTech, sortBy]);

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

      {/* Filter and Sort Controls */}
      <div className="projects-controls" role="region" aria-label="Projects filter and sort controls">
        <div className="projects-filter-wrapper">
          <span className="controls-label">Filter:</span>
          <div className="projects-filter-bar" role="group" aria-label="Filter by technology">
            <button
              type="button"
              className={`projects-filter-btn ${selectedTech === "all" ? "active" : ""}`}
              onClick={() => setSelectedTech("all")}
              aria-pressed={selectedTech === "all"}
            >
              All Technologies
            </button>
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                type="button"
                className={`projects-filter-btn ${selectedTech === tech ? "active" : ""}`}
                onClick={() => setSelectedTech(tech)}
                aria-pressed={selectedTech === tech}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-sort-wrapper">
          <label htmlFor="projects-page-sort-select" className="controls-label">
            Sort:
          </label>
          <select
            id="projects-page-sort-select"
            className="projects-sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sort projects"
          >
            <option value="default">Default Order</option>
            <option value="name-asc">Name (A – Z)</option>
            <option value="name-desc">Name (Z – A)</option>
          </select>
        </div>
      </div>

      {/* Projects Grid or Empty State */}
      {filteredAndSortedProjects.length === 0 ? (
        <div className="projects-empty-state" role="status">
          <h3 className="projects-empty-title">No projects found</h3>
          <p className="projects-empty-desc">
            No projects match the selected technology: <strong>{selectedTech}</strong>
          </p>
          <button
            type="button"
            className="projects-reset-btn"
            onClick={() => setSelectedTech("all")}
          >
            Reset Filter
          </button>
        </div>
      ) : (
        <div className="projects-grid">
          {filteredAndSortedProjects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      )}

      <div className="projects-footer">
        <p>MORE TO BUILD. MORE TO LEARN.</p>
        <span>✳</span>
      </div>
    </main>
  );
}

export default ProjectsPage;
