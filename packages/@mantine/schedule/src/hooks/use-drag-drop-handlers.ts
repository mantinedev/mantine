import dayjs from 'dayjs';
import { useCallback, useState } from 'react';
import { DragContextValue } from '../components/DragContext/DragContext';
import { DateTimeStringValue, ScheduleEventData, ScheduleMode } from '../types';
import { useDragState } from './use-drag-state';

export interface UseDragDropHandlersOptions<T = any> {
  /** Whether drag and drop is enabled */
  enabled: boolean;

  /** Schedule interaction mode */
  mode: ScheduleMode;

  /** Called when event is dropped at new location */
  onEventDrop?: (
    eventId: string | number,
    newStart: DateTimeStringValue,
    newEnd: DateTimeStringValue
  ) => void;

  /** Function to determine if event can be dragged */
  canDragEvent?: (event: ScheduleEventData) => boolean;

  /** Called when any event drag starts */
  onEventDragStart?: (event: ScheduleEventData) => void;

  /** Called when any event drag ends */
  onEventDragEnd?: () => void;

  /**
   * Function to calculate drop target dates from drop location.
   * Receives the target location and the dragged event.
   */
  calculateDropTarget: (target: T, draggedEvent: ScheduleEventData) => { start: Date; end: Date };
}

export interface DragDropHandlers<T = any> {
  /** Context value for DragContext.Provider */
  dragContextValue: DragContextValue;

  /** Current drop target */
  dropTarget: T | null;

  /** Handle drag start event */
  handleDragStart: (event: ScheduleEventData) => void;

  /** Handle drag end event */
  handleDragEnd: () => void;

  /** Handle drag over event */
  handleDragOver: (e: React.DragEvent, target: T) => void;

  /** Handle drag leave event */
  handleDragLeave: () => void;

  /** Handle drop event */
  handleDrop: (e: React.DragEvent, target: T) => void;

  /** Check if event is draggable */
  isDraggableEvent: (event: ScheduleEventData) => boolean;

  /** Check if target is the current drop target */
  isDropTarget: (target: T) => boolean;
}

/**
 * Hook that provides unified drag-drop handlers for Schedule views.
 * Handles drag state management and event drops across Day, Week, and Month views.
 *
 * @template T - Type of the drop target (e.g., slot index, day string, etc.)
 */
export function useDragDropHandlers<T = any>(
  options: UseDragDropHandlersOptions<T>
): DragDropHandlers<T> {
  const {
    enabled,
    mode,
    onEventDrop,
    canDragEvent,
    onEventDragStart,
    onEventDragEnd,
    calculateDropTarget,
  } = options;

  const dragState = useDragState();
  const [dropTarget, setDropTarget] = useState<T | null>(null);

  const handleDragStart = useCallback(
    (event: ScheduleEventData) => {
      if (!enabled || mode === 'static') {
        return;
      }
      dragState.startDrag(event);
      onEventDragStart?.(event);
    },
    [enabled, mode, dragState, onEventDragStart]
  );

  const handleDragEnd = useCallback(() => {
    dragState.endDrag();
    setDropTarget(null);
    onEventDragEnd?.();
  }, [dragState, onEventDragEnd]);

  const handleDragOver = useCallback(
    (event: React.DragEvent, target: T) => {
      if (!enabled || !dragState.state.isDragging || mode === 'static') {
        return;
      }
      event.preventDefault();
      event.dataTransfer.dropEffect = 'move';
      setDropTarget(target);
    },
    [enabled, mode, dragState.state.isDragging]
  );

  const handleDragLeave = useCallback(() => {
    setDropTarget(null);
  }, []);

  const handleDrop = useCallback(
    (event: React.DragEvent, target: T) => {
      event.preventDefault();

      if (!enabled || !dragState.state.draggedEvent || !onEventDrop) {
        return;
      }

      const { start, end } = calculateDropTarget(target, dragState.state.draggedEvent);
      onEventDrop(
        dragState.state.draggedEventId!,
        dayjs(start).format('YYYY-MM-DD HH:mm:ss'),
        dayjs(end).format('YYYY-MM-DD HH:mm:ss')
      );
      handleDragEnd();
    },
    [enabled, dragState.state, onEventDrop, calculateDropTarget, handleDragEnd]
  );

  const isDraggableEvent = useCallback(
    (event: ScheduleEventData) => {
      return enabled && mode !== 'static' && (canDragEvent ? canDragEvent(event) : true);
    },
    [enabled, mode, canDragEvent]
  );

  const isDropTarget = useCallback(
    (target: T) => {
      // Handle complex target comparison (for WeekView with day + slotIndex)
      if (dropTarget && typeof dropTarget === 'object' && typeof target === 'object') {
        return JSON.stringify(dropTarget) === JSON.stringify(target);
      }
      return dropTarget === target;
    },
    [dropTarget]
  );

  const dragContextValue: DragContextValue = {
    isDragging: dragState.state.isDragging,
    draggedEventId: dragState.state.draggedEventId,
    draggedEvent: dragState.state.draggedEvent,
    dropTarget: dragState.state.dropTarget,
    onDragStart: handleDragStart,
    onDragEnd: handleDragEnd,
    setDropTarget: dragState.setDropTarget,
  };

  return {
    dragContextValue,
    dropTarget,
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    isDraggableEvent,
    isDropTarget,
  };
}
