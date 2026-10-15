import { Fragment, useState } from 'react';
import { act, fireEvent, render, renderHook, screen } from '@testing-library/react';
import {
  SplitterPaneSize,
  useSplitter,
  UseSplitterOptions,
  UseSplitterReturnValue,
} from './use-splitter';

function TestComponent(props: UseSplitterOptions) {
  const splitter = useSplitter(props);

  return (
    <div ref={splitter.ref} data-testid="container" style={{ width: 1000, height: 600 }}>
      <div data-testid="panel-0" style={{ width: `${splitter.sizes[0]}%` }} />
      <div data-testid="handle-0" {...splitter.getHandleProps({ index: 0 })} />
      <div data-testid="panel-1" style={{ width: `${splitter.sizes[1]}%` }} />
      {props.panels.length > 2 && (
        <>
          <div data-testid="handle-1" {...splitter.getHandleProps({ index: 1 })} />
          <div data-testid="panel-2" style={{ width: `${splitter.sizes[2]}%` }} />
        </>
      )}
    </div>
  );
}

const defaultPanels = [{ defaultSize: 50 }, { defaultSize: 50 }];

describe('useSplitter', () => {
  it('returns correct initial state', () => {
    const { result } = renderHook(() =>
      useSplitter({
        panels: [{ defaultSize: 30 }, { defaultSize: 70 }],
      })
    );

    expect(result.current.sizes).toEqual([30, 70]);
    expect(result.current.collapsed).toEqual([false, false]);
    expect(result.current.activeHandle).toBe(-1);
  });

  it('returns handle props with correct ARIA attributes', () => {
    const { result } = renderHook(() =>
      useSplitter({
        panels: [{ defaultSize: 50, min: 10, max: 80 }, { defaultSize: 50 }],
      })
    );

    const props = result.current.getHandleProps({ index: 0 });
    expect(props.role).toBe('separator');
    expect(props['aria-orientation']).toBe('vertical');
    expect(props['aria-valuenow']).toBe(50);
    expect(props['aria-valuemin']).toBe(10);
    expect(props['aria-valuemax']).toBe(80);
    expect(props.tabIndex).toBe(0);
    expect(props['data-orientation']).toBe('horizontal');
  });

  it('returns horizontal aria-orientation when orientation is vertical', () => {
    const { result } = renderHook(() =>
      useSplitter({
        panels: defaultPanels,
        orientation: 'vertical',
      })
    );

    const props = result.current.getHandleProps({ index: 0 });
    expect(props['aria-orientation']).toBe('horizontal');
    expect(props['data-orientation']).toBe('vertical');
  });

  it('collapses a collapsible panel', () => {
    const onCollapseChange = jest.fn();
    const { result } = renderHook(() =>
      useSplitter({
        panels: [{ defaultSize: 30, collapsible: true }, { defaultSize: 70 }],
        onCollapseChange,
      })
    );

    act(() => {
      result.current.collapse(0);
    });

    expect(result.current.sizes[0]).toBe(0);
    expect(result.current.sizes[1]).toBe(100);
    expect(result.current.collapsed).toEqual([true, false]);
    expect(onCollapseChange).toHaveBeenCalledWith(0, true);
  });

  it('does not collapse a non-collapsible panel', () => {
    const { result } = renderHook(() =>
      useSplitter({
        panels: [{ defaultSize: 50 }, { defaultSize: 50 }],
      })
    );

    act(() => {
      result.current.collapse(0);
    });

    expect(result.current.sizes).toEqual([50, 50]);
  });

  it('expands a collapsed panel', () => {
    const onCollapseChange = jest.fn();
    const { result } = renderHook(() =>
      useSplitter({
        panels: [{ defaultSize: 30, collapsible: true }, { defaultSize: 70 }],
        onCollapseChange,
      })
    );

    act(() => {
      result.current.collapse(0);
    });

    act(() => {
      result.current.expand(0);
    });

    expect(result.current.sizes[0]).toBe(30);
    expect(result.current.sizes[1]).toBe(70);
    expect(result.current.collapsed).toEqual([false, false]);
    expect(onCollapseChange).toHaveBeenCalledWith(0, false);
  });

  it('toggleCollapse toggles panel state', () => {
    const { result } = renderHook(() =>
      useSplitter({
        panels: [{ defaultSize: 40, collapsible: true }, { defaultSize: 60 }],
      })
    );

    act(() => {
      result.current.toggleCollapse(0);
    });

    expect(result.current.sizes[0]).toBe(0);

    act(() => {
      result.current.toggleCollapse(0);
    });

    expect(result.current.sizes[0]).toBe(40);
  });

  it('handles keyboard ArrowRight to increase before panel', () => {
    render(<TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50 }]} />);

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'ArrowRight' });

    expect(handle.getAttribute('aria-valuenow')).toBe('51');
  });

  it('handles keyboard ArrowLeft to decrease before panel', () => {
    render(<TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50 }]} />);

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'ArrowLeft' });

    expect(handle.getAttribute('aria-valuenow')).toBe('49');
  });

  it('handles Shift+Arrow for larger step', () => {
    render(<TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50 }]} />);

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'ArrowRight', shiftKey: true });

    expect(handle.getAttribute('aria-valuenow')).toBe('60');
  });

  it('handles Home key to shrink before panel to min', () => {
    render(<TestComponent panels={[{ defaultSize: 50, min: 20 }, { defaultSize: 50 }]} />);

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'Home' });

    expect(handle.getAttribute('aria-valuenow')).toBe('20');
  });

  it('handles End key to grow before panel to max', () => {
    render(<TestComponent panels={[{ defaultSize: 50, max: 80 }, { defaultSize: 50 }]} />);

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'End' });

    expect(handle.getAttribute('aria-valuenow')).toBe('80');
  });

  it('respects min/max constraints during keyboard navigation', () => {
    render(
      <TestComponent
        panels={[
          { defaultSize: 50, min: 20, max: 80 },
          { defaultSize: 50, min: 20, max: 80 },
        ]}
      />
    );

    const handle = screen.getByTestId('handle-0');

    for (let i = 0; i < 100; i++) {
      fireEvent.keyDown(handle, { key: 'ArrowRight' });
    }

    expect(handle.getAttribute('aria-valuenow')).toBe('80');

    for (let i = 0; i < 100; i++) {
      fireEvent.keyDown(handle, { key: 'ArrowLeft' });
    }

    expect(handle.getAttribute('aria-valuenow')).toBe('20');
  });

  it('handles RTL keyboard direction', () => {
    render(<TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50 }]} dir="rtl" />);

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'ArrowRight' });

    expect(handle.getAttribute('aria-valuenow')).toBe('49');
  });

  it('handles vertical orientation with ArrowUp/ArrowDown', () => {
    render(
      <TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50 }]} orientation="vertical" />
    );

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'ArrowDown' });

    expect(handle.getAttribute('aria-valuenow')).toBe('51');

    fireEvent.keyDown(handle, { key: 'ArrowUp' });

    expect(handle.getAttribute('aria-valuenow')).toBe('50');
  });

  it('ignores wrong-axis arrow keys without preventing default (allows page scroll)', () => {
    render(<TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50 }]} />);

    const handle = screen.getByTestId('handle-0');

    // Horizontal splitter: Up/Down are the wrong axis -> no-op and default not prevented
    expect(fireEvent.keyDown(handle, { key: 'ArrowUp' })).toBe(true);
    expect(fireEvent.keyDown(handle, { key: 'ArrowDown' })).toBe(true);
    expect(handle.getAttribute('aria-valuenow')).toBe('50');

    // Matching axis still resizes and prevents default
    expect(fireEvent.keyDown(handle, { key: 'ArrowRight' })).toBe(false);
    expect(handle.getAttribute('aria-valuenow')).toBe('51');
  });

  it('Enter toggles collapse on collapsible panel', () => {
    render(
      <TestComponent panels={[{ defaultSize: 30, collapsible: true }, { defaultSize: 70 }]} />
    );

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'Enter' });

    expect(handle.getAttribute('aria-valuenow')).toBe('0');

    fireEvent.keyDown(handle, { key: 'Enter' });

    expect(handle.getAttribute('aria-valuenow')).toBe('30');
  });

  it('does not respond to keyboard when disabled', () => {
    render(<TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50 }]} enabled={false} />);

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'ArrowRight' });

    expect(handle.getAttribute('aria-valuenow')).toBe('50');
  });

  it('calls onSizeChange in controlled mode', () => {
    const onSizeChange = jest.fn();
    render(
      <TestComponent
        panels={[{ defaultSize: 50 }, { defaultSize: 50 }]}
        sizes={[50, 50]}
        onSizeChange={onSizeChange}
      />
    );

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'ArrowRight' });

    expect(onSizeChange).toHaveBeenCalledWith([51, 49]);
  });

  it('data-active is set on active handle only', () => {
    render(
      <TestComponent panels={[{ defaultSize: 33 }, { defaultSize: 34 }, { defaultSize: 33 }]} />
    );

    const handle0 = screen.getByTestId('handle-0');
    const handle1 = screen.getByTestId('handle-1');
    expect(handle0.getAttribute('data-active')).toBeNull();

    fireEvent(
      handle0,
      new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: 100, clientY: 100 })
    );

    expect(handle0.getAttribute('data-active')).toBe('true');
    expect(handle1.getAttribute('data-active')).toBeNull();

    fireEvent(document, new MouseEvent('pointerup', { bubbles: true }));

    expect(handle0.getAttribute('data-active')).toBeNull();
  });

  it('custom step size works', () => {
    render(<TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50 }]} step={5} />);

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'ArrowRight' });

    expect(handle.getAttribute('aria-valuenow')).toBe('55');
  });

  it('custom shiftStep size works', () => {
    render(<TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50 }]} shiftStep={20} />);

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'ArrowRight', shiftKey: true });

    expect(handle.getAttribute('aria-valuenow')).toBe('70');
  });

  it('sizes always sum to 100 when constrained by min', () => {
    render(<TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50, min: 20 }]} />);

    const handle = screen.getByTestId('handle-0');

    for (let i = 0; i < 50; i++) {
      fireEvent.keyDown(handle, { key: 'ArrowRight' });
    }

    expect(handle.getAttribute('aria-valuenow')).toBe('80');
    expect(screen.getByTestId('panel-1').style.width).toBe('20%');
  });

  it('keyboard collapse fires onCollapseChange', () => {
    const onCollapseChange = jest.fn();
    render(
      <TestComponent
        panels={[{ defaultSize: 10, collapsible: true, min: 0 }, { defaultSize: 90 }]}
        step={20}
        onCollapseChange={onCollapseChange}
      />
    );

    const handle = screen.getByTestId('handle-0');
    fireEvent.keyDown(handle, { key: 'ArrowLeft' });

    expect(handle.getAttribute('aria-valuenow')).toBe('0');
    expect(onCollapseChange).toHaveBeenCalledWith(0, true);
  });

  describe('redistribute: nearest', () => {
    it('borrows from further panels when neighbor is at min', () => {
      render(
        <TestComponent
          panels={[
            { defaultSize: 26, min: 0 },
            { defaultSize: 20, min: 20 },
            { defaultSize: 54, min: 0 },
          ]}
          redistribute="nearest"
          step={10}
        />
      );

      const handle = screen.getByTestId('handle-0');
      fireEvent.keyDown(handle, { key: 'ArrowRight' });

      expect(handle.getAttribute('aria-valuenow')).toBe('36');
    });

    it('borrows from nearest panel first (positive delta)', () => {
      const onSizeChange = jest.fn();
      render(
        <TestComponent
          panels={[
            { defaultSize: 20, min: 0 },
            { defaultSize: 30, min: 10 },
            { defaultSize: 50, min: 10 },
          ]}
          redistribute="nearest"
          step={25}
          onSizeChange={onSizeChange}
        />
      );

      const handle = screen.getByTestId('handle-0');
      fireEvent.keyDown(handle, { key: 'ArrowRight' });

      const newSizes = onSizeChange.mock.calls[0][0];
      expect(newSizes[0]).toBe(45);
      expect(newSizes[1]).toBe(10);
      expect(newSizes[2]).toBe(45);
      expect(newSizes[0] + newSizes[1] + newSizes[2]).toBe(100);
    });

    it('borrows from panels to the left on negative delta', () => {
      const onSizeChange = jest.fn();
      render(
        <TestComponent
          panels={[
            { defaultSize: 50, min: 10 },
            { defaultSize: 20, min: 20 },
            { defaultSize: 30, min: 0 },
          ]}
          redistribute="nearest"
          step={15}
          onSizeChange={onSizeChange}
        />
      );

      const handle = screen.getByTestId('handle-1');
      fireEvent.keyDown(handle, { key: 'ArrowLeft' });

      const newSizes = onSizeChange.mock.calls[0][0];
      expect(newSizes[0]).toBe(35);
      expect(newSizes[1]).toBe(20);
      expect(newSizes[2]).toBe(45);
      expect(newSizes[0] + newSizes[1] + newSizes[2]).toBe(100);
    });

    it('respects growing panel max constraint', () => {
      const onSizeChange = jest.fn();
      render(
        <TestComponent
          panels={[
            { defaultSize: 30, min: 0, max: 40 },
            { defaultSize: 20, min: 0 },
            { defaultSize: 50, min: 0 },
          ]}
          redistribute="nearest"
          step={30}
          onSizeChange={onSizeChange}
        />
      );

      const handle = screen.getByTestId('handle-0');
      fireEvent.keyDown(handle, { key: 'ArrowRight' });

      const newSizes = onSizeChange.mock.calls[0][0];
      expect(newSizes[0]).toBe(40);
      expect(newSizes[0] + newSizes[1] + newSizes[2]).toBe(100);
    });
  });

  describe('redistribute: equal', () => {
    it('distributes shrinkage equally among donor panels', () => {
      const onSizeChange = jest.fn();
      render(
        <TestComponent
          panels={[
            { defaultSize: 20, min: 0 },
            { defaultSize: 40, min: 0 },
            { defaultSize: 40, min: 0 },
          ]}
          redistribute="equal"
          step={20}
          onSizeChange={onSizeChange}
        />
      );

      const handle = screen.getByTestId('handle-0');
      fireEvent.keyDown(handle, { key: 'ArrowRight' });

      const newSizes = onSizeChange.mock.calls[0][0];
      expect(newSizes[0]).toBe(40);
      expect(newSizes[1]).toBe(30);
      expect(newSizes[2]).toBe(30);
      expect(newSizes[0] + newSizes[1] + newSizes[2]).toBe(100);
    });

    it('skips donors at min and redistributes to remaining', () => {
      const onSizeChange = jest.fn();
      render(
        <TestComponent
          panels={[
            { defaultSize: 20, min: 0 },
            { defaultSize: 20, min: 20 },
            { defaultSize: 60, min: 0 },
          ]}
          redistribute="equal"
          step={10}
          onSizeChange={onSizeChange}
        />
      );

      const handle = screen.getByTestId('handle-0');
      fireEvent.keyDown(handle, { key: 'ArrowRight' });

      const newSizes = onSizeChange.mock.calls[0][0];
      expect(newSizes[0]).toBe(30);
      expect(newSizes[1]).toBe(20);
      expect(newSizes[2]).toBe(50);
      expect(newSizes[0] + newSizes[1] + newSizes[2]).toBe(100);
    });
  });

  describe('redistribute: custom function', () => {
    it('calls custom function with correct input', () => {
      const customFn = jest.fn((input: { sizes: number[]; delta: number }) => {
        const result = [...input.sizes];
        result[0] += input.delta;
        result[2] -= input.delta;
        return result;
      });

      render(
        <TestComponent
          panels={[
            { defaultSize: 30, min: 0 },
            { defaultSize: 40, min: 40 },
            { defaultSize: 30, min: 0 },
          ]}
          redistribute={customFn}
          step={5}
        />
      );

      const handle = screen.getByTestId('handle-0');
      fireEvent.keyDown(handle, { key: 'ArrowRight' });

      expect(customFn).toHaveBeenCalledWith(
        expect.objectContaining({
          sizes: [30, 40, 30],
          handleIndex: 0,
          delta: 5,
        })
      );
    });

    it('uses sizes returned by custom function', () => {
      const onSizeChange = jest.fn();
      const customFn = jest.fn(() => [50, 10, 40]);

      render(
        <TestComponent
          panels={[
            { defaultSize: 30, min: 0 },
            { defaultSize: 40, min: 0 },
            { defaultSize: 30, min: 0 },
          ]}
          redistribute={customFn}
          step={5}
          onSizeChange={onSizeChange}
        />
      );

      const handle = screen.getByTestId('handle-0');
      fireEvent.keyDown(handle, { key: 'ArrowRight' });

      expect(onSizeChange).toHaveBeenCalledWith([50, 10, 40]);
    });
  });

  it('expand does not fire onCollapseChange or set negative sizes when neighbor has no space to give', () => {
    const onCollapseChange = jest.fn();
    const { result } = renderHook(() =>
      useSplitter({
        panels: [
          { defaultSize: 30, collapsible: true },
          { defaultSize: 70, min: 100 },
        ],
        onCollapseChange,
      })
    );

    act(() => {
      result.current.collapse(0);
    });

    expect(result.current.sizes).toEqual([0, 100]);
    onCollapseChange.mockClear();

    act(() => {
      result.current.expand(0);
    });

    expect(result.current.sizes).toEqual([0, 100]);
    expect(onCollapseChange).not.toHaveBeenCalled();
  });

  it('cleans up body styles on unmount during an active drag', () => {
    const { unmount } = render(
      <TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50 }]} />
    );

    const handle = screen.getByTestId('handle-0');

    fireEvent(
      handle,
      new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: 100, clientY: 100 })
    );

    expect(document.body.style.cursor).toBe('col-resize');
    expect(document.body.style.userSelect).toBe('none');

    act(() => {
      unmount();
    });

    expect(document.body.style.cursor).toBe('');
    expect(document.body.style.userSelect).toBe('');
  });

  it('does not change sizes when the container has zero measured size', () => {
    // jsdom getBoundingClientRect() reports 0 width/height, so containerSize is 0.
    // Dragging must be a no-op rather than dividing by zero and producing NaN/Infinity sizes.
    render(<TestComponent panels={[{ defaultSize: 50 }, { defaultSize: 50 }]} />);

    const handle = screen.getByTestId('handle-0');

    fireEvent(
      handle,
      new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: 100, clientY: 100 })
    );

    act(() => {
      fireEvent(
        document,
        new MouseEvent('pointerup', { bubbles: true, clientX: 300, clientY: 100 })
      );
    });

    expect(screen.getByTestId('panel-0').style.width).toBe('50%');
    expect(screen.getByTestId('panel-1').style.width).toBe('50%');
  });

  describe('CSS units', () => {
    let rectSpy: jest.SpyInstance;

    function UnitHarness({
      onSplitter,
      ...props
    }: UseSplitterOptions & { onSplitter: (splitter: UseSplitterReturnValue) => void }) {
      const splitter = useSplitter(props);
      onSplitter(splitter);

      return (
        <div ref={splitter.ref} data-testid="container">
          <div data-testid="pane-0" />
          <div data-testid="handle-0" {...splitter.getHandleProps({ index: 0 })} />
          <div data-testid="pane-1" />
        </div>
      );
    }

    beforeAll(() => {
      rectSpy = jest
        .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
        .mockImplementation(function getRect(this: HTMLElement) {
          const width = this.getAttribute('role') === 'separator' ? 0 : 1000;
          return {
            width,
            height: 600,
            top: 0,
            left: 0,
            right: width,
            bottom: 600,
            x: 0,
            y: 0,
            toJSON: () => ({}),
          } as DOMRect;
        });
    });

    afterAll(() => {
      rectSpy.mockRestore();
    });

    it('preserves declared units in returned sizes', () => {
      const { result } = renderHook(() =>
        useSplitter({ panels: [{ defaultSize: '240px' }, { defaultSize: 60 }] })
      );
      expect(result.current.sizes).toEqual(['240px', 60]);
    });

    it('reports fixed pixel pane size via aria-valuenow', () => {
      let splitter: UseSplitterReturnValue;
      render(
        <UnitHarness
          panels={[{ defaultSize: '240px' }, { defaultSize: 60 }]}
          onSplitter={(s) => {
            splitter = s;
          }}
        />
      );
      expect(screen.getByTestId('handle-0').getAttribute('aria-valuenow')).toBe('240');
      expect(splitter!.sizes).toEqual(['240px', 60]);
    });

    it('resolves rem sizes to pixels using root font-size', () => {
      render(
        <UnitHarness
          panels={[{ defaultSize: '10rem' }, { defaultSize: 50 }]}
          onSplitter={() => {}}
        />
      );
      expect(screen.getByTestId('handle-0').getAttribute('aria-valuenow')).toBe('160');
    });

    it('applies a pixel keyboard step to a fixed pane', () => {
      render(
        <UnitHarness
          panels={[{ defaultSize: '240px' }, { defaultSize: 60, min: 0 }]}
          step="10px"
          onSplitter={() => {}}
        />
      );
      const handle = screen.getByTestId('handle-0');
      fireEvent.keyDown(handle, { key: 'ArrowRight' });
      expect(handle.getAttribute('aria-valuenow')).toBe('250');
    });

    it('treats a bare-number step as a percentage of the container in pixel mode', () => {
      render(
        <UnitHarness
          panels={[{ defaultSize: '240px' }, { defaultSize: 60, min: 0 }]}
          step={1}
          onSplitter={() => {}}
        />
      );
      const handle = screen.getByTestId('handle-0');
      fireEvent.keyDown(handle, { key: 'ArrowRight' });
      expect(handle.getAttribute('aria-valuenow')).toBe('250');
    });

    it('clamps a fixed pane to its pixel max', () => {
      render(
        <UnitHarness
          panels={[
            { defaultSize: '240px', max: '300px' },
            { defaultSize: 60, min: 0 },
          ]}
          step="100px"
          onSplitter={() => {}}
        />
      );
      const handle = screen.getByTestId('handle-0');
      fireEvent.keyDown(handle, { key: 'ArrowRight' });
      expect(handle.getAttribute('aria-valuenow')).toBe('300');
    });

    it('updates the fixed pane in pixels and the flexible neighbor in percent on drag', () => {
      let splitter: UseSplitterReturnValue;
      render(
        <UnitHarness
          panels={[{ defaultSize: '200px' }, { defaultSize: 60, min: 0 }]}
          onSplitter={(s) => {
            splitter = s;
          }}
        />
      );

      const handle = screen.getByTestId('handle-0');
      fireEvent(
        handle,
        new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: 100, clientY: 100 })
      );

      act(() => {
        fireEvent(
          document,
          new MouseEvent('pointerup', { bubbles: true, clientX: 150, clientY: 100 })
        );
      });

      expect(splitter!.sizes[0]).toBe('250px');
      expect(splitter!.sizes[1] as number).toBeCloseTo(75);
    });

    it('collapses and expands a fixed pane preserving its unit', () => {
      let splitter: UseSplitterReturnValue;
      render(
        <UnitHarness
          panels={[
            { defaultSize: '240px', collapsible: true },
            { defaultSize: 60, min: 0 },
          ]}
          onSplitter={(s) => {
            splitter = s;
          }}
        />
      );

      act(() => {
        splitter!.collapse(0);
      });

      expect(splitter!.sizes[0]).toBe('0px');
      expect(splitter!.collapsed).toEqual([true, false]);

      act(() => {
        splitter!.expand(0);
      });

      expect(splitter!.sizes[0]).toBe('240px');
      expect(splitter!.collapsed).toEqual([false, false]);
    });

    it('restores a fixed pane to its original px after it collapses mid-drag (not as a percentage)', () => {
      let splitter: UseSplitterReturnValue;
      render(
        <UnitHarness
          panels={[
            { defaultSize: '240px', collapsible: true, collapseThreshold: '120px', min: '0px' },
            { defaultSize: 60, min: 0 },
          ]}
          onSplitter={(s) => {
            splitter = s;
          }}
        />
      );

      // Drag handle-0 far enough left to cross the 120px collapse threshold -> pane 0 collapses to 0.
      const handle = screen.getByTestId('handle-0');
      fireEvent(
        handle,
        new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: 300, clientY: 100 })
      );

      act(() => {
        fireEvent(
          document,
          new MouseEvent('pointerup', { bubbles: true, clientX: 100, clientY: 100 })
        );
      });

      expect(splitter!.sizes[0]).toBe('0px');

      // Expanding must restore the original 240px. The pre-collapse snapshot taken mid-drag must be
      // the raw size, not the resolved working pixels: a numeric 240 snapshot is read back as 240%
      // of the container and would blow the pane up to the full container width.
      act(() => {
        splitter!.expand(0);
      });

      expect(splitter!.sizes[0]).toBe('240px');
    });

    it('respects RTL when dragging a fixed pane', () => {
      let splitter: UseSplitterReturnValue;
      render(
        <UnitHarness
          dir="rtl"
          panels={[{ defaultSize: '200px' }, { defaultSize: 60, min: 0 }]}
          onSplitter={(s) => {
            splitter = s;
          }}
        />
      );

      const handle = screen.getByTestId('handle-0');
      fireEvent(
        handle,
        new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: 100, clientY: 100 })
      );

      act(() => {
        fireEvent(
          document,
          new MouseEvent('pointerup', { bubbles: true, clientX: 150, clientY: 100 })
        );
      });

      expect(splitter!.sizes[0]).toBe('150px');
    });

    it('moves the handle by the pointer delta between two flexible panes next to a fixed pane', () => {
      let splitter: UseSplitterReturnValue;

      function ThreePaneHarness(props: UseSplitterOptions) {
        const s = useSplitter(props);
        splitter = s;
        return (
          <div ref={s.ref} data-testid="container">
            <div data-testid="pane-0" />
            <div data-testid="handle-0" {...s.getHandleProps({ index: 0 })} />
            <div data-testid="pane-1" />
            <div data-testid="handle-1" {...s.getHandleProps({ index: 1 })} />
            <div data-testid="pane-2" />
          </div>
        );
      }

      render(
        <ThreePaneHarness
          panels={[
            { defaultSize: '240px' },
            { defaultSize: 50, min: 0 },
            { defaultSize: 50, min: 0 },
          ]}
        />
      );

      const handle = screen.getByTestId('handle-1');
      fireEvent(
        handle,
        new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: 100, clientY: 100 })
      );

      act(() => {
        fireEvent(
          document,
          new MouseEvent('pointerup', { bubbles: true, clientX: 200, clientY: 100 })
        );
      });

      expect(splitter!.sizes[0]).toBe('240px');
      expect(splitter!.sizes[1] as number).toBeCloseTo(48);
      expect(splitter!.sizes[2] as number).toBeCloseTo(28);
    });

    it('enables pixel mode when only collapseThreshold uses a fixed unit', () => {
      render(
        <UnitHarness
          panels={[
            { defaultSize: 30, collapsible: true, collapseThreshold: '120px' },
            { defaultSize: 70 },
          ]}
          onSplitter={() => {}}
        />
      );
      expect(screen.getByTestId('handle-0').getAttribute('aria-valuenow')).toBe('300');
    });

    it('does not rewrite fixed sizes on a no-op drag when panes overflow the container', () => {
      let splitter: UseSplitterReturnValue;
      render(
        <UnitHarness
          panels={[{ defaultSize: '600px' }, { defaultSize: '600px' }]}
          onSplitter={(s) => {
            splitter = s;
          }}
        />
      );

      const handle = screen.getByTestId('handle-0');
      fireEvent(
        handle,
        new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: 100, clientY: 100 })
      );

      act(() => {
        fireEvent(
          document,
          new MouseEvent('pointerup', { bubbles: true, clientX: 100, clientY: 100 })
        );
      });

      expect(splitter!.sizes).toEqual(['600px', '600px']);
    });

    it('does not shrink overflowing fixed panes on a real drag (keeps the unscaled total)', () => {
      let splitter: UseSplitterReturnValue;
      render(
        <UnitHarness
          panels={[{ defaultSize: '600px' }, { defaultSize: '600px' }]}
          onSplitter={(s) => {
            splitter = s;
          }}
        />
      );

      // container is 1000px wide, fixed total is 1200px -> scale 1000/1200, both panes render at 500px.
      const handle = screen.getByTestId('handle-0');
      fireEvent(
        handle,
        new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: 100, clientY: 100 })
      );

      act(() => {
        fireEvent(
          document,
          new MouseEvent('pointerup', { bubbles: true, clientX: 150, clientY: 100 })
        );
      });

      // +50px in rendered space -> rendered [550, 450] -> unscaled [660, 540]; total stays 1200px,
      // only the dragged delta moves. Without the fix both panes collapse toward ~500px.
      expect(splitter!.sizes[0]).toBe('660px');
      expect(splitter!.sizes[1]).toBe('540px');
    });

    it('does not shrink overflowing fixed panes on keyboard resize (keeps the unscaled total)', () => {
      let splitter: UseSplitterReturnValue;
      render(
        <UnitHarness
          panels={[{ defaultSize: '600px' }, { defaultSize: '600px' }]}
          step="10px"
          onSplitter={(s) => {
            splitter = s;
          }}
        />
      );

      const handle = screen.getByTestId('handle-0');
      fireEvent.keyDown(handle, { key: 'ArrowRight' });

      // container 1000px, fixed total 1200px -> scale 1000/1200; +10px rendered -> +12px unscaled each side.
      expect(splitter!.sizes[0]).toBe('612px');
      expect(splitter!.sizes[1]).toBe('588px');
    });

    it('encodes the absolute fixed size when a drag hands space to a flexible pane', () => {
      let splitter: UseSplitterReturnValue;
      render(
        <UnitHarness
          panels={[{ defaultSize: '1200px' }, { defaultSize: 1, min: 0 }]}
          onSplitter={(s) => {
            splitter = s;
          }}
        />
      );

      // container 1000px, fixed pane overflows alone (scale 1000/1200): renders 1000px, flex 0.
      const handle = screen.getByTestId('handle-0');
      fireEvent(
        handle,
        new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: 300, clientY: 100 })
      );

      act(() => {
        fireEvent(
          document,
          new MouseEvent('pointerup', { bubbles: true, clientX: 100, clientY: 100 })
        );
      });

      // Dragging 200px left gives the flex pane real space, so the fixed pane is no longer
      // down-scaled: it must persist its true 800px, not 800/scale = 960px (which would starve flex).
      expect(splitter!.sizes[0]).toBe('800px');
      expect(splitter!.sizes[1] as number).toBeCloseTo(20);
    });

    it('re-encodes unchanged fixed panes when a drag clears the overflow', () => {
      let splitter: UseSplitterReturnValue;

      function ThreePaneHarness(props: UseSplitterOptions) {
        const s = useSplitter(props);
        splitter = s;
        return (
          <div ref={s.ref} data-testid="container">
            <div data-testid="pane-0" />
            <div data-testid="handle-0" {...s.getHandleProps({ index: 0 })} />
            <div data-testid="pane-1" />
            <div data-testid="handle-1" {...s.getHandleProps({ index: 1 })} />
            <div data-testid="pane-2" />
          </div>
        );
      }

      render(
        <ThreePaneHarness
          panels={[{ defaultSize: '600px' }, { defaultSize: '600px' }, { defaultSize: 1, min: 0 }]}
        />
      );

      // container 1000px, two fixed panes overflow (total 1200px, scale 1000/1200): each renders
      // 500px, flex 0. Dragging handle-1 left hands 200px to the flex pane and clears the overflow.
      const handle = screen.getByTestId('handle-1');
      fireEvent(
        handle,
        new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: 300, clientY: 100 })
      );

      act(() => {
        fireEvent(
          document,
          new MouseEvent('pointerup', { bubbles: true, clientX: 100, clientY: 100 })
        );
      });

      // The untouched first pane must drop from its over-sized 600px to its rendered 500px, otherwise
      // it would expand to 600px and starve the flex pane on the next render.
      expect(splitter!.sizes[0]).toBe('500px');
      expect(splitter!.sizes[1]).toBe('300px');
      expect(splitter!.sizes[2] as number).toBeCloseTo(20);
    });

    it('re-encodes untouched flex panes when a drag clears the overflow', () => {
      let splitter: UseSplitterReturnValue;

      function FourPaneHarness(props: UseSplitterOptions) {
        const s = useSplitter(props);
        splitter = s;
        return (
          <div ref={s.ref} data-testid="container">
            <div data-testid="pane-0" />
            <div data-testid="handle-0" {...s.getHandleProps({ index: 0 })} />
            <div data-testid="pane-1" />
            <div data-testid="handle-1" {...s.getHandleProps({ index: 1 })} />
            <div data-testid="pane-2" />
            <div data-testid="handle-2" {...s.getHandleProps({ index: 2 })} />
            <div data-testid="pane-3" />
          </div>
        );
      }

      render(
        <FourPaneHarness
          panels={[
            { defaultSize: '600px' },
            { defaultSize: '600px' },
            { defaultSize: 1, min: 0 },
            { defaultSize: 1, min: 0 },
          ]}
        />
      );

      // Two fixed panes overflow (1200px in 1000px), both flex panes render at 0. Dragging handle-1
      // hands 200px only to flex pane 2; flex pane 3 stays at 0 and must not reclaim space afterwards.
      const handle = screen.getByTestId('handle-1');
      fireEvent(
        handle,
        new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: 300, clientY: 100 })
      );

      act(() => {
        fireEvent(
          document,
          new MouseEvent('pointerup', { bubbles: true, clientX: 100, clientY: 100 })
        );
      });

      expect(splitter!.sizes[0]).toBe('500px');
      expect(splitter!.sizes[1]).toBe('300px');
      expect(splitter!.sizes[2] as number).toBeCloseTo(20);
      // The untouched flex pane stays collapsed instead of stealing half of the freed 200px.
      expect(splitter!.sizes[3] as number).toBeCloseTo(0);
    });
  });

  describe('redistribute preserves sum', () => {
    it('nearest: sizes sum to 100 after multiple operations', () => {
      render(
        <TestComponent
          panels={[
            { defaultSize: 25, min: 5 },
            { defaultSize: 25, min: 5 },
            { defaultSize: 50, min: 5 },
          ]}
          redistribute="nearest"
        />
      );

      const handle = screen.getByTestId('handle-0');
      for (let i = 0; i < 30; i++) {
        fireEvent.keyDown(handle, { key: 'ArrowRight' });
      }

      const panel0 = screen.getByTestId('panel-0');
      const panel1 = screen.getByTestId('panel-1');
      const panel2 = screen.getByTestId('panel-2');
      const sum =
        parseFloat(panel0.style.width) +
        parseFloat(panel1.style.width) +
        parseFloat(panel2.style.width);
      expect(sum).toBe(100);
    });

    it('equal: sizes sum to 100 after multiple operations', () => {
      render(
        <TestComponent
          panels={[
            { defaultSize: 25, min: 5 },
            { defaultSize: 25, min: 5 },
            { defaultSize: 50, min: 5 },
          ]}
          redistribute="equal"
        />
      );

      const handle = screen.getByTestId('handle-0');
      for (let i = 0; i < 30; i++) {
        fireEvent.keyDown(handle, { key: 'ArrowRight' });
      }

      const panel0 = screen.getByTestId('panel-0');
      const panel1 = screen.getByTestId('panel-1');
      const panel2 = screen.getByTestId('panel-2');
      const sum =
        parseFloat(panel0.style.width) +
        parseFloat(panel1.style.width) +
        parseFloat(panel2.style.width);
      expect(sum).toBe(100);
    });
  });

  describe('reset', () => {
    it('reset(handleIndex) restores adjacent panels to their default ratio and leaves other panels untouched', () => {
      const { result } = renderHook(() =>
        useSplitter({ panels: [{ defaultSize: 20 }, { defaultSize: 30 }, { defaultSize: 50 }] })
      );

      act(() => {
        result.current.setSizes([10, 20, 70]);
      });

      act(() => {
        result.current.reset(0);
      });

      // combined size of panes 0 and 1 (30) preserved, restored to 20:30 ratio
      expect(result.current.sizes).toEqual([12, 18, 70]);
    });

    it('reset clamps adjacent panels to their min constraints', () => {
      const { result } = renderHook(() =>
        useSplitter({
          panels: [{ defaultSize: 20 }, { defaultSize: 60, min: 50 }, { defaultSize: 20 }],
        })
      );

      act(() => {
        result.current.setSizes([55, 5, 40]);
      });

      act(() => {
        result.current.reset(0);
      });

      // default ratio would put pane 0 at 15, but pane 1 must keep its min of 50
      expect(result.current.sizes).toEqual([10, 50, 40]);
    });

    it('keeps both panes collapsed when resetting the handle between two collapsed panes', () => {
      const { result } = renderHook(() =>
        useSplitter({
          panels: [
            { defaultSize: 25, min: 10, collapsible: true },
            { defaultSize: 25, min: 10, collapsible: true },
            { defaultSize: 50 },
          ],
        })
      );

      act(() => result.current.collapse(0));
      act(() => result.current.collapse(1));
      expect(result.current.sizes).toEqual([0, 0, 100]);

      act(() => result.current.reset(0));
      expect(result.current.sizes).toEqual([0, 0, 100]);
      expect(result.current.collapsed).toEqual([true, true, false]);
    });

    it('does not open a collapsed pane below its min on reset', () => {
      const { result } = renderHook(() =>
        useSplitter({
          panels: [
            { defaultSize: 50, min: 20, collapsible: true },
            { defaultSize: 50, min: 10 },
            { defaultSize: 0 },
          ],
        })
      );

      act(() => result.current.setSizes([0, 15, 85]));
      act(() => result.current.reset(0));
      expect(result.current.sizes).toEqual([0, 15, 85]);
    });

    it('double-clicking a handle resets its adjacent panels to the default ratio', () => {
      render(
        <TestComponent panels={[{ defaultSize: 20 }, { defaultSize: 30 }, { defaultSize: 50 }]} />
      );

      const handle = screen.getByTestId('handle-0');
      for (let i = 0; i < 10; i++) {
        fireEvent.keyDown(handle, { key: 'ArrowRight' });
      }
      expect(handle.getAttribute('aria-valuenow')).toBe('30');

      fireEvent.doubleClick(handle);
      expect(handle.getAttribute('aria-valuenow')).toBe('20');
    });

    it('does not reset on double click when resetOnDoubleClick is false', () => {
      render(
        <TestComponent
          panels={[{ defaultSize: 20 }, { defaultSize: 30 }, { defaultSize: 50 }]}
          resetOnDoubleClick={false}
        />
      );

      const handle = screen.getByTestId('handle-0');
      for (let i = 0; i < 10; i++) {
        fireEvent.keyDown(handle, { key: 'ArrowRight' });
      }
      expect(handle.getAttribute('aria-valuenow')).toBe('30');

      fireEvent.doubleClick(handle);
      expect(handle.getAttribute('aria-valuenow')).toBe('30');
    });
  });

  describe('measured container', () => {
    let rectSpy: jest.SpyInstance;
    let containerWidth = 1000;
    let handleWidth = 0;
    let resizeCallbacks: (() => void)[] = [];
    const OriginalResizeObserver = window.ResizeObserver;

    class CapturingResizeObserver {
      callback: () => void;
      constructor(callback: () => void) {
        this.callback = callback;
      }
      observe() {
        resizeCallbacks.push(this.callback);
      }
      unobserve() {}
      disconnect() {
        resizeCallbacks = resizeCallbacks.filter((cb) => cb !== this.callback);
      }
    }

    function Harness({
      onSplitter,
      ...props
    }: UseSplitterOptions & { onSplitter: (splitter: UseSplitterReturnValue) => void }) {
      const splitter = useSplitter(props);
      onSplitter(splitter);

      return (
        <div ref={splitter.ref} data-testid="container">
          {props.panels.map((_, index) => (
            <Fragment key={index}>
              {index > 0 && (
                <div
                  data-testid={`handle-${index - 1}`}
                  {...splitter.getHandleProps({ index: index - 1 })}
                />
              )}
              <div data-testid={`pane-${index}`} />
            </Fragment>
          ))}
        </div>
      );
    }

    function setup(props: UseSplitterOptions) {
      const ref: { current: UseSplitterReturnValue } = { current: null as any };
      const utils = render(
        <Harness
          {...props}
          onSplitter={(splitter) => {
            ref.current = splitter;
          }}
        />
      );
      return { splitter: ref, ...utils };
    }

    function toPx(size: SplitterPaneSize, container: number) {
      if (typeof size === 'number') {
        return (size / 100) * container;
      }
      if (size.endsWith('px')) {
        return parseFloat(size);
      }
      if (size.endsWith('rem')) {
        return parseFloat(size) * 16;
      }
      return (parseFloat(size) / 100) * container;
    }

    function isFixed(size: SplitterPaneSize) {
      return typeof size === 'string' && (size.endsWith('px') || size.endsWith('rem'));
    }

    function layout(sizes: SplitterPaneSize[], pixelMode: boolean, container = containerWidth) {
      if (!pixelMode) {
        return sizes.map((size) => toPx(size, container));
      }
      const fixedTotal = sizes.reduce<number>(
        (acc, size) => acc + (isFixed(size) ? toPx(size, container) : 0),
        0
      );
      const weights = sizes.reduce<number>(
        (acc, size) => acc + (isFixed(size) ? 0 : parseFloat(String(size))),
        0
      );
      const scale = fixedTotal > container ? container / fixedTotal : 1;
      const leftover = Math.max(0, container - fixedTotal);
      return sizes.map((size) =>
        isFixed(size)
          ? toPx(size, container) * scale
          : weights > 0
            ? (parseFloat(String(size)) / weights) * leftover
            : 0
      );
    }

    function rendered(splitter: { current: UseSplitterReturnValue }) {
      return layout(splitter.current.sizes, splitter.current.pixelMode);
    }

    function expectLayout(actual: number[], expected: number[]) {
      expect(actual).toHaveLength(expected.length);
      actual.forEach((value, index) => expect(value).toBeCloseTo(expected[index], 1));
    }

    function drag(handleIndex: number, dx: number, startX = 500) {
      const handle = screen.getByTestId(`handle-${handleIndex}`);
      fireEvent(
        handle,
        new MouseEvent('pointerdown', { bubbles: true, button: 0, clientX: startX, clientY: 100 })
      );
      act(() => {
        fireEvent(
          document,
          new MouseEvent('pointerup', { bubbles: true, clientX: startX + dx, clientY: 100 })
        );
      });
    }

    async function resizeContainer(width: number) {
      containerWidth = width;
      await act(async () => {
        resizeCallbacks.forEach((cb) => cb());
        await new Promise((resolve) => setTimeout(resolve, 50));
      });
    }

    beforeEach(() => {
      containerWidth = 1000;
      resizeCallbacks = [];
      window.ResizeObserver = CapturingResizeObserver as any;
      handleWidth = 0;
      rectSpy = jest
        .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
        .mockImplementation(function getRect(this: HTMLElement) {
          const width = this.getAttribute('role') === 'separator' ? handleWidth : containerWidth;
          return {
            width,
            height: 600,
            top: 0,
            left: 0,
            right: width,
            bottom: 600,
            x: 0,
            y: 0,
            toJSON: () => ({}),
          } as DOMRect;
        });
    });

    afterEach(() => {
      rectSpy.mockRestore();
      window.ResizeObserver = OriginalResizeObserver;
    });

    describe('size resolution', () => {
      it('keeps untouched flexible panes in place when a drag next to a fixed pane re-encodes weights', () => {
        const { splitter } = setup({
          panels: [{ defaultSize: '200px' }, { defaultSize: 50 }, { defaultSize: 50 }],
        });
        drag(0, 100);
        expectLayout(rendered(splitter), [300, 300, 400]);
      });

      it('keeps flexible pane ratios consistent with uneven weights after a drag', () => {
        const { splitter } = setup({
          panels: [{ defaultSize: '200px' }, { defaultSize: 40 }, { defaultSize: 60 }],
        });
        drag(0, 100);
        expectLayout(rendered(splitter), [300, 220, 480]);
      });

      it('keeps untouched flexible panes in place on keyboard resize next to a fixed pane', () => {
        const { splitter } = setup({
          panels: [{ defaultSize: '200px' }, { defaultSize: 40 }, { defaultSize: 60 }],
          step: '100px',
        });
        fireEvent.keyDown(screen.getByTestId('handle-0'), { key: 'ArrowRight' });
        expectLayout(rendered(splitter), [300, 220, 480]);
      });

      it('resets mixed-unit panes to the rendered default layout', () => {
        const { splitter } = setup({
          panels: [{ defaultSize: '240px' }, { defaultSize: 100 }],
        });
        drag(0, 150);
        expectLayout(rendered(splitter), [390, 610]);
        fireEvent.doubleClick(screen.getByTestId('handle-0'));
        expectLayout(rendered(splitter), [240, 760]);
      });

      it('restores the pixel size of a flexible pane on expand in mixed units', () => {
        const { splitter } = setup({
          panels: [
            { defaultSize: '200px' },
            { defaultSize: 40, collapsible: true },
            { defaultSize: 60 },
          ],
        });
        expectLayout(rendered(splitter), [200, 320, 480]);
        act(() => splitter.current.collapse(1));
        expect(splitter.current.collapsed).toEqual([false, true, false]);
        act(() => splitter.current.expand(1));
        expectLayout(rendered(splitter), [200, 320, 480]);
      });

      it('expands a middle pane by borrowing from the neighbor that received its space', () => {
        const onCollapseChange = jest.fn();
        const { splitter } = setup({
          panels: [
            { defaultSize: 30, min: 30 },
            { defaultSize: 30, min: 20, collapsible: true },
            { defaultSize: 40 },
          ],
          onCollapseChange,
        });
        drag(1, -150);
        expect(splitter.current.sizes).toEqual([30, 0, 70]);
        act(() => splitter.current.expand(1));
        expect(splitter.current.sizes).toEqual([30, 30, 40]);
        expect(onCollapseChange.mock.calls).toEqual([
          [1, true],
          [1, false],
        ]);
      });

      it('does not collapse a pane by drag when the receiving pane would exceed its max', () => {
        const { splitter } = setup({
          panels: [
            { defaultSize: 50, max: 60 },
            { defaultSize: 50, min: 20, collapsible: true },
          ],
        });
        drag(0, 450);
        expect(splitter.current.sizes).toEqual([60, 40]);
        expect(splitter.current.collapsed).toEqual([false, false]);
      });

      it('does not collapse a pane programmatically when the receiving pane would exceed its max', () => {
        const onCollapseChange = jest.fn();
        const { splitter } = setup({
          panels: [
            { defaultSize: 50, max: 60 },
            { defaultSize: 50, min: 20, collapsible: true },
          ],
          onCollapseChange,
        });
        act(() => splitter.current.collapse(1));
        expect(splitter.current.sizes).toEqual([50, 50]);
        expect(onCollapseChange).not.toHaveBeenCalled();
      });

      it.each([undefined, 'nearest', 'equal'] as const)(
        'collapses by drag below min with the default threshold (redistribute: %s)',
        (redistribute) => {
          const { splitter } = setup({
            panels: [{ defaultSize: 30, min: 20, collapsible: true }, { defaultSize: 70 }],
            redistribute,
          });
          drag(0, -150);
          expect(splitter.current.sizes).toEqual([0, 100]);
        }
      );

      it('re-applies constraints when the container shrinks', async () => {
        const onSizeChange = jest.fn();
        const { splitter } = setup({
          panels: [{ defaultSize: '240px', min: '160px', max: '50%' }, { defaultSize: 100 }],
          onSizeChange,
        });
        await resizeContainer(400);
        expectLayout(rendered(splitter), [200, 200]);
        expect(onSizeChange).toHaveBeenCalled();
        const handle = screen.getByTestId('handle-0');
        expect(handle.getAttribute('aria-valuenow')).toBe('200');
        expect(handle.getAttribute('aria-valuemax')).toBe('200');
        fireEvent.keyDown(handle, { key: 'ArrowLeft' });
        expect(Number(handle.getAttribute('aria-valuenow'))).toBeLessThan(200);
      });

      it('does not change sizes or fire size callbacks on a click without movement', () => {
        const onSizeChange = jest.fn();
        const onResizeStart = jest.fn();
        const onResizeEnd = jest.fn();
        const onCollapseChange = jest.fn();
        const { splitter } = setup({
          panels: [{ defaultSize: 0, min: 20, collapsible: true }, { defaultSize: 100 }],
          onSizeChange,
          onResizeStart,
          onResizeEnd,
          onCollapseChange,
        });
        drag(0, 0);
        drag(0, 0);
        expect(splitter.current.sizes).toEqual([0, 100]);
        expect(onSizeChange).not.toHaveBeenCalled();
        expect(onResizeStart).not.toHaveBeenCalled();
        expect(onResizeEnd).not.toHaveBeenCalled();
        expect(onCollapseChange).not.toHaveBeenCalled();
      });

      it('keeps double-click reset working after a click without movement', () => {
        const { splitter } = setup({
          panels: [{ defaultSize: 30 }, { defaultSize: 70 }],
        });
        drag(0, 100);
        expect(splitter.current.sizes).toEqual([40, 60]);
        drag(0, 0);
        drag(0, 0);
        fireEvent.doubleClick(screen.getByTestId('handle-0'));
        expect(splitter.current.sizes).toEqual([30, 70]);
      });

      it('fires resize callbacks once a drag moves', () => {
        const onResizeStart = jest.fn();
        const onResizeEnd = jest.fn();
        setup({
          panels: [{ defaultSize: 30 }, { defaultSize: 70 }],
          onResizeStart,
          onResizeEnd,
        });
        drag(0, 100);
        expect(onResizeStart).toHaveBeenCalledTimes(1);
        expect(onResizeStart).toHaveBeenCalledWith(0);
        expect(onResizeEnd).toHaveBeenCalledTimes(1);
        expect(onResizeEnd).toHaveBeenCalledWith(0, [40, 60]);
      });

      it('gives open panes their min when the container shrinks', async () => {
        containerWidth = 500;
        const { splitter } = setup({
          panels: [
            { defaultSize: '300px', min: '100px' },
            { defaultSize: 100, min: '100px' },
          ],
        });
        await resizeContainer(300);
        expectLayout(rendered(splitter), [200, 100]);
      });

      it('resolves sizes against the space left after the handles', () => {
        containerWidth = 1004;
        handleWidth = 2;
        const { splitter } = setup({
          panels: [
            { defaultSize: '200px' },
            { defaultSize: 40, min: 10, collapsible: true },
            { defaultSize: 60, min: 10 },
          ],
        });
        expectLayout(layout(splitter.current.sizes, true, 1000), [200, 320, 480]);
        act(() => splitter.current.collapse(1));
        expectLayout(layout(splitter.current.sizes, true, 1000), [520, 0, 480]);
      });

      it('returns pane styles that decide units in one place', () => {
        const { splitter } = setup({
          panels: [{ defaultSize: '200px' }, { defaultSize: 40 }],
        });
        expect(splitter.current.getPaneStyle(0)).toEqual({
          flexGrow: 0,
          flexShrink: 1,
          flexBasis: '200px',
        });
        expect(splitter.current.getPaneStyle(1)).toEqual({
          flexGrow: 40,
          flexShrink: 1,
          flexBasis: 0,
        });

        const percent = setup({ panels: [{ defaultSize: 30 }, { defaultSize: '70%' }] });
        expect(percent.splitter.current.getPaneStyle(0)).toEqual({ flexBasis: '30%' });
        expect(percent.splitter.current.getPaneStyle(1)).toEqual({ flexBasis: '70%' });
      });
    });
    describe('interaction', () => {
      describe('pointer drag lifecycle', () => {
        function pointer(type: string, clientX: number, pointerId = 1) {
          const event = new MouseEvent(type, { bubbles: true, button: 0, clientX, clientY: 100 });
          Object.defineProperty(event, 'pointerId', { value: pointerId });
          return event;
        }

        it('captures the pointer on the handle and ends the drag when the capture is lost', () => {
          const onResizeEnd = jest.fn();
          const { splitter } = setup({ panels: defaultPanels, onResizeEnd });
          const handle = screen.getByTestId('handle-0');
          const setPointerCapture = jest.fn();
          (handle as any).setPointerCapture = setPointerCapture;

          fireEvent(handle, pointer('pointerdown', 500, 7));
          expect(setPointerCapture).toHaveBeenCalledWith(7);
          expect(handle.getAttribute('data-active')).toBe('true');

          act(() => {
            fireEvent(handle, pointer('lostpointercapture', 0, 7));
          });
          expect(handle.getAttribute('data-active')).toBeNull();
          expect(document.body.style.cursor).toBe('');
          expect(document.body.style.userSelect).toBe('');

          act(() => {
            fireEvent(document, pointer('pointerup', 800, 7));
          });
          expect(splitter.current.sizes).toEqual([50, 50]);
          expect(onResizeEnd).not.toHaveBeenCalled();
        });

        it('ends the drag without resizing on pointercancel', () => {
          const { splitter } = setup({ panels: defaultPanels });
          const handle = screen.getByTestId('handle-0');
          fireEvent(handle, pointer('pointerdown', 500));
          act(() => {
            fireEvent(document, pointer('pointercancel', 0));
          });
          expect(splitter.current.sizes).toEqual([50, 50]);
          expect(handle.getAttribute('data-active')).toBeNull();
          expect(document.body.style.cursor).toBe('');
        });

        it('ignores other pointers while a drag is active', () => {
          const { splitter } = setup({ panels: defaultPanels });
          const handle = screen.getByTestId('handle-0');
          fireEvent(handle, pointer('pointerdown', 500, 1));
          fireEvent(handle, pointer('pointerdown', 300, 2));
          act(() => {
            fireEvent(document, pointer('pointerup', 900, 2));
          });
          expect(splitter.current.sizes).toEqual([50, 50]);
          expect(handle.getAttribute('data-active')).toBe('true');
          act(() => {
            fireEvent(document, pointer('pointerup', 600, 1));
          });
          expect(splitter.current.sizes).toEqual([60, 40]);
          expect(handle.getAttribute('data-active')).toBeNull();
        });
      });

      describe('latest onSizeChange', () => {
        it('calls the latest onSizeChange on pointer drag in uncontrolled mode', () => {
          const first = jest.fn();
          const second = jest.fn();
          const { rerender } = setup({ panels: defaultPanels, onSizeChange: first });
          rerender(<Harness panels={defaultPanels} onSizeChange={second} onSplitter={() => {}} />);
          drag(0, 100);
          expect(first).not.toHaveBeenCalled();
          expect(second).toHaveBeenCalledWith([60, 40]);
        });

        it('calls the latest onSizeChange on pointer drag in controlled mode', () => {
          const first = jest.fn();
          const second = jest.fn();
          const { rerender } = setup({
            panels: defaultPanels,
            sizes: [50, 50],
            onSizeChange: first,
          });
          rerender(
            <Harness
              panels={defaultPanels}
              sizes={[50, 50]}
              onSizeChange={second}
              onSplitter={() => {}}
            />
          );
          drag(0, 100);
          expect(first).not.toHaveBeenCalled();
          expect(second).toHaveBeenCalledWith([60, 40]);
        });

        it('calls the latest onSizeChange when the container resize clamps sizes', async () => {
          const first = jest.fn();
          const second = jest.fn();
          const panels: UseSplitterOptions['panels'] = [
            { defaultSize: '240px', min: '160px', max: '50%' },
            { defaultSize: 100 },
          ];
          const { rerender } = setup({ panels, onSizeChange: first });
          first.mockClear();
          rerender(<Harness panels={panels} onSizeChange={second} onSplitter={() => {}} />);
          await resizeContainer(400);
          expect(first).not.toHaveBeenCalled();
          expect(second).toHaveBeenCalled();
        });
      });

      describe('direction', () => {
        function setupWithDirection(props: UseSplitterOptions) {
          const ref: { current: UseSplitterReturnValue } = { current: null as any };
          function DirHarness() {
            const splitter = useSplitter(props);
            ref.current = splitter;
            return (
              <div ref={splitter.ref} style={{ direction: 'rtl' }}>
                <div />
                <div data-testid="handle-0" {...splitter.getHandleProps({ index: 0 })} />
                <div />
              </div>
            );
          }
          render(<DirHarness />);
          return ref;
        }

        it('reads the container direction when dir is not set', () => {
          const splitter = setupWithDirection({ panels: defaultPanels });
          drag(0, 100);
          expect(splitter.current.sizes).toEqual([40, 60]);
          fireEvent.keyDown(screen.getByTestId('handle-0'), { key: 'ArrowRight' });
          expect(splitter.current.sizes).toEqual([39, 61]);
        });

        it('prefers the dir option over the container direction', () => {
          const splitter = setupWithDirection({ panels: defaultPanels, dir: 'ltr' });
          drag(0, 100);
          expect(splitter.current.sizes).toEqual([60, 40]);
          fireEvent.keyDown(screen.getByTestId('handle-0'), { key: 'ArrowRight' });
          expect(splitter.current.sizes).toEqual([61, 39]);
        });
      });

      describe('pane count change', () => {
        it('re-derives uncontrolled sizes from defaults when a pane is added', () => {
          const two = [{ defaultSize: 40 }, { defaultSize: 60 }];
          const three = [{ defaultSize: 30 }, { defaultSize: 30 }, { defaultSize: 40 }];
          const { splitter, rerender } = setup({ panels: two });
          drag(0, 100);
          expect(splitter.current.sizes).toEqual([50, 50]);
          rerender(
            <Harness
              panels={three}
              onSplitter={(s) => {
                splitter.current = s;
              }}
            />
          );
          expect(splitter.current.sizes).toEqual([30, 30, 40]);
          expect(splitter.current.getPaneStyle(2)).toEqual({ flexBasis: '40%' });
          drag(1, 100);
          expect(splitter.current.sizes).toEqual([30, 40, 30]);
        });

        it('re-derives uncontrolled sizes from defaults when a leading pane is removed', () => {
          const three = [{ defaultSize: 20 }, { defaultSize: 30 }, { defaultSize: 50 }];
          const two = [{ defaultSize: 30 }, { defaultSize: 70 }];
          const { splitter, rerender } = setup({ panels: three });
          drag(0, 100);
          expect(splitter.current.sizes).toEqual([30, 20, 50]);
          rerender(
            <Harness
              panels={two}
              onSplitter={(s) => {
                splitter.current = s;
              }}
            />
          );
          expect(splitter.current.sizes).toEqual([30, 70]);
          drag(0, -100);
          expect(splitter.current.sizes).toEqual([20, 80]);
        });
      });

      describe('separator range', () => {
        it('reports the range reachable with the neighbor constraints', () => {
          setup({
            panels: [
              { defaultSize: 50, min: 20 },
              { defaultSize: 50, min: 20 },
            ],
          });
          const handle = screen.getByTestId('handle-0');
          expect(handle.getAttribute('aria-valuemin')).toBe('20');
          expect(handle.getAttribute('aria-valuemax')).toBe('80');
          fireEvent.keyDown(handle, { key: 'End' });
          expect(handle.getAttribute('aria-valuenow')).toBe('80');
          fireEvent.keyDown(handle, { key: 'Home' });
          expect(handle.getAttribute('aria-valuenow')).toBe('20');
        });

        it('accounts for the neighbor max', () => {
          setup({ panels: [{ defaultSize: 50 }, { defaultSize: 50, max: 70 }] });
          const handle = screen.getByTestId('handle-0');
          expect(handle.getAttribute('aria-valuemin')).toBe('30');
          expect(handle.getAttribute('aria-valuemax')).toBe('100');
        });

        it('includes space borrowed from further panes with redistribute', () => {
          const panels = [
            { defaultSize: 30, min: 10 },
            { defaultSize: 30, min: 10 },
            { defaultSize: 40, min: 10 },
          ];
          setup({ panels, redistribute: 'nearest' });
          const handle = screen.getByTestId('handle-0');
          expect(handle.getAttribute('aria-valuemax')).toBe('80');
          fireEvent.keyDown(handle, { key: 'End' });
          expect(handle.getAttribute('aria-valuenow')).toBe('80');
        });

        it('keeps the current value inside the range when a pane is collapsed', () => {
          const { splitter } = setup({
            panels: [{ defaultSize: 30, min: 20, collapsible: true }, { defaultSize: 70 }],
          });
          act(() => splitter.current.collapse(0));
          const handle = screen.getByTestId('handle-0');
          expect(handle.getAttribute('aria-valuenow')).toBe('0');
          expect(handle.getAttribute('aria-valuemin')).toBe('0');
        });
      });

      describe('invariants under random operation sequences', () => {
        function createRandom(seed: number) {
          let state = seed;
          return () => {
            state = (state * 1664525 + 1013904223) % 4294967296;
            return state / 4294967296;
          };
        }

        const configs: { name: string; options: Omit<UseSplitterOptions, 'redistribute'> }[] = [
          {
            name: 'percent',
            options: {
              panels: [
                { defaultSize: 25, min: 10, max: 60, collapsible: true },
                { defaultSize: 35, min: 15 },
                { defaultSize: 40, min: 10, max: 70, collapsible: true, collapseThreshold: 15 },
              ],
            },
          },
          {
            name: 'adjacent collapsible',
            options: {
              panels: [
                { defaultSize: 25, min: 10, collapsible: true },
                { defaultSize: 25, min: 10, collapsible: true },
                { defaultSize: 50, min: 10, max: 90, collapsible: true },
              ],
            },
          },
          {
            name: 'mixed units',
            options: {
              panels: [
                { defaultSize: '200px', min: '120px', max: '40%', collapsible: true },
                { defaultSize: 50, min: 10 },
                { defaultSize: 50, min: '80px', collapsible: true },
                { defaultSize: '10rem', min: '5rem', max: '20rem' },
              ],
              step: '25px',
              shiftStep: '10%',
            },
          },
        ];

        function getViolations(
          splitter: { current: UseSplitterReturnValue },
          options: UseSplitterOptions
        ) {
          const values = rendered(splitter);
          const violations: string[] = [];
          const sum = values.reduce((acc, value) => acc + value, 0);
          if (Math.abs(sum - containerWidth) > 0.01) {
            violations.push(`sum ${sum} !== ${containerWidth}`);
          }
          values.forEach((value, index) => {
            const panel = options.panels[index];
            if (splitter.current.collapsed[index]) {
              if (value !== 0) {
                violations.push(`collapsed pane ${index} is ${value}`);
              }
              return;
            }
            const min = panel.min != null ? toPx(panel.min, containerWidth) : 0;
            const max = panel.max != null ? toPx(panel.max, containerWidth) : Infinity;
            if (value < min - 0.01 || value > max + 0.01) {
              violations.push(`pane ${index} is ${value}, expected [${min}, ${max}]`);
            }
          });
          return violations;
        }

        configs.forEach(({ name, options: baseOptions }) => {
          (['adjacent', 'nearest', 'equal'] as const).forEach((strategy) => {
            it(`${name}, ${strategy}: sizes respect min/max and fill the container`, async () => {
              const options: UseSplitterOptions = {
                ...baseOptions,
                redistribute: strategy === 'adjacent' ? undefined : strategy,
              };
              const { splitter } = setup(options);
              const random = createRandom(name.length * 31 + strategy.length);
              const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End', 'Enter'];
              const handles = options.panels.length - 1;
              const log: string[] = [];

              const violations: string[] = getViolations(splitter, options).map(
                (violation) => `initial: ${violation}`
              );

              for (let i = 0; i < 120; i += 1) {
                const op = Math.floor(random() * 7);
                const handle = Math.floor(random() * handles);
                const pane = Math.floor(random() * options.panels.length);
                if (op === 0 || op === 1) {
                  const dx = Math.round((random() - 0.5) * 700);
                  log.push(`drag(${handle}, ${dx})`);
                  drag(handle, dx);
                } else if (op === 2) {
                  const key = keys[Math.floor(random() * keys.length)];
                  const shiftKey = random() > 0.5;
                  log.push(`key(${handle}, ${key}, ${shiftKey})`);
                  fireEvent.keyDown(screen.getByTestId(`handle-${handle}`), { key, shiftKey });
                } else if (op === 3) {
                  log.push(`toggle(${pane})`);
                  act(() => splitter.current.toggleCollapse(pane));
                } else if (op === 4) {
                  log.push(`reset(${handle})`);
                  fireEvent.doubleClick(screen.getByTestId(`handle-${handle}`));
                } else if (op === 5 && splitter.current.pixelMode) {
                  const width = 700 + Math.round(random() * 700);
                  log.push(`resize(${width})`);
                  await resizeContainer(width);
                } else {
                  log.push(`click(${handle})`);
                  drag(handle, 0);
                }
                getViolations(splitter, options).forEach((violation) =>
                  violations.push(`${log.slice(-6).join(' > ')}: ${violation}`)
                );
              }

              expect(violations).toEqual([]);
            });
          });
        });
      });
      describe('collapsed state', () => {
        function pointer(type: string, clientX: number) {
          return new MouseEvent(type, { bubbles: true, button: 0, clientX, clientY: 100 });
        }

        async function nextFrame() {
          await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
          });
        }

        const strategies = [undefined, 'nearest', 'equal'] as const;

        it.each(strategies)(
          'does not expand a collapsed pane on the key that shrinks it (redistribute: %s)',
          (redistribute) => {
            const onCollapseChange = jest.fn();
            const { splitter } = setup({
              panels: [{ defaultSize: 30, min: 20, collapsible: true }, { defaultSize: 70 }],
              redistribute,
              onCollapseChange,
            });
            act(() => splitter.current.collapse(0));
            fireEvent.keyDown(screen.getByTestId('handle-0'), { key: 'ArrowLeft' });
            expect(splitter.current.sizes).toEqual([0, 100]);
            expect(onCollapseChange.mock.calls).toEqual([[0, true]]);
          }
        );

        it.each(strategies)(
          'does not expand a collapsed pane after the handle on the key that shrinks it (redistribute: %s)',
          (redistribute) => {
            const { splitter } = setup({
              panels: [{ defaultSize: 70 }, { defaultSize: 30, min: 20, collapsible: true }],
              redistribute,
            });
            act(() => splitter.current.collapse(1));
            fireEvent.keyDown(screen.getByTestId('handle-0'), { key: 'ArrowRight' });
            expect(splitter.current.sizes).toEqual([100, 0]);
          }
        );

        it.each(strategies)(
          'opens a collapsed pane to its min with the key that grows it (redistribute: %s)',
          (redistribute) => {
            const onCollapseChange = jest.fn();
            const { splitter } = setup({
              panels: [{ defaultSize: 70 }, { defaultSize: 30, min: 20, collapsible: true }],
              redistribute,
              onCollapseChange,
            });
            act(() => splitter.current.collapse(1));
            fireEvent.keyDown(screen.getByTestId('handle-0'), { key: 'ArrowLeft' });
            expect(splitter.current.sizes).toEqual([80, 20]);
            expect(onCollapseChange.mock.calls).toEqual([
              [1, true],
              [1, false],
            ]);
          }
        );

        it.each(strategies)(
          'keeps a collapsed pane collapsed on drag jitter (redistribute: %s)',
          (redistribute) => {
            const onCollapseChange = jest.fn();
            const { splitter } = setup({
              panels: [{ defaultSize: 30, min: 20, collapsible: true }, { defaultSize: 70 }],
              redistribute,
              onCollapseChange,
            });
            act(() => splitter.current.collapse(0));
            drag(0, -1, 0);
            drag(0, 1, 0);
            drag(0, 150, 0);
            expect(splitter.current.sizes).toEqual([0, 100]);
            expect(onCollapseChange.mock.calls).toEqual([[0, true]]);
            drag(0, 250, 0);
            expect(splitter.current.sizes).toEqual([25, 75]);
          }
        );

        it.each(strategies)(
          'opens a collapsed pane to its min once the threshold is reached (redistribute: %s)',
          (redistribute) => {
            const { splitter } = setup({
              panels: [
                { defaultSize: 30, min: 20, collapsible: true, collapseThreshold: 10 },
                { defaultSize: 70 },
              ],
              redistribute,
            });
            act(() => splitter.current.collapse(0));
            drag(0, 50, 0);
            expect(splitter.current.sizes).toEqual([0, 100]);
            drag(0, 150, 0);
            expect(splitter.current.sizes).toEqual([20, 80]);
          }
        );

        it('collapses a pane again when a drag that opened it returns below the threshold', async () => {
          const onCollapseChange = jest.fn();
          const { splitter } = setup({
            panels: [{ defaultSize: 30, min: 20, collapsible: true }, { defaultSize: 70 }],
            onCollapseChange,
          });
          act(() => splitter.current.collapse(0));
          const handle = screen.getByTestId('handle-0');
          fireEvent(handle, pointer('pointerdown', 0));
          fireEvent(document, pointer('pointermove', 300));
          await nextFrame();
          expect(splitter.current.sizes).toEqual([30, 70]);
          act(() => {
            fireEvent(document, pointer('pointerup', 50));
          });
          expect(splitter.current.sizes).toEqual([0, 100]);
          expect(onCollapseChange.mock.calls).toEqual([
            [0, true],
            [0, false],
            [0, true],
          ]);
        });

        it('collapses a pane with Enter when the neighbor is squeezed to zero', () => {
          const { splitter } = setup({
            panels: [{ defaultSize: 30, min: 15, collapsible: true }, { defaultSize: 70 }],
          });
          const handle = screen.getByTestId('handle-0');
          fireEvent.keyDown(handle, { key: 'End' });
          expect(splitter.current.sizes).toEqual([100, 0]);
          fireEvent.keyDown(handle, { key: 'Enter' });
          expect(splitter.current.sizes).toEqual([0, 100]);
          fireEvent.keyDown(handle, { key: 'Enter' });
          expect(splitter.current.sizes).toEqual([100, 0]);
        });

        it('does not restore a size saved by a drag collapse after the pane was opened by drag', () => {
          const { splitter } = setup({
            panels: [{ defaultSize: 40, min: 20, collapsible: true }, { defaultSize: 60 }],
          });
          act(() => splitter.current.setSizes([30, 70]));
          drag(0, -250, 300);
          expect(splitter.current.sizes).toEqual([0, 100]);
          drag(0, 500, 0);
          expect(splitter.current.sizes).toEqual([50, 50]);
          act(() => splitter.current.setSizes([0, 100]));
          act(() => splitter.current.expand(0));
          expect(splitter.current.sizes).toEqual([40, 60]);
        });

        it('does not restore a size saved by a drag collapse after the pane was opened by reset', () => {
          const { splitter } = setup({
            panels: [{ defaultSize: 40, min: 20, collapsible: true }, { defaultSize: 60 }],
          });
          act(() => splitter.current.setSizes([30, 70]));
          drag(0, -250, 300);
          fireEvent.doubleClick(screen.getByTestId('handle-0'));
          expect(splitter.current.sizes).toEqual([40, 60]);
          act(() => splitter.current.setSizes([0, 100]));
          act(() => splitter.current.expand(0));
          expect(splitter.current.sizes).toEqual([40, 60]);
        });

        it.each(strategies)(
          'moves Home/End to exactly the reported range (redistribute: %s)',
          (redistribute) => {
            const panels = [
              { defaultSize: 30, min: 10 },
              { defaultSize: 30, min: 10 },
              { defaultSize: 40, min: 10 },
            ];
            const { splitter } = setup({ panels, redistribute });
            [0, 1].forEach((index) => {
              (['Home', 'End'] as const).forEach((key) => {
                act(() => splitter.current.setSizes([30, 30, 40]));
                const handle = screen.getByTestId(`handle-${index}`);
                const expected = handle.getAttribute(
                  key === 'Home' ? 'aria-valuemin' : 'aria-valuemax'
                );
                fireEvent.keyDown(handle, { key });
                expect(handle.getAttribute('aria-valuenow')).toBe(expected);
              });
            });
          }
        );

        it('moves Home with equal redistribute to the reported minimum', () => {
          const { splitter } = setup({
            panels: [
              { defaultSize: 30, min: 10 },
              { defaultSize: 30, min: 10 },
              { defaultSize: 40, min: 10 },
            ],
            redistribute: 'equal',
          });
          const handle = screen.getByTestId('handle-1');
          expect(handle.getAttribute('aria-valuemin')).toBe('10');
          fireEvent.keyDown(handle, { key: 'Home' });
          expect(splitter.current.sizes).toEqual([10, 10, 80]);
        });

        describe('collapse edge cases', () => {
          it('builds keyboard steps on the controlled value when the parent rejects a change', async () => {
            const onResizeEnd = jest.fn();
            const ref: { current: UseSplitterReturnValue } = { current: null as any };
            function Controlled() {
              const [sizes, setSizes] = useState<SplitterPaneSize[]>([60, 40]);
              return (
                <Harness
                  panels={[{ defaultSize: 60 }, { defaultSize: 40 }]}
                  sizes={sizes}
                  onSizeChange={(next) => setSizes((prev) => (Number(next[0]) > 60 ? prev : next))}
                  onResizeEnd={onResizeEnd}
                  onSplitter={(splitter) => {
                    ref.current = splitter;
                  }}
                />
              );
            }
            render(<Controlled />);
            const handle = screen.getByTestId('handle-0');
            const press = async (key: string) => {
              await act(async () => {
                fireEvent.keyDown(handle, { key });
              });
            };
            await press('ArrowRight');
            await press('ArrowRight');
            await press('ArrowRight');
            expect(ref.current.sizes).toEqual([60, 40]);
            await press('ArrowLeft');
            expect(ref.current.sizes).toEqual([59, 41]);
            drag(0, -100);
            expect(ref.current.sizes).toEqual([49, 51]);
            expect(onResizeEnd).toHaveBeenCalledWith(0, [49, 51]);
          });

          it('builds back-to-back imperative calls on each other in controlled mode', () => {
            const onCollapseChange = jest.fn();
            const ref: { current: UseSplitterReturnValue } = { current: null as any };
            function Controlled() {
              const [sizes, setSizes] = useState<SplitterPaneSize[]>([25, 50, 25]);
              return (
                <Harness
                  panels={[
                    { defaultSize: 25, collapsible: true },
                    { defaultSize: 50 },
                    { defaultSize: 25, collapsible: true },
                  ]}
                  sizes={sizes}
                  onSizeChange={setSizes}
                  onCollapseChange={onCollapseChange}
                  onSplitter={(splitter) => {
                    ref.current = splitter;
                  }}
                />
              );
            }
            render(<Controlled />);
            act(() => {
              ref.current.collapse(0);
              ref.current.collapse(2);
            });
            expect(ref.current.sizes).toEqual([0, 100, 0]);
            expect(onCollapseChange.mock.calls).toEqual([
              [0, true],
              [2, true],
            ]);
            act(() => {
              ref.current.setSizes([20, 60, 20]);
              ref.current.collapse(2);
            });
            expect(ref.current.sizes).toEqual([20, 80, 0]);
          });

          it('reports a collapsible pane drained to 0 by redistribute', () => {
            const onCollapseChange = jest.fn();
            const { splitter } = setup({
              panels: [
                { defaultSize: 40 },
                { defaultSize: 30, min: 10 },
                { defaultSize: 30, collapsible: true },
              ],
              redistribute: 'nearest',
              shiftStep: 60,
              onCollapseChange,
            });
            fireEvent.keyDown(screen.getByTestId('handle-0'), {
              key: 'ArrowRight',
              shiftKey: true,
            });
            expect(splitter.current.sizes).toEqual([90, 10, 0]);
            expect(splitter.current.collapsed).toEqual([false, false, true]);
            expect(onCollapseChange.mock.calls).toEqual([[2, true]]);
          });

          it('reports a collapsible donor drained to 0 by expand', () => {
            const onCollapseChange = jest.fn();
            const { splitter } = setup({
              panels: [
                { defaultSize: 50, collapsible: true },
                { defaultSize: 10, collapsible: true },
                { defaultSize: 40 },
              ],
              onCollapseChange,
            });
            act(() => splitter.current.collapse(0));
            act(() => splitter.current.setSizes([0, 5, 95]));
            act(() => splitter.current.expand(0));
            expect(splitter.current.sizes).toEqual([50, 0, 50]);
            expect(onCollapseChange.mock.calls).toEqual([
              [0, true],
              [0, false],
              [1, true],
            ]);
            act(() => splitter.current.expand(1));
            expect(onCollapseChange.mock.calls.at(-1)).toEqual([1, false]);
            expect(splitter.current.sizes[1]).toBeCloseTo(5);
          });

          it('persists the collapse of a pane already squeezed to 0px', async () => {
            containerWidth = 500;
            const onCollapseChange = jest.fn();
            const { splitter } = setup({
              panels: [{ defaultSize: '600px' }, { defaultSize: 100, collapsible: true }],
              onCollapseChange,
            });
            act(() => splitter.current.collapse(1));
            expect(onCollapseChange.mock.calls).toEqual([[1, true]]);
            expect(splitter.current.sizes).toEqual(['600px', 0]);
            expect(splitter.current.collapsed).toEqual([false, true]);
            await resizeContainer(800);
            expectLayout(rendered(splitter), [600, 0]);
            act(() => splitter.current.collapse(1));
            expect(onCollapseChange).toHaveBeenCalledTimes(1);
          });

          it.each(['ArrowLeft', 'Home', 'Shift+ArrowLeft', 'drag'])(
            'does not open a collapsed pane by pushing the donor below its min (%s)',
            (action) => {
              const onCollapseChange = jest.fn();
              const { splitter } = setup({
                panels: [
                  { defaultSize: '200px', min: '120px', max: '50%' },
                  { defaultSize: 40, min: 10, collapsible: true },
                  { defaultSize: 60, min: 10 },
                ],
                onCollapseChange,
              });
              act(() => splitter.current.setSizes(['200px', 0, 60]));
              const handle = screen.getByTestId('handle-0');
              expect(handle.getAttribute('aria-valuemin')).toBe('200');
              if (action === 'drag') {
                drag(0, -150);
              } else {
                fireEvent.keyDown(handle, {
                  key: action.replace('Shift+', ''),
                  shiftKey: action.startsWith('Shift+'),
                });
              }
              expect(splitter.current.sizes).toEqual(['200px', 0, 60]);
              expect(onCollapseChange).not.toHaveBeenCalled();
            }
          );

          it('opens a collapsed pane when the donor and the pane both fit their mins', () => {
            const { splitter } = setup({
              panels: [
                { defaultSize: '300px', min: '120px', max: '50%' },
                { defaultSize: 40, min: 10, collapsible: true },
                { defaultSize: 60, min: 10 },
              ],
            });
            act(() => splitter.current.setSizes(['300px', 0, 60]));
            const handle = screen.getByTestId('handle-0');
            expect(handle.getAttribute('aria-valuemin')).toBe('120');
            fireEvent.keyDown(handle, { key: 'ArrowLeft' });
            expectLayout(rendered(splitter), [200, 100, 700]);
          });

          it('spreads space beyond the receiver max to further panes on drag collapse', () => {
            const onCollapseChange = jest.fn();
            const { splitter } = setup({
              panels: [
                { defaultSize: 40, max: 50 },
                { defaultSize: 20, min: 10, collapsible: true },
                { defaultSize: 40 },
              ],
              onCollapseChange,
            });
            drag(0, 500);
            expect(splitter.current.sizes).toEqual([50, 0, 50]);
            expect(onCollapseChange.mock.calls).toEqual([[1, true]]);
          });

          it('refuses drag collapse when the freed space cannot be placed', () => {
            const onCollapseChange = jest.fn();
            const { splitter } = setup({
              panels: [
                { defaultSize: 40, max: 50 },
                { defaultSize: 20, min: 10, collapsible: true },
                { defaultSize: 40, max: 40 },
              ],
              onCollapseChange,
            });
            drag(0, 500);
            expect(splitter.current.sizes).toEqual([50, 10, 40]);
            expect(onCollapseChange).not.toHaveBeenCalled();
          });
        });
      });
    });
  });
});
