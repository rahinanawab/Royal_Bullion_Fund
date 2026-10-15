export default function Hero() {
  return (
    <section id="home" className="hero">
        <div className="hero-grid"></div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"></span> AVAILABLE FOR QA OPPORTUNITIES</div>
            <h1>Quality isn't a phase.<br /><span>It's the standard.</span></h1>
            <p className="hero-text">I'm <strong>Rahina Nawab Ali</strong>, a mid-level SQA engineer who tests web, mobile, API and IoT products end to end, so teams can ship with confidence.</p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">Explore My Work <span>↗</span></a>
              <a className="btn secondary" href="https://github.com/rahinanawab" target="_blank" rel="noopener">GitHub ↗</a>
            </div>
            <div className="stats">
              <div><strong>3.5+</strong><span>Years Experience</span></div>
              <div><strong>45+</strong><span>Products Tested</span></div>
              <div><strong>10+</strong><span>Certifications</span></div>
            </div>
          </div>
          <div className="hero-card">
            <div className="code-top"><span></span><span></span><span></span><small>qa_engineer.ts</small></div>
            <div className="code">
              <p><i>const</i> engineer = {'{'}</p>
              <p className="indent"><b>name:</b> <em>'Rahina Nawab Ali'</em>,</p>
              <p className="indent"><b>role:</b> <em>'Mid-Level SQA Engineer'</em>,</p>
              <p className="indent"><b>experience:</b> <em>'3.5+ years'</em>,</p>
              <p className="indent"><b>testing:</b> [</p>
              <p className="indent2"><em>'Web'</em>, <em>'Mobile'</em>, <em>'API'</em>,</p>
              <p className="indent2"><em>'IoT'</em>, <em>'AI'</em>, <em>'FinTech'</em></p>
              <p className="indent">],</p>
              <p className="indent"><b>tools:</b> [</p>
              <p className="indent2"><em>'Selenium'</em>, <em>'Playwright'</em>, <em>'Cucumber'</em>,</p>
              <p className="indent2"><em>'TestNG'</em>, <em>'TestRail'</em>, <em>'JMeter'</em>,</p>
              <p className="indent2"><em>'Postman'</em>, <em>'Jira'</em>, <em>'Jenkins'</em></p>
              <p className="indent">],</p>
              <p className="indent"><b>mindset:</b> <em>'Quality First'</em></p>
              <p>{'}'};</p>
              <div className="cursor"></div>
            </div>
          </div>
        </div>
      </section>
  );
}
