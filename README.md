# DevPath

DevPath is a lightweight learning companion for students: curated GitHub repositories + topic roadmaps in a clean, distraction-free UI.

Live site: https://thedevpath.vercel.app

## What you can do

- Browse learning categories (Languages, DSA, Web, App, Cloud/DevOps, AI/ML)
- Pick a topic or view **All** topics within a category
- See a curated “best repo” for each topic
- Follow roadmap tables (grouped by topic)
- Bookmark repositories (saved in `localStorage`)
- Toggle dark/light theme

## Tech stack

- React + Vite
- React Router
- CSS (custom properties + responsive layout)

## Local development

Prereqs:
- Node.js (LTS recommended)

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project structure (where to edit)

- `src/data/categories.js` — categories, topics, and roadmap table data
- `src/data/repos.js` — static repo card data (no GitHub API calls)
- `src/pages/ExplorePage.jsx` — category detail page (topics, repo cards, roadmaps)
- `src/pages/BookmarksPage.jsx` — saved repos view

## Deployment

This project deploys cleanly to Vercel as a SPA. The repo cards use **static data**, so the app does not depend on GitHub API rate limits.

## License

Add a license file if you want this to be open-source.
