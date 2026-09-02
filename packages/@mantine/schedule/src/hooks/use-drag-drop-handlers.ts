import dayjs from 'dayjs';
import { useCallback, useEffectEvent, useState } from 'react';
import { DragContextValue } from '../components/DragContext/DragContext';
import {
  DateTimeStringValue,
  PreventEventOverlap,
  ScheduleCanDropEventData,
  ScheduleCanDropExternalEventData,
  ScheduleEventData,
  ScheduleEventPlacementRejectedData,
  ScheduleMode,
} from '../types';
import { isEventPlacementAllowed } from '../utils/is-event-placement-allowed/is-event-placement-allowed';
import { useDragState } from './use-drag-state';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export interface DragPreview<T = any> {
  start: DateTimeStringValue;
  end: DateTimeStringValue;
  target: T;
}

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

  /** Events the candidate range is checked against when `preventEventOverlap` is set */
  events?: ScheduleEventData[];

  /** If set, drops that would make the event overlap another event are rejected */
  preventEventOverlap?: PreventEventOverlap;

  /** Called before a drag is committed, return `false` to reject the drop */
  canDropEvent?: (data: ScheduleCanDropEventData) => boolean;

  /** Called before an external drop is committed, return `false` to reject the drop */
  canDropExternalEvent?: (data: ScheduleCanDropExternalEventData) => boolean;

  /** Called when a drop is rejected */
  onEventPlacementRejected?: (data: ScheduleEventPlacementRejectedData) => void;

  /** Resolves the target resource from the drop target, used by `Resources*` views */
  getTargetResourceId?: (target: T) => string | number | undefined;

  /** Resolves the datetime an external item would be dropped at, `null` when the target has no datetime */
  getExternalDropDateTime?: (target: T) => DateTimeStringValue | null;
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
  handleDragLeave: (event?: React.DragEvent) => void;

  /** Handle drop event */
  handleDrop: (e: React.DragEvent, target: T) => void;

  /** Check if event is draggable */
  isDraggableEvent: (event: ScheduleEventData) => boolean;

  /** Check if target is the current drop target */
  isDropTarget: (target: T) => boolean;

  /** Snapped drop preview used to render the drag ghost, or `null` when not dragging */
  dragPreview: DragPreview<T> | null;

  /** Sets the current drag preview */
  setDragPreview: (preview: DragPreview<T> | null) => void;

  /** False while the pointer is over a target that would be rejected */
  dropValid: boolean;
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
    events,
    preventEventOverlap,
    canDropEvent,
    canDropExternalEvent,
    onEventPlacementRejected,
    getTargetResourceId,
    getExternalDropDateTime,
  } = options;

  const stableOnEventDrop = useEffectEvent(onEventDrop || (() => {}));
  const stableOnEventPlacementRejected = useEffectEvent(onEventPlacementRejected || (() => {}));
  const stableOnEventDragStart = useEffectEvent(onEventDragStart || (() => {}));
  const stableOnEventDragEnd = useEffectEvent(onEventDragEnd || (() => {}));
  const stableOnExternalDrop = useEffectEvent(onExternalDrop || (() => {}));

  const dragState = useDragState();
  const [dropTarget, setDropTarget] = useState<T | null>(null);
  const [dragPreview, setDragPreview] = useState<DragPreview<T> | null>(null);
  const [dropValid, setDropValid] = useState(true);

  const validateDrop = useCallback(
    (target: T, draggedEvent: ScheduleEventData) => {
      const range = calculateDropTarget(target, draggedEvent);
      const start = dayjs(range.start).format(DATE_TIME_FORMAT);
      const end = dayjs(range.end).format(DATE_TIME_FORMAT);
      const resourceId = getTargetResourceId?.(target);

      const { allowed, conflicts } = isEventPlacementAllowed({
        event: draggedEvent,
        start,
        end,
        events: events || [],
        preventEventOverlap,
        resourceId,
      });

      if (!allowed) {
        return { valid: false, start, end, resourceId, conflicts, reason: 'overlap' as const };
      }

      if (canDropEvent && canDropEvent({ event: draggedEvent, start, end, resourceId }) === false) {
        return { valid: false, start, end, resourceId, conflicts: [], reason: 'rejected' as const };
      }

      return { valid: true, start, end, resourceId, conflicts: [], reason: null };
    },
    [calculateDropTarget, getTargetResourceId, events, preventEventOverlap, canDropEvent]
  );

  const validateExternalDrop = useCallback(
    (target: T, dataTransfer: DataTransfer) => {
      if (!canDropExternalEvent || !getExternalDropDateTime) {
        return { valid: true, start: undefined, resourceId: undefined };
      }

      const start = getExternalDropDateTime(target);

      if (start === null) {
        return { valid: true, start: undefined, resourceId: undefined };
      }

      const resourceId = getTargetResourceId?.(target);
      return {
        valid: canDropExternalEvent({ dataTransfer, start, resourceId }) !== false,
        start,
        resourceId,
      };
    },
    [canDropExternalEvent, getExternalDropDateTime, getTargetResourceId]
  );

  const handleDragEnd = useCallback(() => {
    dragState.endDrag();
    setDropTarget(null);
    setDragPreview(null);
    setDropValid(true);
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

      const draggedEvent = dragState.state.draggedEvent;
      const valid =
        isInternalDrag && draggedEvent
          ? validateDrop(target, draggedEvent).valid
          : validateExternalDrop(target, event.dataTransfer).valid;

      setDropValid(valid);

      // The drop effect stays permissive even for an invalid target: setting it to 'none' makes the
      // browser end the drag with dragleave/dragend and never fire `drop`, which would stop
      // `handleDrop` from rejecting the placement and reporting it through onEventPlacementRejected.
      // Invalid targets are signalled with `data-invalid` on the drag preview instead.
      event.dataTransfer.dropEffect = isInternalDrag ? 'move' : 'copy';
      setDropTarget(target);
    },
    [
      enabled,
      mode,
      dragState.state.isDragging,
      dragState.state.draggedEvent,
      onExternalDrop,
      handleDragEnd,
      validateDrop,
      validateExternalDrop,
    ]
  );

  const handleDragLeave = useCallback((event?: React.DragEvent) => {
    if (event?.currentTarget) {
      const rect = event.currentTarget.getBoundingClientRect();
      const isInside =
        event.clientX >= rect.left &&
        event.clientX < rect.right &&
        event.clientY >= rect.top &&
        event.clientY < rect.bottom;
      if (isInside) {
        return;
      }
    }

    setDropTarget(null);
    setDragPreview(null);
    setDropValid(true);
  }, []);

  const handleDrop = useCallback(
    (event: React.DragEvent, target: T) => {
      event.preventDefault();

      const isInternalDrag =
        dragState.state.isDragging && event.dataTransfer.types.includes('application/json');

      if (isInternalDrag && enabled && dragState.state.draggedEvent && onEventDrop) {
        const draggedEvent = dragState.state.draggedEvent;
        const { valid, start, end, resourceId, conflicts, reason } = validateDrop(
          target,
          draggedEvent
        );

        if (!valid) {
          stableOnEventPlacementRejected({
            action: 'drop',
            event: draggedEvent,
            start,
            end,
            resourceId,
            conflicts,
            reason: reason!,
          });
          handleDragEnd();
          return;
        }

        stableOnEventDrop({
          eventId: dragState.state.draggedEventId!,
          newStart: start,
          newEnd: end,
          event: draggedEvent,
        });
        handleDragEnd();
        return;
      }

      if (!isInternalDrag && onExternalDrop) {
        if (dragState.state.isDragging) {
          handleDragEnd();
        }

        const external = validateExternalDrop(target, event.dataTransfer);

        if (!external.valid) {
          stableOnEventPlacementRejected({
            action: 'external-drop',
            dataTransfer: event.dataTransfer,
            start: external.start!,
            end: external.start!,
            resourceId: external.resourceId,
            conflicts: [],
            reason: 'rejected',
          });
        } else {
          stableOnExternalDrop(event, target);
        }

        setDropTarget(null);
        setDragPreview(null);
        setDropValid(true);
        return;
      }

      setDropTarget(null);
      setDragPreview(null);
      setDropValid(true);
    },
    [
      enabled,
      dragState.state,
      onEventDrop,
      onExternalDrop,
      handleDragEnd,
      validateDrop,
      validateExternalDrop,
      stableOnEventDrop,
      stableOnExternalDrop,
      stableOnEventPlacementRejected,
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
    dragPreview,
    setDragPreview,
    dropValid,
  };
}
