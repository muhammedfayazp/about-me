"use client";
import { useState, useEffect, useRef } from "react";

const skills = [
  { icon: "⚛️", title: "Frontend", tags: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
  { icon: "⚡", title: "JavaScript", tags: ["ES6+", "TypeScript", "Async/Await", "Promises", "Functional Programming"] },
  { icon: "🔄", title: "State Management", tags: ["Redux", "Context API", "Pinia", "TanStack Query"] },
  { icon: "🛠️", title: "Build Tools", tags: ["Webpack", "Babel", "Vite", "npm / yarn", "CI/CD Pipelines"] },
  { icon: "🔗", title: "APIs & Backend", tags: ["RESTful APIs", "Node.js", "Express.js", "Laravel", "PHP", "Microservices"] },
  { icon: "☁️", title: "Cloud & DevOps", tags: ["AWS EC2", "S3", "RDS", "Vercel", "DigitalOcean", "Git"] },
  { icon: "🗄️", title: "Databases", tags: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Meilisearch"] },
  { icon: "🛍️", title: "CMS & E-Commerce", tags: ["WordPress", "WooCommerce", "Shopify", "FilamentPHP"] },
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
      "Designed and built a custom payment gateway integrating multiple UAE banks via REST APIs with secure tokenisation.",
      "Applied frontend optimisation techniques (code splitting, lazy loading, caching) achieving up to 40% performance improvement.",
      "Collaborated with designers, backend engineers, and QA teams in an Agile/Scrum workflow.",
    ],
  },
  {
    period: "09/2021 — 05/2022",
    role: "Senior Developer / Team Lead",
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
    company: "Growide Digital",
    location: "Abu Dhabi, UAE",
    bullets: [
      "Developed and maintained e-commerce platforms using React, WordPress, Shopify, and Laravel.",
      "Built responsive UI — product pages, sliders, checkout flows — optimised for performance and conversion.",
      "Improved page performance through Webpack optimisation, code splitting, lazy loading, and asset minification.",
      "Deployed applications on DigitalOcean and handled server configuration and post-launch support.",
    ],
  },
  {
    period: "05/2018 — 08/2019",
    role: "Software Engineer",
    company: "Pinocks Technologies",
    location: "Kerala, India",
    bullets: [
      "Built custom web applications and RESTful APIs for startups using Laravel and JavaScript (ES6+).",
      "Designed UI/UX prototypes in Figma; collaborated with cross-functional teams throughout the full lifecycle.",
    ],
  },
  {
    period: "05/2016 — 05/2018",
    role: "Software Engineer",
    company: "Scientia Innovation",
    location: "Kerala, India",
    bullets: [
      "Developed and maintained ParentEye.in, an e-learning CRM platform used by 100+ schools.",
      "Built dashboards, reports, and academic modules; improved frontend usability and application performance.",
    ],
  },
];

