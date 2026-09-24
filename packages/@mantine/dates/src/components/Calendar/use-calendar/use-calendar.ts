import { useCallback, useMemo, useRef } from 'react';
import { useCallbackRef, useUncontrolled } from '@mantine/hooks';
import { useUncontrolledDates } from '../../../hooks';
import type { CalendarLevel, DateStringValue } from '../../../types';
import { toDateString } from '../../../utils';
import { clampLevel } from '../clamp-level/clamp-level';
import {
  type CalendarShiftUnit,
  shiftCalendarDate,
} from '../shift-calendar-date/shift-calendar-date';

export interface CalendarControllerOptions {
  /** Displayed date in controlled mode */
  date?: DateStringValue | Date;

  /** Initial displayed date in uncontrolled mode */
  defaultDate?: DateStringValue | Date;

  /** Called when the displayed date changes */
  onDateChange?: (date: DateStringValue) => void;

  /** Displayed level in controlled mode */
  level?: CalendarLevel;

  /** Initial displayed level in uncontrolled mode @default 'month' */
  defaultLevel?: CalendarLevel;

  /** Called when the displayed level changes */
  onLevelChange?: (level: CalendarLevel) => void;
}

export interface CalendarRegisteredSettings {
  /** Object that identifies the associated `Calendar` instance, stable for its lifetime and new on every mount */
  instance?: object;

  /** Resolved `minLevel` prop of the associated `Calendar` */
  minLevel: CalendarLevel | undefined;

  /** Resolved `maxLevel` prop of the associated `Calendar` */
  maxLevel: CalendarLevel | undefined;

  /** Number of columns the associated `Calendar` scrolls with the next/previous controls */
  columnsToScroll: number;

  /** Date the associated `Calendar` displays while `date` is `null` */
  fallbackDate: DateStringValue | null;
}

export interface CalendarController {
  /** Displayed date, `null` until it is set by the user or by the associated `Calendar` */
  date: DateStringValue | null;

  /** Displayed level. The associated `Calendar` clamps it to its own `minLevel`/`maxLevel` when it renders */
  level: CalendarLevel;

  /** Returns the value of `date`, `null` until it is set. Use `getDisplayedDate` to get the date the associated `Calendar` actually displays */
  getDate: () => DateStringValue | null;

  /** Returns the value of `level` before clamping. Use `getDisplayedLevel` to get the level the associated `Calendar` actually displays */
  getLevel: () => CalendarLevel;

  /** `true` when `date` is controlled and `onDateChange` is not set, used internally by `Calendar` to disable the native level select */
  dateReadOnly: boolean;

  /** Sets the displayed date */
  setDate: (date: DateStringValue | Date) => void;

  /** Sets the displayed level, clamped to `minLevel`/`maxLevel` of the associated `Calendar` */
  setLevel: (level: CalendarLevel) => void;

  /** Moves the displayed date forward by one step of the current level, no-op until a `Calendar` is mounted */
  next: () => void;

  /** Moves the displayed date back by one step of the current level, no-op until a `Calendar` is mounted */
  previous: () => void;

  /** Moves the displayed date forward by `columnsToScroll` months, no-op until a `Calendar` is mounted */
  nextMonth: () => void;

  /** Moves the displayed date back by `columnsToScroll` months, no-op until a `Calendar` is mounted */
  previousMonth: () => void;

  /** Moves the displayed date forward by `columnsToScroll` years, no-op until a `Calendar` is mounted */
  nextYear: () => void;

  /** Moves the displayed date back by `columnsToScroll` years, no-op until a `Calendar` is mounted */
  previousYear: () => void;

  /** Moves the displayed date forward by `columnsToScroll` decades, no-op until a `Calendar` is mounted */
  nextDecade: () => void;

  /** Moves the displayed date back by `columnsToScroll` decades, no-op until a `Calendar` is mounted */
  previousDecade: () => void;

  /** Returns the date the associated `Calendar` displays, `null` until one is mounted */
  getDisplayedDate: () => DateStringValue | null;

  /** Returns `level` clamped to `minLevel`/`maxLevel` of the associated `Calendar`, which is the level it renders */
  getDisplayedLevel: () => CalendarLevel;

