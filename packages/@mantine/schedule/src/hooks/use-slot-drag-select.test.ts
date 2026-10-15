import { act, renderHook } from '@testing-library/react';
import { useSlotDragSelect } from './use-slot-drag-select';

function makeSlot(index: number) {
  const el = document.createElement('div');
  el.setAttribute('data-drag-slot-index', String(index));
  el.setAttribute('data-drag-slot-group', 'day');
  return el;
}

describe('@mantine/schedule/use-slot-drag-select', () => {
  const originalElementsFromPoint = document.elementsFromPoint;

  beforeEach(() => {
    document.elementsFromPoint = () => [makeSlot(3)];
  });

  afterEach(() => {
    document.elementsFromPoint = originalElementsFromPoint;
  });

  function startSelection(result: any) {
    act(() => {
      result.current.handleSlotPointerDown({} as any, 1, 'day');
    });
    act(() => {
      document.dispatchEvent(new MouseEvent('pointermove', { clientX: 0, clientY: 0 }));
    });
  }

  it('calls onDragEnd with the selected range on pointerup', () => {
    const onDragEnd = jest.fn();
    const { result } = renderHook(() => useSlotDragSelect({ onDragEnd }));

    startSelection(result);
    expect(result.current.isSlotSelected(2, 'day')).toBe(true);

    act(() => {
      document.dispatchEvent(new MouseEvent('pointerup'));
    });
    expect(onDragEnd).toHaveBeenCalledWith(1, 3, 'day');
    expect(result.current.isDragging).toBe(false);
  });

  it.each([
    ['Escape', () => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))],
    ['pointercancel', () => document.dispatchEvent(new Event('pointercancel'))],
  ])('cancels the selection on %s', (_name, cancel) => {
    const onDragEnd = jest.fn();
    const { result } = renderHook(() => useSlotDragSelect({ onDragEnd }));

    startSelection(result);
    act(cancel);
    expect(result.current.isDragging).toBe(false);
    expect(result.current.isSlotSelected(2, 'day')).toBe(false);
    expect(document.body.style.userSelect).toBe('');

    act(() => {
      document.dispatchEvent(new MouseEvent('pointerup'));
    });
    expect(onDragEnd).not.toHaveBeenCalled();
  });
});
