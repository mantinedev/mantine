import { act, renderHook } from '@testing-library/react';
import { ScheduleEventData } from '../types';
import { useHorizontalEventResize } from './use-horizontal-event-resize';

const RECT = {
  top: 0,
  left: 0,
  right: 480,
  bottom: 0,
  width: 480,
  height: 0,
  x: 0,
  y: 0,
  toJSON: () => {},
};

function makeContainer() {
  const el = document.createElement('div');
  el.getBoundingClientRect = () => RECT as DOMRect;
  return el;
}

const event: ScheduleEventData = {
  id: 1,
  title: 'Event',
  start: '2024-01-15 09:00:00',
  end: '2024-01-15 10:00:00',
  color: 'blue',
  payload: {},
};

const ORIGINAL_LEFT = 0;
const ORIGINAL_WIDTH = (60 / 480) * 100;

function dragEnd(result: any, container: HTMLElement, clientX: number) {
  act(() => {
    result.current.handleResizeStart({
      event,
      edge: 'end',
      container,
      originalLeft: ORIGINAL_LEFT,
      originalWidth: ORIGINAL_WIDTH,
      eventDate: '2024-01-15',
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

describe('@mantine/schedule/use-horizontal-event-resize', () => {
  it('snaps to resizeIntervalMinutes, not the grid interval', () => {
    const onEventResize = jest.fn();
    const { result } = renderHook(() =>
      useHorizontalEventResize({
        enabled: true,
        startTime: '09:00:00',
        endTime: '17:00:00',
        intervalMinutes: 30,
        resizeIntervalMinutes: 15,
        onEventResize,
      })
    );
    dragEnd(result, makeContainer(), 75);
    expect(onEventResize).toHaveBeenCalledWith(
      expect.objectContaining({ newStart: '2024-01-15 09:00:00', newEnd: '2024-01-15 10:15:00' })
    );
  });

  it('falls back to the grid interval when resizeIntervalMinutes is omitted', () => {
    const onEventResize = jest.fn();
    const { result } = renderHook(() =>
      useHorizontalEventResize({
        enabled: true,
        startTime: '09:00:00',
        endTime: '17:00:00',
        intervalMinutes: 30,
        onEventResize,
      })
    );
    dragEnd(result, makeContainer(), 75);
    expect(onEventResize).toHaveBeenCalledWith(
      expect.objectContaining({ newEnd: '2024-01-15 10:30:00' })
    );
  });

  it('uses one resize step as the minimum event size', () => {
    const onEventResize = jest.fn();
    const { result } = renderHook(() =>
      useHorizontalEventResize({
        enabled: true,
        startTime: '09:00:00',
        endTime: '17:00:00',
        intervalMinutes: 30,
        resizeIntervalMinutes: 15,
        onEventResize,
      })
    );
    dragEnd(result, makeContainer(), 5);
    expect(onEventResize).toHaveBeenCalledWith(
      expect.objectContaining({ newEnd: '2024-01-15 09:15:00' })
    );
  });
});

describe('@mantine/schedule/use-horizontal-event-resize placement validation', () => {
  const sameResourceEvent: ScheduleEventData = {
    id: 'same-resource',
    title: 'Same resource',
    start: '2024-01-15 10:00:00',
    end: '2024-01-15 11:00:00',
    color: 'red',
    payload: {},
    resourceId: 'room-a',
  };

  const otherResourceEvent: ScheduleEventData = {
    ...sameResourceEvent,
    id: 'other-resource',
    resourceId: 'room-b',
  };

  const resourceEvent: ScheduleEventData = { ...event, resourceId: 'room-a' };

  const baseInput = {
    enabled: true,
    startTime: '09:00:00',
    endTime: '17:00:00',
    intervalMinutes: 30,
    resizeIntervalMinutes: 15,
  } as const;

  function dragResourceEnd(result: any, container: HTMLElement, clientX: number) {
    act(() => {
      result.current.handleResizeStart({
        event: resourceEvent,
        edge: 'end',
        container,
        originalLeft: ORIGINAL_LEFT,
        originalWidth: ORIGINAL_WIDTH,
        eventDate: '2024-01-15',
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

  it('does not call onEventResize when canResizeEventTo returns false', () => {
    const onEventResize = jest.fn();
    const { result } = renderHook(() =>
      useHorizontalEventResize({ ...baseInput, onEventResize, canResizeEventTo: () => false })
    );

    dragEnd(result, makeContainer(), 75);
    expect(onEventResize).not.toHaveBeenCalled();
  });

  it('does not call onEventResize when preventEventOverlap finds a conflict', () => {
    const onEventResize = jest.fn();
    const { result } = renderHook(() =>
      useHorizontalEventResize({
        ...baseInput,
        onEventResize,
        preventEventOverlap: true,
        events: [{ ...sameResourceEvent, resourceId: undefined }],
      })
    );

    dragEnd(result, makeContainer(), 75);
    expect(onEventResize).not.toHaveBeenCalled();
  });

  it('reports an overlap rejection with the resize edge', () => {
    const conflict = { ...sameResourceEvent, resourceId: undefined };
    const onEventPlacementRejected = jest.fn();
    const { result } = renderHook(() =>
      useHorizontalEventResize({
        ...baseInput,
        onEventResize: jest.fn(),
        onEventPlacementRejected,
        preventEventOverlap: true,
        events: [conflict],
      })
    );

    dragEnd(result, makeContainer(), 75);

    expect(onEventPlacementRejected).toHaveBeenCalledWith({
      action: 'resize',
      event,
      edge: 'end',
      start: '2024-01-15 09:00:00',
      end: '2024-01-15 10:15:00',
      conflicts: [conflict],
      reason: 'overlap',
    });
  });

  it('only checks events of the resized event resource', () => {
    const onEventResize = jest.fn();
    const { result } = renderHook(() =>
      useHorizontalEventResize({
        ...baseInput,
        onEventResize,
        preventEventOverlap: true,
        events: [otherResourceEvent],
      })
    );

    dragResourceEnd(result, makeContainer(), 75);
    expect(onEventResize).toHaveBeenCalledTimes(1);
  });

  it('rejects a conflict on the resized event resource', () => {
    const onEventResize = jest.fn();
    const { result } = renderHook(() =>
      useHorizontalEventResize({
        ...baseInput,
        onEventResize,
        preventEventOverlap: true,
        events: [sameResourceEvent],
      })
    );

    dragResourceEnd(result, makeContainer(), 75);
    expect(onEventResize).not.toHaveBeenCalled();
  });

  it('marks the resize as invalid while the pointer is over a conflicting size', () => {
    const { result } = renderHook(() =>
      useHorizontalEventResize({
        ...baseInput,
        onEventResize: jest.fn(),
        preventEventOverlap: true,
        events: [{ ...sameResourceEvent, resourceId: undefined }],
      })
    );

    act(() => {
      result.current.handleResizeStart({
        event,
        edge: 'end',
        container: makeContainer(),
        originalLeft: ORIGINAL_LEFT,
        originalWidth: ORIGINAL_WIDTH,
        eventDate: '2024-01-15',
        pointerEvent: { preventDefault() {}, stopPropagation() {} } as any,
      });
    });

    expect(result.current.resizeValid).toBe(true);

    act(() => {
      document.dispatchEvent(new MouseEvent('pointermove', { clientX: 75 }));
    });

    expect(result.current.resizeValid).toBe(false);
  });
});
