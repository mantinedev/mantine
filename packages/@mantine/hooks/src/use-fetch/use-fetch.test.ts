import React from 'react';
import { act, renderHook, waitFor } from '@testing-library/react';
import { useFetch } from './use-fetch';

interface PendingRequest {
  signal: AbortSignal;
  respond: (body: unknown, status?: number) => void;
}

function mockFetch({ rejectOnAbort = true } = {}) {
  const requests: PendingRequest[] = [];

  const fetchMock = jest.fn(
    (_url: string, init: RequestInit) =>
      new Promise<Response>((resolve, reject) => {
        const signal = init.signal!;

        if (rejectOnAbort) {
          signal.addEventListener('abort', () => reject(signal.reason));
        }

        requests.push({
          signal,
          respond: (body, status = 200) =>
            resolve({
              ok: status >= 200 && status < 300,
              status,
              json: () => Promise.resolve(body),
            } as Response),
        });
      })
  );

  global.fetch = fetchMock as unknown as typeof fetch;
  return requests;
}

describe('@mantine/hooks/use-fetch', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it('fetches data on mount', async () => {
    const requests = mockFetch();
    const { result } = renderHook(() => useFetch<{ id: number }>('/api'));

    expect(result.current.loading).toBe(true);
    await act(async () => requests[0].respond({ id: 1 }));

    expect(result.current.data).toStrictEqual({ id: 1 });
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it('sets error when the response is not ok', async () => {
    const requests = mockFetch();
    const { result } = renderHook(() => useFetch('/api'));

    await act(async () => requests[0].respond(null, 500));

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error?.message).toBe('Request failed with status 500');
    expect(result.current.loading).toBe(false);
  });

  it('clears the error when refetch succeeds', async () => {
    const requests = mockFetch();
    const { result } = renderHook(() => useFetch<{ id: number }>('/api'));

    await act(async () => requests[0].respond(null, 500));
    expect(result.current.error).toBeInstanceOf(Error);

    act(() => {
      result.current.refetch();
    });
    await act(async () => requests[1].respond({ id: 2 }));

    expect(result.current.data).toStrictEqual({ id: 2 });
    expect(result.current.error).toBe(null);
  });

  it('keeps loading while a newer request is pending', async () => {
    const requests = mockFetch();
    const { result } = renderHook(() => useFetch<{ id: number }>('/api'));

    await act(async () => {
      result.current.refetch();
    });

    expect(requests[0].signal.aborted).toBe(true);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);

    await act(async () => requests[1].respond({ id: 2 }));
    expect(result.current.loading).toBe(false);
    expect(result.current.data).toStrictEqual({ id: 2 });
  });

  it('ignores the response of a request that was replaced by refetch', async () => {
    const requests = mockFetch({ rejectOnAbort: false });
    const { result } = renderHook(() => useFetch<{ id: number }>('/api'));

    act(() => {
      result.current.refetch();
    });
    await act(async () => requests[1].respond({ id: 2 }));
    await act(async () => requests[0].respond({ id: 1 }));

    expect(result.current.data).toStrictEqual({ id: 2 });
  });

  it('keeps loading until the remounted request settles in strict mode', async () => {
    const requests = mockFetch();
    const { result } = renderHook(() => useFetch<{ id: number }>('/api'), {
      wrapper: React.StrictMode,
    });

    await act(async () => {});

    expect(requests).toHaveLength(2);
    expect(requests[0].signal.aborted).toBe(true);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(null);

    await act(async () => requests[1].respond({ id: 1 }));
    expect(result.current.loading).toBe(false);
    expect(result.current.data).toStrictEqual({ id: 1 });
  });

  it('does not set error when the request is aborted with abort()', async () => {
    const requests = mockFetch();
    const { result } = renderHook(() => useFetch('/api'));

    await act(async () => result.current.abort());

    expect(requests[0].signal.aborted).toBe(true);
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.error).toBe(null);
  });
});
