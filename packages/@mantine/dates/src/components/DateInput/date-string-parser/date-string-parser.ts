export function dateStringParser(dateString: string | null) {
  if (dateString === null) {
    return null;
  }

  const date = new Date(dateString);

  if (Number.isNaN(date.getTime()) || !dateString) {
    return null;
  }

  return date;
}
