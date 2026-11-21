import dayjs from 'dayjs';
import { DateStringValue, DayOfWeek } from '../../../types';
import { toDateString } from '../../../utils';
import { getStartOfWeek } from '../../Month/get-start-of-week/get-start-of-week';

interface WeekControlProps {
  selected?: boolean;
  inRange?: boolean;
  firstInRange?: boolean;
  lastInRange?: boolean;
  'data-autofocus'?: boolean | undefined;
}

interface GetWeekPickerDayPropsInput {
  date: DateStringValue;
  firstDayOfWeek: DayOfWeek;
  hoveredWeek: DateStringValue | null;
  getControlProps: (date: DateStringValue) => WeekControlProps;
}

export function getWeekPickerDayProps({
  date,
  firstDayOfWeek,
  hoveredWeek,
  getControlProps,
}: GetWeekPickerDayPropsInput) {
  const weekStart = getStartOfWeek(date, firstDayOfWeek);
  const control = getControlProps(weekStart);

  return {
    selected: !!control.selected,
    inRange: !!control.inRange,
    firstInRange: !!control.firstInRange,
    lastInRange: !!control.lastInRange,
    'data-week-hovered': hoveredWeek === weekStart || undefined,
  };
}

export function normalizeWeekValue(
  value: DateStringValue | Date | null | undefined,
  firstDayOfWeek: DayOfWeek
): DateStringValue | null | undefined;
export function normalizeWeekValue(
  value: (DateStringValue | Date | null)[],
  firstDayOfWeek: DayOfWeek
): (DateStringValue | null)[];
export function normalizeWeekValue(
  value: DateStringValue | Date | null | undefined | (DateStringValue | Date | null)[],
  firstDayOfWeek: DayOfWeek
): DateStringValue | null | undefined | (DateStringValue | null)[] {
  if (value === undefined || value === null) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizeWeekValue(item, firstDayOfWeek) as DateStringValue | null);
  }

  const str = toDateString(value);
  if (!str || !dayjs(str).isValid()) {
    return null;
  }

  return getStartOfWeek(str, firstDayOfWeek);
}
