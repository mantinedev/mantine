import { act, renderHook } from '@testing-library/react';
import { useClipboard } from './use-clipboard';

const writeText = jest.fn<Promise<void>, [string]>();

describe('@mantine/hooks/use-clipboard', () => {
  beforeAll(() => {
    Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true });
  });

  afterEach(() => {
    writeText.mockReset();
  });

  it('resets copied state when copy fails after a successful copy', async () => {
    writeText.mockResolvedValueOnce(undefined);
    const hook = renderHook(() => useClipboard());

    await act(async () => hook.result.current.copy('ok'));
    expect(hook.result.current.copied).toBe(true);
    expect(hook.result.current.error).toBe(null);

    const error = new Error('Clipboard write denied');
    writeText.mockRejectedValueOnce(error);
    await act(async () => hook.result.current.copy('fail'));

    expect(hook.result.current.copied).toBe(false);
    expect(hook.result.current.error).toBe(error);
  });

  it('keeps the reset state when a pending write completes', async () => {
    let finish!: () => void;
    writeText.mockImplementationOnce(
      () =>
        new Promise<void>((resolve) => {
          finish = resolve;
        })
    );
    const { result } = renderHook(() => useClipboard());
    act(() => result.current.copy('draft'));
    act(() => result.current.reset());
    await act(async () => finish());
    expect(result.current.copied).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('keeps the latest copy result when an older write rejects', async () => {
    let fail!: (error: Error) => void;
    writeText.mockImplementationOnce(
      () =>
        new Promise<void>((_, reject) => {
          fail = reject;
        })
    );
    writeText.mockResolvedValueOnce(undefined);
    const { result } = renderHook(() => useClipboard());
    act(() => result.current.copy('first'));
    await act(async () => result.current.copy('second'));
    await act(async () => fail(new Error('first write failed')));
    expect(result.current.copied).toBe(true);
    expect(result.current.error).toBeNull();
  });
});