const projects = [
  { tag: "Current · 2026", name: "Online Order System – Microservices", desc: "Scalable ordering platform built with microservices architecture. Node.js, Express.js, and Next.js with async processing, modular service communication, and performance-first design.", stack: ["Node.js", "Express.js", "Next.js", "React", "Microservices", "REST APIs"] },
  { tag: "E-Commerce", name: "Life Pharmacy Platform", desc: "Large-scale pharmacy e-commerce serving thousands of daily users. Real-time product search, medical centre booking, analytics dashboards, and a custom UAE multi-bank payment gateway.", stack: ["Nuxt.js 3", "Vue 3", "Pinia", "TanStack Query", "Meilisearch", "Laravel", "AWS"] },
  { tag: "Booking Platform", name: "Riadaland Sports Booking", desc: "Online sports facility booking platform with real-time availability, dynamic booking interfaces, and operational dashboards built for Upbeat Digital in Abu Dhabi.", stack: ["Vue.js", "Laravel", "REST APIs", "AWS RDS", "S3"] },
  { tag: "Medical CRM", name: "Life Medical Centre Website", desc: "SEO-optimised medical website with appointment booking integrated into Life Pharmacy's ecosystem, managed via FilamentPHP admin dashboard.", stack: ["Laravel", "Livewire 3", "FilamentPHP", "MySQL"] },
  { tag: "E-Learning CRM", name: "ParentEye.in", desc: "E-learning CRM deployed across 100+ schools with academic dashboards, attendance tracking, reports, and parent communication modules.", stack: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"] },
  { tag: "Business Website", name: "AWS-Deployed Business Site", desc: "SEO-optimised business website on AWS EC2 with RDS MySQL, Google Analytics integration, and full server configuration and hosting management.", stack: ["Laravel", "AWS EC2", "RDS", "MySQL", "Google Analytics"] },
];

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 70; i++) {
      particles.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, size: Math.random() * 1.5 + 0.3, alpha: Math.random() * 0.4 + 0.05 });
    }
    let raf: number;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.alpha})`;
        ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(201,168,76,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }
    draw();
    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);
  return <canvas ref={canvasRef} id="particles-canvas" />;
}

export default function Home() {
  const [activeExp, setActiveExp] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = `mailto:mfayaz7@gmail.com?subject=Opportunity from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.name} (${form.email})`;
    setSent(true);
  }

  return (
    <>
      {/* NAV */}
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="nav-inner">
          <div className="nav-logo">MF.</div>
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
        <ParticleCanvas />
        <div className="hero-orb orb1" />
        <div className="hero-orb orb2" />
        <div className="container hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available immediately · Dubai, UAE
          </div>
          <h1 className="hero-name">
            Muhammed<br />
            <span className="line2">Fayaz</span>
          </h1>
          <p className="hero-role">
            <strong>Senior Frontend Developer</strong> · React.js &amp; Modern JavaScript Expert
          </p>
          <p className="hero-desc">
            Building high-performance web applications for 9+ years. Specialised in React.js,
            Next.js, and Vue.js — delivering scalable e-commerce platforms, booking systems,
            and analytics dashboards across the UAE.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-gold">Get in Touch →</a>
            <a href="#experience" className="btn-ghost">View Experience</a>
          </div>
          <div className="hero-stats">
            <div className="stat"><div className="stat-num">9+</div><div className="stat-label">Years of experience</div></div>
            <div className="stat"><div className="stat-num">40%</div><div className="stat-label">Performance gains delivered</div></div>
            <div className="stat"><div className="stat-num">100+</div><div className="stat-label">Schools on ParentEye</div></div>
            <div className="stat"><div className="stat-num">5</div><div className="stat-label">Companies across UAE & India</div></div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-eyebrow reveal">01 · About me</div>
          <h2 className="section-title reveal">Who I Am</h2>
          <div className="about-grid">
            <div className="about-text reveal">
              <p>I&apos;m a Senior Frontend Developer based in Dubai with 9+ years of experience turning complex requirements into fast, beautiful, and reliable web applications.</p>
              <p>My core expertise is React.js and the modern JavaScript ecosystem — from architecting Nuxt.js and Next.js applications with robust state management (Redux, Pinia, TanStack Query), to optimising Webpack builds and integrating payment gateways for production e-commerce platforms serving thousands of daily users.</p>
              <p>I&apos;ve led teams, mentored developers, and shipped products across the UAE and India. I bring both technical depth and an eye for UX — I don&apos;t just build it, I build it right.</p>
              <div className="perks">
                <div className="perk reveal reveal-delay-1"><div className="perk-icon">🎓</div><div className="perk-text"><strong>B.Tech Computer Science & Engineering</strong>Kannur University, India · 2011–2015</div></div>
                <div className="perk reveal reveal-delay-2"><div className="perk-icon">🚗</div><div className="perk-text"><strong>UAE Light Vehicle Driving License</strong>Valid driving license holder</div></div>
                <div className="perk reveal reveal-delay-3"><div className="perk-icon">🌐</div><div className="perk-text"><strong>English · Malayalam · Arabic</strong>Advanced · Native · Reading & Writing</div></div>
              </div>
            </div>
            <div className="info-cards reveal">
              <div className="glass-card">
                <div className="card-label">Quick Info</div>
                <div className="info-row"><span className="info-key">Location</span><span className="info-val">Dubai, UAE</span></div>
                <div className="info-row"><span className="info-key">Nationality</span><span className="info-val">Indian</span></div>
                <div className="info-row"><span className="info-key">Visa Status</span><span className="info-val">Visit Visa</span></div>
                <div className="info-row"><span className="info-key">Work Setting</span><span className="info-val">On-site / Hybrid</span></div>
                <div className="info-row"><span className="info-key">Experience</span><span className="info-val">9+ Years</span></div>
                <div className="info-row"><span className="info-key">Availability</span><span className="info-val"><span className="avail-pill"><span className="avail-pip" />Immediately</span></span></div>
              </div>
              <div className="glass-card">
                <div className="card-label">Connect</div>
                <div className="info-row"><span className="info-key">Email</span><span className="info-val">mfayaz7@gmail.com</span></div>
                <div className="info-row"><span className="info-key">Phone</span><span className="info-val">+971 50 157 4001</span></div>
                <div className="info-row"><span className="info-key">LinkedIn</span><a href="https://linkedin.com/in/muhammedfayaz" target="_blank" rel="noopener noreferrer" style={{color:"var(--gold)", fontWeight: 500, fontSize: "0.875rem"}}>muhammedfayaz</a></div>
                <div className="info-row"><span className="info-key">GitHub</span><a href="https://github.com/muhammedfayazp" target="_blank" rel="noopener noreferrer" style={{color:"var(--gold)", fontWeight: 500, fontSize: "0.875rem"}}>muhammedfayazp</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="skills-section">
        <div className="container">
          <div className="section-eyebrow reveal">02 · Skills</div>
          <h2 className="section-title reveal">Technical Expertise</h2>
          <p className="section-sub reveal">A broad and deep toolkit built across 9+ years of professional development.</p>
          <div className="skills-grid">
            {skills.map((s, i) => (
              <div key={s.title} className={`skill-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="skill-icon-wrap">{s.icon}</div>
                <div className="skill-title">{s.title}</div>
                <div className="tags">{s.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="exp-section">
        <div className="container">
          <div className="section-eyebrow reveal">03 · Experience</div>
          <h2 className="section-title reveal">Work History</h2>
          <p className="section-sub reveal">9 years across startups, agencies, and large-scale platforms in India and the UAE.</p>
          <div className="exp-layout">
            <nav className="exp-nav reveal">
              {experience.map((e, i) => (
                <div key={i} className={`exp-nav-item${activeExp === i ? " active" : ""}`} onClick={() => setActiveExp(i)}>
                  <div className="nav-company">{e.company}</div>
                  <div className="nav-period">{e.period}</div>
                </div>
              ))}
            </nav>
            <div className="exp-detail reveal">
              {experience.map((e, i) => (
                <div key={i} className={`exp-panel${activeExp === i ? " active" : ""}`}>
                  <div className="exp-header">
                    <div className="exp-role">{e.role}</div>
                    <div className="exp-meta">
                      <span className="exp-company-name">{e.company}</span>
                      <span className="exp-period-badge">{e.period}</span>
                      <span className="exp-location">· {e.location}</span>
                    </div>
                  </div>
                  <ul className="exp-bullets">
                    {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="container">
          <div className="section-eyebrow reveal">04 · Projects</div>
          <h2 className="section-title reveal">Featured Work</h2>
          <p className="section-sub reveal">Real-world systems built and shipped across multiple industries.</p>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div key={p.name} className={`project-card reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="project-eyebrow">{p.tag}</div>
                <div className="project-name">{p.name}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-stack">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-eyebrow reveal">05 · Contact</div>
          <h2 className="section-title reveal">Let&apos;s Work Together</h2>
          <p className="section-sub reveal">Available immediately for on-site roles in Dubai and Abu Dhabi.</p>
          <div className="contact-grid">
            <div className="contact-links reveal">
              <a href="mailto:mfayaz7@gmail.com" className="contact-link">
                <div className="contact-icon-wrap">✉️</div>
                <div><div className="contact-link-label">Email</div><div className="contact-link-val">mfayaz7@gmail.com</div></div>
              </a>
              <a href="tel:+971501574001" className="contact-link">
                <div className="contact-icon-wrap">📞</div>
                <div><div className="contact-link-label">Phone</div><div className="contact-link-val">+971 50 157 4001</div></div>
              </a>
              <a href="https://linkedin.com/in/muhammedfayaz" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-icon-wrap">💼</div>
                <div><div className="contact-link-label">LinkedIn</div><div className="contact-link-val">linkedin.com/in/muhammedfayaz</div></div>
              </a>
              <a href="https://github.com/muhammedfayazp" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="contact-icon-wrap">💻</div>
                <div><div className="contact-link-label">GitHub</div><div className="contact-link-val">github.com/muhammedfayazp</div></div>
              </a>
            </div>
            <form className="contact-form reveal" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field"><label>Your Name</label><input type="text" placeholder="John Smith" value={form.name} onChange={e => setForm(p => ({...p, name: e.target.value}))} required /></div>
                <div className="field"><label>Email Address</label><input type="email" placeholder="john@company.com" value={form.email} onChange={e => setForm(p => ({...p, email: e.target.value}))} required /></div>
              </div>
              <div className="field"><label>Message</label><textarea rows={5} placeholder="Tell me about the opportunity..." value={form.message} onChange={e => setForm(p => ({...p, message: e.target.value}))} required /></div>
              <button type="submit" className="btn-submit">{sent ? "✓ Opening email client..." : "Send Message →"}</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-inner">
            <div className="footer-logo">MF.</div>
            <div className="footer-copy">© 2026 Muhammed Fayaz · Built with Next.js & Vercel</div>
            <div className="footer-links">
              <a href="https://linkedin.com/in/muhammedfayaz" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              <a href="https://github.com/muhammedfayazp" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
              <a href="mailto:mfayaz7@gmail.com" className="footer-link">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
