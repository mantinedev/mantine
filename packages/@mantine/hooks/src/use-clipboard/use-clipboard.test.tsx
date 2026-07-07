import { act, renderHook } from '@testing-library/react';
import { useClipboard } from './use-clipboard';

class MockClipboardItem {
  types: string[];
  private data: Record<string, string | Blob>;

  constructor(data: Record<string, string | Blob>) {
    this.data = data;
    this.types = Object.keys(data);
  }
}

let writeText: jest.Mock;
let write: jest.Mock;

function mockClipboard({ rich = true }: { rich?: boolean } = {}) {
  writeText = jest.fn().mockResolvedValue(undefined);
  write = jest.fn().mockResolvedValue(undefined);

  const clipboard: Record<string, unknown> = { writeText };
  if (rich) {
    clipboard.write = write;
    (window as any).ClipboardItem = MockClipboardItem;
  }

  Object.defineProperty(navigator, 'clipboard', {
    value: clipboard,
    configurable: true,
    writable: true,
  });
}

function unmockClipboard() {
  Object.defineProperty(navigator, 'clipboard', {
    value: undefined,
    configurable: true,
    writable: true,
  });
  delete (window as any).ClipboardItem;
}

describe('@mantine/hooks/use-clipboard', () => {
  beforeEach(() => {
    mockClipboard();
  });

  afterEach(() => {
    unmockClipboard();
  });

  it('copies strings with writeText', async () => {
    const { result } = renderHook(() => useClipboard());

    await act(async () => {
      result.current.copy('hello');
    });

    expect(writeText).toHaveBeenCalledWith('hello');
    expect(write).not.toHaveBeenCalled();
    expect(result.current.copied).toBe(true);
    expect(result.current.error).toBe(null);
  });

  it('coerces primitive values (numbers) to text with writeText', async () => {
    const { result } = renderHook(() => useClipboard());

    await act(async () => {
      result.current.copy(42);
    });

    expect(writeText).toHaveBeenCalledWith('42');
    expect(write).not.toHaveBeenCalled();
    expect(result.current.copied).toBe(true);
  });

  it('reports supported when navigator.clipboard.write and ClipboardItem are available', () => {
    const { result } = renderHook(() => useClipboard());
    expect(result.current.supported).toBe(true);
  });

  it('reports unsupported when the write API is not available', () => {
    mockClipboard({ rich: false });
    const { result } = renderHook(() => useClipboard());
    expect(result.current.supported).toBe(false);
  });

  it('copies a Blob with write', async () => {
    const { result } = renderHook(() => useClipboard());
    const blob = new Blob(['<b>hi</b>'], { type: 'text/html' });

    await act(async () => {
      result.current.copy(blob);
    });

    expect(write).toHaveBeenCalledTimes(1);
    const items = write.mock.calls[0][0];
    expect(items[0].types).toEqual(['text/html']);
    expect(result.current.copied).toBe(true);
  });

  it('copies an array of ClipboardItem as-is', async () => {
    const { result } = renderHook(() => useClipboard());
    const item = new (window as any).ClipboardItem({ 'text/plain': 'hi' });

    await act(async () => {
      result.current.copy([item]);
    });

    expect(write).toHaveBeenCalledWith([item]);
    expect(result.current.copied).toBe(true);
  });

  it('copies a single ClipboardItem wrapped in an array', async () => {
    const { result } = renderHook(() => useClipboard());
    const item = new (window as any).ClipboardItem({ 'text/plain': 'hi' });

    await act(async () => {
      result.current.copy(item);
    });

    expect(write).toHaveBeenCalledWith([item]);
  });

  it('sets an error when clipboard is not supported', () => {
    unmockClipboard();
    const { result } = renderHook(() => useClipboard());

    act(() => {
      result.current.copy('hello');
    });

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.copied).toBe(false);
  });

  it('sets an error when copying a blob without write support', () => {
    mockClipboard({ rich: false });
    const { result } = renderHook(() => useClipboard());

    act(() => {
      result.current.copy(new Blob(['<b>hi</b>'], { type: 'text/html' }));
    });

    expect(write).not.toHaveBeenCalled();
    expect(result.current.error).toBeInstanceOf(Error);
  });

  it('resets copied state and error', async () => {
    const { result } = renderHook(() => useClipboard());

    await act(async () => {
      result.current.copy('hello');
    });
    expect(result.current.copied).toBe(true);

    act(() => {
      result.current.reset();
    });

    expect(result.current.copied).toBe(false);
    expect(result.current.error).toBe(null);
  });
});
