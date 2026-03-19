import { ArrowRight, Github } from 'lucide-react';
import '../styles/components.css';
import '../styles/global.css';

function Hero() {
  return (
    <section className="hero-section dot-bg">
      <div className="hero-inner section-inner">

        {/* Text Content */}
        <div className="hero-content">
          <p className="hero-greeting">👋 Hello, World!</p>

          <h1 className="hero-title">
            I'm{' '}
            <span className="gradient-text">VARSHITH NAKIRIKANTI</span>
          </h1>

          <p className="hero-desc">
            Computational Engineering student at{' '}
            <strong style={{ color: 'var(--text-h)' }}>IIT Hyderabad</strong>.
            Building full‑stack apps integrated with AI api's &amp; DevOps pipelines.
          </p>

          <div className="hero-cta">
            <a className="btn-primary" href="#projects">
              View My Work <ArrowRight size={16} />
            </a>
            <a
              className="btn-outline"
              href="https://github.com/Nakirikanti-Venkata-Rajiv-Varshith"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="hero-image-wrap">
          <div className="hero-image-ring">
            <img src="images/profile.jpg" alt="Balaya profile" />
          </div>
          <span className="hero-badge b1">🎓 IIT Hyderabad</span>
          <span className="hero-badge b2">⚡Full Stack &amp; DevOps</span>
        </div>

      </div>
    </section>
  );
}

export default Hero;
