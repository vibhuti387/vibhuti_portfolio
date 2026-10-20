import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { certificates } from "../data/certificates.js";
import CertificateCard from "./CertificateCard.jsx";
import "./Certificate.css";

function Certificates() {
  const previewCertificates = certificates.slice(0, 3);

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
        {previewCertificates.map((certificate) => (
          <CertificateCard
            key={certificate.number}
            certificate={certificate}
          />
        ))}
      </div>

      <div className="certificates-view-all">
        <Link to="/certificates" className="certificates-view-all-btn">
          View All Certificates <span>↗</span>
        </Link>
      </div>

      <div className="certificates-bottom">
        <span>✳</span>
        <p>EVERY MILESTONE IS A NEW BEGINNING.</p>
      </div>
    </section>
  );
}

export default Certificates;
