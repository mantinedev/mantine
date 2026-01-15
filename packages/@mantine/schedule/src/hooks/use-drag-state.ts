import { useState, useCallback } from 'react';
import { DateStringValue, ScheduleEventData } from '../types';

export interface DropTarget {
  /** Target date in YYYY-MM-DD format */
  date: DateStringValue;

  /** Target time in HH:mm:ss format (for DayView/WeekView) */
  time?: string;

  /** Target slot index (for DayView/WeekView) */
  slotIndex?: number;
}

export interface DragState {
  /** Whether an event is currently being dragged */
  isDragging: boolean;

  /** ID of the event being dragged */
  draggedEventId: string | number | null;

  /** The event being dragged */
  draggedEvent: ScheduleEventData | null;

  /** Current drop target information */
  dropTarget: DropTarget | null;
}

export interface UseDragStateReturn {
  /** Current drag state */
  state: DragState;

  /** Start dragging an event */
  startDrag: (event: ScheduleEventData) => void;

  /** End dragging */
  endDrag: () => void;

  /** Set the current drop target */
  setDropTarget: (target: DropTarget | null) => void;

  /** Clear the drop target */
  clearDropTarget: () => void;
}

const initialState: DragState = {
  isDragging: false,
  draggedEventId: null,
  draggedEvent: null,
  dropTarget: null,
};

export function useDragState(): UseDragStateReturn {
  const [state, setState] = useState<DragState>(initialState);

  const startDrag = useCallback((event: ScheduleEventData) => {
    setState({
      isDragging: true,
      draggedEventId: event.id,
      draggedEvent: event,
      dropTarget: null,
    });
  }, []);

  const endDrag = useCallback(() => {
    setState(initialState);
  }, []);

  const setDropTarget = useCallback((target: DropTarget | null) => {
    setState((prev) => ({
      ...prev,
      dropTarget: target,
    }));
  }, []);

  const clearDropTarget = useCallback(() => {
    setState((prev) => ({
      ...prev,
      dropTarget: null,
    }));
  }, []);

  return {
    state,
    startDrag,
    endDrag,
    setDropTarget,
    clearDropTarget,
  };
}
