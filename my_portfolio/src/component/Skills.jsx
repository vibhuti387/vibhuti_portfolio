import { useState, useEffect } from "react";
import "./Skills.css";

function Skills() {
  const [activeTooltip, setActiveTooltip] = useState(null);

  // Close active tooltip when clicking outside (helpful for touch devices)
  useEffect(() => {
    const handleOutsideClick = () => setActiveTooltip(null);
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  const skillGroups = [
    {
      number: "01",
      icon: "</>",
      title: "Programming Languages",
      description: "Building logic and solving problems through code.",
      skills: [
        { name: "C", level: "Comfortable" },
        { name: "C++", level: "Comfortable" },
        { name: "Python", level: "Intermediate" },
      ],
    },
    {
      number: "02",
      icon: "◈",
      title: "Web Technologies",
      description: "Creating interactive and responsive experiences.",
      skills: [
        { name: "HTML5", level: "Comfortable" },
        { name: "CSS3", level: "Comfortable" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "React", level: "Practicing" },
        { name: "Node.js", level: "Learning" },
      ],
    },
    {
      number: "03",
      icon: "⌘",
      title: "Database & CS Fundamentals",
      description: "Understanding data, algorithms and core concepts.",
      skills: [
        { name: "SQL", level: "Comfortable" },
        { name: "DBMS", level: "Intermediate" },
        { name: "DSA", level: "Practicing" },
        { name: "OOP", level: "Comfortable" },
        { name: "Operating Systems", level: "Intermediate" },
      ],
    },
    {
      number: "04",
      icon: "⚙",
      title: "Tools & Platforms",
      description: "Tools I use to develop, test and manage projects.",
      skills: [
        { name: "Git", level: "Comfortable" },
        { name: "GitHub", level: "Comfortable" },
        { name: "VS Code", level: "Comfortable" },
        { name: "Linux", level: "Practicing" },
      ],
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
          Hover or tap any skill to view proficiency.
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
              {group.skills.map((skill, index) => {
                const skillName =
                  typeof skill === "string" ? skill : skill.name;
                const skillLevel =
                  typeof skill === "object" && skill.level ? skill.level : null;
                const tooltipId = `skill-tooltip-${group.number}-${index}`;
                const isTouchActive = activeTooltip === tooltipId;

                return (
                  <div
                    className="skill-tag-wrapper"
                    key={skillName}
                    onMouseEnter={() => setActiveTooltip(tooltipId)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <button
                      type="button"
                      className={`skill-tag ${
                        isTouchActive ? "has-active-tooltip" : ""
                      }`}
                      aria-describedby={skillLevel ? tooltipId : undefined}
                      aria-label={
                        skillLevel
                          ? `${skillName} - Proficiency: ${skillLevel}`
                          : skillName
                      }
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTooltip(isTouchActive ? null : tooltipId);
                      }}
                      onFocus={() => setActiveTooltip(tooltipId)}
                      onBlur={() => setActiveTooltip(null)}
                    >
                      {skillName}
                    </button>

                    {skillLevel && (
                      <div
                        id={tooltipId}
                        role="tooltip"
                        className={`skill-tooltip ${
                          isTouchActive ? "tooltip-visible" : ""
                        }`}
                      >
                        <span className="tooltip-title">Proficiency</span>
                        <span className="tooltip-value">{skillLevel}</span>
                      </div>
                    )}
                  </div>
                );
              })}
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
