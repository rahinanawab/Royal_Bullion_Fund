export default function Navbar() {
  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="#home" aria-label="Go home">
          <span className="brand-mark">RN</span>
          <span>Rahina Nawab Ali<span className="accent"></span></span>
        </a>

        <input type="checkbox" id="menu-toggle" className="menu-toggle" aria-hidden="true" />
        <label htmlFor="menu-toggle" className="menu-btn" aria-label="Toggle menu">☰</label>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a className="nav-cta" href="#contact">Hire Me</a>
        </div>
      </nav>
    </header>
  );
}
