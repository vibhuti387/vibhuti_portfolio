import { useEffect } from "react";
import { Link } from "react-router-dom";
import { certificates } from "../data/certificates.js";
import CertificateCard from "../component/CertificateCard.jsx";
import "../component/Certificate.css";
import "./CertificatesPage.css";

function CertificatesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <main className="certificates certificates-page">
      <div className="certificates-page-header">
        <Link to="/" className="certificates-back-link">
          <span>←</span> Back to Portfolio
        </Link>

        <div className="certificates-page-intro">
          <p className="certificates-tag">ALL MILESTONES</p>
          <h2>
            All <span>Certificates.</span>
          </h2>
          <p className="certificates-subtitle">
            A comprehensive collection of my verified certifications, technical courses, and hackathons.
          </p>
        </div>
      </div>

      <div className="certificates-grid">
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.number}
            certificate={certificate}
          />
        ))}
      </div>

      <div className="certificates-bottom">
        <span>✳</span>
        <p>EVERY MILESTONE IS A NEW BEGINNING.</p>
      </div>
    </main>
  );
}

export default CertificatesPage;
