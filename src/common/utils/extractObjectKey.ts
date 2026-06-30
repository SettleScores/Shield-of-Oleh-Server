export function extractObjectKey(url: string): string {

  const parsed = new URL(url);

  return parsed.pathname.replace(/^\/+/, '');
}