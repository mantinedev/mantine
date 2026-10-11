import { useRef } from 'react';
import { usePendingControlFocus } from '../../../hooks';
import { CalendarLevel, DateStringValue, DayOfWeek } from '../../../types';
import { ControlEdgeCrossPayload, handleControlKeyDown } from '../../../utils';
import type { CalendarNavigation } from '../Calendar.context';
import { useDaysNavigation } from '../use-days-navigation/use-days-navigation';

interface UseControlsNavigationInput {
  level: CalendarLevel;
  yearBody: 'months' | 'quarters';
  date: DateStringValue;
  numberOfColumns: number;
  firstDayOfWeek: DayOfWeek;
  consistentWeeks: boolean;
  minDate: DateStringValue | undefined;
  maxDate: DateStringValue | undefined;
  previousDisabled: boolean;
  nextDisabled: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

type ControlsRef = React.RefObject<HTMLButtonElement[][][]>;

function assignControl(
  ref: ControlsRef,
  levelIndex: number,
  rowIndex: number,
  cellIndex: number,
  node: HTMLButtonElement
) {
  if (!Array.isArray(ref.current[levelIndex])) {
    ref.current[levelIndex] = [];
  }

  if (!Array.isArray(ref.current[levelIndex][rowIndex])) {
    ref.current[levelIndex][rowIndex] = [];
  }

  ref.current[levelIndex][rowIndex][cellIndex] = node;
}

export function useControlsNavigation({
  level,
  yearBody,
  date,
  numberOfColumns,
  firstDayOfWeek,
  consistentWeeks,
  minDate,
  maxDate,
  previousDisabled,
  nextDisabled,
  onPrevious,
  onNext,
}: UseControlsNavigationInput): CalendarNavigation {
  const controlsRef = useRef<HTMLButtonElement[][][]>([]);
  const daysRefs = useRef<HTMLButtonElement[][][]>([]);
  const weekControlsRefs = useRef<HTMLButtonElement[][][]>([]);

  const gridKey = `${level}-${yearBody}-${numberOfColumns}`;
  const gridKeyRef = useRef(gridKey);

  if (gridKeyRef.current !== gridKey) {
    gridKeyRef.current = gridKey;
    controlsRef.current = [];
    daysRefs.current = [];
    weekControlsRefs.current = [];
  }

  const requestControlFocus = usePendingControlFocus({ controlsRef, period: date });

  const { handleDayKeyDown, handleWeekControlKeyDown, preserveFocusOnShift } = useDaysNavigation({
    month: date,
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
  });

  const handleEdgeCross = ({ edge, direction, cellIndex }: ControlEdgeCrossPayload) => {
    const handler = edge === 'previous' ? onPrevious : onNext;
    const disabled = edge === 'previous' ? previousDisabled : nextDisabled;

    if (disabled) {
      return;
    }

    requestControlFocus({
      direction,
      levelIndex: edge === 'previous' ? 'last' : 0,
      rowIndex: edge === 'previous' ? 'last' : 0,
      cellIndex:
        direction === 'up' || direction === 'down' ? cellIndex : edge === 'previous' ? 'last' : 0,
    });
    handler();
  };

  return {
    getControlRef: (levelIndex, rowIndex, cellIndex, node) =>
      assignControl(controlsRef, levelIndex, rowIndex, cellIndex, node),
    onControlKeyDown: (levelIndex, event, payload) =>
      handleControlKeyDown({
        levelIndex,
        rowIndex: payload.rowIndex,
        cellIndex: payload.cellIndex,
        event,
        controlsRef,
        onEdgeCross: handleEdgeCross,
      }),
    getDayRef: (levelIndex, rowIndex, cellIndex, node) =>
      assignControl(daysRefs, levelIndex, rowIndex, cellIndex, node),
    onDayKeyDown: handleDayKeyDown,
    getWeekControlRef: (levelIndex, rowIndex, node) => {
      if (!Array.isArray(weekControlsRefs.current[levelIndex])) {
        weekControlsRefs.current[levelIndex] = [];
      }

      weekControlsRefs.current[levelIndex][rowIndex] = [node];
    },
    onWeekControlKeyDown: handleWeekControlKeyDown,
    preserveDayFocusOnShift: preserveFocusOnShift,
  };
}
