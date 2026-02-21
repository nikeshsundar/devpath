/* ─── GitHub API helper ─── */

const BASE = 'https://api.github.com';
const HEADERS = { Accept: 'application/vnd.github+json' };

/* ── Session cache to avoid repeat fetches ── */
const cache = new Map();

/**
 * Normalise raw GitHub API repo object into our shape
 */
function normalise(r) {
  return {
    id: r.id,
    name: r.full_name,
    description: r.description,
    stars: r.stargazers_count,
    forks: r.forks_count,
    language: r.language,
    url: r.html_url,
    owner: {
      avatar: r.owner.avatar_url,
      login: r.owner.login,
    },
    topics: r.topics ?? [],
    updatedAt: r.updated_at,
  };
}

/**
 * Fetch a single repo by full name  e.g. "facebook/react"
 */
export async function getRepo(fullName) {
  if (cache.has(fullName)) return cache.get(fullName);

  const res = await fetch(`${BASE}/repos/${fullName}`, { headers: HEADERS });
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

  const data = await res.json();
  const repo = normalise(data);
  cache.set(fullName, repo);
  return repo;
}

/**
 * Fetch multiple repos by full name (parallel).
 * Silently skips any that fail.
 */
export async function getRepos(fullNames) {
  const results = await Promise.allSettled(fullNames.map(getRepo));
  return results
    .filter((r) => r.status === 'fulfilled')
    .map((r) => r.value);
}
