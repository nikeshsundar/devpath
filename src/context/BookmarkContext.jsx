import { createContext, useContext, useEffect, useState } from 'react';

const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('devpath-bookmarks')) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('devpath-bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const isBookmarked = (id) => bookmarks.some((b) => b.id === id);

  const toggleBookmark = (repo) => {
    setBookmarks((prev) =>
      prev.some((b) => b.id === repo.id)
        ? prev.filter((b) => b.id !== repo.id)
        : [...prev, repo],
    );
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, isBookmarked, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export const useBookmarks = () => useContext(BookmarkContext);
