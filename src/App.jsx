import { useEffect, useState } from "react";
import "./App.css";

// ---------------------------------------------------------------
// DESIGN WORK - images and PDFs live in /public/work
// ---------------------------------------------------------------
const projects = [
  {
    number: "01",
    category: "BRAND IDENTITY",
    title: "TerraWeave",
    description:
      "A sustainable African fashion brand concept with a full identity toolkit: logo, colour palette, typography, stationery and signage.",
    image: "/work/terra-card.webp",
    alt: "TerraWeave logo with the tagline Rooted in Africa. Woven for Tomorrow.",
    pdf: "/work/terraweave-brand-toolkit.pdf",
    tags: ["Branding", "Typography", "Visual Identity"],
  },
  {
    number: "02",
    category: "LOGO · POSTER · SOCIAL",
    title: "DON'S LAB",
    description:
      "A cybersecurity learning lab brand: a shield logo, a phishing-awareness poster and a social post designed as one consistent system.",
    image: "/work/dons-lab-card.webp",
    alt: "DON'S LAB shield logo with a phishing awareness poster and a password safety social post.",
    pdf: "/work/dons-lab-ai-assisted-design.pdf",
    tags: ["Logo Design", "Poster", "Social Media"],
  },
  {
    number: "03",
    category: "FINTECH BRAND",
    title: "Ajo",
    description:
      "A digital savings-circle platform for West Africa, with research, brand strategy, logo, pattern system and applications.",
    image: "/work/ajo-card.webp",
    alt: "Ajo brand identity cover with the ajo logotype and a ring of dots around a gold coin.",
    pdf: "/work/ajo-brand-identity.pdf",
    tags: ["Brand Strategy", "Logo", "Applications"],
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

const profileLinks = {
  linkedin: "https://www.linkedin.com/in/onyejekwe-philip-emeka-18700226a",
  github: "https://github.com/Donphili",
  cv: "/Onyejekwe_Philip_Emeka_CV.pdf",
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

// ---------------------------------------------------------------
// CERTIFICATIONS - files live in /public/certificates
// ---------------------------------------------------------------
const certificates = [
  {
    id: "alx-se",
    issuer: "ALX · SOFTWARE ENGINEERING",
    title: "ALX Software Engineering",
    description:
      "A 12-month ALX Software Engineering programme with a specialization in back-end development.",
    issued: "Issued 15 March 2024",
    image: "/certificates/alx-software-engineering-thumb.webp",
    alt: "ALX Software Engineering certificate of completion with a back-end specialization, awarded to Philip Emeka Onyejekwe.",
    file: "/certificates/alx-software-engineering-certificate.jpg",
    verify: "https://savanna.alxafrica.com/certificates/B9zSFfNpe5",
  },
  {
    id: "alx-cyber",
    issuer: "ALX · CYBERSECURITY",
    title: "ALX Cybersecurity",
    description:
      "A 13-week ALX programme in cybersecurity, completed with a certificate of completion.",
    issued: "Issued 28 January 2026",
    image: "/certificates/alx-cybersecurity-thumb.webp",
    alt: "ALX Cybersecurity certificate of completion awarded to Philip Emeka Onyejekwe.",
    file: "/certificates/alx-cybersecurity-certificate.png",
    verify: "https://savanna.alxafrica.com/certificates/GXPm5NBchR",
  },
  {
    id: "cisco-nss",
    issuer: "CISCO NETWORKING ACADEMY",
    title: "Network Support and Security",
    description:
      "Troubleshooting and help desk practices, common endpoint threats and attacks, and configuring secure user access on a network.",
    issued: "Issued 16 August 2024",
    image: "/certificates/cisco-nss-thumb.webp",
    alt: "Cisco Networking Academy certificate for the Network Support and Security course.",
    file: "/certificates/cisco-network-support-and-security.pdf",
    verify: "https://www.credly.com/badges/a6daf944-bee3-40de-a071-3cb83c307cd1",
  },
  {
    id: "cisco-ctm",
    issuer: "CISCO NETWORKING ACADEMY",
    title: "Cyber Threat Management",
    description:
      "Vulnerability assessment, risk management, incident response, disaster recovery and the basics of forensic investigation.",
    issued: "Issued 16 August 2024",
    image: "/certificates/cisco-ctm-thumb.webp",
    alt: "Cisco Networking Academy certificate for the Cyber Threat Management course.",
    file: "/certificates/cisco-cyber-threat-management.pdf",
    verify: "https://www.credly.com/badges/6c37bf23-b76e-461e-b6f5-6a25709f004c",
  },
];

// ---------------------------------------------------------------
// SERVICES - the four connected areas (shown to employers and clients)
// ---------------------------------------------------------------
const services = [
  {
    index: "01",
    title: "Software & Backend Development",
    description: "Web applications built from the front end to the server and database.",
    items: ["Backend development", "React and Node.js", "APIs and databases", "Software applications"],
    subject: "Software development project",
  },
  {
    index: "02",
    title: "Cybersecurity & Network Defense",
    description: "Security learning and awareness, always in authorised environments.",
    items: ["Ethical hacking", "Network security", "Endpoint security", "Security awareness"],
    subject: "Cybersecurity enquiry",
  },
  {
    index: "03",
    title: "Digital Design & Branding",
    description: "Visual identities that look consistent across every touchpoint.",
    items: ["Logo design", "Brand identity", "Graphic design", "Social media designs"],
    subject: "Design and branding project",
  },
  {
    index: "04",
    title: "IT Support & Technical Solutions",
    description: "Entry-level help desk and network support, backed by Cisco training.",
    items: ["Computer troubleshooting", "Basic technical support", "Network configuration", "IT assistance"],
    subject: "IT support enquiry",
  },
];

// ---------------------------------------------------------------
// SKILLS - grouped by the same four areas
// ---------------------------------------------------------------
const skillGroups = [
  {
    title: "Software",
    skills: ["JavaScript", "Python", "React", "Node.js", "MySQL", "APIs", "Git & GitHub", "Linux"],
  },
  {
    title: "Cybersecurity",
    skills: ["Ethical hacking", "Network security", "Endpoint security", "Threat management", "Kali Linux", "Security awareness"],
  },
  {
    title: "Design",
    skills: ["Logo design", "Brand identity", "Poster design", "Social media design", "AI-assisted design"],
  },
  {
    title: "IT support",
    skills: ["Troubleshooting", "Help desk practices", "Network configuration", "Secure user access"],
  },
];

const technologies = [
  { name: "JavaScript", mark: "JS", className: "javascript" },
  { name: "Python", mark: "Py", className: "python" },
  { name: "React", mark: "R", className: "react" },
  { name: "Node.js", mark: "N", className: "node" },
  { name: "GitHub", mark: "GH", className: "github" },
  { name: "MySQL", mark: "My", className: "mysql" },
  { name: "HTML & CSS", mark: "</>", className: "htmlcss" },
  { name: "Kali Linux", mark: "K", className: "kali" },
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
            <small>TECHNOLOGY · SECURITY · CREATIVITY</small>
          </span>
        </a>

        <nav className={menuOpen ? "navigation open" : "navigation"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#certifications" onClick={closeMenu}>Certifications</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a
            className="nav-contact"
            href={profileLinks.cv}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            View CV <span>↗</span>
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
              TECHNOLOGY MEETS CREATIVITY.
            </div>

            <p className="eyebrow">WELCOME TO MY DIGITAL SPACE</p>

            <h1>
              I AM
              <br />
              <span className="outline-text">DON</span>
              <span className="green-text">-PHILIP</span>
            </h1>

            <h2>
              Building. Securing.
              <br />
              <span>Designing.</span>
            </h2>

            <p className="hero-description">
              I'm Onyejekwe Philip Emeka, a technology professional focused
              on software development, cybersecurity, IT solutions and
              digital design.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore My Work <span>↗</span>
              </a>
              <a className="button button-outline" href="#about">
                Discover My Story
              </a>
              <a
                className="button button-outline"
                href={profileLinks.cv}
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV <span>↗</span>
              </a>
            </div>

            <div className="hero-numbers">
              <div>
                <strong>{String(services.length).padStart(2, "0")}</strong>
                <span>FOCUS AREAS</span>
              </div>
              <div>
                <strong>{String(projects.length + webProjects.length).padStart(2, "0")}</strong>
                <span>PROJECTS</span>
              </div>
              <div>
                <strong>{String(certificates.length).padStart(2, "0")}</strong>
                <span>CERTIFICATES</span>
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
                  src="/don-philip.webp"
                  alt="Portrait of Don-Philip"
                  width="900"
                  height="1200"
                  fetchPriority="high"
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
          <span>SOFTWARE & BACKEND</span>
          <i>✳</i>
          <span>CYBERSECURITY</span>
          <i>✳</i>
          <span>DIGITAL DESIGN</span>
          <i>✳</i>
          <span>IT SOLUTIONS</span>
        </section>

        {/* ABOUT */}
        <section className="section-wrap about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>
              Technology meets
              <span className="green-text"> creativity.</span>
            </h2>
          </div>

          <div className="about-layout">
            <div className="about-main">
              <p className="large-copy">
                I'm <strong>Onyejekwe Philip Emeka</strong>, also known as
                <strong className="green-text"> Don-Philip.</strong>
              </p>

              <p>
                I'm a technology professional focused on software
                development, cybersecurity, IT solutions and digital design.
                I build web applications, turn ideas into brand identities
                and visual concepts, and enjoy understanding how systems work
                and how to protect them.
              </p>

              <p>
                I'm an ALX Software Engineering graduate with a back-end
                specialization, and I'm studying Computer Science at the
                University of the People. On the security side, I've
                completed ALX Cybersecurity and Cisco Networking Academy
                courses in network support and security and cyber threat
                management, and I practise in a Kali Linux lab, always in
                authorised environments.
              </p>

              <p>
                Before moving into technology I worked as a class teacher and
                a company secretary, which taught me communication, accuracy
                and responsibility.
              </p>

              <a className="text-link" href="#contact">
                Let's connect <span>↗</span>
              </a>
            </div>

            <div className="about-side">
              <div className="info-card">
                <span className="card-index">A / 01</span>
                <h3>Technical learning</h3>
                <p>Programming, backend development and digital systems.</p>
              </div>

              <div className="info-card">
                <span className="card-index">B / 02</span>
                <h3>Security mindset</h3>
                <p>Ethical hacking, awareness and defensive security.</p>
              </div>

              <div className="info-card">
                <span className="card-index">C / 03</span>
                <h3>Creative thinking</h3>
                <p>Design, identity, communication and visual storytelling.</p>
              </div>

              <div className="info-card">
                <span className="card-index">D / 04</span>
                <h3>Problem solving</h3>
                <p>Troubleshooting, help desk practices and secure network support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section-wrap services-section" id="services">
          <div className="section-heading">
            <p className="eyebrow">02 / SERVICES</p>
            <h2>
              Technology &amp; <span className="green-text">digital solutions.</span>
            </h2>
          </div>

          <p className="section-intro">
            One person, four connected areas. Whether you're hiring or have a
            project in mind, here is where I can help.
          </p>

          <div className="service-grid">
            {services.map((service) => (
              <div className="info-card service-card" key={service.title}>
                <span className="card-index">{service.index}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-list">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  className="text-link"
                  href={`mailto:${contact.email}?subject=${encodeURIComponent(service.subject)}`}
                >
                  Discuss this <span>↗</span>
                </a>
              </div>
            ))}
          </div>

          <div className="services-cta">
            <a
              className="button button-primary"
              href={`mailto:${contact.email}?subject=${encodeURIComponent("Project enquiry")}`}
            >
              Start a project <span>↗</span>
            </a>
            <a
              className="button button-outline"
              href={profileLinks.cv}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hiring? View my CV <span>↗</span>
            </a>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section-wrap work-section" id="projects">
          <div className="section-heading heading-row">
            <div>
              <p className="eyebrow">03 / PROJECTS</p>
              <h2>
                Work you can <span className="green-text">see.</span>
              </h2>
            </div>
            <span className="section-side-note">IDEAS MADE VISIBLE / 2026</span>
          </div>

          <p className="section-intro">
            Software I've built and brand identity projects with full case
            studies. Learning labs and concept projects are labelled as such.
          </p>

          <h3 className="project-group-title">
            <span>01</span> Software &amp; web
          </h3>
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

          <h3 className="project-group-title">
            <span>02</span> Design &amp; branding
          </h3>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <a
                  className="project-art project-art-image"
                  href={project.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open the ${project.title} case study (PDF)`}
                >
                  <img src={project.image} alt={project.alt} loading="lazy" />
                </a>

                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a
                    className="project-link"
                    href={project.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View case study (PDF) <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="concept-disclaimer">
            The brand projects are personal design concepts created for
            portfolio development, not commissioned client projects.
          </p>
        </section>

        {/* SKILLS */}
        <section className="software-section" id="skills">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">04 / TECHNICAL SKILLS</p>
              <h2>
                Skills across <span className="green-text">the stack.</span>
              </h2>
            </div>

            <div className="software-layout">
              <div className="software-copy">
                <p className="large-copy">
                  Turning logic into
                  <span className="green-text"> digital solutions.</span>
                </p>
                <p>
                  I build web applications with a back-end focus, and I keep
                  growing across security, design and IT support. These are
                  the tools and skills I work with.
                </p>
                <a className="text-link" href="#contact">
                  Discuss a project <span>↗</span>
                </a>
              </div>

              <div className="technology-panel">
                <div className="panel-top">
                  <span>TECH STACK / TOOLKIT</span>
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
                    {"\n"}    <span className="code-yellow">"Secure"</span>,
                    {"\n"}    <span className="code-yellow">"Design"</span>,
                    {"\n"}    <span className="code-yellow">"Support"</span>
                    {"\n"}  ]
                    {"\n"}{"}"};
                  </pre>
                </div>
              </div>
            </div>

            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="tag-list">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CYBERSECURITY */}
        <section className="section-wrap cyber-section" id="cybersecurity">
          <div className="section-heading">
            <p className="eyebrow">05 / CYBERSECURITY</p>
            <h2>
              Think like a defender.
              <span className="green-text"> Stay ethical.</span>
            </h2>
          </div>

          <div className="cyber-layout">
            <div className="cyber-visual">
              <div className="cyber-ring ring-one" />
              <div className="cyber-ring ring-two" />
              <img
                className="cyber-logo"
                src="/logos/shield-keyhole-cyan.svg"
                alt="Cyan shield with a keyhole, a cybersecurity emblem"
              />
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

              <a
                className="text-link cyber-brand-link"
                href="/work/dons-lab-ai-assisted-design.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                See the DON'S LAB cybersecurity brand <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="education-section" id="certifications">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">06 / CERTIFICATIONS &amp; LEARNING</p>
              <h2>
                Always learning.
                <span className="green-text"> Always evolving.</span>
              </h2>
            </div>

            <div className="education-grid">
              <div className="education-card">
                <div className="edu-logo">
                  <img src="/logos/uopeople-wordmark.svg" alt="University of the People" />
                </div>
                <span>01 / UNIVERSITY</span>
                <h3>University of the People</h3>
                <p>Computer Science student</p>
              </div>
              <div className="education-card">
                <div className="edu-logo">
                  <img src="/logos/alx-logo.png" alt="ALX" />
                </div>
                <span>02 / SOFTWARE</span>
                <h3>ALX Africa</h3>
                <p>Certified Backend Software Engineer</p>
              </div>
              <div className="education-card">
                <div className="edu-logo">
                  <img src="/logos/cisco-networking-academy-logo.png" alt="Cisco Networking Academy" />
                </div>
                <span>03 / SECURITY</span>
                <h3>Cisco Academy</h3>
                <p>Cybersecurity and ethical hacking studies</p>
              </div>
            </div>

            <div className="cert-block">
              <p className="eyebrow">CERTIFICATIONS</p>
              <h3 className="web-projects-title">
                Learning you can <span className="green-text">verify.</span>
              </h3>

              <div className="cert-grid">
                {certificates.map((cert) => (
                  <article className="project-card" key={cert.id}>
                    <a
                      className="project-art project-art-image"
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open the ${cert.title} certificate`}
                    >
                      <img src={cert.image} alt={cert.alt} loading="lazy" />
                    </a>
                    <div className="project-info">
                      <span className="project-category">{cert.issuer}</span>
                      <h3>{cert.title}</h3>
                      <p>{cert.description}</p>
                      <span className="cert-date">{cert.issued}</span>
                      <div className="cert-actions">
                        <a
                          className="project-link"
                          href={cert.file}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View certificate <span>↗</span>
                        </a>
                        <a
                          className="project-link"
                          href={cert.verify}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Verify <span>↗</span>
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CV */}
        <section className="section-wrap cv-section" id="cv">
          <div className="cv-card">
            <div className="cv-copy">
              <p className="eyebrow">07 / CURRICULUM VITAE</p>
              <h2>
                My CV, <span className="green-text">one page.</span>
              </h2>
              <p>
                Experience, education, certifications and skills in a single
                document, ready for recruiters and hiring managers.
              </p>
            </div>
            <div className="cv-actions">
              <a
                className="button button-primary"
                href={profileLinks.cv}
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV <span>↗</span>
              </a>
              <a
                className="button button-outline"
                href={profileLinks.cv}
                download="Onyejekwe_Philip_Emeka_CV.pdf"
              >
                Download PDF <span>↓</span>
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section-wrap contact-section" id="contact">
          <div className="contact-card">
            <div className="contact-decoration">DP</div>
            <p className="eyebrow">08 / LET'S CONNECT</p>
            <h2>
              Have an idea?
              <br />
              <span className="green-text">Let's make it happen.</span>
            </h2>
            <p>
              Hiring, or have a project in mind? I'm open to full-time roles
              and freelance work, and I'd be glad to connect.
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
            <div className="contact-links">
              <a href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={profileLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={profileLinks.cv} target="_blank" rel="noopener noreferrer">CV</a>
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
        <p>Technology · Security · Creativity</p>
        <div className="footer-links">
          <a href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profileLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profileLinks.cv} target="_blank" rel="noopener noreferrer">CV</a>
        </div>
        <span>© 2026 DON-PHILIP. Designed and developed by Onyejekwe Philip Emeka.</span>
      </footer>
    </div>
  );
}

export default App;