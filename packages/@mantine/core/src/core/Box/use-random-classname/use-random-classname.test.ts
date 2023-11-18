import { renderHook } from '@testing-library/react';
import { useRandomClassName } from './use-random-classname';

describe('@mantine/core/Box/use-random-classname', () => {
  it('returns random classname', () => {
    const { result } = renderHook(() => useRandomClassName());
    expect(result.current).toMatch(/^__m__-[a-z0-9]+$/);
  });
});
