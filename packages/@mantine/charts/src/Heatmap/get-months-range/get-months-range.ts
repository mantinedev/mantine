interface MonthRangeValue {
  /** 0 - 11, index of the month, used to retrieve month label from the array */
  month: number;

  /** Number of weeks displayed previously */
  position: number;

  /** Number of weeks in the month */
  size: number;
}

export function getMonthsRange(weeksData: (string | null)[][]) {
  let position = 0;
  let current: number | null = null;
  const result: MonthRangeValue[] = [];

  weeksData.forEach((week) => {
    // it is guaranteed that week has at least 1 day
    const day = week[0] === null ? week[week.length - 1]! : week[0];
    const month = new Date(day).getUTCMonth();

    if (current !== month) {
      current = month;
      result.push({ month: current, position, size: 0 });
    }

    result[result.length - 1].size += 1;
    position += 1;
  });

  return result;
}
