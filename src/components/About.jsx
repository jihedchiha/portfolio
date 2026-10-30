import './About.css';

const highlights = [
  {
    icon: '🎓',
    title: 'IoT & Robotics Student',
    description: '4th Year at EPI Sousse',
  },
  {
    icon: '💼',
    title: 'Open to Internships',
    description: 'Seeking opportunities',
  },
  {
    icon: '🇹🇳',
    title: 'Based in Tunisia',
    description: 'Sousse, Tunisia',
  },
  {
    icon: '🔧',
    title: 'Hardware Enthusiast',
    description: 'Arduino & ESP32 builder',
  },
];

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Left: Text */}
          <div className="about-text">
            <span className="section-tag">// about me</span>
            <h2 className="section-title">
              Who Am <span>I?</span>
            </h2>

            <p className="about-para">
              I&apos;m <strong>Jihed</strong>, a 4th-year engineering student specializing in{' '}
              <span className="about-accent">IoT &amp; Robotics</span> at EPI Sousse, Tunisia.
              I&apos;m passionate about the intersection of hardware and software — building systems
              that sense, think, and act in the real world.
            </p>

            <p className="about-para">
              My journey started with 2 years of preparatory cycle mastering mathematics, physics,
              circuit wiring, Kirchhoff&apos;s laws, and initial prototyping with Arduino &amp; ESP32.
            </p>

            <p className="about-para">
              In my 3rd year (Computer Science Core / Tronc Commun), I deepened my software foundation
              in algorithms, C/C++, Java, Spring Boot, PHP and SQL, while self-teaching Angular and Django
              to build <strong>Pulse Lab EMS</strong> (gym management application on GitHub).
              Now in my 4th year, I am pursuing my specialization in <strong>IoT &amp; Robotics</strong>,
              working on smart systems such as the <strong>Smart Cane</strong>.
            </p>

            <p className="about-para about-goal">
              🎯 <strong>Goal:</strong> Land an internship in embedded systems or IoT development,
              gain international experience, and build impactful smart solutions.
            </p>

            <div className="about-badges">
              <span className="about-badge">EPI Sousse</span>
              <span className="about-badge">IoT &amp; Robotics</span>
              <span className="about-badge">2022 – Present</span>
            </div>
          </div>

          {/* Right: Highlight Cards */}
          <div className="about-highlights">
            {highlights.map((item) => (
              <div className="about-card" key={item.title}>
                <div className="about-card-icon">{item.icon}</div>
                <div className="about-card-body">
                  <h3 className="about-card-title">{item.title}</h3>
                  <p className="about-card-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
