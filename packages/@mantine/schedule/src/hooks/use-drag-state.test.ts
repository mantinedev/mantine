import { act, renderHook } from '@testing-library/react';
import { ScheduleEventData } from '../types';
import { useDragState } from './use-drag-state';

const mockEvent: ScheduleEventData = {
  id: 'test-event-1',
  title: 'Test Event',
  start: new Date('2024-01-15T10:00:00'),
  end: new Date('2024-01-15T11:00:00'),
  color: 'blue',
  payload: {},
};

describe('@mantine/schedule/use-drag-state', () => {
  it('initializes with correct default state', () => {
    const { result } = renderHook(() => useDragState());

    expect(result.current.state).toEqual({
      isDragging: false,
      draggedEventId: null,
      draggedEvent: null,
      dropTarget: null,
    });
  });

  it('starts drag with correct event data', () => {
    const { result } = renderHook(() => useDragState());

    act(() => {
      result.current.startDrag(mockEvent);
    });

    expect(result.current.state).toEqual({
      isDragging: true,
      draggedEventId: 'test-event-1',
      draggedEvent: mockEvent,
      dropTarget: null,
    });
  });

  it('ends drag and resets state', () => {
    const { result } = renderHook(() => useDragState());

    act(() => {
      result.current.startDrag(mockEvent);
    });

    expect(result.current.state.isDragging).toBe(true);

    act(() => {
      result.current.endDrag();
    });

    expect(result.current.state).toEqual({
      isDragging: false,
      draggedEventId: null,
      draggedEvent: null,
      dropTarget: null,
    });
  });

  it('sets drop target', () => {
    const { result } = renderHook(() => useDragState());

    const dropTarget = {
      date: '2024-01-15',
      time: '10:00:00',
      slotIndex: 5,
    };

    act(() => {
      result.current.startDrag(mockEvent);
      result.current.setDropTarget(dropTarget);
    });

    expect(result.current.state.dropTarget).toEqual(dropTarget);
    expect(result.current.state.isDragging).toBe(true);
    expect(result.current.state.draggedEvent).toEqual(mockEvent);
  });

  it('updates drop target while dragging', () => {
    const { result } = renderHook(() => useDragState());

    const dropTarget1 = { date: '2024-01-15', time: '10:00:00' };
    const dropTarget2 = { date: '2024-01-15', time: '11:00:00' };

    act(() => {
      result.current.startDrag(mockEvent);
      result.current.setDropTarget(dropTarget1);
    });

    expect(result.current.state.dropTarget).toEqual(dropTarget1);

    act(() => {
      result.current.setDropTarget(dropTarget2);
    });

    expect(result.current.state.dropTarget).toEqual(dropTarget2);
    expect(result.current.state.isDragging).toBe(true);
  });

  it('clears drop target without ending drag', () => {
    const { result } = renderHook(() => useDragState());

    const dropTarget = { date: '2024-01-15', time: '10:00:00' };

    act(() => {
      result.current.startDrag(mockEvent);
      result.current.setDropTarget(dropTarget);
    });

    expect(result.current.state.dropTarget).toEqual(dropTarget);

    act(() => {
      result.current.clearDropTarget();
    });

    expect(result.current.state.dropTarget).toBeNull();
    expect(result.current.state.isDragging).toBe(true);
    expect(result.current.state.draggedEvent).toEqual(mockEvent);
  });

  it('can set drop target to null explicitly', () => {
    const { result } = renderHook(() => useDragState());

    const dropTarget = { date: '2024-01-15', time: '10:00:00' };

    act(() => {
      result.current.startDrag(mockEvent);
      result.current.setDropTarget(dropTarget);
    });

    expect(result.current.state.dropTarget).toEqual(dropTarget);

    act(() => {
      result.current.setDropTarget(null);
    });

    expect(result.current.state.dropTarget).toBeNull();
  });

  it('handles multiple drag-drop cycles', () => {
    const { result } = renderHook(() => useDragState());

    const event2: ScheduleEventData = {
      id: 'test-event-2',
      title: 'Test Event 2',
      start: new Date('2024-01-16T14:00:00'),
      end: new Date('2024-01-16T15:00:00'),
      color: 'red',
      payload: {},
    };

    // First drag
    act(() => {
      result.current.startDrag(mockEvent);
    });

    expect(result.current.state.draggedEventId).toBe('test-event-1');

    act(() => {
      result.current.endDrag();
    });

    expect(result.current.state.isDragging).toBe(false);

    // Second drag
    act(() => {
      result.current.startDrag(event2);
    });

    expect(result.current.state.draggedEventId).toBe('test-event-2');
    expect(result.current.state.draggedEvent).toEqual(event2);

    act(() => {
      result.current.endDrag();
    });

    expect(result.current.state.isDragging).toBe(false);
  });

  it('maintains consistent reference for callback functions', () => {
    const { result, rerender } = renderHook(() => useDragState());

    const startDragRef = result.current.startDrag;
    const endDragRef = result.current.endDrag;
    const setDropTargetRef = result.current.setDropTarget;
    const clearDropTargetRef = result.current.clearDropTarget;

    rerender();

    expect(result.current.startDrag).toBe(startDragRef);
    expect(result.current.endDrag).toBe(endDragRef);
    expect(result.current.setDropTarget).toBe(setDropTargetRef);
    expect(result.current.clearDropTarget).toBe(clearDropTargetRef);
  });

  it('resets drop target when starting new drag', () => {
    const { result } = renderHook(() => useDragState());

    const dropTarget = { date: '2024-01-15', time: '10:00:00' };

    act(() => {
      result.current.startDrag(mockEvent);
      result.current.setDropTarget(dropTarget);
    });

    expect(result.current.state.dropTarget).toEqual(dropTarget);

    // Start new drag
    act(() => {
      result.current.startDrag(mockEvent);
    });

    expect(result.current.state.dropTarget).toBeNull();
    expect(result.current.state.isDragging).toBe(true);
  });
});
