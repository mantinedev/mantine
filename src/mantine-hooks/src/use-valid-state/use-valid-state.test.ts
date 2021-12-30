import { renderHook } from '@testing-library/react-hooks';
import { useValidState } from './use-valid-state';

describe('@mantine/hooks/use-valid-state', () => {
  it('returns inital value', () => {
    const hook = renderHook(() => useValidState((val) => val === 'test', 'test'));
    expect(hook.result.current[0]).toBe('test');
    expect(typeof hook.result.current[1]).toBe('function');
    expect(hook.result.current[2]).toBe('test');
  });

  it('returns correct value based on the rule', () => {
    const hook = renderHook(() => useValidState((val) => val === 'test', 'test'));
    expect(hook.result.current[2]).toBe('test');
    hook.result.current[1]('tests');
    expect(hook.result.current[0]).toBe('test');
    expect(hook.result.current[2]).toBe('tests');
  });
});
