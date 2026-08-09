// Centralized base URL helper for GitHub Pages
// All internal links MUST go through this so base path is applied consistently.
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path: string): string {
  const clean = path.startsWith('/') ? path : '/' + path;
  if (BASE === '') return clean;
  return BASE + clean;
}
