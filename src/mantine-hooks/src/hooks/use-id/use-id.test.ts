import { renderHook } from '@testing-library/react-hooks';
import { useId } from './use-id';

describe('@mantine/hooks/use-id', () => {
  it('returns id from hook call', () => {
    const hook = renderHook(() => useId('test-id'));
    expect(hook.result.current).toBe('test-id');
  });

  it('returns generated id if id was not provided', () => {
    const hook = renderHook(() => useId(null, () => 'test-id'));
    expect(hook.result.current).toBe('mantine-test-id');
  });
});
