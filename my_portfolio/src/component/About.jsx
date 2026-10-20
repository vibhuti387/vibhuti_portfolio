
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-heading">
        <p className="about-tag">01 / GET TO KNOW ME</p>

        <h2>
          Beyond The <span>Code.</span>
        </h2>

        <p className="about-subtitle">
          A little about who I am and what drives me.
        </p>
      </div>

      <div className="about-container">
        <div className="about-content">
          <p className="about-small-heading">
            WHO AM I?
          </p>

          <h3>
            Hey, I'm Vibhuti
            <span className="about-wave">.</span>
          </h3>

          <p>
            I'm a Computer Science Engineering student who enjoys
            coding, problem-solving, and exploring how technology
            can solve real-world problems.
          </p>

          <p>
            I enjoy learning new concepts, strengthening my
            programming fundamentals, and building projects that
            turn ideas into practical solutions. For me, every
            project is an opportunity to learn something new.
          </p>

          <p>
            I'm working towards becoming a skilled Software Engineer
            by staying curious, practising consistently, and
            improving with every challenge.
          </p>

          <div className="about-buttons">
            <a href="#skills" className="about-btn primary-about-btn">
              Explore My Skills <span>↗</span>
            </a>

            <a href="#projects" className="about-btn secondary-about-btn">
              View My Projects
            </a>
          </div>
        </div>

        <div className="about-highlights">
          <div className="about-card">
            <div className="about-card-icon">&lt;/&gt;</div>

            <div className="about-card-content">
              <p className="about-card-label">01 — EDUCATION</p>
              <h4>Computer Science</h4>
              <p>
                Pursuing B.Tech in Computer Science Engineering.
              </p>
            </div>
          </div>

          <div className="about-card">
            <div className="about-card-icon">⌘</div>

            <div className="about-card-content">
              <p className="about-card-label">02 — INTERESTS</p>
              <h4>Code & Create</h4>
              <p>
                Programming, problem-solving, and hands-on projects.
              </p>
            </div>
          </div>

          <div className="about-card">
            <div className="about-card-icon">↗</div>

            <div className="about-card-content">
              <p className="about-card-label">03 — MINDSET</p>
              <h4>Always Learning</h4>
              <p>
                Building skills through curiosity, practice, and consistency.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-footer-line">
        <span>CURIOUS BY NATURE.</span>
        <span>DRIVEN BY CODE.</span>
      </div>
    </section>
  );
}

export default About;
