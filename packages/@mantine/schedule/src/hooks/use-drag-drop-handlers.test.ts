import { act, renderHook } from '@testing-library/react';
import { testUtils } from '../test-utils';
import { ScheduleEventData } from '../types';
import { useDragDropHandlers } from './use-drag-drop-handlers';

const noopCalc = () => ({ start: new Date(), end: new Date() });

describe('@mantine/schedule/use-drag-drop-handlers', () => {
  it('holds and clears the drag preview', () => {
    const { result } = renderHook(() =>
      useDragDropHandlers({ enabled: true, mode: 'default', calculateDropTarget: noopCalc })
    );

    expect(result.current.dragPreview).toBeNull();

    act(() => {
      result.current.setDragPreview({
        start: '2024-01-15 09:15:00',
        end: '2024-01-15 10:15:00',
        target: 3,
      });
    });

    expect(result.current.dragPreview).toEqual({
      start: '2024-01-15 09:15:00',
      end: '2024-01-15 10:15:00',
      target: 3,
    });

    act(() => {
      result.current.handleDragLeave();
    });

    expect(result.current.dragPreview).toBeNull();
  });

  it('clears the drag preview when the drag ends', () => {
    const { result } = renderHook(() =>
      useDragDropHandlers({ enabled: true, mode: 'default', calculateDropTarget: noopCalc })
    );

    act(() => {
      result.current.setDragPreview({
        start: '2024-01-15 09:15:00',
        end: '2024-01-15 10:15:00',
        target: 1,
      });
    });

    expect(result.current.dragPreview).not.toBeNull();

    act(() => {
      result.current.handleDragEnd();
    });

    expect(result.current.dragPreview).toBeNull();
  });
});

