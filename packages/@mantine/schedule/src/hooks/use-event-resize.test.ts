import { act, renderHook } from '@testing-library/react';
import { ScheduleEventData } from '../types';
import { useEventResize } from './use-event-resize';

const RECT = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 480,
  width: 0,
  height: 480,
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

// Event 09:00–10:00 inside a 09:00–17:00 (480 min) canvas positioned by the grid.
const ORIGINAL_TOP = 0; // (09:00-09:00)/480
const ORIGINAL_HEIGHT = (60 / 480) * 100; // 12.5%

function dragBottom(result: any, container: HTMLElement, clientY: number) {
  act(() => {
    result.current.handleResizeStart({
      event,
      edge: 'bottom',
      container,
      originalTop: ORIGINAL_TOP,
      originalHeight: ORIGINAL_HEIGHT,
      eventDate: '2024-01-15',
      pointerEvent: { preventDefault() {}, stopPropagation() {} } as any,
    });
  });
  act(() => {
    document.dispatchEvent(new MouseEvent('pointermove', { clientY }));
  });
  act(() => {
    document.dispatchEvent(new MouseEvent('pointerup'));
  });
}

describe('@mantine/schedule/use-event-resize', () => {
  it('snaps the resized edge to resizeIntervalMinutes, not the grid interval', () => {
    const onEventResize = jest.fn();
    const { result } = renderHook(() =>
      useEventResize({
        enabled: true,
        startTime: '09:00:00',
        endTime: '17:00:00',
        intervalMinutes: 30,
        resizeIntervalMinutes: 15,
        onEventResize,
      })
    );
    // clientY 75 = 75 min = 10:15, a 15-min boundary that is NOT a 30-min boundary.
    dragBottom(result, makeContainer(), 75);
    expect(onEventResize).toHaveBeenCalledWith(
      expect.objectContaining({ newStart: '2024-01-15 09:00:00', newEnd: '2024-01-15 10:15:00' })
    );
  });

  it('falls back to the grid interval when resizeIntervalMinutes is omitted', () => {
    const onEventResize = jest.fn();
    const { result } = renderHook(() =>
      useEventResize({
        enabled: true,
        startTime: '09:00:00',
        endTime: '17:00:00',
        intervalMinutes: 30,
        onEventResize,
      })
    );
    // Same clientY 75; with a 30-min step it snaps to 90 min = 10:30.
    dragBottom(result, makeContainer(), 75);
    expect(onEventResize).toHaveBeenCalledWith(
      expect.objectContaining({ newEnd: '2024-01-15 10:30:00' })
    );
  });

  it('uses one resize step as the minimum event size', () => {
    const onEventResize = jest.fn();
    const { result } = renderHook(() =>
      useEventResize({
        enabled: true,
        startTime: '09:00:00',
        endTime: '17:00:00',
        intervalMinutes: 30,
        resizeIntervalMinutes: 15,
        onEventResize,
      })
    );
    // Drag the bottom edge up to the top; min size is one 15-min step ⇒ 09:15.
    dragBottom(result, makeContainer(), 5);
    expect(onEventResize).toHaveBeenCalledWith(
      expect.objectContaining({ newEnd: '2024-01-15 09:15:00' })
    );
  });

  it('supports a resize step coarser than the grid', () => {
    const onEventResize = jest.fn();
    const { result } = renderHook(() =>
      useEventResize({
        enabled: true,
        startTime: '09:00:00',
        endTime: '17:00:00',
        intervalMinutes: 15,
        resizeIntervalMinutes: 60,
        onEventResize,
      })
    );
    // clientY 200 = 200 min; snapped to the hour ⇒ 180 min = 12:00.
    dragBottom(result, makeContainer(), 200);
    expect(onEventResize).toHaveBeenCalledWith(
      expect.objectContaining({ newEnd: '2024-01-15 12:00:00' })
    );
  });
});
