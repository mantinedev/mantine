import { renderHook } from '@testing-library/react-hooks';
import { useValidatedState } from './use-validated-state';

describe('@mantine/hooks/use-validated-state', () => {
  it('returns inital value', () => {
    const hookValid = renderHook(() => useValidatedState('test', (val) => val === 'test'));
    expect(hookValid.result.current[0].lastValidValue).toBe('test');
    expect(hookValid.result.current[0].valid).toBe(true);
    expect(hookValid.result.current[0].value).toBe('test');
    expect(typeof hookValid.result.current[1]).toBe('function');

    const hookUnvalid = renderHook(() => useValidatedState('test', (val) => val === 'tests'));
    expect(hookUnvalid.result.current[0].lastValidValue).toBe(undefined);
    expect(hookUnvalid.result.current[0].valid).toBe(false);
    expect(hookUnvalid.result.current[0].value).toBe('test');
    expect(typeof hookUnvalid.result.current[1]).toBe('function');
  });

  it('returns correct value based on the rule', () => {
    const hook = renderHook(() => useValidatedState('test', (val) => val === 'test'));
    expect(hook.result.current[0].lastValidValue).toBe('test');
    expect(hook.result.current[0].valid).toBe(true);
    expect(hook.result.current[0].value).toBe('test');
    hook.result.current[1]('tests');
    expect(hook.result.current[0].lastValidValue).toBe('test');
    expect(hook.result.current[0].valid).toBe(false);
    expect(hook.result.current[0].value).toBe('tests');
  });
});
