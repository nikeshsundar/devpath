import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { dark, toggle } = useTheme();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        DevPath
      </Link>
      <div className="navbar__links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/bookmarks">Bookmarks</NavLink>
        <button onClick={toggle} aria-label="Toggle theme">
          {dark ? 'Light' : 'Dark'}
        </button>
      </div>
    </nav>
  );
}
