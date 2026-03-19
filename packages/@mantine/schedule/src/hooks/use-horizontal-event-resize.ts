import dayjs from 'dayjs';
import { useCallback, useEffect, useRef, useState } from 'react';
import { DateTimeStringValue, ScheduleEventData, ScheduleMode } from '../types';
import { parseTimeString } from '../utils/parse-time-string/parse-time-string';

type ResizeEdge = 'start' | 'end';

interface ResizeState {
  eventId: string | number;
  event: ScheduleEventData;
  edge: ResizeEdge;
  container: HTMLElement;
  originalLeft: number;
  originalWidth: number;
  currentLeft: number;
  currentWidth: number;
  eventDate: string;
  originalStart: DateTimeStringValue;
  originalEnd: DateTimeStringValue;
}

export interface UseHorizontalEventResizeInput {
  enabled?: boolean;
  mode?: ScheduleMode;
  startTime: string;
  endTime: string;
  intervalMinutes: number;
  onEventResize?: (
    eventId: string | number,
    newStart: DateTimeStringValue,
    newEnd: DateTimeStringValue,
    event: ScheduleEventData
  ) => void;
  canResizeEvent?: (event: ScheduleEventData) => boolean;
}

export function useHorizontalEventResize({
  enabled = false,
  mode = 'default',
  startTime,
  endTime,
  intervalMinutes,
  onEventResize,
  canResizeEvent,
}: UseHorizontalEventResizeInput) {
  const [resizeState, setResizeState] = useState<ResizeState | null>(null);
  const resizeRef = useRef<ResizeState | null>(null);
  const onEventResizeRef = useRef(onEventResize);
  onEventResizeRef.current = onEventResize;

  const parsedStartTime = parseTimeString(startTime);
  const parsedEndTime = parseTimeString(endTime);
  const startMinutes = parsedStartTime.hours * 60 + parsedStartTime.minutes;
  const endMinutes = parsedEndTime.hours * 60 + parsedEndTime.minutes;
  const totalMinutes = endMinutes - startMinutes;
  const minWidthPercent = (intervalMinutes / totalMinutes) * 100;

  const clampAndSnap = useCallback(
    (minutes: number): number => {
      const snapped = Math.round(minutes / intervalMinutes) * intervalMinutes;
      return Math.max(0, Math.min(totalMinutes, snapped));
    },
    [totalMinutes, intervalMinutes]
  );

  const percentToDateTime = useCallback(
    (percent: number, eventDate: string): DateTimeStringValue => {
      const minutes = (percent / 100) * totalMinutes;
      const snappedMinutes = clampAndSnap(minutes);
      const totalMins = startMinutes + snappedMinutes;
      const hours = Math.floor(totalMins / 60);
      const mins = totalMins % 60;
      return `${eventDate} ${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:00`;
    },
    [totalMinutes, startMinutes, clampAndSnap]
  );

  const snapPercent = useCallback(
    (percent: number): number => {
      const minutes = (percent / 100) * totalMinutes;
      const snappedMinutes = clampAndSnap(minutes);
      return (snappedMinutes / totalMinutes) * 100;
    },
    [totalMinutes, clampAndSnap]
  );

  const handleResizeStart = useCallback(
    (
      event: ScheduleEventData,
      edge: ResizeEdge,
      container: HTMLElement,
      originalLeft: number,
      originalWidth: number,
      eventDate: string,
      pointerEvent: React.PointerEvent
    ) => {
      if (!enabled || mode === 'static') {
        return;
      }

      pointerEvent.preventDefault();
      pointerEvent.stopPropagation();

      const state: ResizeState = {
        eventId: event.id,
        event,
        edge,
        container,
        originalLeft,
        originalWidth,
        currentLeft: originalLeft,
        currentWidth: originalWidth,
        eventDate,
        originalStart: dayjs(event.start).format('YYYY-MM-DD HH:mm:ss'),
        originalEnd: dayjs(event.end).format('YYYY-MM-DD HH:mm:ss'),
      };

      resizeRef.current = state;
      setResizeState(state);
    },
    [enabled, mode]
  );

  const isResizing = resizeState !== null;

  useEffect(() => {
    if (!isResizing) {
      return undefined;
    }

    const savedUserSelect = document.body.style.userSelect;
    const savedCursor = document.body.style.cursor;
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'ew-resize';

    const handlePointerMove = (e: PointerEvent) => {
      const state = resizeRef.current;
      if (!state) {
        return;
      }

      const containerRect = state.container.getBoundingClientRect();
      const relativeX = e.clientX - containerRect.left;
      const rawPercent = Math.max(0, Math.min(100, (relativeX / containerRect.width) * 100));
      const snappedPercent = snapPercent(rawPercent);

      let newLeft = state.originalLeft;
      let newWidth = state.originalWidth;

      if (state.edge === 'end') {
        newWidth = Math.max(minWidthPercent, snappedPercent - state.originalLeft);
      } else {
        const originalRight = state.originalLeft + state.originalWidth;
        newLeft = Math.min(snappedPercent, originalRight - minWidthPercent);
        newWidth = originalRight - newLeft;
      }

      resizeRef.current = { ...state, currentLeft: newLeft, currentWidth: newWidth };
      setResizeState(resizeRef.current);
    };

    const handlePointerUp = () => {
      const state = resizeRef.current;
      if (state && onEventResizeRef.current) {
        if (
          state.currentLeft !== state.originalLeft ||
          state.currentWidth !== state.originalWidth
        ) {
          let newStart: DateTimeStringValue;
          let newEnd: DateTimeStringValue;

          if (state.edge === 'start') {
            newStart = percentToDateTime(state.currentLeft, state.eventDate);
            newEnd = state.originalEnd;
          } else {
            newStart = state.originalStart;
            newEnd = percentToDateTime(state.currentLeft + state.currentWidth, state.eventDate);
          }

          onEventResizeRef.current(state.eventId, newStart, newEnd, state.event);
        }
      }
      resizeRef.current = null;
      setResizeState(null);
    };

    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);

    return () => {
      document.body.style.userSelect = savedUserSelect;
      document.body.style.cursor = savedCursor;
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isResizing]);

  const getResizePosition = useCallback(
    (eventId: string | number) => {
      if (!resizeState || resizeState.eventId !== eventId) {
        return null;
      }
      return { left: resizeState.currentLeft, width: resizeState.currentWidth };
    },
    [resizeState]
  );

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
    getResizePosition,
    isResizableEvent,
  };
}
