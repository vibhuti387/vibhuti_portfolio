import './Project.css'
function Projects() {
  const projects = [
    {
      number: '01',
      category: 'AI & SKILL PLATFORM',
      name: 'SkillProof AI',
      description:
        'An AI-focused platform concept designed around skill verification and helping users showcase their abilities through a digital platform.',
      tags: ['AI', 'Skill Verification', 'Web Platform'],
      github: 'https://github.com/vibhuti387/SkillProof',
    },
    {
      number: '02',
      category: 'SERVICE PLATFORM',
      name: 'QuickFixPlus',
      description:
        'A platform concept that helps people find everyday services such as plumbers, electricians, and other home-service professionals.',
      tags: ['Web Platform', 'Service Discovery', 'UI/UX'],
      github: 'https://github.com/vibhuti387/QuickfixPlus',
    },
    {
      number: '03',
      category: 'WEBSITE PROJECT',
      name: 'Nayi Shuruwaat',
      description:
        'A website project developed as part of my early college journey, where I also took responsibility as the team leader.',
      tags: ['Website', 'Teamwork', 'Project Development'],
      github: 'https://github.com/vibhuti387/NayiShuruat',
    },
  ];

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
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span className="project-number">{project.number}</span>
              <span className="project-category">
                {project.category}
              </span>
            </div>

            <div className="project-visual" aria-hidden="true">
              <span className="visual-orbit orbit-a"></span>
              <span className="visual-orbit orbit-b"></span>

              <span className="project-symbol">
                {project.number === '01'
                  ? '</>'
                  : project.number === '02'
                  ? '↗'
                  : '✳'}
              </span>

              <span className="visual-caption">
                PROJECT_{project.number}
              </span>
            </div>

            <div className="project-info">
              <h3>{project.name}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <a
                className="project-link"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub <span>↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="projects-footer">
        <p>MORE TO BUILD. MORE TO LEARN.</p>
        <span>✳</span>
      </div>
    </section>
  );
}

export default Projects;
