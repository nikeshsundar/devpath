import { useBookmarks } from '../context/BookmarkContext';

function fmt(n) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  return n;
}

export default function RepoCard({ repo }) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const saved = isBookmarked(repo.id);

  return (
    <div className="repo-card">
      <div className="repo-card__header">
        <img
          className="repo-card__avatar"
          src={repo.owner.avatar}
          alt={repo.owner.login}
          loading="lazy"
        />
        <span className="repo-card__name">{repo.name}</span>
      </div>

      <p className="repo-card__desc">
        {repo.description || 'No description provided.'}
      </p>

      <div className="repo-card__meta">
        <span>&#9733; {fmt(repo.stars)}</span>
        <span>&#9741; {fmt(repo.forks)}</span>
        {repo.language && <span>{repo.language}</span>}
      </div>

      <div className="repo-card__footer">
        <a
          className="repo-card__link"
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub &rarr;
        </a>
        <button
          className={`bookmark-btn ${saved ? 'active' : ''}`}
          onClick={() => toggleBookmark(repo)}
          aria-label={saved ? 'Remove bookmark' : 'Add bookmark'}
        >
          {saved ? '\u2605' : '\u2606'}
        </button>
      </div>
    </div>
  );
}
