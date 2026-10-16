import { useLayoutEffect } from 'react';
import { act, render, renderHook } from '@testing-library/react';
import { useUncontrolled } from './use-uncontrolled';

describe('use-uncontrolled', () => {
  it('returns default value for initial uncontrolled state', () => {
    const hook = renderHook(() =>
      useUncontrolled({
        value: undefined,
        defaultValue: 'test-default',
        finalValue: 'test-final',
      })
    ).result.current;
    expect(hook[0]).toBe('test-default');
  });

  it('returns final value for initial uncontrolled state if default value was not provided', () => {
    const hook = renderHook(() =>
      useUncontrolled({
        value: undefined,
        defaultValue: undefined,
        finalValue: 'test-final',
      })
    ).result.current;
    expect(hook[0]).toBe('test-final');
  });

  it('supports uncontrolled state', () => {
    const view = renderHook(() => useUncontrolled({ defaultValue: 'default-value' }));
    act(() => view.result.current[1]('change-value'));
    expect(view.result.current[0]).toBe('change-value');
  });

  it('calls onChange with uncontrolled state', () => {
    const spy = jest.fn();
    const view = renderHook(() =>
      useUncontrolled({ defaultValue: 'default-value', onChange: spy })
    );
    act(() => view.result.current[1]('change-value'));
    expect(spy).toHaveBeenCalledWith('change-value');
  });

  it('supports controlled state', () => {
    const spy = jest.fn();
    const view = renderHook(() => useUncontrolled({ value: 'controlled-value', onChange: spy }));

    act(() => view.result.current[1]('change-value'));
    expect(view.result.current[0]).toBe('controlled-value');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('change-value');
  });

  it('returns setter with stable identity in uncontrolled mode when onChange changes', () => {
    const view = renderHook(
      ({ onChange }: { onChange: (value: string) => void }) =>
        useUncontrolled({ defaultValue: 'a', onChange }),
      { initialProps: { onChange: jest.fn() } }
    );
    const setter = view.result.current[1];
    view.rerender({ onChange: jest.fn() });
    act(() => view.result.current[1]('b'));
    expect(view.result.current[1]).toBe(setter);
  });

  it('returns setter with stable identity in controlled mode when onChange and value change', () => {
    const view = renderHook(
      ({ value, onChange }: { value: string; onChange: (value: string) => void }) =>
        useUncontrolled({ value, onChange }),
      { initialProps: { value: 'a', onChange: jest.fn() } }
    );
    const setter = view.result.current[1];
    view.rerender({ value: 'b', onChange: jest.fn() });
    expect(view.result.current[1]).toBe(setter);
  });

  it('calls the latest onChange after it changes', () => {
    const first = jest.fn();
    const second = jest.fn();
    const view = renderHook(
      ({ onChange }: { onChange: (value: string, payload?: string) => void }) =>
        useUncontrolled({ value: 'a', onChange }),
      { initialProps: { onChange: first } }
    );
    const setter = view.result.current[1];
    view.rerender({ onChange: second });
    act(() => setter('b', 'payload'));
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledWith('b', 'payload');
  });

  it('keeps the setter stable and switches behavior when switching between controlled and uncontrolled', () => {
    const spy = jest.fn();
    const view = renderHook(
      ({ value }: { value?: string }) =>
        useUncontrolled({ value, defaultValue: 'default', onChange: spy }),
      { initialProps: { value: 'controlled' as string | undefined } }
    );
    const setter = view.result.current[1];

    act(() => setter('ignored'));
    expect(view.result.current[0]).toBe('controlled');

    view.rerender({ value: undefined });
    expect(view.result.current[1]).toBe(setter);
    act(() => setter('internal'));
    expect(view.result.current[0]).toBe('internal');
    expect(view.result.current[2]).toBe(false);

    view.rerender({ value: 'controlled-again' });
    expect(view.result.current[1]).toBe(setter);
    act(() => setter('ignored-again'));
    expect(view.result.current[0]).toBe('controlled-again');
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('applies the last of several calls in one handler in uncontrolled mode', () => {
    const spy = jest.fn();
    const view = renderHook(() => useUncontrolled({ defaultValue: 0, onChange: spy }));
    act(() => {
      view.result.current[1](1);
      view.result.current[1](2);
    });
    expect(view.result.current[0]).toBe(2);
    expect(spy.mock.calls).toEqual([[1], [2]]);
  });

  it('uses the onChange of the current commit when a child layout effect calls the setter', () => {
    const calls: string[] = [];

    function Child({ setter, trigger }: { setter: (value: string) => void; trigger: number }) {
      useLayoutEffect(() => {
        if (trigger > 0) {
          setter(`value-${trigger}`);
        }
      }, [trigger]);
      return null;
    }

    function Parent({ trigger }: { trigger: number }) {
      const [, setter] = useUncontrolled({
        value: 'a',
        onChange: (value: string) => calls.push(`${trigger}:${value}`),
      });
      return <Child setter={setter} trigger={trigger} />;
    }

    const view = render(<Parent trigger={0} />);
    view.rerender(<Parent trigger={1} />);
    expect(calls).toEqual(['1:value-1']);
  });
});
