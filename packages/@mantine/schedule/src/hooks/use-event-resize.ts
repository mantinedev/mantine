import dayjs from 'dayjs';
import { useCallback, useEffect, useEffectEvent, useRef, useState } from 'react';
import { DateTimeStringValue, ScheduleEventData, ScheduleMode } from '../types';
import { parseTimeString } from '../utils/parse-time-string/parse-time-string';

type ResizeEdge = 'top' | 'bottom';

interface ResizeState {
  eventId: string | number;
  event: ScheduleEventData;
  edge: ResizeEdge;
  container: HTMLElement;
  originalTop: number;
  originalHeight: number;
  currentTop: number;
  currentHeight: number;
  eventDate: string;
  originalStart: DateTimeStringValue;
  originalEnd: DateTimeStringValue;
}

export interface UseEventResizeInput {
  enabled?: boolean;
  mode?: ScheduleMode;
  startTime: string;
  endTime: string;
  intervalMinutes: number;
  onEventResize?: (data: {
    eventId: string | number;
    newStart: DateTimeStringValue;
    newEnd: DateTimeStringValue;
    event: ScheduleEventData;
  }) => void;
  canResizeEvent?: (event: ScheduleEventData) => boolean;
}

export function useEventResize({
  enabled = false,
  mode = 'default',
  startTime,
  endTime,
  intervalMinutes,
  onEventResize,
  canResizeEvent,
}: UseEventResizeInput) {
  const [resizeState, setResizeState] = useState<ResizeState | null>(null);
  const resizeRef = useRef<ResizeState | null>(null);
  const justResizedRef = useRef(false);
  const stableOnEventResize = useEffectEvent(onEventResize || (() => {}));

  const parsedStartTime = parseTimeString(startTime);
  const parsedEndTime = parseTimeString(endTime);
  const startMinutes = parsedStartTime.hours * 60 + parsedStartTime.minutes;
  const endMinutes = parsedEndTime.hours * 60 + parsedEndTime.minutes;
  const totalMinutes = endMinutes - startMinutes;
  const minHeightPercent = (intervalMinutes / totalMinutes) * 100;

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
    ({
      event,
      edge,
      container,
      originalTop,
      originalHeight,
      eventDate,
      pointerEvent,
    }: {
      event: ScheduleEventData;
      edge: ResizeEdge;
      container: HTMLElement;
      originalTop: number;
      originalHeight: number;
      eventDate: string;
      pointerEvent: React.PointerEvent;
    }) => {
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
        originalTop,
        originalHeight,
        currentTop: originalTop,
        currentHeight: originalHeight,
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
    document.body.style.userSelect = 'none';

    const handlePointerMove = (e: PointerEvent) => {
      const state = resizeRef.current;
      if (!state) {
        return;
      }

      const containerRect = state.container.getBoundingClientRect();
      const relativeY = e.clientY - containerRect.top;
      const rawPercent = Math.max(0, Math.min(100, (relativeY / containerRect.height) * 100));
      const snappedPercent = snapPercent(rawPercent);

      let newTop = state.originalTop;
      let newHeight = state.originalHeight;

      if (state.edge === 'bottom') {
        newHeight = Math.max(minHeightPercent, snappedPercent - state.originalTop);
      } else {
        const originalBottom = state.originalTop + state.originalHeight;
        newTop = Math.min(snappedPercent, originalBottom - minHeightPercent);
        newHeight = originalBottom - newTop;
      }

      resizeRef.current = { ...state, currentTop: newTop, currentHeight: newHeight };
      setResizeState(resizeRef.current);
    };

    const handlePointerUp = () => {
      const state = resizeRef.current;
      if (state) {
        if (
          state.currentTop !== state.originalTop ||
          state.currentHeight !== state.originalHeight
        ) {
          let newStart: DateTimeStringValue;
          let newEnd: DateTimeStringValue;

          if (state.edge === 'top') {
            newStart = percentToDateTime(state.currentTop, state.eventDate);
            newEnd = state.originalEnd;
          } else {
            newStart = state.originalStart;
            newEnd = percentToDateTime(state.currentTop + state.currentHeight, state.eventDate);
          }

          stableOnEventResize({
            eventId: state.eventId,
            newStart,
            newEnd,
            event: state.event,
          });
        }
      }
      resizeRef.current = null;
      setResizeState(null);
      justResizedRef.current = true;
      requestAnimationFrame(() => {
        justResizedRef.current = false;
      });
    };

    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);

    return () => {
      document.body.style.userSelect = savedUserSelect;
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isResizing]);

  const getResizePosition = useCallback(
    (eventId: string | number) => {
      if (!resizeState || resizeState.eventId !== eventId) {
        return null;
      }
      return { top: resizeState.currentTop, height: resizeState.currentHeight };
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

  const wasResizing = useCallback(() => justResizedRef.current, []);

  return {
    handleResizeStart,
    isResizing,
    resizingEventId: resizeState?.eventId ?? null,
    getResizePosition,
    isResizableEvent,
    wasResizing,
  };
}