describe('@mantine/schedule/use-drag-drop-handlers placement validation', () => {
  const draggedEvent = testUtils.createEvent({
    id: 'dragged',
    start: '2025-01-15 10:00:00',
    end: '2025-01-15 11:00:00',
  });

  const calculateDropTarget = () => ({
    start: new Date('2025-01-15T12:00:00'),
    end: new Date('2025-01-15T13:00:00'),
  });

  function createDragEvent(types: string[] = ['application/json']) {
    return {
      preventDefault: jest.fn(),
      dataTransfer: { types, dropEffect: 'none' },
    } as any;
  }

  function startDrag(result: { current: { handleDragStart: (event: ScheduleEventData) => void } }) {
    act(() => {
      result.current.handleDragStart(draggedEvent);
    });
  }

  it('calls onEventDrop when the placement is allowed', () => {
    const onEventDrop = jest.fn();
    const { result } = renderHook(() =>
      useDragDropHandlers({
        enabled: true,
        mode: 'default',
        calculateDropTarget,
        onEventDrop,
        preventEventOverlap: true,
        events: [
          testUtils.createEvent({
            id: 'other',
            start: '2025-01-15 15:00:00',
            end: '2025-01-15 16:00:00',
          }),
        ],
      })
    );

    startDrag(result);
    act(() => {
      result.current.handleDrop(createDragEvent(), 0);
    });

    expect(onEventDrop).toHaveBeenCalledTimes(1);
    expect(onEventDrop.mock.calls[0][0]).toMatchObject({
      eventId: 'dragged',
      newStart: '2025-01-15 12:00:00',
      newEnd: '2025-01-15 13:00:00',
    });
  });

  it('does not call onEventDrop when canDropEvent returns false', () => {
    const onEventDrop = jest.fn();
    const { result } = renderHook(() =>
      useDragDropHandlers({
        enabled: true,
        mode: 'default',
        calculateDropTarget,
        onEventDrop,
        canDropEvent: () => false,
      })
    );

    startDrag(result);
    act(() => {
      result.current.handleDrop(createDragEvent(), 0);
    });

    expect(onEventDrop).not.toHaveBeenCalled();
  });

  it('does not call onEventDrop when preventEventOverlap finds a conflict', () => {
    const onEventDrop = jest.fn();
    const { result } = renderHook(() =>
      useDragDropHandlers({
        enabled: true,
        mode: 'default',
        calculateDropTarget,
        onEventDrop,
        preventEventOverlap: true,
        events: [
          testUtils.createEvent({
            id: 'other',
            start: '2025-01-15 12:30:00',
            end: '2025-01-15 13:30:00',
          }),
        ],
      })
    );

    startDrag(result);
    act(() => {
      result.current.handleDrop(createDragEvent(), 0);
    });

    expect(onEventDrop).not.toHaveBeenCalled();
  });

  it('reports an overlap rejection with the conflicting events', () => {
    const conflict = testUtils.createEvent({
      id: 'other',
      start: '2025-01-15 12:30:00',
      end: '2025-01-15 13:30:00',
    });
    const onEventPlacementRejected = jest.fn();

    const { result } = renderHook(() =>
      useDragDropHandlers({
        enabled: true,
        mode: 'default',
        calculateDropTarget,
        onEventDrop: jest.fn(),
        onEventPlacementRejected,
        preventEventOverlap: true,
        events: [conflict],
      })
    );

    startDrag(result);
    act(() => {
      result.current.handleDrop(createDragEvent(), 0);
    });

    expect(onEventPlacementRejected).toHaveBeenCalledTimes(1);
    expect(onEventPlacementRejected).toHaveBeenCalledWith({
      action: 'drop',
      event: draggedEvent,
      start: '2025-01-15 12:00:00',
      end: '2025-01-15 13:00:00',
      resourceId: undefined,
      conflicts: [conflict],
      reason: 'overlap',
    });
  });

  it('reports a callback rejection with no conflicts', () => {
    const onEventPlacementRejected = jest.fn();
    const { result } = renderHook(() =>
      useDragDropHandlers({
        enabled: true,
        mode: 'default',
        calculateDropTarget,
        onEventDrop: jest.fn(),
        onEventPlacementRejected,
        canDropEvent: () => false,
      })
    );

    startDrag(result);
    act(() => {
      result.current.handleDrop(createDragEvent(), 0);
    });

    expect(onEventPlacementRejected).toHaveBeenCalledTimes(1);
    expect(onEventPlacementRejected.mock.calls[0][0]).toMatchObject({
      action: 'drop',
      reason: 'rejected',
      conflicts: [],
    });
  });

  it('only rejects the drop when canDropEvent returns exactly false', () => {
    const onEventDrop = jest.fn();
    const { result } = renderHook(() =>
      useDragDropHandlers({
        enabled: true,
        mode: 'default',
        calculateDropTarget,
        onEventDrop,
        canDropEvent: (() => undefined) as any,
      })
    );

    startDrag(result);
    act(() => {
      result.current.handleDrop(createDragEvent(), 0);
    });

    expect(onEventDrop).toHaveBeenCalledTimes(1);
  });

  it('passes the target resource id to canDropEvent', () => {
    const canDropEvent = jest.fn().mockReturnValue(true);
    const { result } = renderHook(() =>
      useDragDropHandlers<{ resourceId: string }>({
        enabled: true,
        mode: 'default',
        calculateDropTarget,
        onEventDrop: jest.fn(),
        canDropEvent,
        getTargetResourceId: (target) => target.resourceId,
      })
    );

    startDrag(result);
    act(() => {
      result.current.handleDrop(createDragEvent(), { resourceId: 'room-a' });
    });

    expect(canDropEvent).toHaveBeenCalledWith({
      event: draggedEvent,
      start: '2025-01-15 12:00:00',
      end: '2025-01-15 13:00:00',
      resourceId: 'room-a',
    });
  });

  it('does not call canDropEvent when the overlap check already rejected the placement', () => {
    const canDropEvent = jest.fn().mockReturnValue(true);
    const { result } = renderHook(() =>
      useDragDropHandlers({
        enabled: true,
        mode: 'default',
        calculateDropTarget,
        onEventDrop: jest.fn(),
        canDropEvent,
        preventEventOverlap: true,
        events: [
          testUtils.createEvent({
            id: 'other',
            start: '2025-01-15 12:30:00',
            end: '2025-01-15 13:30:00',
          }),
        ],
      })
    );

    startDrag(result);
    act(() => {
      result.current.handleDrop(createDragEvent(), 0);
    });

    expect(canDropEvent).not.toHaveBeenCalled();
  });

  it('reports an invalid target through dropValid while dragging over it', () => {
    const { result } = renderHook(() =>
      useDragDropHandlers({
        enabled: true,
        mode: 'default',
        calculateDropTarget,
        onEventDrop: jest.fn(),
        canDropEvent: () => false,
      })
    );

    startDrag(result);
    const dragEvent = createDragEvent();
    act(() => {
      result.current.handleDragOver(dragEvent, 0);
    });

    expect(result.current.dropValid).toBe(false);
  });

  it('keeps an invalid target droppable so the drop event still reports the rejection', () => {
    const onEventPlacementRejected = jest.fn();
    const { result } = renderHook(() =>
      useDragDropHandlers({
        enabled: true,
        mode: 'default',
        calculateDropTarget,
        onEventDrop: jest.fn(),
        onEventPlacementRejected,
        canDropEvent: () => false,
      })
    );

    startDrag(result);
    const dragEvent = createDragEvent();
    act(() => {
      result.current.handleDragOver(dragEvent, 0);
    });

    // 'none' would make the browser skip the drop event entirely, so the rejection
    // would never be reported.
    expect(dragEvent.dataTransfer.dropEffect).toBe('move');

    act(() => {
      result.current.handleDrop(createDragEvent(), 0);
    });

    expect(onEventPlacementRejected).toHaveBeenCalledTimes(1);
  });

  it('keeps dropEffect as move while dragging over a valid target', () => {
    const { result } = renderHook(() =>
      useDragDropHandlers({
        enabled: true,
        mode: 'default',
        calculateDropTarget,
        onEventDrop: jest.fn(),
        canDropEvent: () => true,
      })
    );

    startDrag(result);
    const dragEvent = createDragEvent();
    act(() => {
      result.current.handleDragOver(dragEvent, 0);
    });

    expect(dragEvent.dataTransfer.dropEffect).toBe('move');
    expect(result.current.dropValid).toBe(true);
  });

  it('does not call onExternalDrop when canDropExternalEvent returns false', () => {
    const onExternalDrop = jest.fn();
    const { result } = renderHook(() =>
      useDragDropHandlers({
        enabled: true,
        mode: 'default',
        calculateDropTarget,
        onExternalDrop,
        canDropExternalEvent: () => false,
        getExternalDropDateTime: () => '2025-01-15 12:00:00',
      })
    );

    act(() => {
      result.current.handleDrop(createDragEvent(['text/plain']), 0);
    });

    expect(onExternalDrop).not.toHaveBeenCalled();
  });

  it('reports an external drop rejection', () => {
    const onEventPlacementRejected = jest.fn();
    const { result } = renderHook(() =>
      useDragDropHandlers({
        enabled: true,
        mode: 'default',
        calculateDropTarget,
        onExternalDrop: jest.fn(),
        onEventPlacementRejected,
        canDropExternalEvent: () => false,
        getExternalDropDateTime: () => '2025-01-15 12:00:00',
      })
    );

    act(() => {
      result.current.handleDrop(createDragEvent(['text/plain']), 0);
    });

    expect(onEventPlacementRejected).toHaveBeenCalledTimes(1);
    expect(onEventPlacementRejected.mock.calls[0][0]).toMatchObject({
      action: 'external-drop',
      start: '2025-01-15 12:00:00',
      reason: 'rejected',
      conflicts: [],
    });
    expect(onEventPlacementRejected.mock.calls[0][0]).not.toHaveProperty('end');
  });

  it('calls onExternalDrop when canDropExternalEvent returns true', () => {
    const onExternalDrop = jest.fn();
    const { result } = renderHook(() =>
      useDragDropHandlers({
        enabled: true,
        mode: 'default',
        calculateDropTarget,
        onExternalDrop,
        canDropExternalEvent: () => true,
        getExternalDropDateTime: () => '2025-01-15 12:00:00',
      })
    );

    act(() => {
      result.current.handleDrop(createDragEvent(['text/plain']), 0);
    });

    expect(onExternalDrop).toHaveBeenCalledTimes(1);
  });

  it('allows an external drop that the view cannot resolve to a datetime', () => {
    const onExternalDrop = jest.fn();
    const canDropExternalEvent = jest.fn(() => false);
    const { result } = renderHook(() =>
      useDragDropHandlers({
        enabled: true,
        mode: 'default',
        calculateDropTarget,
        onExternalDrop,
        canDropExternalEvent,
        getExternalDropDateTime: () => null,
      })
    );

    act(() => {
      result.current.handleDrop(createDragEvent(['text/plain']), 0);
    });

    expect(canDropExternalEvent).not.toHaveBeenCalled();
    expect(onExternalDrop).toHaveBeenCalledTimes(1);
  });

  it('does not validate external drops when the view provides no getExternalDropDateTime', () => {
    const onExternalDrop = jest.fn();
    const canDropExternalEvent = jest.fn(() => false);
    const { result } = renderHook(() =>
      useDragDropHandlers({
        enabled: true,
        mode: 'default',
        calculateDropTarget,
        onExternalDrop,
        canDropExternalEvent,
      })
    );

    act(() => {
      result.current.handleDrop(createDragEvent(['text/plain']), 0);
    });

    expect(canDropExternalEvent).not.toHaveBeenCalled();
    expect(onExternalDrop).toHaveBeenCalledTimes(1);
  });

  it('resets dropValid and the drag preview after a rejected drop', () => {
    const { result } = renderHook(() =>
      useDragDropHandlers({
        enabled: true,
        mode: 'default',
        calculateDropTarget,
        onEventDrop: jest.fn(),
        canDropEvent: () => false,
      })
    );

    startDrag(result);
    act(() => {
      result.current.handleDragOver(createDragEvent(), 0);
      result.current.setDragPreview({
        start: '2025-01-15 12:00:00',
        end: '2025-01-15 13:00:00',
        target: 0,
      });
    });

    expect(result.current.dropValid).toBe(false);
    expect(result.current.dragPreview).not.toBeNull();

    act(() => {
      result.current.handleDrop(createDragEvent(), 0);
    });

    expect(result.current.dropValid).toBe(true);
    expect(result.current.dragPreview).toBeNull();
  });
});
