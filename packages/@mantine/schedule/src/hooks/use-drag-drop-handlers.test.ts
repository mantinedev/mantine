import { act, renderHook } from '@testing-library/react';
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
