import { act, renderHook, waitFor } from '@testing-library/react';
import { useFetch } from './use-fetch';

interface PendingRequest {
  respond: (status: number, body?: unknown) => void;
}

function mockFetch() {
  const requests: PendingRequest[] = [];

  global.fetch = jest.fn(
    (_url: string, init: RequestInit) =>
      new Promise((resolve, reject) => {
        requests.push({
          respond: (status, body = {}) =>
            resolve({
              ok: status >= 200 && status < 300,
              status,
              json: () => Promise.resolve(body),
            } as Response),
        });

        init.signal?.addEventListener('abort', () => reject(init.signal!.reason));
      })
  ) as any;

  return requests;
}

describe('@mantine/hooks/use-fetch', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it('clears the previous error when a later request succeeds', async () => {
    const requests = mockFetch();
    const { result, rerender } = renderHook(({ url }) => useFetch<{ message: string }>(url), {
      initialProps: { url: '/fail' },
    });

    await act(async () => requests[0].respond(500));
    expect(result.current.error?.message).toBe('Request failed with status 500');

    rerender({ url: '/ok' });
    await act(async () => requests[1].respond(200, { message: 'ok' }));

    expect(result.current.data).toEqual({ message: 'ok' });
    expect(result.current.error).toBeNull();
  });

  it('keeps loading true when a pending request is replaced by refetch', async () => {
    const requests = mockFetch();
    const { result } = renderHook(() =>
      useFetch<{ message: string }>('/ok', { autoInvoke: false })
    );

    act(() => {
      result.current.refetch();
    });
    await act(async () => {
      result.current.refetch();
    });

    expect(result.current.loading).toBe(true);

    await act(async () => requests[1].respond(200, { message: 'ok' }));

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual({ message: 'ok' });
  });

  it('sets loading to false when the request is aborted with abort()', async () => {
    mockFetch();
    const { result } = renderHook(() => useFetch('/ok', { autoInvoke: false }));

    act(() => {
      result.current.refetch();
    });
    expect(result.current.loading).toBe(true);

    await act(async () => {
      result.current.abort();
    });

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.error).toBeNull();
  });
});
