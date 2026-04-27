"use client";
import { useState } from "react";

const skills = [
  {
    icon: "⚛️",
    title: "Frontend",
    tags: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    icon: "⚡",
    title: "JavaScript",
    tags: ["ES6+", "TypeScript", "Async/Await", "Promises", "Functional Programming"],
  },
  {
    icon: "🔄",
    title: "State Management",
    tags: ["Redux", "Context API", "Pinia", "TanStack Query"],
  },
  {
    icon: "🛠️",
    title: "Build Tools",
    tags: ["Webpack", "Babel", "Vite", "npm/yarn", "CI/CD"],
  },
  {
    icon: "🔗",
    title: "APIs & Backend",
    tags: ["RESTful APIs", "Node.js", "Express.js", "Laravel", "PHP", "Microservices"],
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    tags: ["AWS EC2", "S3", "RDS", "Vercel", "DigitalOcean", "Git"],
  },
  {
    icon: "🗄️",
    title: "Databases",
    tags: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Meilisearch"],
  },
  {
    icon: "🛍️",
    title: "CMS & E-Commerce",
    tags: ["WordPress", "WooCommerce", "Shopify", "FilamentPHP"],
  },
];

const experience = [
  {
    period: "05/2022 — 12/2025",
    role: "Senior Full Stack Developer",
    company: "Life Pharmacy",
    location: "Dubai, UAE",
    bullets: [
      "Built React.js analytics dashboards monitoring appointments, customer engagement, and operational metrics in real time.",
      "Developed the customer-facing storefront in Nuxt.js (Nuxt 3 / Vue 3) with fully responsive design across all devices.",
      "Implemented complex state management using Pinia and API performance optimisation with TanStack Query.",
      "Integrated Meilisearch for fast, typo-tolerant product search, improving search response by ~60%.",
      "Designed and built a custom payment gateway integrating multiple UAE banks via REST APIs.",
      "Applied frontend optimisation techniques (code splitting, lazy loading, caching) achieving up to 40% performance improvement.",
    ],
  },
  {
    period: "09/2021 — 05/2022",
    role: "Senior Full Stack Developer / Team Lead",
    company: "Upbeat Digital",
    location: "Abu Dhabi, UAE",
    bullets: [
      "Led frontend development of Riadaland — an online sports booking platform — using Vue.js & Laravel.",
      "Designed responsive UI components and booking interfaces; implemented real-time data sync via REST APIs.",
      "Managed team delivery, code reviews, and maintained high coding standards and UX best practices.",
      "Deployed and maintained services on AWS (EC2, RDS, S3) with CI/CD pipelines.",
    ],
  },
  {
    period: "12/2019 — 09/2021",
    role: "Web Developer",
    company: "Growide Digital Advertisements",
    location: "Abu Dhabi, UAE",
    bullets: [
      "Developed and maintained e-commerce platforms using React, WordPress, Shopify, and Laravel.",
      "Built responsive UI — product pages, sliders, checkout flows — optimised for performance and conversion.",
      "Improved page performance through Webpack optimisation, code splitting, lazy loading, and asset minification.",
    ],
  },
  {
    period: "05/2018 — 08/2019",
    role: "Software Engineer",
    company: "Pinocks Technologies Pvt. Ltd.",
    location: "Kerala, India",
    bullets: [
      "Built custom web applications and RESTful APIs for startups using Laravel and JavaScript (ES6+).",
      "Designed UI/UX prototypes in Figma; collaborated with cross-functional teams throughout the full project lifecycle.",
    ],
  },
  {
    period: "05/2016 — 05/2018",
    role: "Software Engineer",
    company: "Scientia Innovation Pvt. Ltd.",
    location: "Kerala, India",
    bullets: [
      "Developed and maintained ParentEye.in, an e-learning CRM platform used by 100+ schools.",
      "Built dashboards, reports, and academic modules; improved frontend usability and application performance.",
    ],
  },
];

