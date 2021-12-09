interface GetDayAutofocus {
  hasValue: boolean;
  selected: boolean;
  firstInMonth: boolean;
}

export function getDayAutofocus({ hasValue, selected, firstInMonth }: GetDayAutofocus) {
  if (hasValue) {
    return selected ? true : undefined;
  }

  return firstInMonth ? true : undefined;
}
