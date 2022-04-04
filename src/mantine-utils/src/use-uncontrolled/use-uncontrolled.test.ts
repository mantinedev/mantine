import { act, renderHook } from '@testing-library/react-hooks';
import { useUncontrolled } from './use-uncontrolled';

describe('use-uncontrolled', () => {
  it('returns default value for initial uncontrolled state', () => {
    const hook = renderHook(() =>
      useUncontrolled({
        value: undefined,
        defaultValue: 'test-default',
        finalValue: 'test-final',
        errorMessage: 'test-error',
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
        errorMessage: 'test-error',
      })
    ).result.current;
    expect(hook[0]).toBe('test-final');
  });

  it('supports uncontrolled state', () => {
    const view = renderHook(() =>
      useUncontrolled({ defaultValue: 'default-value', errorMessage: 'test-error' })
    );
    act(() => view.result.current[1]('change-value'));
    expect(view.result.current[0]).toBe('change-value');
  });

  it('supports controlled state', () => {
    const spy = jest.fn();
    const view = renderHook(() =>
      useUncontrolled({ value: 'controlled-value', onChange: spy, errorMessage: 'test-error' })
    );

    act(() => view.result.current[1]('change-value'));
    expect(view.result.current[0]).toBe('controlled-value');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('change-value');
  });

  it('throws given error if state is controlled and onChange handler is not provided', () => {
    const view = renderHook(() =>
      useUncontrolled({ value: 'controlled-value', errorMessage: 'test-error' })
    );
    expect(() => view.result.current[1]('change-value')).toThrow(new Error('test-error'));
  });
});
