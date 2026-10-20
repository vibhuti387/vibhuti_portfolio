import './Education.css'
function Education() {
  const education = [
    {
      period: '2024 – 2028',
      title: 'B.Tech in Computer Science Engineering',
      institute: 'JK Lakshmipat University, Jaipur',
      detail: 'Currently pursuing my undergraduate degree.',
      status: 'IN PROGRESS',
    },
    {
      period: '2024',
      title: 'Class XII — Senior Secondary',
      institute: 'Gyanodya Higher Senior Secondary School',
      detail: 'Completed higher secondary education.',
      status: 'COMPLETED',
    },
    {
      period: 'CBSE',
      title: 'Class X — Secondary Education',
      institute: 'Olympus High School',
      detail: 'Completed secondary education.',
      status: 'COMPLETED',
    },
  ];

  return (
    <section className="education" id="education">
      <div className="education-heading">
        <p className="education-tag">04 / MY JOURNEY</p>
        <h2>Education <span>& Experience.</span></h2>
        <p className="education-subtitle">
          My academic journey and the experience I'm gaining along the way.
        </p>
      </div>

      <div className="journey-columns">
        {/* Education Column */}
        <div className="journey-column">
          <div className="column-heading">
            <span className="column-icon">▤</span>
            <div>
              <h3>Education</h3>
              <p>My academic background</p>
            </div>
          </div>

          <div className="timeline">
            {education.map((item, index) => (
              <article className="timeline-item" key={item.title}>
                <span className="timeline-dot"></span>

                <div className="timeline-card">
                  <div className="timeline-top">
                    <span className="timeline-period">
                      {item.period}
                    </span>
                    <span className="timeline-status">
                      {item.status}
                    </span>
                  </div>

                  <h4>{item.title}</h4>
                  <p className="timeline-institute">
                    {item.institute}
                  </p>
                  <p className="timeline-detail">
                    {item.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Experience Column */}
        <div className="journey-column">
          <div className="column-heading">
            <span className="column-icon">✳</span>
            <div>
              <h3>Experience</h3>
              <p>Learning beyond the classroom</p>
            </div>
          </div>

          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-dot"></span>

              <div className="timeline-card">
                <div className="timeline-top">
                  <span className="timeline-period">
                    Internship
                  </span>
                  <span className="timeline-status">
                    DATA ANALYTICS
                  </span>
                </div>

                <h4>Data Analytics Intern</h4>
                <p className="timeline-institute">
                  Anytime Invest
                </p>

                <p className="timeline-detail">
                  Working on a Wealth Management Analytics Platform
                  and learning how data is processed and transformed
                  into meaningful business insights.
                </p>

                <div className="experience-tags">
                  <span>Databricks</span>
                  <span>PySpark</span>
                  <span>SQL</span>
                  <span>Power BI</span>
                </div>
              </div>
            </article>

            <div className="experience-note">
              <span>✦</span>
              <p>
                Learning, building, and improving with every
                new opportunity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
