import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import categories from '../data/categories';
import { getRepo, getRepos } from '../api/github';
import RepoCard from '../components/RepoCard';
import Footer from '../components/Footer';
import useReveal from '../hooks/useReveal';

/* ── Roadmap Table Component ── */
function RoadmapTable({ roadmap }) {
  const [ref, vis] = useReveal();
  return (
    <div ref={ref} className={`roadmap-table reveal ${vis ? 'visible' : ''}`}>
      <div className="roadmap-table__title">
        {roadmap.title}
      </div>
      <div className="roadmap-table__grid">
        {roadmap.columns.map((col, i) => (
          <div key={i} className="roadmap-table__cell roadmap-table__cell--header">
            {col}
          </div>
        ))}
        {roadmap.rows.flatMap((row, ri) =>
          row.map((cell, ci) => (
            <div key={`${ri}-${ci}`} className="roadmap-table__cell">
              {cell}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default function ExplorePage() {
  const { id } = useParams();
  const cat = categories.find((c) => c.id === id);

  const [activeTopic, setActiveTopic] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* Fetch curated repo(s) */
  useEffect(() => {
    if (!cat) return;
    let cancelled = false;
    setLoading(true);
    setError(null);

    if (activeTopic) {
      const topic = cat.topics.find((t) => t.name === activeTopic);
      if (!topic) { setLoading(false); return; }
      getRepo(topic.repo)
        .then((r) => { if (!cancelled) setRepos([r]); })
        .catch((err) => { if (!cancelled) setError(err.message); })
        .finally(() => { if (!cancelled) setLoading(false); });
    } else {
      const allNames = cat.topics.map((t) => t.repo);
      getRepos(allNames)
        .then((r) => { if (!cancelled) setRepos(r); })
        .catch((err) => { if (!cancelled) setError(err.message); })
        .finally(() => { if (!cancelled) setLoading(false); });
    }

    return () => { cancelled = true; };
  }, [activeTopic, cat]);

  const [repoRef, repoVis] = useReveal();

  if (!cat) {
    return (
      <div className="explore page-enter">
        <div className="status-msg">
          <p>Category not found.</p>
          <Link to="/" className="explore__back">&larr; Back home</Link>
        </div>
      </div>
    );
  }

  /* Get active topic data for roadmap */
  const activeTopicData = activeTopic
    ? cat.topics.find((t) => t.name === activeTopic)
    : null;

  /* Deduplicate roadmaps for "All" view (some topics share the same roadmap object) */
  const allRoadmaps = activeTopic
    ? []
    : [...new Map(cat.topics.map((t) => [t.roadmap.title, t.roadmap])).values()];

  return (
    <div className="page-enter">
      <div className="explore">
        <Link to="/" className="explore__back">&larr; Back</Link>

        {/* Header */}
        <div className="explore__header">
          <div className="explore__num">{cat.num}</div>
          <h1 className="explore__title">
            {cat.title[0]}<br />{cat.title[1]}
          </h1>
          <p className="explore__desc">{cat.description}</p>
        </div>

        {/* Topic chips */}
        <section className="explore__topics">
          <div className="explore__topics-label">( Pick a Topic )</div>
          <div className="explore__chips">
            <button
              className={`explore__chip ${!activeTopic ? 'active' : ''}`}
              onClick={() => setActiveTopic(null)}
            >
              All
            </button>
            {cat.topics.map((t) => (
              <button
                key={t.name}
                className={`explore__chip ${activeTopic === t.name ? 'active' : ''}`}
                onClick={() => setActiveTopic(t.name)}
              >
                {t.name}
              </button>
            ))}
          </div>
        </section>

        {/* Curated repo(s) */}
        <section ref={repoRef} className={`reveal ${repoVis ? 'visible' : ''}`}>
          <div className="explore__repos-heading">
            ( {activeTopic ? `Best Repo for ${activeTopic}` : 'Curated Repositories'} )
          </div>

          {loading && (
            <div className="status-msg">
              <div className="spinner" />
              <p>Fetching from GitHub&hellip;</p>
            </div>
          )}

          {error && (
            <div className="status-msg">
              <p>Error: {error}</p>
              <p style={{ fontSize: '.78rem', marginTop: '.5rem' }}>
                GitHub API rate limit may have been reached. Try again shortly.
              </p>
            </div>
          )}

          {!loading && !error && repos.length > 0 && (
            <div className={`repo-grid ${repos.length === 1 ? 'repo-grid--single' : ''}`}>
              {repos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          )}

          {!loading && !error && repos.length === 0 && (
            <div className="status-msg">No repository found.</div>
          )}
        </section>

        {/* Roadmap tables — below repos */}
        <section className="explore__roadmap-section">
          {activeTopic && activeTopicData?.roadmap && (
            <RoadmapTable roadmap={activeTopicData.roadmap} />
          )}
          {!activeTopic && allRoadmaps.map((rm) => (
            <RoadmapTable key={rm.title} roadmap={rm} />
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
}
