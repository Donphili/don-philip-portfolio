import { useEffect, useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    category: "BRAND IDENTITY",
    title: "TerraWeave",
    description:
      "A personal brand identity concept exploring sustainable African fashion, culture and contemporary design.",
    type: "design",
    visual: "terra",
    tags: ["Branding", "Typography", "Visual Identity"],
  },
  {
    number: "02",
    category: "CREATIVE CAMPAIGN",
    title: "KWETU",
    description:
      "A personal creative concept celebrating African heritage through bold visual storytelling.",
    type: "design",
    visual: "kwetu",
    tags: ["Campaign", "Culture", "Art Direction"],
  },
  {
    number: "03",
    category: "ADVERTISING CONCEPT",
    title: "Visual Culture",
    description:
      "An advertising design concept focused on strong composition, visual communication and impact.",
    type: "design",
    visual: "culture",
    tags: ["Advertising", "Creative Design", "Layout"],
  },
];

// ---------------------------------------------------------------
// CONTACT DETAILS - edit these in one place
// ---------------------------------------------------------------
const contact = {
  email: "donphilip65@yahoo.com",
  whatsappNigeria: { label: "+234 803 957 3143", link: "https://wa.me/2348039573143" },
  whatsappKuwait: { label: "+965 9921 4970", link: "https://wa.me/96599214970" },
};

// ---------------------------------------------------------------
// WEB PROJECTS
// When you buy a domain for a project, paste it into `url`
// (for example "https://biztrack.app"). While `url` is empty the
// card shows "Live link coming soon" instead of a button.
// ---------------------------------------------------------------
const webProjects = [
  {
    number: "01",
    category: "BUSINESS TOOL",
    title: "BizTrack",
    description:
      "A small business manager dashboard for tracking goods, products and stock history in one place.",
    art: "art-biztrack",
    tags: ["Dashboard", "Inventory", "Business"],
    url: "",
  },
  {
    number: "02",
    category: "WEBSITE",
    title: "God's Lifting School",
    description:
      "A responsive website for God's Lifting School with a mobile-friendly dashboard and navigation.",
    art: "art-gls",
    tags: ["Website", "Dashboard", "Responsive"],
    url: "",
  },
];

const technologies = [
  { name: "JavaScript", mark: "JS", className: "javascript" },
  { name: "Python", mark: "Py", className: "python" },
  { name: "React", mark: "R", className: "react" },
  { name: "Node.js", mark: "N", className: "node" },
  { name: "GitHub", mark: "GH", className: "github" },
  { name: "Linux", mark: "L", className: "linux" },
];

function BrandMark() {
  return (
    <div className="brand-mark" aria-label="Don Philip initials">
      <span>D</span>
      <span>P</span>
      <i />
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 100 110" fill="none" aria-hidden="true">
      <path
        d="M50 5L88 20V48C88 74 72 94 50 105C28 94 12 74 12 48V20L50 5Z"
        stroke="currentColor"
        strokeWidth="5"
      />
      <path
        d="M34 53L45 64L68 39"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg viewBox="0 0 100 80" fill="none" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="94"
        height="74"
        rx="9"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M17 26L31 39L17 52M40 53H70"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="15" r="2.5" fill="currentColor" />
      <circle cx="27" cy="15" r="2.5" fill="currentColor" />
      <circle cx="38" cy="15" r="2.5" fill="currentColor" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  );
}

