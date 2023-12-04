import { act, renderHook } from '@testing-library/react';
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
});
