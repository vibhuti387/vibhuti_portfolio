import "./Certificate.css"
import { TypeAnimation } from "react-type-animation";

function Certificates() {
  const certificates = [
    {
      number: "01",
      type: "INTERNSHIP",
      title: "Internship Certificate",
      organization: "Anytime Invest",
      description:
        "Certificate recognizing my internship experience in the fintech and data analytics domain.",
      icon: "✳",
      logo: true,
      link: "https://drive.google.com/file/d/18qpp_QqvgCpWmqDjE-wZChUDqliX4bFb/view?usp=drive_link",
    },
    {
      number: "02",
      type: "COURSE COMPLETION",
      title: "DBMS Course",
      organization: "Infosys Springboard",
      description:
        "Course completion certificate for learning database management system concepts.",
      icon: "⌘",
      logo: false,
      link: "https://drive.google.com/file/d/1muCJIB_zXJaEKZZziBGqECP7qO5c13W6/view?usp=drive_link",
    },
    {
      number: "03",
      type: "HACKATHON",
      title: "Hackathon Participation",
      organization: "LNM HACKS",
      description:
        "Recognition of participation in a hackathon focused on innovation and problem-solving.",
      icon: "</>",
      logo: false,
      link: "https://drive.google.com/file/d/1OrBpFT2PaCVee4GEDdc2rYA9Kf5fTSHV/view?usp=drive_link",
    },
  ];

  return (
    <section className="certificates" id="certificates">
      <div className="certificates-heading">
        <p className="certificates-tag">05 / MILESTONES</p>

        <h2>
          Certificates & <span>Achievements.</span>
        </h2>

        <p className="certificates-subtitle">
          Learning, exploring, and celebrating every step of my journey.
        </p>

        <div className="certificate-typewriter">
          <span>I'm </span>
          <TypeAnimation
            sequence={[
              "Learning by Doing",
              1500,
              "Growing Through Experience",
              1500,
              "Turning Skills into Impact",
              1500,
              "Always Exploring New Ideas",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
          <span className="typewriter-cursor">|</span>
        </div>
      </div>

      <div className="certificates-grid">
        {certificates.map((certificate) => (
          <article
            className="certificate-card"
            key={certificate.number}
          >
            <div className="certificate-top">
              <span className="certificate-number">
                {certificate.number}
              </span>

              <span className="certificate-type">
                {certificate.type}
              </span>
            </div>

            <div className="certificate-icon">
              {certificate.logo ? (
                <img
                  src="/anytimeinvest.png"
                  alt="Anytime Invest logo"
                  className="anytime-logo"
                />
              ) : (
                certificate.icon
              )}
            </div>

            <div className="certificate-info">
              <p className="certificate-organization">
                {certificate.organization}
              </p>

              <h3>{certificate.title}</h3>

              <p className="certificate-description">
                {certificate.description}
              </p>
            </div>

            <div className="certificate-footer">
              {certificate.link ? (
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  View Certificate <span>↗</span>
                </a>
              ) : (
                <span className="certificate-pending">
                  Certificate link to be added
                </span>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="certificates-bottom">
        <span>✳</span>
        <p>EVERY MILESTONE IS A NEW BEGINNING.</p>
      </div>
    </section>
  );
}

export default Certificates;
