import dayjs from 'dayjs';
import { useCallback, useEffectEvent, useState } from 'react';
import { DragContextValue } from '../components/DragContext/DragContext';
import { DateTimeStringValue, ScheduleEventData, ScheduleMode } from '../types';
import { useDragState } from './use-drag-state';

export interface UseDragDropHandlersOptions<T = any> {
  /** Whether drag and drop is enabled */
  enabled: boolean;

  /** Schedule interaction mode */
  mode: ScheduleMode;

  /** Called when event is dropped at new location */
  onEventDrop?: (data: {
    eventId: string | number;
    newStart: DateTimeStringValue;
    newEnd: DateTimeStringValue;
    event: ScheduleEventData;
  }) => void;

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

  /** Called when an external item is dropped onto the schedule */
  onExternalDrop?: (e: React.DragEvent, target: T) => void;
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
    onExternalDrop,
  } = options;

  const stableOnEventDrop = useEffectEvent(onEventDrop || (() => {}));
  const stableOnEventDragStart = useEffectEvent(onEventDragStart || (() => {}));
  const stableOnEventDragEnd = useEffectEvent(onEventDragEnd || (() => {}));
  const stableOnExternalDrop = useEffectEvent(onExternalDrop || (() => {}));

  const dragState = useDragState();
  const [dropTarget, setDropTarget] = useState<T | null>(null);

  const handleDragEnd = useCallback(() => {
    dragState.endDrag();
    setDropTarget(null);
    stableOnEventDragEnd();
  }, [dragState]);

  const handleDragStart = useCallback(
    (event: ScheduleEventData) => {
      if (!enabled || mode === 'static') {
        return;
      }
      dragState.startDrag(event);
      stableOnEventDragStart(event);
    },
    [enabled, mode, dragState]
  );

  const handleDragOver = useCallback(
    (event: React.DragEvent, target: T) => {
      if (mode === 'static') {
        return;
      }

      let isInternalDrag = dragState.state.isDragging;

      if (isInternalDrag && !event.dataTransfer.types.includes('application/json')) {
        handleDragEnd();
        isInternalDrag = false;
      }

      if (isInternalDrag && !enabled) {
        return;
      }

      if (!isInternalDrag && !onExternalDrop) {
        return;
      }

      event.preventDefault();
      event.dataTransfer.dropEffect = isInternalDrag ? 'move' : 'copy';
      setDropTarget(target);
    },
    [enabled, mode, dragState.state.isDragging, onExternalDrop, handleDragEnd]
  );

  const handleDragLeave = useCallback(() => {
    setDropTarget(null);
  }, []);

  const handleDrop = useCallback(
    (event: React.DragEvent, target: T) => {
      event.preventDefault();

      const isInternalDrag =
        dragState.state.isDragging && event.dataTransfer.types.includes('application/json');

      if (isInternalDrag && enabled && dragState.state.draggedEvent && onEventDrop) {
        const { start, end } = calculateDropTarget(target, dragState.state.draggedEvent);
        stableOnEventDrop({
          eventId: dragState.state.draggedEventId!,
          newStart: dayjs(start).format('YYYY-MM-DD HH:mm:ss'),
          newEnd: dayjs(end).format('YYYY-MM-DD HH:mm:ss'),
          event: dragState.state.draggedEvent,
        });
        handleDragEnd();
        return;
      }

      if (!isInternalDrag && onExternalDrop) {
        if (dragState.state.isDragging) {
          handleDragEnd();
        }
        stableOnExternalDrop(event, target);
        setDropTarget(null);
        return;
      }

      setDropTarget(null);
    },
    [
      enabled,
      dragState.state,
      onEventDrop,
      onExternalDrop,
      calculateDropTarget,
      handleDragEnd,
      stableOnEventDrop,
      stableOnExternalDrop,
    ]
  );

  const isDraggableEvent = useCallback(
    (event: ScheduleEventData) => {
      return (
        enabled &&
        mode !== 'static' &&
        event.display !== 'background' &&
        (canDragEvent ? canDragEvent(event) : true)
      );
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
