
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="availability">
          <span className="status-dot"></span>
          OPEN TO OPPORTUNITIES
        </div>

        <p className="hero-intro">HELLO, WORLD! I'M</p>

        <h1>
          Vibhuti
          <br />
          <span>Seth.</span>
        </h1>

        <div className="hero-role">
          I'm a{" "}
          <TypeAnimation
            sequence={[
              "Software Engineer",
              1500,
              "Problem Solver",
              1500,
              "CSE Student",
              1500,
              "Technology Enthusiast",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="hero-typewriter"
          />
        </div>

        <p className="hero-description">
          I build meaningful projects, solve problems through code,
          and explore new technologies. Currently pursuing Computer
          Science Engineering and turning ideas into practical solutions.
        </p>

        <div className="hero-meta">
          <span>⌖ India</span>
          <span className="meta-dot">•</span>
          <span>B.Tech Student</span>
        </div>

        <div className="social-links">
          <a className="hero-btn primary-btn" href="#projects">
            Explore My Work <span>↗</span>
          </a>

          <a
            className="hero-btn secondary-btn"
            href="http://localhost:5000/api/resume/pdf"
          >
            ↓ Download PDF
          </a>

          <a
            className="hero-btn secondary-btn"
            href="http://localhost:5000/api/resume/word"
          >
            ↓ Download Word
          </a>
        </div>

        <div className="hero-socials">
          <span className="find-me">FIND ME ON</span>

          <a
            href="https://github.com/vibhuti387"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GH
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            in
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>

        <div className="visual-panel">
          <div className="panel-top">
            <span>CREATIVE MINDSET</span>
            <span className="status-dot"></span>
          </div>

          <div className="code-window">
            <div className="window-bar">
              <span></span>
              <span></span>
              <span></span>
              <p>vibhuti.js</p>
            </div>

            <div className="code-content">
              <p><span className="code-muted">01</span> <span className="code-purple">const</span> developer = {"{"}</p>
              <p><span className="code-muted">02</span> &nbsp; name: <span className="code-green">"Vibhuti Seth"</span>,</p>
              <p><span className="code-muted">03</span> &nbsp; role: <span className="code-green">"Software Engineer"</span>,</p>
              <p><span className="code-muted">04</span> &nbsp; skills: [</p>
              <p><span className="code-muted">05</span> &nbsp;&nbsp; <span className="code-green">"C++"</span>, <span className="code-green">"Python"</span>,</p>
              <p><span className="code-muted">06</span> &nbsp;&nbsp; <span className="code-green">"SQL"</span>, <span className="code-green">"React"</span></p>
              <p><span className="code-muted">07</span> &nbsp; ],</p>
              <p><span className="code-muted">08</span> &nbsp; mindset: <span className="code-green">"Always learning"</span></p>
              <p><span className="code-muted">09</span> {"};"}</p>
              <p className="code-comment"><span className="code-muted">10</span> // Building one idea at a time ✨</p>
            </div>
          </div>

          <div className="panel-bottom">
            <span className="bottom-line"></span>
            <div>
              <p>BUILDING THE FUTURE</p>
              <span>One idea at a time.</span>
            </div>
          </div>
        </div>

        <div className="floating-badge badge-code">
          <span className="badge-icon">&lt;/&gt;</span>
          <div>
            <strong>Clean Code</strong>
            <p>Built with purpose</p>
          </div>
        </div>

        <div className="floating-badge badge-learning">
          <span className="badge-icon">✳</span>
          <div>
            <strong>Always Learning</strong>
            <p>Growing every day</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
