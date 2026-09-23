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
