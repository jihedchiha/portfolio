import './Projects.css';

const projects = [
  {
    id: 'smart-cane',
    category: 'IoT',
    categoryColor: 'cyan',
    title: 'Smart Cane',
    description:
      'An IoT-enabled navigation aid for visually impaired individuals. The concept integrates ultrasonic sensors for obstacle detection, a vibration motor for haptic feedback, and smartphone integration for real-time alerts. Currently in the design and prototyping phase.',
    status: 'In Development',
    statusColor: 'orange',
    tech: ['Arduino', 'ESP32', 'Ultrasonic Sensor', 'Vibration Motor', 'Bluetooth'],
    github: '#',
    demo: null,
  },
  {
    id: 'pulse-lab',
    category: 'Web App',
    categoryColor: 'purple',
    title: 'Pulse Lab EMS',
    description:
      'A full gym management application built self-taught with Angular (frontend) and Django REST Framework (backend). Features entity management, dashboards, and role-based access. Built independently alongside my studies — available on GitHub.',
    status: 'Completed',
    statusColor: 'green',
    tech: ['Angular', 'TypeScript', 'Django REST', 'Python', 'Bootstrap', 'REST API'],
    github: 'https://github.com/jihedBOUSSAID',
    demo: null,
  },
  {
    id: 'iot-lab',
    category: 'IoT',
    categoryColor: 'cyan',
    title: 'Electronics & IoT Lab',
    description:
      'A growing collection of mini-projects built with Arduino and ESP32 — sensor readings, LED control, temperature monitoring, servo motors, and more. A hands-on learning lab for embedded systems fundamentals.',
    status: 'Coming Soon',
    statusColor: 'gray',
    tech: ['Arduino Uno R3', 'ESP32', 'Sensors', 'Breadboard', 'Arduino IDE'],
    github: '#',
    demo: null,
  },
];

const statusColors = {
  orange: { bg: 'rgba(251, 146, 60, 0.1)', border: 'rgba(251, 146, 60, 0.3)', text: '#fb923c' },
  blue: { bg: 'rgba(96, 165, 250, 0.1)', border: 'rgba(96, 165, 250, 0.3)', text: '#60a5fa' },
  green: { bg: 'rgba(34, 197, 94, 0.1)', border: 'rgba(34, 197, 94, 0.3)', text: '#22c55e' },
  gray: { bg: 'rgba(148, 163, 184, 0.08)', border: 'rgba(148, 163, 184, 0.2)', text: '#94a3b8' },
};

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects-header">
          <span className="section-tag">// projects</span>
          <h2 className="section-title">
            My <span>Projects</span>
          </h2>
          <p className="section-subtitle">
            Things I&apos;m building and exploring — from IoT prototypes to web applications.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const sc = statusColors[project.statusColor];
            return (
              <article
                className={`project-card project-card--${project.categoryColor}`}
                key={project.id}
              >
                <div className="project-card-top">
                  <span className={`project-category project-category--${project.categoryColor}`}>
                    {project.category}
                  </span>
                  <span
                    className="project-status"
                    style={{ background: sc.bg, border: `1px solid ${sc.border}`, color: sc.text }}
                  >
                    <span className="project-status-dot" style={{ background: sc.text }} />
                    {project.status}
                  </span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="project-tech-chip">{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.github && (
                    <a
                      href={project.github}
                      className="project-btn project-btn--outline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="project-btn project-btn--primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
