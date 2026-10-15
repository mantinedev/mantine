import dayjs from 'dayjs';
import { useCallback, useEffectEvent, useRef, useState } from 'react';
import { DateStringValue, DateTimeStringValue, ScheduleEventData, ScheduleMode } from '../types';
import {
  calculateMonthResizeDates,
  MonthResizeEdge,
} from '../utils/calculate-month-resize-dates/calculate-month-resize-dates';
import { getIndexFromDragPoint } from '../utils/get-index-from-drag-point/get-index-from-drag-point';
import { useResizeGesture } from './use-resize-gesture';
import { EventResizeValidationOptions, validateEventResize } from './validate-event-resize';

interface ResizeState {
  eventId: string | number;
  event: ScheduleEventData;
  edge: MonthResizeEdge;
  cells: (HTMLElement | null)[];
  days: DateStringValue[];
  dayIndex: number;
  originalStart: DateTimeStringValue;
  originalEnd: DateTimeStringValue;
  start: DateTimeStringValue;
  end: DateTimeStringValue;
}

export interface UseDayGridEventResizeInput extends EventResizeValidationOptions {
  enabled?: boolean;
  mode?: ScheduleMode;
  onEventResize?: (data: {
    eventId: string | number;
    newStart: DateTimeStringValue;
    newEnd: DateTimeStringValue;
    event: ScheduleEventData;
  }) => void;
  canResizeEvent?: (event: ScheduleEventData) => boolean;
}

export interface DayGridResizeStartInput {
  event: ScheduleEventData;
  edge: MonthResizeEdge;
  cells: (HTMLElement | null)[];
  days: DateStringValue[];
  pointerEvent: React.PointerEvent;
}

/**
 * Resizes an event by dragging its start or end edge across a strip of day cells.
 * The target day is resolved by hit-testing `cells` with the pointer position, so
 * the hook works for any layout that renders one element per day in a single row.
 */
export function useDayGridEventResize({
  enabled = false,
  mode = 'default',
  onEventResize,
  canResizeEvent,
  events,
  preventEventOverlap,
  canResizeEventTo,
  onEventPlacementRejected,
}: UseDayGridEventResizeInput) {
  const [resizeState, setResizeState] = useState<ResizeState | null>(null);
  const [resizeValid, setResizeValid] = useState(true);
  const resizeRef = useRef<ResizeState | null>(null);
  const stableOnEventResize = useEffectEvent(onEventResize || (() => {}));
  const stableOnEventPlacementRejected = useEffectEvent(onEventPlacementRejected || (() => {}));

  const validateResize = useEffectEvent((state: ResizeState) =>
    validateEventResize({
      event: state.event,
      start: state.start,
      end: state.end,
      edge: state.edge,
      events,
      preventEventOverlap,
      canResizeEventTo,
      resourceId: state.event.resourceId,
    })
  );

  const handleResizeStart = useCallback(
    ({ event, edge, cells, days, pointerEvent }: DayGridResizeStartInput) => {
      if (!enabled || mode === 'static') {
        return;
      }

      pointerEvent.preventDefault();
      pointerEvent.stopPropagation();

      const originalStart = dayjs(event.start).format('YYYY-MM-DD HH:mm:ss');
      const originalEnd = dayjs(event.end).format('YYYY-MM-DD HH:mm:ss');

      const state: ResizeState = {
        eventId: event.id,
        event,
        edge,
        cells,
        days,
        dayIndex: -1,
        originalStart,
        originalEnd,
        start: originalStart,
        end: originalEnd,
      };

      resizeRef.current = state;
      setResizeState(state);
      setResizeValid(true);
    },
    [enabled, mode]
  );

  const isResizing = resizeState !== null;

  const handlePointerMove = (e: PointerEvent) => {
    const state = resizeRef.current;
    if (!state) {
      return;
    }

    const dayIndex = getIndexFromDragPoint(state.cells, e.clientX);
    if (dayIndex === null || dayIndex === state.dayIndex) {
      return;
    }

    const targetDay = state.days[dayIndex];
    if (!targetDay) {
      return;
    }

    const { start, end } = calculateMonthResizeDates({
      event: state.event,
      edge: state.edge,
      targetDay,
    });

    resizeRef.current = { ...state, dayIndex, start, end };
    setResizeState(resizeRef.current);
    setResizeValid(validateResize(resizeRef.current).valid);
  };

  const commitResize = () => {
    const state = resizeRef.current;
    if (state && (state.start !== state.originalStart || state.end !== state.originalEnd)) {
      const { valid, conflicts, reason } = validateResize(state);

      if (valid) {
        stableOnEventResize({
          eventId: state.eventId,
          newStart: state.start,
          newEnd: state.end,
          event: state.event,
        });
      } else {
        stableOnEventPlacementRejected({
          action: 'resize',
          event: state.event,
          start: state.start,
          end: state.end,
          edge: state.edge,
          resourceId: state.event.resourceId,
          conflicts,
          reason: reason!,
        });
      }
    }
  };

  const endResize = () => {
    resizeRef.current = null;
    setResizeState(null);
    setResizeValid(true);
  };

  const wasResizing = useResizeGesture({
    active: isResizing,
    cursor: 'ew-resize',
    onMove: handlePointerMove,
    onCommit: commitResize,
    onEnd: endResize,
  });

  const isResizableEvent = useCallback(
    (event: ScheduleEventData) => {
      if (!enabled || mode === 'static' || event.display === 'background') {
        return false;
      }
      return canResizeEvent ? canResizeEvent(event) : true;
    },
    [enabled, mode, canResizeEvent]
  );

  return {
    handleResizeStart,
    isResizing,
    resizingEventId: resizeState?.eventId ?? null,
    resizingEdge: resizeState?.edge ?? null,
    previewStart: resizeState?.start ?? null,
    previewEnd: resizeState?.end ?? null,
    isResizableEvent,
    wasResizing,
    resizeValid,
  };
}