function getInitialTheme() {
  try {
    const saved = localStorage.getItem("theme");
    return saved === "light" ? "light" : "dark";
  } catch {
    return "dark";
  }
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);

  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage unavailable - ignore */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "light" ? "#f3f6ef" : "#080b09");
  }, [theme]);

  return (
    <div className="site-shell">
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />
      <div className="background-grid" />

      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <BrandMark />
          <span>
            DON<span className="green-text">-</span>PHILIP
            <small>CREATIVE · TECHNOLOGY · SECURITY</small>
          </span>
        </a>

        <nav className={menuOpen ? "navigation open" : "navigation"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#design" onClick={closeMenu}>Design</a>
          <a href="#software" onClick={closeMenu}>Software</a>
          <a href="#cybersecurity" onClick={closeMenu}>Cybersecurity</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let's Talk <span>↗</span>
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              CREATIVE MIND. TECHNOLOGY FOCUSED.
            </div>

            <p className="eyebrow">WELCOME TO MY DIGITAL SPACE</p>

            <h1>
              I AM
              <br />
              <span className="outline-text">DON</span>
              <span className="green-text">-PHILIP</span>
            </h1>

            <h2>
              Design with Purpose.
              <br />
              <span>Create with Impact.</span>
            </h2>

            <p className="hero-description">
              I bring creativity and technology together through graphic
              design, software development and cybersecurity.
              Explore my work, interests and professional journey.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#design">
                Explore My Work <span>↗</span>
              </a>
              <a className="button button-outline" href="#about">
                Discover My Story
              </a>
            </div>

            <div className="hero-numbers">
              <div>
                <strong>03</strong>
                <span>AREAS OF INTEREST</span>
              </div>
              <div>
                <strong>01</strong>
                <span>CREATIVE IDENTITY</span>
              </div>
              <div>
                <strong>∞</strong>
                <span>ROOM TO GROW</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-orbit orbit-one" />
            <div className="portrait-orbit orbit-two" />

            <div className="portrait-frame">
              <div className="portrait-topline">
                <span>PROFILE / 001</span>
                <span className="live-indicator">● ONLINE</span>
              </div>

              <div className="portrait-image">
                <img
                  src="/don-philip.png"
                  alt="Portrait of Don-Philip"
                />
              </div>

              <div className="portrait-bottom">
                <div>
                  <span>THE PERSON BEHIND THE WORK</span>
                  <strong>ONYEJEKWE PHILIP EMEKA</strong>
                </div>
                <BrandMark />
              </div>
            </div>

            <div className="floating-card floating-card-top">
              <span className="floating-symbol">✳</span>
              <div>
                <strong>CREATIVE</strong>
                <small>Visual thinking</small>
              </div>
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="floating-symbol shield-small">
                <ShieldIcon />
              </span>
              <div>
                <strong>SECURITY</strong>
                <small>Think. Test. Protect.</small>
              </div>
            </div>

            <div className="floating-initials">DP</div>
          </div>
        </section>

        {/* INTRO STRIP */}
        <section className="expertise-strip">
          <span>GRAPHIC DESIGN</span>
          <i>✳</i>
          <span>SOFTWARE ENGINEERING</span>
          <i>✳</i>
          <span>CYBERSECURITY</span>
          <i>✳</i>
          <span>CREATIVE TECHNOLOGY</span>
        </section>

        {/* ABOUT */}
        <section className="section-wrap about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>
              Creativity meets
              <span className="green-text"> technology.</span>
            </h2>
          </div>

          <div className="about-layout">
            <div className="about-main">
              <p className="large-copy">
                I'm <strong>Onyejekwe Philip Emeka</strong>, also known as
                <strong className="green-text"> Don-Philip.</strong>
              </p>

              <p>
                I'm a creative and technology enthusiast interested in
                building meaningful experiences through design, software
                and cybersecurity. I enjoy turning ideas into visual
                concepts, developing digital solutions and learning how
                systems work and how to protect them.
              </p>

              <p>
                I'm studying Computer Science at the University of the
                People, I'm an ALX Africa certified backend software
                engineer, and I've undertaken cybersecurity and ethical
                hacking studies through Cisco Academy.
              </p>

              <a className="text-link" href="#contact">
                Let's connect <span>↗</span>
              </a>
            </div>

            <div className="about-side">
              <div className="info-card">
                <span className="card-index">A / 01</span>
                <h3>Creative thinking</h3>
                <p>Design, identity, communication and visual storytelling.</p>
              </div>

              <div className="info-card">
                <span className="card-index">B / 02</span>
                <h3>Technical learning</h3>
                <p>Programming, backend development and digital systems.</p>
              </div>

              <div className="info-card">
                <span className="card-index">C / 03</span>
                <h3>Security mindset</h3>
                <p>Ethical hacking, awareness and defensive security.</p>
              </div>
            </div>
          </div>
        </section>

        {/* DESIGN */}
        <section className="section-wrap work-section" id="design">
          <div className="section-heading heading-row">
            <div>
              <p className="eyebrow">02 / CREATIVE PORTFOLIO</p>
              <h2>
                Selected <span className="green-text">design work.</span>
              </h2>
            </div>
            <span className="section-side-note">IDEAS MADE VISIBLE / 2026</span>
          </div>

          <p className="section-intro">
            A selection of personal creative concepts exploring brand
            identity, advertising and visual storytelling.
          </p>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-art ${project.visual}`}>
                  <span className="project-number">{project.number}</span>
                  <div className="project-art-inner">
                    {project.visual === "terra" && (
                      <>
                        <span className="art-kicker">NATURE / FORM / FUTURE</span>
                        <strong>TERRA<br />WEAVE</strong>
                        <span className="art-circle" />
                      </>
                    )}
                    {project.visual === "kwetu" && (
                      <>
                        <span className="art-kicker">ROOTED IN CULTURE</span>
                        <strong>KWETU</strong>
                        <span className="kwetu-shape">✳</span>
                      </>
                    )}
                    {project.visual === "culture" && (
                      <>
                        <span className="art-kicker">DESIGN / CULTURE / IMPACT</span>
                        <strong>VISUAL<br />CULTURE</strong>
                        <span className="culture-shape">V</span>
                      </>
                    )}
                  </div>
                  <span className="concept-label">PERSONAL CONCEPT</span>
                </div>

                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="concept-disclaimer">
            These are personal design concepts created for portfolio
            development, not commissioned client projects.
          </p>
        </section>

        {/* SOFTWARE */}
        <section className="software-section" id="software">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">03 / SOFTWARE ENGINEERING</p>
              <h2>
                Building with <span className="green-text">technology.</span>
              </h2>
            </div>

            <div className="software-layout">
              <div className="software-copy">
                <p className="large-copy">
                  Turning logic into
                  <span className="green-text"> digital solutions.</span>
                </p>
                <p>
                  My software engineering interests include backend
                  development, programming and building useful digital
                  experiences. I'm continuously improving through study
                  and practical projects.
                </p>
                <a className="text-link" href="#contact">
                  Discuss a project <span>↗</span>
                </a>
              </div>

              <div className="technology-panel">
                <div className="panel-top">
                  <span>TECH STACK / LEARNING TOOLKIT</span>
                  <span className="status-dot" />
                </div>

                <div className="technology-grid">
                  {technologies.map((tech) => (
                    <div className="technology-item" key={tech.name}>
                      <div className={`tech-logo ${tech.className}`}>
                        {tech.mark}
                      </div>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

                <div className="code-window">
                  <div className="code-window-top">
                    <span>don_philip.js</span>
                    <span>● ● ●</span>
                  </div>
                  <pre>
                    <span className="code-purple">const</span>{" "}
                    <span className="code-blue">developer</span> = {"{"}
                    {"\n"}  name: <span className="code-yellow">"Don-Philip"</span>,
                    {"\n"}  mindset: <span className="code-yellow">"Keep learning"</span>,
                    {"\n"}  focus: [
                    {"\n"}    <span className="code-yellow">"Build"</span>,
                    {"\n"}    <span className="code-yellow">"Create"</span>,
                    {"\n"}    <span className="code-yellow">"Improve"</span>
                    {"\n"}  ]
                    {"\n"}{"}"};
                  </pre>
                </div>
              </div>
            </div>

            <div className="web-projects" id="projects">
              <div className="section-heading">
                <p className="eyebrow">WEB PROJECTS</p>
                <h3 className="web-projects-title">
                  Things I've <span className="green-text">built.</span>
                </h3>
              </div>

              <div className="web-project-grid">
                {webProjects.map((project) => (
                  <article className="project-card" key={project.number}>
                    <div className={`project-art ${project.art}`}>
                      <span className="project-number">{project.number}</span>
                      <div className="project-art-inner">
                        <span className="art-kicker">WEB PROJECT</span>
                        <strong>{project.title}</strong>
                      </div>
                      <span className="concept-label">BUILT BY DON-PHILIP</span>
                    </div>

                    <div className="project-info">
                      <span className="project-category">{project.category}</span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="tag-list">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      {project.url ? (
                        <a
                          className="project-link"
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit live site <span>↗</span>
                        </a>
                      ) : (
                        <span className="project-link project-link-soon">
                          Live link coming soon
                        </span>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CYBERSECURITY */}
        <section className="section-wrap cyber-section" id="cybersecurity">
          <div className="section-heading">
            <p className="eyebrow">04 / CYBERSECURITY</p>
            <h2>
              Think like a defender.
              <span className="green-text"> Stay ethical.</span>
            </h2>
          </div>

          <div className="cyber-layout">
            <div className="cyber-visual">
              <div className="cyber-ring ring-one" />
              <div className="cyber-ring ring-two" />
              <div className="cyber-shield">
                <ShieldIcon />
              </div>
              <div className="cyber-terminal">
                <TerminalIcon />
              </div>
              <span className="cyber-code code-one">010010</span>
              <span className="cyber-code code-two">SECURE_SYSTEM</span>
              <span className="cyber-code code-three">ACCESS / ETHICAL</span>
            </div>

            <div className="cyber-copy">
              <p className="large-copy">
                Understanding threats.
                <br />
                <span className="green-text">Strengthening defence.</span>
              </p>
              <p>
                I'm developing my knowledge of cybersecurity through
                ethical hacking studies, security learning and hands-on
                practice in authorised environments.
              </p>

              <div className="security-list">
                <span><i>01</i> Ethical hacking</span>
                <span><i>02</i> Penetration testing fundamentals</span>
                <span><i>03</i> Network defence</span>
                <span><i>04</i> Endpoint security</span>
                <span><i>05</i> Cybersecurity awareness</span>
              </div>

              <p className="ethical-note">
                <span>✳</span> Knowledge used responsibly. Testing only
                with proper authorisation.
              </p>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="education-section">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">05 / LEARNING JOURNEY</p>
              <h2>
                Always learning.
                <span className="green-text"> Always evolving.</span>
              </h2>
            </div>

            <div className="education-grid">
              <div className="education-card">
                <span>01 / UNIVERSITY</span>
                <h3>University of the People</h3>
                <p>Computer Science student</p>
              </div>
              <div className="education-card">
                <span>02 / SOFTWARE</span>
                <h3>ALX Africa</h3>
                <p>Certified Backend Software Engineer</p>
              </div>
              <div className="education-card">
                <span>03 / SECURITY</span>
                <h3>Cisco Academy</h3>
                <p>Cybersecurity and ethical hacking studies</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section-wrap contact-section" id="contact">
          <div className="contact-card">
            <div className="contact-decoration">DP</div>
            <p className="eyebrow">06 / LET'S CONNECT</p>
            <h2>
              Have an idea?
              <br />
              <span className="green-text">Let's make it happen.</span>
            </h2>
            <p>
              Interested in design, software or cybersecurity conversations?
              I'd be glad to connect.
            </p>
            <div className="contact-actions">
              <a
                className="button button-primary"
                href={`mailto:${contact.email}`}
              >
                Email Me <span>↗</span>
              </a>
              <a
                className="button button-outline"
                href={contact.whatsappNigeria.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp (Nigeria) <span>↗</span>
              </a>
              <a
                className="button button-outline"
                href={contact.whatsappKuwait.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp (Kuwait) <span>↗</span>
              </a>
            </div>
            <small>
              {contact.email} · {contact.whatsappNigeria.label} · {contact.whatsappKuwait.label}
            </small>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">
          <BrandMark />
          DON-PHILIP
        </a>
        <p>Design with Purpose. Create with Impact.</p>
        <span>© 2026 DON-PHILIP. Designed and developed by Onyejekwe Philip Emeka.</span>
      </footer>
    </div>
  );
}

export default App;