import { renderHook, act } from '@testing-library/react-hooks';
import { UncontrolledOptions, useUncontrolled } from './use-uncontrolled';

describe('@mantine/hooks/use-uncontrolled', () => {
  it('returns value from configuration object', () => {
    const hook = renderHook(() =>
      useUncontrolled({
        value: 'test-value',
        defaultValue: null,
        finalValue: null,
        onChange: () => {},
        rule: (f) => !!f,
      })
    );

    expect(hook.result.current[0]).toBe('test-value');
  });

  it('calls onChange handler when setValue is called', () => {
    const spy = jest.fn();
    const hook = renderHook((props: UncontrolledOptions<string>) => useUncontrolled(props), {
      initialProps: {
        value: 'test-value',
        defaultValue: null,
        finalValue: null,
        onChange: spy,
        rule: (f) => !!f,
      },
    });

    act(() => hook.result.current[1]('test-value-2'));
    // simulate receiving the new value from onChange callback
    hook.rerender({
      value: 'test-value-2',
      defaultValue: null,
      finalValue: null,
      onChange: spy,
      rule: (f) => !!f,
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('test-value-2');
    expect(hook.result.current[0]).toBe('test-value-2');
    expect(hook.result.current[2]).toBe('controlled');
  });

  it('uses defaultValue if value does not meet requirements', () => {
    const hook = renderHook(() =>
      useUncontrolled({
        value: null,
        defaultValue: 'test-default-value',
        finalValue: null,
        onChange: () => {},
        rule: (f) => !!f,
      })
    );

    expect(hook.result.current[0]).toBe('test-default-value');
  });

  it('uses finalValue if both value and defaultValue do not meet requirements', () => {
    const hook = renderHook(() =>
      useUncontrolled({
        value: null,
        defaultValue: null,
        finalValue: 'test-final-value',
        onChange: () => {},
        rule: (f) => !!f,
      })
    );

    expect(hook.result.current[0]).toBe('test-final-value');
  });

  it('uses finalValue when transitioning to uncontrolled state from controlled state', () => {
    const spy = jest.fn();
    const hook = renderHook((props: UncontrolledOptions<string>) => useUncontrolled(props), {
      initialProps: {
        value: 'foo',
        defaultValue: null,
        finalValue: 'test-final-value',
        onChange: spy,
        rule: (f) => !!f,
      },
    });

    expect(hook.result.current[0]).toBe('foo');
    expect(hook.result.current[2]).toBe('controlled');

    act(() => hook.result.current[1](null));
    // simulate receiving the new value from onChange callback
    hook.rerender({
      value: null,
      defaultValue: null,
      finalValue: 'test-final-value',
      onChange: spy,
      rule: (f) => !!f,
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(null);
    expect(hook.result.current[0]).toBe('test-final-value');
    expect(hook.result.current[2]).toBe('uncontrolled');
  });
});
