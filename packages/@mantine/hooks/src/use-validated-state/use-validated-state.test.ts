import { act, renderHook } from '@testing-library/react';
import { useValidatedState } from './use-validated-state';

describe('@mantine/hooks/use-validated-state', () => {
  it('returns initial value', () => {
    const hookValid = renderHook(() => useValidatedState('test', (val) => val === 'test'));
    expect(hookValid.result.current[0].lastValidValue).toBe('test');
    expect(hookValid.result.current[0].valid).toBe(true);
    expect(hookValid.result.current[0].value).toBe('test');
    expect(typeof hookValid.result.current[1]).toBe('function');

    const hookInvalid = renderHook(() => useValidatedState('test', (val) => val === 'tests'));
    expect(hookInvalid.result.current[0].lastValidValue).toBe(undefined);
    expect(hookInvalid.result.current[0].valid).toBe(false);
    expect(hookInvalid.result.current[0].value).toBe('test');
    expect(typeof hookInvalid.result.current[1]).toBe('function');
  });

  it('respects initialValidationState to override validator result on initial render', () => {
    const hook = renderHook(() => useValidatedState('test', (val) => val === 'other', false));
    expect(hook.result.current[0].valid).toBe(false);

    const hookForced = renderHook(() => useValidatedState('test', (val) => val === 'other', true));
    expect(hookForced.result.current[0].valid).toBe(true);
  });

  it('updates lastValidValue when a valid value is set after invalid ones', () => {
    const hook = renderHook(() => useValidatedState('start', (val) => val.length > 3));

    act(() => hook.result.current[1]('no'));
    expect(hook.result.current[0].valid).toBe(false);
    expect(hook.result.current[0].lastValidValue).toBe('start');

    act(() => hook.result.current[1]('valid-again'));
    expect(hook.result.current[0].valid).toBe(true);
    expect(hook.result.current[0].lastValidValue).toBe('valid-again');
  });

  it('keeps lastValidValue from before a streak of invalid values', () => {
    const hook = renderHook(() => useValidatedState('good', (val) => val === 'good'));

    act(() => hook.result.current[1]('bad1'));
    act(() => hook.result.current[1]('bad2'));
    expect(hook.result.current[0].lastValidValue).toBe('good');
  });

  it('returns correct value based on the rule', () => {
    const hook = renderHook(() => useValidatedState('test', (val) => val === 'test'));
    expect(hook.result.current[0].lastValidValue).toBe('test');
    expect(hook.result.current[0].valid).toBe(true);
    expect(hook.result.current[0].value).toBe('test');
    act(() => {
      hook.result.current[1]('tests');
    });
    expect(hook.result.current[0].lastValidValue).toBe('test');
    expect(hook.result.current[0].valid).toBe(false);
    expect(hook.result.current[0].value).toBe('tests');
  });
});
