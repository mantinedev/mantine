import dayjs from 'dayjs';

export function getMonthsData(year: Date) {
  const startOfYear = dayjs(year).startOf('year').toDate();

  const results: Date[][] = [[], [], [], []];
  let currentMonthIndex = 0;

  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      results[i].push(dayjs(startOfYear).add(currentMonthIndex, 'months').toDate());
      currentMonthIndex += 1;
    }
  }

  return results;
}
