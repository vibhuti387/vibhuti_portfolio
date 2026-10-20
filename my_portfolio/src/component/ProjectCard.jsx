import "./Project.css";

function ProjectCard({
  project,
  number: propNumber,
  title: propTitle,
  name: propName,
  category: propCategory,
  description: propDescription,
  technologies: propTechnologies,
  tags: propTags,
  githubUrl: propGithubUrl,
  github: propGithub,
  projectUrl: propProjectUrl,
  link: propLink,
  accent: propAccent,
  icon: propIcon,
  metric: propMetric,
}) {
  const data = project || {};
  const number = propNumber ?? data.number;
  const title = propTitle ?? propName ?? data.title ?? data.name;
  const category = propCategory ?? data.category;
  const description = propDescription ?? data.description;
  const technologies =
    propTechnologies ?? propTags ?? data.technologies ?? data.tags ?? [];
  const githubUrl =
    propGithubUrl ?? propGithub ?? data.githubUrl ?? data.github;
  const projectUrl =
    propProjectUrl ?? propLink ?? data.projectUrl ?? data.link;
  const accent = propAccent ?? data.accent;
  const icon = propIcon ?? data.icon;
  const metric = propMetric ?? data.metric;

  const defaultSymbol =
    number === "01"
      ? "</>"
      : number === "02"
      ? "↗"
      : number === "03"
      ? "✳"
      : number === "04"
      ? "🛠"
      : "🌾";

  return (
    <article
      className="project-card"
      style={accent ? { borderColor: accent } : undefined}
    >
      <div className="project-top">
        {number && <span className="project-number">{number}</span>}
        {category && <span className="project-category">{category}</span>}
      </div>

      <div className="project-visual" aria-hidden="true">
        <span className="visual-orbit orbit-a"></span>
        <span className="visual-orbit orbit-b"></span>

        <span className="project-symbol">{icon || defaultSymbol}</span>

        {number && (
          <span className="visual-caption">PROJECT_{number}</span>
        )}
      </div>

      <div className="project-info">
        {title && <h3>{title}</h3>}

        {description && (
          <p className="project-description">{description}</p>
        )}

        {metric && (
          <div className="project-metric">
            <span className="project-metric-badge">{metric}</span>
          </div>
        )}

        {technologies && technologies.length > 0 && (
          <div className="project-tags">
            {technologies.map((tag) => (
              <span className="project-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="project-links-container">
          {githubUrl && (
            <a
              className="project-link"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub <span>↗</span>
            </a>
          )}

          {projectUrl && (
            <a
              className="project-link project-live-link"
              href={projectUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo <span>↗</span>
            </a>
          )}

          {!githubUrl && !projectUrl && (
            <span className="project-pending">
              Repository / Demo link to be added
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
