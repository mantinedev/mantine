import { act, renderHook } from '@testing-library/react';
import type { MentionItem } from './Mentions.types';
import type { ResolvedMentionSource } from './resolve-sources';
import { useMentionsQuery } from './use-mentions-query';
import { makeTriggerRegex } from './utils/make-trigger-regex';
import { createTestConfig } from './utils/test-helpers';

function deferred() {
  let resolve!: (items: MentionItem[]) => void;
  const promise = new Promise<MentionItem[]>((res) => {
    resolve = res;
  });
  return { promise, resolve };
}

async function flush() {
  await act(async () => {});
}

function createSource(data: ResolvedMentionSource['props']['data']): ResolvedMentionSource {
  return {
    sourceIndex: 0,
    props: { data },
    config: createTestConfig('@'),
    regex: makeTriggerRegex('@'),
  };
}

const walter = { id: 'walter', display: 'Walter White' };
const jesse = { id: 'jesse', display: 'Jesse Pinkman' };

describe('@mantine/core/Mentions/use-mentions-query', () => {
  it('does not keep the previous query items while a new query is pending', async () => {
    const requests: Record<string, ReturnType<typeof deferred>> = {};
    const source = createSource((query) => {
      requests[query] = deferred();
      return requests[query].promise;
    });

    const { result, rerender } = renderHook(
      ({ query }) => useMentionsQuery({ source, query, enabled: true, filter: undefined }),
      { initialProps: { query: 'wa' } }
    );
    await flush();

    await act(async () => {
      requests.wa.resolve([walter]);
    });
    expect(result.current).toEqual({ items: [walter], loading: false, error: null, generation: 1 });

    rerender({ query: 'j' });
    await flush();
    expect(result.current.items).toEqual([]);
    expect(result.current.loading).toBe(true);

    await act(async () => {
      requests.j.resolve([jesse]);
    });
    expect(result.current).toEqual({ items: [jesse], loading: false, error: null, generation: 2 });
  });

  it('ignores an earlier request that resolves after a newer one', async () => {
    const requests: Record<string, ReturnType<typeof deferred>> = {};
    const source = createSource((query) => {
      requests[query] = deferred();
      return requests[query].promise;
    });

    const { result, rerender } = renderHook(
      ({ query }) => useMentionsQuery({ source, query, enabled: true, filter: undefined }),
      { initialProps: { query: 'wa' } }
    );
    await flush();

    rerender({ query: 'j' });
    await flush();

    await act(async () => {
      requests.j.resolve([jesse]);
    });
    expect(result.current.items).toEqual([jesse]);

    await act(async () => {
      requests.wa.resolve([walter]);
    });
    expect(result.current).toEqual({ items: [jesse], loading: false, error: null, generation: 1 });
  });

  it('keeps the items of the same query while it is refetched and bumps the generation', async () => {
    const requests: ReturnType<typeof deferred>[] = [];
    const makeData = () => () => {
      const request = deferred();
      requests.push(request);
      return request.promise;
    };

    const { result, rerender } = renderHook(
      ({ source }) => useMentionsQuery({ source, query: 'wa', enabled: true, filter: undefined }),
      { initialProps: { source: createSource(makeData()) } }
    );
    await flush();

    await act(async () => {
      requests[0].resolve([walter]);
    });

    rerender({ source: createSource(makeData()) });
    await flush();
    expect(result.current).toEqual({ items: [walter], loading: true, error: null, generation: 1 });

    await act(async () => {
      requests[1].resolve([jesse]);
    });
    expect(result.current).toEqual({ items: [jesse], loading: false, error: null, generation: 2 });
  });
});
