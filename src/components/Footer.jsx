import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__brand">DevPath</span>
      <span className="footer__copy">
        &copy; {new Date().getFullYear()} &mdash; Built for CS Students
      </span>
      <div className="footer__links">
        <Link to="/">Home</Link>
        <Link to="/bookmarks">Bookmarks</Link>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
