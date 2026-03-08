import { act, renderHook } from '@testing-library/react';
import { useRovingIndex } from './use-roving-index';

function getItemTabIndices(result: { current: ReturnType<typeof useRovingIndex> }, total: number) {
  return Array.from(
    { length: total },
    (_, i) => result.current.getItemProps({ index: i }).tabIndex
  );
}

describe('@mantine/hooks/use-roving-index', () => {
  it('assigns tabIndex={0} to first item and tabIndex={-1} to others by default', () => {
    const { result } = renderHook(() => useRovingIndex({ total: 5 }));
    expect(getItemTabIndices(result, 5)).toEqual([0, -1, -1, -1, -1]);
  });

  it('uses initialIndex to set the starting focused item', () => {
    const { result } = renderHook(() => useRovingIndex({ total: 5, initialIndex: 2 }));
    expect(getItemTabIndices(result, 5)).toEqual([-1, -1, 0, -1, -1]);
  });

  it('skips disabled items for initial focus', () => {
    const { result } = renderHook(() =>
      useRovingIndex({ total: 5, isItemDisabled: (i) => i === 0 })
    );
    expect(getItemTabIndices(result, 5)).toEqual([-1, 0, -1, -1, -1]);
  });

  it('updates focusedIndex on click', () => {
    const onFocusChange = jest.fn();
    const { result } = renderHook(() => useRovingIndex({ total: 5, onFocusChange }));

    act(() => {
      result.current.getItemProps({ index: 3 }).onClick({} as React.MouseEvent);
    });

    expect(result.current.focusedIndex).toBe(3);
    expect(onFocusChange).toHaveBeenCalledWith(3);
  });

  it('composes user onClick handler', () => {
    const onClick = jest.fn();
    const { result } = renderHook(() => useRovingIndex({ total: 5 }));

    act(() => {
      result.current.getItemProps({ index: 2, onClick }).onClick({} as React.MouseEvent);
    });

    expect(onClick).toHaveBeenCalled();
    expect(result.current.focusedIndex).toBe(2);
  });

  it('supports controlled focusedIndex', () => {
    const { result, rerender } = renderHook(
      ({ focusedIndex }) => useRovingIndex({ total: 5, focusedIndex }),
      { initialProps: { focusedIndex: 1 } }
    );

    expect(getItemTabIndices(result, 5)).toEqual([-1, 0, -1, -1, -1]);

    rerender({ focusedIndex: 4 });
    expect(getItemTabIndices(result, 5)).toEqual([-1, -1, -1, -1, 0]);
  });

  it('programmatically sets focused index via setFocusedIndex', () => {
    const { result } = renderHook(() => useRovingIndex({ total: 5 }));

    act(() => {
      result.current.setFocusedIndex(3);
    });

    expect(result.current.focusedIndex).toBe(3);
  });

  it('adjusts focused index when total decreases below current index', () => {
    const { result, rerender } = renderHook(({ total }) => useRovingIndex({ total }), {
      initialProps: { total: 5 },
    });

    act(() => {
      result.current.setFocusedIndex(4);
    });

    rerender({ total: 3 });
    expect(result.current.focusedIndex).toBeLessThan(3);
  });

  it('falls back when current focused item becomes disabled', () => {
    const noneDisabled = (_index: number): boolean => false;
    const { result, rerender } = renderHook(
      ({ isItemDisabled }: { isItemDisabled: (index: number) => boolean }) =>
        useRovingIndex({ total: 5, isItemDisabled }),
      { initialProps: { isItemDisabled: noneDisabled } }
    );

    expect(result.current.focusedIndex).toBe(0);

    rerender({ isItemDisabled: (i: number) => i === 0 });
    expect(result.current.focusedIndex).toBe(0);
  });

  describe('horizontal list navigation', () => {
    it('navigates forward with ArrowRight', () => {
      const { result } = renderHook(() => useRovingIndex({ total: 5, orientation: 'horizontal' }));

      const el = document.createElement('button');
      act(() => {
        result.current.getItemProps({ index: 0 }).ref(el);
      });

      act(() => {
        result.current
          .getItemProps({ index: 0 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowRight' }) as unknown as React.KeyboardEvent
          );
      });

      expect(result.current.focusedIndex).toBe(1);
    });

    it('navigates backward with ArrowLeft', () => {
      const { result } = renderHook(() =>
        useRovingIndex({ total: 5, orientation: 'horizontal', initialIndex: 2 })
      );

      act(() => {
        result.current
          .getItemProps({ index: 2 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowLeft' }) as unknown as React.KeyboardEvent
          );
      });

      expect(result.current.focusedIndex).toBe(1);
    });

    it('does not respond to ArrowUp/ArrowDown in horizontal mode', () => {
      const { result } = renderHook(() =>
        useRovingIndex({ total: 5, orientation: 'horizontal', initialIndex: 1 })
      );

      act(() => {
        result.current
          .getItemProps({ index: 1 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowDown' }) as unknown as React.KeyboardEvent
          );
      });

      expect(result.current.focusedIndex).toBe(1);
    });

    it('wraps from last to first when loop is true', () => {
      const { result } = renderHook(() =>
        useRovingIndex({ total: 3, orientation: 'horizontal', loop: true, initialIndex: 2 })
      );

      act(() => {
        result.current
          .getItemProps({ index: 2 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowRight' }) as unknown as React.KeyboardEvent
          );
      });

      expect(result.current.focusedIndex).toBe(0);
    });

    it('does not wrap when loop is false', () => {
      const { result } = renderHook(() =>
        useRovingIndex({ total: 3, orientation: 'horizontal', loop: false, initialIndex: 2 })
      );

      act(() => {
        result.current
          .getItemProps({ index: 2 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowRight' }) as unknown as React.KeyboardEvent
          );
      });

      expect(result.current.focusedIndex).toBe(2);
    });

    it('skips disabled items during navigation', () => {
      const { result } = renderHook(() =>
        useRovingIndex({
          total: 5,
          orientation: 'horizontal',
          isItemDisabled: (i) => i === 1,
        })
      );

      act(() => {
        result.current
          .getItemProps({ index: 0 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowRight' }) as unknown as React.KeyboardEvent
          );
      });

      expect(result.current.focusedIndex).toBe(2);
    });
  });

  describe('vertical list navigation', () => {
    it('navigates with ArrowDown/ArrowUp', () => {
      const { result } = renderHook(() => useRovingIndex({ total: 5, orientation: 'vertical' }));

      act(() => {
        result.current
          .getItemProps({ index: 0 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowDown' }) as unknown as React.KeyboardEvent
          );
      });

      expect(result.current.focusedIndex).toBe(1);

      act(() => {
        result.current
          .getItemProps({ index: 1 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowUp' }) as unknown as React.KeyboardEvent
          );
      });

      expect(result.current.focusedIndex).toBe(0);
    });

    it('does not respond to ArrowLeft/ArrowRight in vertical mode', () => {
      const { result } = renderHook(() =>
        useRovingIndex({ total: 5, orientation: 'vertical', initialIndex: 1 })
      );

      act(() => {
        result.current
          .getItemProps({ index: 1 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowRight' }) as unknown as React.KeyboardEvent
          );
      });

      expect(result.current.focusedIndex).toBe(1);
    });
  });

  describe('both orientation', () => {
    it('responds to all arrow keys', () => {
      const { result } = renderHook(() =>
        useRovingIndex({ total: 5, orientation: 'both', initialIndex: 2 })
      );

      act(() => {
        result.current
          .getItemProps({ index: 2 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowRight' }) as unknown as React.KeyboardEvent
          );
      });
      expect(result.current.focusedIndex).toBe(3);

      act(() => {
        result.current
          .getItemProps({ index: 3 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowUp' }) as unknown as React.KeyboardEvent
          );
      });
      expect(result.current.focusedIndex).toBe(2);
    });
  });

  describe('RTL support', () => {
    it('swaps ArrowRight/ArrowLeft behavior in RTL', () => {
      const { result } = renderHook(() =>
        useRovingIndex({ total: 5, orientation: 'horizontal', dir: 'rtl', initialIndex: 2 })
      );

      act(() => {
        result.current
          .getItemProps({ index: 2 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowRight' }) as unknown as React.KeyboardEvent
          );
      });
      expect(result.current.focusedIndex).toBe(1);

      act(() => {
        result.current
          .getItemProps({ index: 1 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowLeft' }) as unknown as React.KeyboardEvent
          );
      });
      expect(result.current.focusedIndex).toBe(2);
    });
  });

  describe('Home/End keys', () => {
    it('Home focuses first non-disabled item', () => {
      const { result } = renderHook(() =>
        useRovingIndex({
          total: 5,
          initialIndex: 3,
          isItemDisabled: (i) => i === 0,
        })
      );

      act(() => {
        result.current
          .getItemProps({ index: 3 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'Home' }) as unknown as React.KeyboardEvent
          );
      });

      expect(result.current.focusedIndex).toBe(1);
    });

    it('End focuses last non-disabled item', () => {
      const { result } = renderHook(() =>
        useRovingIndex({
          total: 5,
          initialIndex: 0,
          isItemDisabled: (i) => i === 4,
        })
      );

      act(() => {
        result.current
          .getItemProps({ index: 0 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'End' }) as unknown as React.KeyboardEvent
          );
      });

      expect(result.current.focusedIndex).toBe(3);
    });
  });

  describe('grid navigation', () => {
    it('navigates horizontally within a row', () => {
      const { result } = renderHook(() =>
        useRovingIndex({ total: 9, columns: 3, initialIndex: 3 })
      );

      act(() => {
        result.current
          .getItemProps({ index: 3 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowRight' }) as unknown as React.KeyboardEvent
          );
      });
      expect(result.current.focusedIndex).toBe(4);

      act(() => {
        result.current
          .getItemProps({ index: 4 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowLeft' }) as unknown as React.KeyboardEvent
          );
      });
      expect(result.current.focusedIndex).toBe(3);
    });

    it('stops at row boundaries horizontally', () => {
      const { result } = renderHook(() =>
        useRovingIndex({ total: 9, columns: 3, initialIndex: 5 })
      );

      act(() => {
        result.current
          .getItemProps({ index: 5 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowRight' }) as unknown as React.KeyboardEvent
          );
      });
      expect(result.current.focusedIndex).toBe(5);
    });

    it('navigates vertically across rows preserving column', () => {
      const { result } = renderHook(() =>
        useRovingIndex({ total: 9, columns: 3, initialIndex: 1 })
      );

      act(() => {
        result.current
          .getItemProps({ index: 1 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowDown' }) as unknown as React.KeyboardEvent
          );
      });
      expect(result.current.focusedIndex).toBe(4);

      act(() => {
        result.current
          .getItemProps({ index: 4 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowUp' }) as unknown as React.KeyboardEvent
          );
      });
      expect(result.current.focusedIndex).toBe(1);
    });

    it('stops at grid boundary when navigating up from first row', () => {
      const { result } = renderHook(() =>
        useRovingIndex({ total: 9, columns: 3, initialIndex: 1 })
      );

      act(() => {
        result.current
          .getItemProps({ index: 1 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowUp' }) as unknown as React.KeyboardEvent
          );
      });
      expect(result.current.focusedIndex).toBe(1);
    });

    it('stops at grid boundary when navigating down from last row', () => {
      const { result } = renderHook(() =>
        useRovingIndex({ total: 9, columns: 3, initialIndex: 7 })
      );

      act(() => {
        result.current
          .getItemProps({ index: 7 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowDown' }) as unknown as React.KeyboardEvent
          );
      });
      expect(result.current.focusedIndex).toBe(7);
    });

    it('skips disabled items in vertical grid navigation', () => {
      const { result } = renderHook(() =>
        useRovingIndex({
          total: 9,
          columns: 3,
          initialIndex: 1,
          isItemDisabled: (i) => i === 4,
        })
      );

      act(() => {
        result.current
          .getItemProps({ index: 1 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowDown' }) as unknown as React.KeyboardEvent
          );
      });
      expect(result.current.focusedIndex).toBe(7);
    });

    it('Home navigates to first item in current row', () => {
      const { result } = renderHook(() =>
        useRovingIndex({ total: 9, columns: 3, initialIndex: 5 })
      );

      act(() => {
        result.current
          .getItemProps({ index: 5 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'Home' }) as unknown as React.KeyboardEvent
          );
      });
      expect(result.current.focusedIndex).toBe(3);
    });

    it('End navigates to last item in current row', () => {
      const { result } = renderHook(() =>
        useRovingIndex({ total: 9, columns: 3, initialIndex: 3 })
      );

      act(() => {
        result.current
          .getItemProps({ index: 3 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'End' }) as unknown as React.KeyboardEvent
          );
      });
      expect(result.current.focusedIndex).toBe(5);
    });

    it('Ctrl+Home navigates to first item in grid', () => {
      const { result } = renderHook(() =>
        useRovingIndex({ total: 9, columns: 3, initialIndex: 8 })
      );

      act(() => {
        result.current
          .getItemProps({ index: 8 })
          .onKeyDown(
            new KeyboardEvent('keydown', {
              key: 'Home',
              ctrlKey: true,
            }) as unknown as React.KeyboardEvent
          );
      });
      expect(result.current.focusedIndex).toBe(0);
    });

    it('Ctrl+End navigates to last item in grid', () => {
      const { result } = renderHook(() =>
        useRovingIndex({ total: 9, columns: 3, initialIndex: 0 })
      );

      act(() => {
        result.current
          .getItemProps({ index: 0 })
          .onKeyDown(
            new KeyboardEvent('keydown', {
              key: 'End',
              ctrlKey: true,
            }) as unknown as React.KeyboardEvent
          );
      });
      expect(result.current.focusedIndex).toBe(8);
    });

    it('handles RTL in grid navigation', () => {
      const { result } = renderHook(() =>
        useRovingIndex({ total: 9, columns: 3, dir: 'rtl', initialIndex: 3 })
      );

      act(() => {
        result.current
          .getItemProps({ index: 3 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowRight' }) as unknown as React.KeyboardEvent
          );
      });
      expect(result.current.focusedIndex).toBe(3);

      act(() => {
        result.current
          .getItemProps({ index: 3 })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowLeft' }) as unknown as React.KeyboardEvent
          );
      });
      expect(result.current.focusedIndex).toBe(4);
    });
  });

  describe('onKeyDown composition', () => {
    it('calls user onKeyDown handler before navigation', () => {
      const onKeyDown = jest.fn();
      const { result } = renderHook(() => useRovingIndex({ total: 5 }));

      act(() => {
        result.current
          .getItemProps({ index: 0, onKeyDown })
          .onKeyDown(
            new KeyboardEvent('keydown', { key: 'ArrowRight' }) as unknown as React.KeyboardEvent
          );
      });

      expect(onKeyDown).toHaveBeenCalled();
      expect(result.current.focusedIndex).toBe(1);
    });

    it('does not navigate when event.defaultPrevented is true', () => {
      const onKeyDown = jest.fn((e: React.KeyboardEvent) => {
        e.preventDefault();
      });
      const { result } = renderHook(() => useRovingIndex({ total: 5 }));

      const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
      Object.defineProperty(event, 'defaultPrevented', { value: true });

      act(() => {
        result.current
          .getItemProps({ index: 0, onKeyDown })
          .onKeyDown(event as unknown as React.KeyboardEvent);
      });

      expect(result.current.focusedIndex).toBe(0);
    });
  });

  describe('ref management', () => {
    it('registers and unregisters element refs', () => {
      const { result } = renderHook(() => useRovingIndex({ total: 3 }));

      const el = document.createElement('button');
      act(() => {
        result.current.getItemProps({ index: 0 }).ref(el);
      });

      act(() => {
        result.current.getItemProps({ index: 0 }).ref(null);
      });
    });
  });
});
