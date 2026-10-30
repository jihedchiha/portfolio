import './Journey.css';

const timeline = [
  {
    year: 'Années 1 & 2',
    title: 'Cycle Préparatoire Intégré (2 ans)',
    description:
      'Deux années de classes préparatoires intensives : mathématiques, physique, algorithmique, programmation C & Python, HTML/CSS/JS, Java et MATLAB. Nombreux TP de câblage de circuits électriques, application des lois des mailles et des nœuds (Kirchhoff), et premiers projets électroniques sur Arduino & ESP32.',
    icon: '🎓',
    tags: ['Maths', 'Physique', 'C', 'Python', 'Algo', 'Java', 'MATLAB', 'Lois de Kirchhoff', 'Arduino', 'ESP32'],
    color: 'cyan',
    status: 'done',
  },
  {
    year: '3ème Année',
    title: 'Tronc Commun Informatique — Approfondissement',
    description:
      'Troisième année dédiée au tronc commun en génie logiciel : algorithmique avancée en C/C++, SQL, Java & Java avancé, Bootstrap, Spring Boot et PHP. Réalisation de montages électroniques (LEDs, buzzers, capteurs) avec Arduino & ESP32. Apprentissage en autodidacte d\'Angular et Django ayant abouti au développement de l\'application de gestion de salle de sport EMS (Pulse Lab EMS sur GitHub).',
    icon: '💻',
    tags: ['C/C++', 'Java Avancé', 'SQL', 'Spring Boot', 'PHP', 'Bootstrap', 'Angular', 'Django', 'Arduino', 'ESP32'],
    color: 'cyan',
    status: 'done',
  },
  {
    year: '4ème Année',
    title: 'Spécialité IoT & Robotique — En cours',
    description:
      'Quatrième année d\'ingénierie et spécialisation en IoT & Robotique : systèmes communicants, protocoles embarqués, intégration matérielle et logicielle. Conception du Smart Cane (canne connectée d\'assistance aux malvoyants avec capteurs ultrasons, haptique et Bluetooth).',
    icon: '🤖',
    tags: ['IoT', 'Robotique', 'ESP32', 'Systèmes Embarqués', 'Smart Cane', 'Bluetooth'],
    color: 'purple',
    status: 'current',
  },
  {
    year: 'Future',
    title: 'Ingénieur IoT & Perspectives Internationales',
    description:
      'Poursuite vers l\'expertise complète : MQTT, plateformes Cloud IoT (AWS IoT, ThingsBoard), intégration IA/ML sur systèmes embarqués et opportunités de stages et carrières à l\'international.',
    icon: '🚀',
    tags: ['MQTT', 'AWS IoT', 'ThingsBoard', 'AI/ML', 'FreeRTOS'],
    color: 'purple',
    status: 'future',
  },
];

export default function Journey() {
  return (
    <section className="journey section" id="journey">
      <div className="container">
        <div className="journey-header">
          <span className="section-tag">// my journey</span>
          <h2 className="section-title">
            My <span>Journey</span>
          </h2>
          <p className="section-subtitle">
            Every great engineer starts somewhere. Here&apos;s my story so far.
          </p>
        </div>

        <div className="timeline">
          {timeline.map((item, index) => (
            <div
              className={`timeline-item timeline-item--${item.status}`}
              key={index}
            >
              {/* Left: Year */}
              <div className="timeline-year-col">
                <span className={`timeline-year timeline-year--${item.color}`}>
                  {item.year}
                </span>
              </div>

              {/* Center: Line + Dot */}
              <div className="timeline-line-col">
                <div className={`timeline-dot timeline-dot--${item.color}`}>
                  {item.status === 'current' && (
                    <span className="timeline-dot-ring" />
                  )}
                </div>
                {index < timeline.length - 1 && (
                  <div className="timeline-connector" />
                )}
              </div>

              {/* Right: Card */}
              <div className={`timeline-card timeline-card--${item.color}`}>
                <div className="timeline-card-icon">{item.icon}</div>
                <div className="timeline-card-body">
                  <h3 className="timeline-card-title">{item.title}</h3>
                  <p className="timeline-card-desc">{item.description}</p>
                  {item.tags && (
                    <div className="timeline-tags">
                      {item.tags.map((tag, i) => (
                        <span key={i} className={`timeline-tag timeline-tag--${item.color}`}>{tag}</span>
                      ))}
                    </div>
                  )}
                  {item.status === 'current' && (
                    <span className="timeline-badge timeline-badge--current">In Progress</span>
                  )}
                  {item.status === 'future' && (
                    <span className="timeline-badge timeline-badge--future">Goal</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
