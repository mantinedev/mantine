interface GetDayTabIndex {
  focusable: boolean;
  hasValue: boolean;
  selected: boolean;
  firstInMonth: boolean;
}

export function getDayTabIndex({ focusable, hasValue, selected, firstInMonth }: GetDayTabIndex) {
  if (!focusable) {
    return -1;
  }

  if (hasValue) {
    return selected ? 0 : -1;
  }

  return firstInMonth ? 0 : -1;
}
