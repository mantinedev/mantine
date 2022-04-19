import { renderHook } from '@testing-library/react-hooks';
import { renderHook as renderHookSSR } from '@testing-library/react-hooks/server';
import { useMediaQuery } from './use-media-query';

describe('@mantine/hooks/use-media-query', () => {
  beforeEach(() => {
    const mediaMatches = {
      '(min-width: 500px)': true,
      '(min-width: 1000px)': false,
    };
    window.matchMedia = (query) =>
      ({
        matches: mediaMatches[query] ?? false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      } as any);
  });
  it('should return true if media query matches', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 500px)'));
    expect(result.current).toBe(true);
  });
  it('should return false if media query does not match', () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 1200px)'));
    expect(result.current).toBe(false);
  });
  it('should return default state before hydration', () => {
    const { result } = renderHookSSR(() => useMediaQuery('(min-width: 500px)', false));
    expect(result.current).toBe(false);
  });
  it('should return media query result after hydration 500px', async () => {
    const { result, hydrate } = renderHookSSR(() => useMediaQuery('(min-width: 500px)', false));
    expect(result.current).toBe(false);
    hydrate();
    expect(result.current).toBe(true);
  });
  it('should return media query result after hydration 1200px', async () => {
    const { result, hydrate } = renderHookSSR(() => useMediaQuery('(min-width: 1200px)', true));
    expect(result.current).toBe(true);
    hydrate();
    expect(result.current).toBe(false);
  });
});
