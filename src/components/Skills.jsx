import './Skills.css';

const skillCategories = [
  {
    id: 'programming',
    icon: '{ }',
    title: 'Programming Languages',
    color: 'purple',
    skills: [
      { name: 'C', level: 'comfortable' },
      { name: 'Python', level: 'comfortable' },
      { name: 'C++', level: 'comfortable' },
      { name: 'Java', level: 'comfortable' },
      { name: 'JavaScript', level: 'comfortable' },
      { name: 'SQL', level: 'comfortable' },
      { name: 'Algorithm & Data Structures', level: 'comfortable' },
      { name: 'MATLAB', level: 'learning' },
      { name: 'MicroPython', level: 'learning' },
    ],
  },
  {
    id: 'web',
    icon: '</> ',
    title: 'Web Development',
    color: 'cyan',
    skills: [
      { name: 'HTML / CSS', level: 'comfortable' },
      { name: 'Bootstrap', level: 'comfortable' },
      { name: 'Angular', level: 'comfortable' },
      { name: 'Django', level: 'comfortable' },
      { name: 'Spring Boot', level: 'comfortable' },
      { name: 'PHP', level: 'comfortable' },
      { name: 'REST APIs', level: 'comfortable' },
      { name: 'React', level: 'learning' },
    ],
  },
  {
    id: 'iot',
    icon: '📡',
    title: 'IoT & Embedded Systems',
    color: 'cyan',
    skills: [
      { name: 'Arduino', level: 'comfortable' },
      { name: 'ESP32', level: 'comfortable' },
      { name: 'Circuit Wiring', level: 'comfortable' },
      { name: 'Sensors & Actuators', level: 'comfortable' },
      { name: 'Breadboard Prototyping', level: 'comfortable' },
      { name: 'LED / Buzzer Projects', level: 'comfortable' },
      { name: 'Kirchhoff\'s Laws', level: 'comfortable' },
      { name: 'Robotics', level: 'learning' },
    ],
  },
  {
    id: 'tools',
    icon: '🛠️',
    title: 'Dev Tools',
    color: 'purple',
    skills: [
      { name: 'VS Code', level: 'comfortable' },
      { name: 'Git & GitHub', level: 'comfortable' },
      { name: 'Arduino IDE', level: 'comfortable' },
      { name: 'IntelliJ IDEA', level: 'comfortable' },
    ],
  },
  {
    id: 'next',
    icon: '🚀',
    title: 'Learning Next',
    color: 'mixed',
    note: 'Currently exploring these technologies...',
    skills: [
      { name: 'MQTT', level: 'to-learn' },
      { name: 'FreeRTOS', level: 'to-learn' },
      { name: 'Raspberry Pi', level: 'to-learn' },
      { name: 'ThingsBoard', level: 'to-learn' },
      { name: 'AWS IoT', level: 'to-learn' },
      { name: 'AI / ML', level: 'to-learn' },
      { name: 'Computer Vision', level: 'to-learn' },
    ],
  },
];

const levelLabel = {
  comfortable: { label: 'Comfortable', color: '#22c55e' },
  learning: { label: 'Learning', color: '#f59e0b' },
  'to-learn': { label: 'Up next', color: '#94a3b8' },
};

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="skills-header">
          <span className="section-tag">// skills &amp; tools</span>
          <h2 className="section-title">
            Skills &amp; <span>Technologies</span>
          </h2>
          <p className="section-subtitle">
            The tools and technologies I work with, learn, and plan to master.
          </p>
        </div>

        <div className="skills-legend">
          {Object.entries(levelLabel).map(([key, val]) => (
            <span key={key} className="legend-item">
              <span className="legend-dot" style={{ background: val.color }} />
              {val.label}
            </span>
          ))}
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div className={`skill-card skill-card--${cat.color}`} key={cat.id}>
              <div className="skill-card-header">
                <span className="skill-card-icon">{cat.icon}</span>
                <h3 className="skill-card-title">{cat.title}</h3>
              </div>
              {cat.note && (
                <p className="skill-card-note">{cat.note}</p>
              )}
              <div className="skill-chips">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`skill-chip skill-chip--${skill.level}`}
                    title={levelLabel[skill.level]?.label}
                  >
                    <span
                      className="skill-chip-dot"
                      style={{ background: levelLabel[skill.level]?.color }}
                    />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
