export function normalizeNewlines(value: string, singleLine = false): string {
  const normalized = value.replace(/\r\n?/g, '\n');
  return singleLine ? normalized.replace(/\n/g, ' ') : normalized;
}
