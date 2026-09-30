export function getInitials(name: string, limit = 2) {
  const words = name.normalize('NFC').trim().split(/\s+/).filter(Boolean);

  if (words.length === 0) {
    return '';
  }

  if (words.length === 1) {
    return Array.from(words[0]).slice(0, limit).join('').toUpperCase();
  }

  return words
    .map((word) => Array.from(word)[0])
    .slice(0, limit)
    .join('')
    .toUpperCase();
}
