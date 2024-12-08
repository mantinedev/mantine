export function getNextMarkValue(
  currentValue: number,
  marks: { value: number; label?: React.ReactNode }[]
) {
  const sortedMarks = [...marks].sort((a, b) => a.value - b.value);
  const nextMark = sortedMarks.find((mark) => mark.value > currentValue);
  return nextMark ? nextMark.value : currentValue;
}

export function getPreviousMarkValue(
  currentValue: number,
  marks: { value: number; label?: React.ReactNode }[]
) {
  const sortedMarks = [...marks].sort((a, b) => b.value - a.value);
  const previousMark = sortedMarks.find((mark) => mark.value < currentValue);
  return previousMark ? previousMark.value : currentValue;
}

export function getFirstMarkValue(marks: { value: number; label?: React.ReactNode }[]) {
  const sortedMarks = [...marks].sort((a, b) => a.value - b.value);
  return sortedMarks.length > 0 ? sortedMarks[0].value : 0;
}

export function getLastMarkValue(marks: { value: number; label?: React.ReactNode }[]) {
  const sortedMarks = [...marks].sort((a, b) => a.value - b.value);
  return sortedMarks.length > 0 ? sortedMarks[sortedMarks.length - 1].value : 100;
}