  /** Registers the resolved settings of the associated component, used internally by `Calendar` */
  registerCalendar: (settings: CalendarRegisteredSettings) => () => void;
}

const EMPTY_SETTINGS: CalendarRegisteredSettings = {
  minLevel: undefined,
  maxLevel: undefined,
  columnsToScroll: 1,
  fallbackDate: null,
};

export function useCalendar(options: CalendarControllerOptions = {}): CalendarController {
  const {
    date: dateProp,
    defaultDate,
    onDateChange,
    level: levelProp,
    defaultLevel,
    onLevelChange,
  } = options;

  const [dateValue, setDateState, dateControlled] = useUncontrolledDates({
    type: 'default',
    value: toDateString(dateProp),
    defaultValue: toDateString(defaultDate),
    onChange: onDateChange as any,
  });

  const [level, setLevelState] = useUncontrolled<CalendarLevel>({
    value: levelProp,
    defaultValue: defaultLevel,
    finalValue: 'month',
    onChange: onLevelChange,
  });

  const date: DateStringValue | null = dateValue ?? null;
  const dateReadOnly = Boolean(dateControlled) && !onDateChange;

  const settingsRef = useRef(EMPTY_SETTINGS);
  const dateRef = useRef(date);
  dateRef.current = date;
  const levelRef = useRef(level);
  levelRef.current = level;

  const setDate = useCallbackRef((next: DateStringValue | Date) => {
    const nextDate = toDateString(next);

    if (dateProp === undefined) {
      dateRef.current = nextDate;
    }

    setDateState(nextDate);
  });

  const setLevel = useCallbackRef((next: CalendarLevel) => {
    const nextLevel = clampLevel(next, settingsRef.current.minLevel, settingsRef.current.maxLevel);

    if (levelProp === undefined) {
      levelRef.current = nextLevel;
    }

    setLevelState(nextLevel);
  });

  const getDate = useCallback(() => dateRef.current, []);

  const getLevel = useCallback(() => levelRef.current, []);

  const getDisplayedDate = useCallback(
    () => dateRef.current ?? settingsRef.current.fallbackDate,
    []
  );

  const shift = useCallbackRef((amount: number, unit: CalendarShiftUnit) => {
    const displayedDate = getDisplayedDate();

    if (displayedDate === null) {
      return;
    }

    setDate(shiftCalendarDate(displayedDate, amount, unit, settingsRef.current.columnsToScroll));
  });

  const nextMonth = useCallbackRef(() => shift(1, 'month'));
  const previousMonth = useCallbackRef(() => shift(-1, 'month'));
  const nextYear = useCallbackRef(() => shift(1, 'year'));
  const previousYear = useCallbackRef(() => shift(-1, 'year'));
  const nextDecade = useCallbackRef(() => shift(10, 'year'));
  const previousDecade = useCallbackRef(() => shift(-10, 'year'));

  const getDisplayedLevel = useCallback(() => {
    return clampLevel(levelRef.current, settingsRef.current.minLevel, settingsRef.current.maxLevel);
  }, []);

  const next = useCallbackRef(() => {
    const displayedLevel = getDisplayedLevel();

    if (displayedLevel === 'month') {
      nextMonth();
    } else if (displayedLevel === 'year') {
      nextYear();
    } else {
      nextDecade();
    }
  });

  const previous = useCallbackRef(() => {
    const displayedLevel = getDisplayedLevel();

    if (displayedLevel === 'month') {
      previousMonth();
    } else if (displayedLevel === 'year') {
      previousYear();
    } else {
      previousDecade();
    }
  });

  const registerCalendar = useCallback((settings: CalendarRegisteredSettings) => {
    settingsRef.current = settings;

    return () => {
      if (settingsRef.current === settings) {
        settingsRef.current = EMPTY_SETTINGS;
      }
    };
  }, []);

  return useMemo(
    () => ({
      date,
      level,
      getDate,
      getLevel,
      dateReadOnly,
      setDate,
      setLevel,
      next,
      previous,
      nextMonth,
      previousMonth,
      nextYear,
      previousYear,
      nextDecade,
      previousDecade,
      getDisplayedDate,
      getDisplayedLevel,
      registerCalendar,
    }),
    [date, level, dateReadOnly]
  );
}
