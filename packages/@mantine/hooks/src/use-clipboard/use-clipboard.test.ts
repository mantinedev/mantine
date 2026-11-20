import { act, renderHook } from '@testing-library/react';
import { useClipboard } from './use-clipboard';

class MockClipboardItem {
  constructor(public items: Record<string, Blob>) {}
}

const originalClipboard = Object.getOwnPropertyDescriptor(navigator, 'clipboard');

function mockClipboard(clipboard: Partial<Clipboard> | undefined) {
  if (clipboard === undefined) {
    delete (navigator as any).clipboard;
    return;
  }

  Object.defineProperty(navigator, 'clipboard', { value: clipboard, configurable: true });
}

function readBlob(blob: Blob) {
  return new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.readAsText(blob);
  });
}

describe('@mantine/hooks/use-clipboard', () => {
  let writeText: jest.Mock;
  let write: jest.Mock;

  beforeEach(() => {
    writeText = jest.fn(() => Promise.resolve());
    write = jest.fn(() => Promise.resolve());
    mockClipboard({ writeText, write });
    (window as any).ClipboardItem = MockClipboardItem;
  });

  afterEach(() => {
    delete (window as any).ClipboardItem;
    if (originalClipboard) {
      Object.defineProperty(navigator, 'clipboard', originalClipboard);
    } else {
      delete (navigator as any).clipboard;
    }
  });

  it('copies string with writeText', async () => {
    const { result } = renderHook(() => useClipboard());
    await act(async () => result.current.copy('hello'));
    expect(writeText).toHaveBeenCalledWith('hello');
    expect(write).not.toHaveBeenCalled();
    expect(result.current.copied).toBe(true);
    expect(result.current.error).toBe(null);
  });

  it('copies html and text with clipboard.write', async () => {
    const { result } = renderHook(() => useClipboard());
    await act(async () => result.current.copy({ text: 'bold', html: '<b>bold</b>' }));

    expect(writeText).not.toHaveBeenCalled();
    expect(write).toHaveBeenCalledTimes(1);
    const [item] = write.mock.calls[0][0] as MockClipboardItem[];
    expect(item).toBeInstanceOf(MockClipboardItem);
    expect(Object.keys(item.items).sort()).toEqual(['text/html', 'text/plain']);
    expect(item.items['text/html'].type).toBe('text/html');
    expect(await readBlob(item.items['text/html'])).toBe('<b>bold</b>');
    expect(await readBlob(item.items['text/plain'])).toBe('bold');
    expect(result.current.copied).toBe(true);
  });

  it('uses writeText when object has no html', async () => {
    const { result } = renderHook(() => useClipboard());
    await act(async () => result.current.copy({ text: 'plain' }));
    expect(writeText).toHaveBeenCalledWith('plain');
    expect(write).not.toHaveBeenCalled();
  });

  it('falls back to writeText when ClipboardItem is not supported', async () => {
    delete (window as any).ClipboardItem;
    const { result } = renderHook(() => useClipboard());
    await act(async () => result.current.copy({ text: 'bold', html: '<b>bold</b>' }));
    expect(writeText).toHaveBeenCalledWith('bold');
    expect(write).not.toHaveBeenCalled();
    expect(result.current.copied).toBe(true);
  });

  it('falls back to writeText when clipboard.write is not supported', async () => {
    mockClipboard({ writeText });
    const { result } = renderHook(() => useClipboard());
    await act(async () => result.current.copy({ text: 'bold', html: '<b>bold</b>' }));
    expect(writeText).toHaveBeenCalledWith('bold');
  });

  it('calls function value at copy time and writes synchronously', async () => {
    const getValue = jest.fn(() => ({ text: 'bold', html: '<b>bold</b>' }));
    const { result } = renderHook(() => useClipboard());
    expect(getValue).not.toHaveBeenCalled();

    act(() => result.current.copy(getValue));
    expect(getValue).toHaveBeenCalledTimes(1);
    expect(write).toHaveBeenCalledTimes(1);
    await act(async () => {});
    expect(result.current.copied).toBe(true);
  });

  it('sets error when clipboard.write rejects', async () => {
    const err = new Error('denied');
    write.mockImplementation(() => Promise.reject(err));
    const { result } = renderHook(() => useClipboard());
    await act(async () => result.current.copy({ text: 'bold', html: '<b>bold</b>' }));
    expect(result.current.error).toBe(err);
    expect(result.current.copied).toBe(false);
  });

  it('resets copied state when copy fails after a successful copy', async () => {
    const { result } = renderHook(() => useClipboard());

    await act(async () => result.current.copy('ok'));
    expect(result.current.copied).toBe(true);
    expect(result.current.error).toBe(null);

    const error = new Error('Clipboard write denied');
    writeText.mockImplementationOnce(() => Promise.reject(error));
    await act(async () => result.current.copy('fail'));

    expect(result.current.copied).toBe(false);
    expect(result.current.error).toBe(error);
  });

  it('sets error when function value throws', () => {
    const err = new Error('failed');
    const { result } = renderHook(() => useClipboard());
    act(() =>
      result.current.copy(() => {
        throw err;
      })
    );
    expect(result.current.error).toBe(err);
    expect(writeText).not.toHaveBeenCalled();
  });

  it('sets error when navigator.clipboard is not supported', () => {
    mockClipboard(undefined);
    const { result } = renderHook(() => useClipboard());
    act(() => result.current.copy('hello'));
    expect(result.current.error?.message).toBe(
      'useClipboard: navigator.clipboard is not supported'
    );
  });

  it('resets copied state after timeout', async () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useClipboard({ timeout: 500 }));
    await act(async () => result.current.copy('hello'));
    expect(result.current.copied).toBe(true);
    act(() => jest.advanceTimersByTime(500));
    expect(result.current.copied).toBe(false);
    jest.useRealTimers();
  });
});
