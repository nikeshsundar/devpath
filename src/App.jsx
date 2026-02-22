import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './context/ThemeContext';
import { BookmarkProvider } from './context/BookmarkContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import BookmarksPage from './pages/BookmarksPage';

export default function App() {
  return (
    <ThemeProvider>
      <BookmarkProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore/:id" element={<ExplorePage />} />
            <Route path="/bookmarks" element={<BookmarksPage />} />
          </Routes>
        </BrowserRouter>
        <Analytics />
      </BookmarkProvider>
    </ThemeProvider>
  );
}
