
import './Skills.css';

function Skills() {
  const skillGroups = [
    {
      number: '01',
      icon: '</>',
      title: 'Programming Languages',
      description: 'Building logic and solving problems through code.',
      skills: ['C', 'C++', 'Python'],
    },
    {
      number: '02',
      icon: '◈',
      title: 'Web Technologies',
      description: 'Creating interactive and responsive experiences.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js'],
    },
    {
      number: '03',
      icon: '⌘',
      title: 'Database & CS Fundamentals',
      description: 'Understanding data, algorithms and core concepts.',
      skills: ['SQL', 'DBMS', 'DSA', 'OOP', 'Operating Systems'],
    },
    {
      number: '04',
      icon: '⚙',
      title: 'Tools & Platforms',
      description: 'Tools I use to develop, test and manage projects.',
      skills: ['Git', 'GitHub', 'VS Code', 'Linux'],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-heading">
        <p className="skills-tag">02 / WHAT I WORK WITH</p>

        <h2>
          Skills & <span>Technologies.</span>
        </h2>

        <p className="skills-subtitle">
          The tools and concepts I'm learning and using to build better solutions.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.number}>
            <div className="skill-card-top">
              <span className="skill-icon">{group.icon}</span>
              <span className="skill-number">{group.number}</span>
            </div>

            <h3>{group.title}</h3>
            <p className="skill-description">{group.description}</p>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>

            <div className="skill-card-line"></div>
          </div>
        ))}
      </div>

      <div className="skills-footer">
        <span className="skills-footer-dot"></span>
        <p>
          ALWAYS LEARNING <span>·</span> ALWAYS IMPROVING
        </p>
      </div>
    </section>
  );
}

export default Skills;
