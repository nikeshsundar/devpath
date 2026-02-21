import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import categories from '../data/categories';
import Footer from '../components/Footer';

/* ── Reveal wrappers ── */
function Reveal({ className = '', children, ...rest }) {
  const [ref, vis] = useReveal();
  return (
    <div ref={ref} className={`reveal ${vis ? 'visible' : ''} ${className}`} {...rest}>
      {children}
    </div>
  );
}

function RevealText({ children }) {
  const [ref, vis] = useReveal();
  return (
    <span ref={ref} className={`text-reveal ${vis ? 'visible' : ''}`}>
      <span>{children}</span>
    </span>
  );
}

/* ── Marquee ── */
const MARQUEE = [
  'Python', 'JavaScript', 'C++', 'React', 'Docker',
  'Algorithms', 'Machine Learning', 'Rust', 'Kubernetes',
  'TypeScript', 'System Design', 'Flutter', 'AWS', 'Go',
  'DSA', 'Next.js', 'PyTorch', 'Linux',
];
function Marquee() {
  const d = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee">
      <div className="marquee__track">
        {d.map((t, i) => (
          <span key={i} className="marquee__item">
            {t}<span className="marquee__dot" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Category Section — centered with items grid ── */
function CatSection({ cat }) {
  const [ref, vis] = useReveal();
  const [refGrid, visGrid] = useReveal();

  return (
    <section className="cat-section">
      <div className="cat-section__inner">
        <Reveal>
          <span className="cat-section__num">{cat.num}</span>
        </Reveal>

        <div ref={ref} className={`reveal ${vis ? 'visible' : ''}`}>
          <div className="cat-section__title">
            <h2>{cat.title[0]}</h2>
            <h2>{cat.title[1]}</h2>
          </div>
          <p className="cat-section__desc">{cat.description}</p>
        </div>

        {/* Items grid — like image 1 */}
        <div
          ref={refGrid}
          className={`cat-section__items reveal-stagger ${visGrid ? 'visible' : ''}`}
        >
          {cat.items.map((item) => (
            <div key={item} className="cat-section__item">{item}</div>
          ))}
        </div>

        <Link to={`/explore/${cat.id}`} className="cat-section__explore">
          Explore Repositories
          <span className="cat-section__explore-arrow">&rarr;</span>
        </Link>
      </div>
    </section>
  );
}

/* ── Stats ── */
function Stats() {
  const [ref, vis] = useReveal();
  const items = [
    { n: '60+', l: 'Topics Covered' },
    { n: '6', l: 'Learning Domains' },
    { n: '100+', l: 'Curated Repos' },
    { n: '\u221E', l: 'Your Potential' },
  ];
  return (
    <section className="stats">
      <div ref={ref} className={`stats__inner reveal-stagger ${vis ? 'visible' : ''}`}>
        {items.map((s) => (
          <div key={s.l}>
            <div className="stats__num">{s.n}</div>
            <div className="stats__label">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ════════════════════════════
   HOME PAGE
   ════════════════════════════ */
export default function HomePage() {
  return (
    <div className="page-enter">
      {/* HERO */}
      <section className="hero">
        <div className="hero__circle" />
        <span className="hero__corner hero__corner--tl">For CS Students</span>
        <span className="hero__corner hero__corner--tr">EST. 2025</span>
        <span className="hero__corner hero__corner--bl">Somewhere in the World</span>

        <RevealText>
          <span className="hero__label">Your CS Learning Companion</span>
        </RevealText>

        <div className="hero__big">
          <RevealText>DEV</RevealText>
          <RevealText><span className="outline">PATH</span></RevealText>
        </div>

        <Reveal>
          <p className="hero__sub">Discover &middot; Learn &middot; Build &middot; Ship</p>
        </Reveal>
        <Reveal>
          <p className="hero__desc">
            Curated programming languages, DSA, web &amp; app development,
            cloud, AI, and the best GitHub repositories to learn them all
            from scratch.
          </p>
        </Reveal>

        <span className="hero__scroll">Scroll &darr;</span>
      </section>

      {/* MISSION */}
      <section className="mission">
        <Reveal>
          <p className="mission__text">
            Every developer deserves a clear path to mastery.{' '}
            <span className="muted">
              We curate the best open-source resources, organize them into
              structured roadmaps, and connect you to the repositories that
              will accelerate your growth.
            </span>
          </p>
        </Reveal>
      </section>

      {/* MARQUEE */}
      <Marquee />

      {/* CATEGORY SECTIONS */}
      {categories.map((cat) => (
        <CatSection key={cat.id} cat={cat} />
      ))}

      {/* STATS */}
      <Stats />

      {/* ABOUT */}
      <section className="about">
        <Reveal>
          <div className="about__label">( About DevPath )</div>
          <p className="about__text">
            Built for students who want more than just tutorials.
            Structured learning paths, real-world projects, and the
            power of open-source.
          </p>
          <Link to="/explore/languages" className="about__cta">
            Start Learning &rarr;
          </Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
