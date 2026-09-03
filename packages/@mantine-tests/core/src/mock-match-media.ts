type MatchMediaListener = (event: { matches: boolean }) => void;

export interface MockMatchMediaOptions {
  /** Queries for which the mock is used, other queries fall through to the original implementation */
  filter?: (query: string) => boolean;

  /** If set, matching queries throw instead of returning a MediaQueryList */
  throws?: boolean;
}

const originalMatchMedia = typeof window !== 'undefined' ? window.matchMedia : undefined;

export function mockMatchMedia(
  matches: boolean,
  { filter = () => true, throws = false }: MockMatchMediaOptions = {}
) {
  const listeners = new Set<MatchMediaListener>();
  const queries: string[] = [];
  const mediaQueryList = {
    matches,
    media: '',
    onchange: null,
    addEventListener: (_type: string, listener: MatchMediaListener) => listeners.add(listener),
    removeEventListener: (_type: string, listener: MatchMediaListener) =>
      listeners.delete(listener),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };

  window.matchMedia = jest.fn().mockImplementation((query: string) => {
    if (!filter(query)) {
      return originalMatchMedia!(query);
    }

    if (throws) {
      throw new Error('matchMedia is not supported');
    }

    queries.push(query);
    mediaQueryList.media = query;
    return mediaQueryList;
  });

  return {
    queries,
    setMatches: (value: boolean) => {
      mediaQueryList.matches = value;
      listeners.forEach((listener) => listener({ matches: value }));
    },
    restore: () => {
      window.matchMedia = originalMatchMedia!;
    },
  };
}
