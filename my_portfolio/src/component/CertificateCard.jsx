import "./Certificate.css";

function CertificateCard({
  certificate,
  number: propNumber,
  title: propTitle,
  issuer: propIssuer,
  organization: propOrganization,
  category: propCategory,
  type: propType,
  description: propDescription,
  skills: propSkills,
  icon: propIcon,
  logo: propLogo,
  certificateUrl: propCertificateUrl,
  link: propLink,
  accent: propAccent,
}) {
  const data = certificate || {};
  const number = propNumber ?? data.number;
  const title = propTitle ?? data.title;
  const issuer =
    propIssuer ?? propOrganization ?? data.issuer ?? data.organization;
  const category =
    propCategory ?? propType ?? data.category ?? data.type;
  const description = propDescription ?? data.description;
  const skills = propSkills ?? data.skills;
  const icon = propIcon ?? data.icon;
  const logo = propLogo ?? data.logo;
  const certificateUrl =
    propCertificateUrl ?? propLink ?? data.certificateUrl ?? data.link;
  const accent = propAccent ?? data.accent;

  return (
    <article
      className="certificate-card"
      style={accent ? { borderColor: accent } : undefined}
    >
      <div className="certificate-top">
        {number && <span className="certificate-number">{number}</span>}
        {category && <span className="certificate-type">{category}</span>}
      </div>

      <div className="certificate-icon">
        {logo ? (
          <img
            src="/anytimeinvest.png"
            alt={`${issuer || "Certificate"} logo`}
            className="anytime-logo"
          />
        ) : (
          icon || "✳"
        )}
      </div>

      <div className="certificate-info">
        {issuer && (
          <p className="certificate-organization">{issuer}</p>
        )}

        {title && <h3>{title}</h3>}

        {description && (
          <p className="certificate-description">{description}</p>
        )}

        {skills && Array.isArray(skills) && skills.length > 0 && (
          <div className="certificate-skills">
            {skills.map((skill, index) => (
              <span key={index} className="certificate-skill-tag">
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="certificate-footer">
        {certificateUrl ? (
          <a
            href={certificateUrl}
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
  );
}

export default CertificateCard;
