import { useBookmarks } from '../context/BookmarkContext';
import RepoCard from '../components/RepoCard';
import Footer from '../components/Footer';

export default function BookmarksPage() {
  const { bookmarks } = useBookmarks();

  return (
    <div className="page-enter">
      <div className="bookmarks-page">
        <h1 className="bookmarks-page__title">Saved Repositories</h1>
        <p className="bookmarks-page__sub">
          {bookmarks.length > 0
            ? `You have ${bookmarks.length} saved repositor${bookmarks.length === 1 ? 'y' : 'ies'}.`
            : 'Explore a domain and bookmark repositories you want to revisit.'}
        </p>

        {bookmarks.length > 0 ? (
          <div className="repo-grid">
            {bookmarks.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state__icon">{'\u2606'}</div>
            <p className="empty-state__text">
              No bookmarks yet. Click the star icon on any repository card to
              save it here for later.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
