import { renderHook } from '@testing-library/react-hooks';
import { useId } from './use-id';

describe('@mantine/hooks/use-id', () => {
  it('returns id from hook call', () => {
    const hook = renderHook(() => useId('test-id'));
    expect(hook.result.current).toBe('test-id');
  });

  it('returns random id with prefix "mantine-" when called without arguments', () => {
    const hook = renderHook(() => useId());
    expect(hook.result.current.includes('mantine-')).toBe(true);
  });

  it('returns random id when called without arguments', () => {
    const hook1 = renderHook(() => useId());
    const hook2 = renderHook(() => useId());
    expect(hook1.result.current).not.toEqual(hook2.result.current);
  });

  it('returns generated id if id was not provided', () => {
    const hook = renderHook(() => useId(null, () => 'test-id'));
    expect(hook.result.current).toBe('test-id');
  });
});