const projects = [
  {
    tag: "Current Project · 2026",
    name: "Online Order System – Microservices",
    desc: "A scalable online ordering platform built with a microservices-based architecture. Developed RESTful APIs for order management with async processing, focused on scalability and modular service communication.",
    stack: ["Node.js", "Express.js", "Next.js", "React", "Microservices", "REST APIs"],
  },
  {
    tag: "E-Commerce Platform",
    name: "Life Pharmacy E-Commerce",
    desc: "Large-scale pharmacy e-commerce platform serving thousands of daily users. Features real-time product search, medical centre booking, analytics dashboards, and a custom UAE payment gateway.",
    stack: ["Nuxt.js 3", "Vue 3", "Pinia", "TanStack Query", "Meilisearch", "Laravel", "AWS"],
  },
  {
    tag: "Booking Platform",
    name: "Riadaland Sports Booking",
    desc: "Online sports facility booking platform with real-time availability, dynamic booking interfaces, and operational management dashboards for Upbeat Digital.",
    stack: ["Vue.js", "Laravel", "REST APIs", "AWS RDS", "Amazon S3"],
  },
  {
    tag: "Medical CRM",
    name: "Life Medical Centre Website",
    desc: "SEO-optimised medical centre website with appointment booking integrated into Life Pharmacy's ecosystem. Built with Laravel and Livewire 3, managed via FilamentPHP admin.",
    stack: ["Laravel", "Livewire 3", "FilamentPHP", "SEO", "MySQL"],
  },
  {
    tag: "E-Learning CRM",
    name: "ParentEye.in",
    desc: "E-learning CRM platform deployed across 100+ schools, featuring academic dashboards, reports, attendance tracking, and parent communication modules.",
    stack: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
  },
  {
    tag: "Business Website",
    name: "AWS-Deployed Business Site",
    desc: "SEO-optimised business website deployed on AWS EC2 with RDS MySQL, Google Analytics integration, server configuration and hosting environment management.",
    stack: ["Laravel", "AWS EC2", "RDS", "MySQL", "Google Analytics"],
  },
];

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const mailto = `mailto:mfayaz7@gmail.com?subject=Opportunity for ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.name} (${formData.email})`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <div className="nav-logo">MF</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact" className="nav-cta">Hire Me</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="container hero-content">
          <div className="hero-eyebrow">Available for work · Dubai, UAE</div>
          <h1 className="hero-name">
            Muhammed<br /><span>Fayaz</span>
          </h1>
          <p className="hero-title">Senior Frontend Developer · React.js & JavaScript Expert</p>
          <p className="hero-desc">
            Building high-performance web applications for 9+ years. Specialised in React.js, Next.js,
            and Vue.js with a proven track record of delivering scalable e-commerce platforms,
            booking systems, and analytics dashboards.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Get in Touch →</a>
            <a href="#experience" className="btn-outline">View Experience</a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-num">9+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div>
              <div className="stat-num">40%</div>
              <div className="stat-label">Performance Gains</div>
            </div>
            <div>
              <div className="stat-num">100+</div>
              <div className="stat-label">Schools Served</div>
            </div>
            <div>
              <div className="stat-num">5</div>
              <div className="stat-label">Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="container">
          <div className="section-label">01 · About</div>
          <h2 className="section-title">Who I Am</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I&apos;m a Senior Frontend Developer based in Dubai with over 9 years of experience turning
                complex requirements into fast, beautiful, and reliable web applications.
              </p>
              <p>
                My expertise spans the full frontend stack — from architecting React.js and Nuxt.js
                applications with robust state management, to optimising Webpack builds and integrating
                payment gateways for production e-commerce platforms.
              </p>
              <p>
                I&apos;ve led teams, mentored developers, and shipped products used by thousands of daily
                users across the UAE. I bring both technical depth and an eye for UX — I don&apos;t just
                build it, I build it right.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🎓</div>
                  <div className="highlight-text">
                    <strong>B.Tech Computer Science & Engineering</strong>
                    Kannur University, India · 2011–2015
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🚗</div>
                  <div className="highlight-text">
                    <strong>UAE Light Vehicle Driving License</strong>
                    Valid UAE driving license holder
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">🌐</div>
                  <div className="highlight-text">
                    <strong>English · Malayalam · Arabic</strong>
                    Advanced · Native · Reading & Writing
                  </div>
                </div>
              </div>
            </div>
            <div className="about-card-side">
              <div className="info-card">
                <div className="info-card-title">Quick Info</div>
                <div className="info-row">
                  <span className="info-row-key">Location</span>
                  <span className="info-row-val">Dubai, UAE</span>
                </div>
                <div className="info-row">
                  <span className="info-row-key">Nationality</span>
                  <span className="info-row-val">Indian</span>
                </div>
                <div className="info-row">
                  <span className="info-row-key">Visa Status</span>
                  <span className="info-row-val">Visit Visa</span>
                </div>
                <div className="info-row">
                  <span className="info-row-key">Work Setting</span>
                  <span className="info-row-val">On-site / Hybrid</span>
                </div>
                <div className="info-row">
                  <span className="info-row-key">Experience</span>
                  <span className="info-row-val">9+ Years</span>
                </div>
                <div className="info-row">
                  <span className="info-row-key">Availability</span>
                  <span className="info-row-val">
                    <span className="avail-badge">
                      <span className="avail-dot" />
                      Immediately
                    </span>
                  </span>
                </div>
              </div>
              <div className="info-card">
                <div className="info-card-title">Connect</div>
                <div className="info-row">
                  <span className="info-row-key">Email</span>
                  <span className="info-row-val">mfayaz7@gmail.com</span>
                </div>
                <div className="info-row">
                  <span className="info-row-key">Phone</span>
                  <span className="info-row-val">+971 50 157 4001</span>
                </div>
                <div className="info-row">
                  <span className="info-row-key">LinkedIn</span>
                  <a href="https://linkedin.com/in/muhammedfayaz" target="_blank" rel="noopener noreferrer" className="info-row-val" style={{color:"var(--gold)"}}>muhammedfayaz</a>
                </div>
                <div className="info-row">
                  <span className="info-row-key">GitHub</span>
                  <a href="https://github.com/muhammedfayazp" target="_blank" rel="noopener noreferrer" className="info-row-val" style={{color:"var(--gold)"}}>muhammedfayazp</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills-bg">
        <div className="container">
          <div className="section-label">02 · Skills</div>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-sub">A broad and deep toolkit built across 9+ years of professional development.</p>
          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s.title} className="skill-card">
                <div className="skill-card-icon">{s.icon}</div>
                <div className="skill-card-title">{s.title}</div>
                <div className="skill-tags">
                  {s.tags.map((t) => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="container">
          <div className="section-label">03 · Experience</div>
          <h2 className="section-title">Work History</h2>
          <p className="section-sub">9 years across startups, agencies, and large-scale platforms in India and the UAE.</p>
          <div className="exp-timeline">
            {experience.map((exp) => (
              <div key={exp.role + exp.company} className="exp-item">
                <div className="exp-dot" />
                <div className="exp-period">{exp.period}</div>
                <div className="exp-role">{exp.role}</div>
                <div className="exp-company">
                  {exp.company} <span>· {exp.location}</span>
                </div>
                <ul className="exp-bullets">
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects-bg">
        <div className="container">
          <div className="section-label">04 · Projects</div>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-sub">Real-world systems built and shipped across multiple industries.</p>
          <div className="projects-grid">
            {projects.map((p) => (
              <div key={p.name} className="project-card">
                <div className="project-tag">{p.tag}</div>
                <div className="project-name">{p.name}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="container">
          <div className="section-label">05 · Contact</div>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-sub">Available immediately for on-site roles in Dubai and Abu Dhabi.</p>
          <div className="contact-wrapper">
            <div className="contact-info">
              <a href="mailto:mfayaz7@gmail.com" className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-detail">
                  <span className="contact-label">Email</span>
                  <span className="contact-val">mfayaz7@gmail.com</span>
                </div>
              </a>
              <a href="tel:+971501574001" className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-detail">
                  <span className="contact-label">Phone</span>
                  <span className="contact-val">+971 50 157 4001</span>
                </div>
              </a>
              <a href="https://linkedin.com/in/muhammedfayaz" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon">💼</div>
                <div className="contact-detail">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-val">linkedin.com/in/muhammedfayaz</span>
                </div>
              </a>
              <a href="https://github.com/muhammedfayazp" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon">💻</div>
                <div className="contact-detail">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-val">github.com/muhammedfayazp</span>
                </div>
              </a>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about the opportunity..."
                  value={formData.message}
                  onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  required
                />
              </div>
              <button type="submit" className="form-submit">
                {sent ? "✓ Opening Email Client..." : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-inner">
            <div className="footer-copy">
              © 2026 Muhammed Fayaz · Built with Next.js & deployed on Vercel
            </div>
            <div className="social-links">
              <a href="https://linkedin.com/in/muhammedfayaz" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
              <a href="https://github.com/muhammedfayazp" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              <a href="mailto:mfayaz7@gmail.com" className="social-link">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
