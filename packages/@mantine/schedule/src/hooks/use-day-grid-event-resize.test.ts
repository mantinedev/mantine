import { act, renderHook } from '@testing-library/react';
import { ScheduleEventData } from '../types';
import { useDayGridEventResize } from './use-day-grid-event-resize';

const DAYS = ['2024-01-15', '2024-01-16', '2024-01-17'];

function makeCells() {
  return DAYS.map((_, index) => {
    const el = document.createElement('div');
    el.getBoundingClientRect = () => ({ left: index * 100, right: index * 100 + 99 }) as DOMRect;
    return el;
  });
}

const event: ScheduleEventData = {
  id: 1,
  title: 'Event',
  start: '2024-01-15 00:00:00',
  end: '2024-01-16 00:00:00',
  color: 'blue',
  payload: {},
  resourceId: 'room-a',
};

function dragEndEdge(result: any, clientX: number) {
  act(() => {
    result.current.handleResizeStart({
      event,
      edge: 'end',
      cells: makeCells(),
      days: DAYS,
      pointerEvent: { preventDefault() {}, stopPropagation() {} } as any,
    });
  });
  act(() => {
    document.dispatchEvent(new MouseEvent('pointermove', { clientX }));
  });
  act(() => {
    document.dispatchEvent(new MouseEvent('pointerup'));
  });
}

describe('@mantine/schedule/use-day-grid-event-resize', () => {
  it('resizes the event to the day under the pointer', () => {
    const onEventResize = jest.fn();
    const { result } = renderHook(() => useDayGridEventResize({ enabled: true, onEventResize }));

    dragEndEdge(result, 250);

    expect(onEventResize).toHaveBeenCalledWith(
      expect.objectContaining({ newStart: '2024-01-15 00:00:00', newEnd: '2024-01-18 00:00:00' })
    );
  });

  it('does not call onEventResize when canResizeEventTo returns false', () => {
    const onEventResize = jest.fn();
    const { result } = renderHook(() =>
      useDayGridEventResize({ enabled: true, onEventResize, canResizeEventTo: () => false })
    );

    dragEndEdge(result, 250);
    expect(onEventResize).not.toHaveBeenCalled();
  });

  it('does not call onEventResize when preventEventOverlap finds a conflict', () => {
    const onEventResize = jest.fn();
    const conflict: ScheduleEventData = {
      id: 'conflict',
      title: 'Conflict',
      start: '2024-01-17 00:00:00',
      end: '2024-01-18 00:00:00',
      color: 'red',
      payload: {},
      resourceId: 'room-a',
    };

    const { result } = renderHook(() =>
      useDayGridEventResize({
        enabled: true,
        onEventResize,
        preventEventOverlap: true,
        events: [conflict],
      })
    );

    dragEndEdge(result, 250);
    expect(onEventResize).not.toHaveBeenCalled();
  });

  it('ignores conflicts that belong to another resource', () => {
    const onEventResize = jest.fn();
    const otherResource: ScheduleEventData = {
      id: 'other',
      title: 'Other resource',
      start: '2024-01-17 00:00:00',
      end: '2024-01-18 00:00:00',
      color: 'red',
      payload: {},
      resourceId: 'room-b',
    };

    const { result } = renderHook(() =>
      useDayGridEventResize({
        enabled: true,
        onEventResize,
        preventEventOverlap: true,
        events: [otherResource],
      })
    );

    dragEndEdge(result, 250);
    expect(onEventResize).toHaveBeenCalledTimes(1);
  });

  it('reports the rejection with the resize edge', () => {
    const onEventPlacementRejected = jest.fn();
    const { result } = renderHook(() =>
      useDayGridEventResize({
        enabled: true,
        onEventResize: jest.fn(),
        onEventPlacementRejected,
        canResizeEventTo: () => false,
      })
    );

    dragEndEdge(result, 250);

    expect(onEventPlacementRejected).toHaveBeenCalledWith({
      action: 'resize',
      event,
      edge: 'end',
      resourceId: 'room-a',
      start: '2024-01-15 00:00:00',
      end: '2024-01-18 00:00:00',
      conflicts: [],
      reason: 'rejected',
    });
  });

  it('marks the resize as invalid while the pointer is over a conflicting day', () => {
    const conflict: ScheduleEventData = {
      id: 'conflict',
      title: 'Conflict',
      start: '2024-01-17 00:00:00',
      end: '2024-01-18 00:00:00',
      color: 'red',
      payload: {},
      resourceId: 'room-a',
    };

    const { result } = renderHook(() =>
      useDayGridEventResize({
        enabled: true,
        onEventResize: jest.fn(),
        preventEventOverlap: true,
        events: [conflict],
      })
    );

    act(() => {
      result.current.handleResizeStart({
        event,
        edge: 'end',
        cells: makeCells(),
        days: DAYS,
        pointerEvent: { preventDefault() {}, stopPropagation() {} } as any,
      });
    });

    expect(result.current.resizeValid).toBe(true);

    act(() => {
      document.dispatchEvent(new MouseEvent('pointermove', { clientX: 250 }));
    });

    expect(result.current.resizeValid).toBe(false);
  });

  it('does not call canResizeEventTo when the overlap check already rejected the size', () => {
    const canResizeEventTo = jest.fn().mockReturnValue(true);
    const conflict: ScheduleEventData = {
      id: 'conflict',
      title: 'Conflict',
      start: '2024-01-17 00:00:00',
      end: '2024-01-18 00:00:00',
      color: 'red',
      payload: {},
      resourceId: 'room-a',
    };

    const { result } = renderHook(() =>
      useDayGridEventResize({
        enabled: true,
        onEventResize: jest.fn(),
        canResizeEventTo,
        preventEventOverlap: true,
        events: [conflict],
      })
    );

    dragEndEdge(result, 250);
    expect(canResizeEventTo).not.toHaveBeenCalled();
  });
});
