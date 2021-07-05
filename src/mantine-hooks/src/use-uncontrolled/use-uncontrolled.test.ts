import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';
import { useUncontrolled } from './use-uncontrolled';

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
    const hook = renderHook(() =>
      useUncontrolled({
        value: 'test-value',
        defaultValue: null,
        finalValue: null,
        onChange: spy,
        rule: (f) => !!f,
      })
    );

    act(() => hook.result.current[1]('test-value-2'));

    expect(spy).toHaveBeenCalledWith('test-value-2');
    expect(hook.result.current[0]).toBe('test-value-2');
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
});
