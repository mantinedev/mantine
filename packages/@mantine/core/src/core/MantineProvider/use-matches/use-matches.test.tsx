import { act, renderHook } from '@testing-library/react';
import { MantineProvider } from '../MantineProvider';
import { useMatches } from './use-matches';

type Listener = (event: { matches: boolean }) => void;

function mockViewportWidth(initialWidth: number) {
  const originalMatchMedia = window.matchMedia;
  const lists: { query: string; minWidth: number; listeners: Set<Listener>; matches: boolean }[] =
    [];
  let width = initialWidth;

  const parseMinWidth = (query: string) => {
    const match = query.match(/\(min-width:\s*([\d.]+)(px|em|rem)\)/);
    if (!match) {
      return NaN;
    }
    return parseFloat(match[1]) * (match[2] === 'px' ? 1 : 16);
  };

  window.matchMedia = jest.fn().mockImplementation((query: string) => {
    if (!query.includes('min-width')) {
      return originalMatchMedia(query);
    }

    const minWidth = parseMinWidth(query);

    const list = { query, minWidth, listeners: new Set<Listener>(), matches: width >= minWidth };
    lists.push(list);

    return {
      get matches() {
        return list.matches;
      },
      media: query,
      onchange: null,
      addEventListener: (_type: string, listener: Listener) => list.listeners.add(listener),
      removeEventListener: (_type: string, listener: Listener) => list.listeners.delete(listener),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };
  });

  return {
    queries: () => lists.map((list) => list.query),
    setWidth: (value: number) => {
      width = value;
      lists.forEach((list) => {
        const matches = width >= list.minWidth;
        if (matches !== list.matches) {
          list.matches = matches;
          list.listeners.forEach((listener) => listener({ matches }));
        }
      });
    },
    restore: () => {
      window.matchMedia = originalMatchMedia;
    },
  };
}

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <MantineProvider>{children}</MantineProvider>
);

describe('@mantine/core/useMatches', () => {
  it('returns the value of the largest matching theme breakpoint', () => {
    const viewport = mockViewportWidth(1000);
    const { result } = renderHook(
      () => useMatches({ base: 'base', sm: 'sm', md: 'md', xl: 'xl' }),
      { wrapper }
    );

    expect(result.current).toBe('md');
    expect(viewport.queries()).toEqual([
      '(min-width: 48em)',
      '(min-width: 62em)',
      '(min-width: 88em)',
    ]);
    viewport.restore();
  });

  it('returns base value when no breakpoint matches', () => {
    const viewport = mockViewportWidth(400);
    const { result } = renderHook(() => useMatches({ base: 'base', sm: 'sm' }), { wrapper });
    expect(result.current).toBe('base');
    viewport.restore();
  });

  it('supports custom breakpoints in px and em', () => {
    const viewport = mockViewportWidth(700);
    const { result } = renderHook(
      () => useMatches({ base: 'base', 600: 'six-hundred', '50em': 'fifty-em', sm: 'sm' }),
      { wrapper }
    );

    expect(result.current).toBe('six-hundred');
    expect(viewport.queries().sort()).toEqual([
      '(min-width: 37.5em)',
      '(min-width: 48em)',
      '(min-width: 50em)',
    ]);
    viewport.restore();
  });

  it('updates the value when the viewport changes', () => {
    const viewport = mockViewportWidth(400);
    const { result } = renderHook(() => useMatches({ base: 'drawer', sm: 'popover' }), {
      wrapper,
    });

    expect(result.current).toBe('drawer');
    act(() => viewport.setWidth(900));
    expect(result.current).toBe('popover');
    act(() => viewport.setWidth(500));
    expect(result.current).toBe('drawer');
    viewport.restore();
  });

  it('uses raw theme breakpoint values that cannot be converted to px', () => {
    const viewport = mockViewportWidth(400);
    const themeWrapper = ({ children }: { children: React.ReactNode }) => (
      <MantineProvider theme={{ breakpoints: { sm: 'calc(40rem + 1px)', lg: '100vw' } }}>
        {children}
      </MantineProvider>
    );
    renderHook(() => useMatches({ base: 'base', sm: 'sm', lg: 'lg' }), { wrapper: themeWrapper });
    expect(viewport.queries().sort()).toEqual([
      '(min-width: 100vw)',
      '(min-width: calc(40rem + 1px))',
    ]);
    viewport.restore();
  });

  it('returns undefined when base is not provided and nothing matches', () => {
    const viewport = mockViewportWidth(400);
    const { result } = renderHook(() => useMatches<string>({ sm: 'sm' }), { wrapper });
    expect(result.current).toBeUndefined();
    viewport.restore();
  });
});
