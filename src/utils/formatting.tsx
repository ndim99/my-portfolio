export function formatHash(hash: string): string {
  return `${hash.slice(0, 7)}..${hash.slice(hash.length - 5)}`;
}
