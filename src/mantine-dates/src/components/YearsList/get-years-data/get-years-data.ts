export function getYearsData(decade: Date) {
  const year = decade.getFullYear();

  const rounded = year - (year % 10);

  let currentYearIndex = 0;
  const results: Date[][] = [[], [], [], []];

  for (let i = 0; i < 4; i += 1) {
    const max = i === 3 ? 1 : 3;
    for (let j = 0; j < max; j += 1) {
      results[i].push(new Date(rounded + currentYearIndex, 0));
      currentYearIndex += 1;
    }
  }

  return results;
}
