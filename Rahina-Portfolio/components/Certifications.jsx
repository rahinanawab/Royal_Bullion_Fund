export default function Certifications() {
  return (
    <section id="certifications" className="section muted">
        <div className="container">
          <p className="section-label">06 / CERTIFICATIONS</p>
          <h2>Never done <span>learning.</span></h2>
          <input type="checkbox" id="show-more-certs" className="more-toggle" aria-label="Show more certificates" />
          <div className="skill-grid cert-grid">
            <article className="cert-card">
              <div className="skill-num">04.2025</div>
              <h3>Learn Selenium with Java, Cucumber &amp; Frameworks</h3><p>Udemy</p>
            </article>
            <article className="cert-card">
              <div className="skill-num">04.2024</div>
              <h3>Selenium WebDriver: All You Need to Know</h3><p>Alison</p>
            </article>
            <article className="cert-card">
              <div className="skill-num">12.2022</div>
              <h3>Angular7 for Advanced Level</h3><p>Great Learning Academy</p>
            </article>
            <article className="cert-card">
              <div className="skill-num">12.2022</div>
              <h3>Angular7 for Intermediate Level</h3><p>Great Learning Academy</p>
            </article>
            <article className="cert-card">
              <div className="skill-num">12.2022</div>
              <h3>Angular7 for Beginners</h3><p>Great Learning Academy</p>
            </article>
            <article className="cert-card">
              <div className="skill-num">12.2022</div>
              <h3>Introduction to AngularJS</h3><p>Great Learning Academy</p>
            </article>
            <article className="cert-card">
              <div className="skill-num">11.2022</div>
              <h3>Graduate Trainee Program (Backend Engineering)</h3><p>Softech Worldwide • Certificate of Participation</p>
            </article>
            <article className="cert-card">
              <div className="skill-num">11.2022</div>
              <h3>Complete WordPress Website Developer Course</h3><p>Udemy</p>
            </article>
            <article className="cert-card">
              <div className="skill-num">05.2021</div>
              <h3>Web Design Forms Layouts A Must to Learn for All Levels</h3><p>Udemy</p>
            </article>
            <article className="cert-card">
              <div className="skill-num">04.2021</div>
              <h3>SQL - The Complete Introduction to SQL Programming</h3><p>Udemy</p>
            </article>
          </div>
          <div className="load-wrap">
            <label htmlFor="show-more-certs" className="btn secondary load-btn more">Load more <span>↓</span></label>
            <label htmlFor="show-more-certs" className="btn secondary load-btn less">Load less <span>↑</span></label>
          </div>
        </div>
      </section>
  );
}
