import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="container hero-container">
        {/* Left: Text Content */}
        <div className="hero-content">
          <p className="hero-greeting">
            <span className="hero-greeting-dot" />
            Hi, I&apos;m
          </p>
          <h1 className="hero-name">
            Jihed
          </h1>
          <h2 className="hero-title">
            IoT &amp; Robotics Engineering Student
          </h2>
          <p className="hero-bio">
            4th-year student specializing in <span className="hero-highlight">IoT &amp; Robotics</span> at EPI Sousse, Tunisia.
            Passionate about embedded systems, connected hardware and full-stack development —
            from ESP32 circuits to Angular &amp; Django web apps.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
              View Projects
            </a>
            <a href="/cv.html" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #0284c7, #2563eb)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Télécharger CV (PDF)
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>

        {/* Right: IoT SVG Illustration */}
        <div className="hero-illustration" aria-hidden="true">
          <IotIllustration />
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="hero-scroll" aria-label="Scroll down">
        <span className="hero-scroll-mouse">
          <span className="hero-scroll-wheel" />
        </span>
        <span className="hero-scroll-label">Scroll</span>
      </a>
    </section>
  );
}

function IotIllustration() {
  return (
    <div className="iot-illustration">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="iot-svg"
      >
        {/* Background circle glow */}
        <circle cx="200" cy="200" r="160" fill="url(#bgGlow)" opacity="0.3" />

        {/* Connection lines */}
        <line x1="200" y1="200" x2="80" y2="110" stroke="#00d4ff" strokeWidth="1" opacity="0.3" className="iot-line line1" />
        <line x1="200" y1="200" x2="320" y2="100" stroke="#00d4ff" strokeWidth="1" opacity="0.3" className="iot-line line2" />
        <line x1="200" y1="200" x2="330" y2="270" stroke="#7c3aed" strokeWidth="1" opacity="0.3" className="iot-line line3" />
        <line x1="200" y1="200" x2="70" y2="300" stroke="#7c3aed" strokeWidth="1" opacity="0.3" className="iot-line line4" />
        <line x1="200" y1="200" x2="200" y2="60" stroke="#00d4ff" strokeWidth="1" opacity="0.3" className="iot-line line5" />
        <line x1="200" y1="200" x2="200" y2="340" stroke="#7c3aed" strokeWidth="1" opacity="0.3" className="iot-line line1" />
        <line x1="80" y1="110" x2="200" y2="60" stroke="#00d4ff" strokeWidth="0.5" opacity="0.2" />
        <line x1="320" y1="100" x2="200" y2="60" stroke="#00d4ff" strokeWidth="0.5" opacity="0.2" />
        <line x1="330" y1="270" x2="200" y2="340" stroke="#7c3aed" strokeWidth="0.5" opacity="0.2" />
        <line x1="70" y1="300" x2="200" y2="340" stroke="#7c3aed" strokeWidth="0.5" opacity="0.2" />

        {/* Central hub */}
        <circle cx="200" cy="200" r="32" fill="#0d1b2e" stroke="#00d4ff" strokeWidth="2" />
        <circle cx="200" cy="200" r="22" fill="url(#centerGrad)" opacity="0.9" />
        {/* WiFi icon inside hub */}
        <path d="M200 210 L196 206 L200 202 L204 206 Z" fill="#fff" />
        <path d="M192 203 Q200 195 208 203" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M188 199 Q200 188 212 199" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />

        {/* Pulse rings on center */}
        <circle cx="200" cy="200" r="40" stroke="#00d4ff" strokeWidth="1" fill="none" className="pulse-ring ring1" />
        <circle cx="200" cy="200" r="55" stroke="#00d4ff" strokeWidth="0.5" fill="none" className="pulse-ring ring2" />

        {/* Node: Arduino (top left) */}
        <g className="iot-node node1">
          <circle cx="80" cy="110" r="24" fill="#0d1b2e" stroke="#00d4ff" strokeWidth="1.5" />
          <circle cx="80" cy="110" r="16" fill="rgba(0,212,255,0.1)" />
          <text x="80" y="115" textAnchor="middle" fill="#00d4ff" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="500">ARD</text>
        </g>

        {/* Node: ESP32 (top right) */}
        <g className="iot-node node2">
          <circle cx="320" cy="100" r="24" fill="#0d1b2e" stroke="#7c3aed" strokeWidth="1.5" />
          <circle cx="320" cy="100" r="16" fill="rgba(124,58,237,0.1)" />
          <text x="320" y="105" textAnchor="middle" fill="#7c3aed" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="500">ESP32</text>
        </g>

        {/* Node: Sensor (right) */}
        <g className="iot-node node3">
          <circle cx="330" cy="270" r="22" fill="#0d1b2e" stroke="#00d4ff" strokeWidth="1.5" />
          <circle cx="330" cy="270" r="14" fill="rgba(0,212,255,0.08)" />
          <text x="330" y="275" textAnchor="middle" fill="#00d4ff" fontSize="8" fontFamily="JetBrains Mono, monospace">SEN</text>
        </g>

        {/* Node: Cloud (left bottom) */}
        <g className="iot-node node4">
          <circle cx="70" cy="300" r="22" fill="#0d1b2e" stroke="#7c3aed" strokeWidth="1.5" />
          <circle cx="70" cy="300" r="14" fill="rgba(124,58,237,0.08)" />
          <text x="70" y="305" textAnchor="middle" fill="#7c3aed" fontSize="8" fontFamily="JetBrains Mono, monospace">IOT</text>
        </g>

        {/* Node: Top center */}
        <g className="iot-node node5">
          <circle cx="200" cy="60" r="18" fill="#0d1b2e" stroke="#00d4ff" strokeWidth="1.5" />
          <circle cx="200" cy="60" r="11" fill="rgba(0,212,255,0.1)" />
          <text x="200" y="64" textAnchor="middle" fill="#00d4ff" fontSize="7" fontFamily="JetBrains Mono, monospace">PI</text>
        </g>

        {/* Node: Bottom center */}
        <g className="iot-node node6">
          <circle cx="200" cy="340" r="18" fill="#0d1b2e" stroke="#7c3aed" strokeWidth="1.5" />
          <circle cx="200" cy="340" r="11" fill="rgba(124,58,237,0.1)" />
          <text x="200" y="344" textAnchor="middle" fill="#7c3aed" fontSize="7" fontFamily="JetBrains Mono, monospace">API</text>
        </g>

        {/* Small decorative dots */}
        <circle cx="148" cy="148" r="3" fill="#00d4ff" opacity="0.4" />
        <circle cx="258" cy="148" r="3" fill="#7c3aed" opacity="0.4" />
        <circle cx="148" cy="258" r="3" fill="#7c3aed" opacity="0.4" />
        <circle cx="258" cy="258" r="3" fill="#00d4ff" opacity="0.4" />

        {/* Gradients defs */}
        <defs>
          <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#050b18" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
