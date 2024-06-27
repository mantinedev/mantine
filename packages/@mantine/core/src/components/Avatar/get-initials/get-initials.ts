export function getInitials(name: string, limit = 2) {
  const splitted = name.split(' ');

  if (splitted.length === 1) {
    return name.slice(0, limit).toUpperCase();
  }

  return splitted
    .map((word) => word[0])
    .slice(0, limit)
    .join('')
    .toUpperCase();
}
