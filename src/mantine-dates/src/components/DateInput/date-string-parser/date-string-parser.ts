export function dateStringParser(dateString: string) {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime()) || !dateString) {
    return null;
  }

  return date;
}
