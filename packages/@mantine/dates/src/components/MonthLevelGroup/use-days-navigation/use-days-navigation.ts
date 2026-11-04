import dayjs from 'dayjs';
import { RefObject, useEffect, useRef } from 'react';
import { DateStringValue, DayOfWeek } from '../../../types';
import { getMonthDays } from '../../Month/get-month-days/get-month-days';

type Direction = 'up' | 'down' | 'left' | 'right';

const STEPS: Record<Direction, number> = { up: -7, down: 7, left: -1, right: 1 };

function getDirection(key: string, dir: 'ltr' | 'rtl'): Direction | null {
  switch (key) {
    case 'ArrowDown':
      return 'down';
    case 'ArrowUp':
      return 'up';
    case 'ArrowRight':
      return dir === 'rtl' ? 'left' : 'right';
    case 'ArrowLeft':
      return dir === 'rtl' ? 'right' : 'left';
    default:
      return null;
  }
}

function addDays(date: DateStringValue, days: number): DateStringValue {
  return dayjs(date).add(days, 'day').format('YYYY-MM-DD');
}

function isFocusable(node: HTMLButtonElement) {
  return !node.disabled && !node.hasAttribute('data-hidden');
}

interface UseDaysNavigationInput {
  month: DateStringValue;
  dir: 'ltr' | 'rtl';
  numberOfColumns: number;
  firstDayOfWeek: DayOfWeek;
  consistentWeeks: boolean;
  daysRefs: RefObject<HTMLButtonElement[][][]>;
  weekControlsRefs: RefObject<HTMLButtonElement[][][]>;
  minDate: DateStringValue | undefined;
  maxDate: DateStringValue | undefined;
  previousDisabled: boolean;
  nextDisabled: boolean;
  onPrevious: (() => void) | undefined;
  onNext: (() => void) | undefined;
}

interface PendingFocus {
  date: DateStringValue;
  step: number;
  month: DateStringValue;
  weekControls: boolean;
  revert?: boolean;
}

interface FocusDateInput {
  date: DateStringValue;
  step: number;
  weekControls: boolean;
  allowCrossing: boolean;
}

export function useDaysNavigation({
  month,
  dir,
  numberOfColumns,
  firstDayOfWeek,
  consistentWeeks,
  daysRefs,
  weekControlsRefs,
  minDate,
  maxDate,
  previousDisabled,
  nextDisabled,
  onPrevious,
  onNext,
}: UseDaysNavigationInput) {
  const pending = useRef<PendingFocus | null>(null);

  const getGrids = () =>
    Array.from({ length: numberOfColumns }, (_, index) =>
      getMonthDays({
        month: dayjs(month).add(index, 'months').format('YYYY-MM-DD'),
        firstDayOfWeek,
        consistentWeeks,
      })
    );

  const getRenderedNodes = (
    grids: DateStringValue[][][],
    date: DateStringValue,
    weekControls: boolean
  ) => {
    const nodes: HTMLButtonElement[] = [];

    grids.forEach((rows, levelIndex) => {
      rows.forEach((row, rowIndex) => {
        const cellIndex = weekControls ? (row[0] === date ? 0 : -1) : row.indexOf(date);

        if (cellIndex === -1) {
          return;
        }

        const refs = weekControls ? weekControlsRefs : daysRefs;
        const node = refs.current?.[levelIndex]?.[rowIndex]?.[cellIndex];

        if (node && !node.hasAttribute('data-hidden')) {
          nodes.push(node);
        }
      });
    });

    return nodes;
  };

  const crossPeriod = (date: DateStringValue, step: number, weekControls: boolean) => {
    const edge = step < 0 ? 'previous' : 'next';
    const handler = edge === 'previous' ? onPrevious : onNext;
    const disabled = edge === 'previous' ? previousDisabled : nextDisabled;

    if (!handler || disabled) {
      return;
    }

    if (minDate && dayjs(date).isBefore(minDate, 'day')) {
      return;
    }

    if (maxDate && dayjs(date).isAfter(maxDate, 'day')) {
      return;
    }

    pending.current = { date, step, month, weekControls };
    handler();
  };

  const focusDate = ({ date, step, weekControls, allowCrossing }: FocusDateInput) => {
    const grids = getGrids();
    let current = date;

    for (let i = 0; i < 100; i += 1) {
      const nodes = getRenderedNodes(grids, current, weekControls);

      if (nodes.length === 0) {
        allowCrossing && crossPeriod(current, step, weekControls);
        return false;
      }

      const enabled = nodes.filter(isFocusable);
      const node = enabled.find((item) => !item.hasAttribute('data-outside')) || enabled[0];

      if (node) {
        node.focus();
        return true;
      }

      current = addDays(current, step);
    }

    return false;
  };

  const revertCrossing = (request: PendingFocus) => {
    const handler = request.step < 0 ? onNext : onPrevious;
    const disabled = request.step < 0 ? nextDisabled : previousDisabled;

    if (!handler || disabled) {
      return;
    }

    pending.current = {
      date: addDays(request.date, -request.step),
      step: -request.step,
      month,
      weekControls: request.weekControls,
      revert: true,
    };
    handler();
  };

  useEffect(() => {
    const request = pending.current;
    pending.current = null;

    if (request && request.month !== month) {
      const focused = focusDate({
        date: request.date,
        step: request.step,
        weekControls: request.weekControls,
        allowCrossing: false,
      });

      if (!focused && !request.revert) {
        revertCrossing(request);
      }
    }
  });

  const handleDayKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    payload: { date: DateStringValue }
  ) => {
    const direction = getDirection(event.key, dir);

    if (!direction) {
      return;
    }

    event.preventDefault();
    const step = STEPS[direction];
    focusDate({
      date: addDays(payload.date, step),
      step,
      weekControls: false,
      allowCrossing: true,
    });
  };

  const handleWeekControlKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    payload: { date: DateStringValue }
  ) => {
    const direction = getDirection(event.key, dir);

    if (direction !== 'up' && direction !== 'down') {
      return;
    }

    event.preventDefault();
    const step = STEPS[direction];
    focusDate({
      date: addDays(payload.date, step),
      step,
      weekControls: true,
      allowCrossing: true,
    });
  };

  return { handleDayKeyDown, handleWeekControlKeyDown };
}
