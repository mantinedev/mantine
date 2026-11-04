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
});
