interface GetYearsListInput {
  startYear: number;
  endYear: number;
}

export function getYearsList({ startYear, endYear }: GetYearsListInput) {
  const years: number[] = [];

  for (let year = startYear; year <= endYear; year++) {
    years.push(year);
  }

  return years;
}
