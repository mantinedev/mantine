import { act, renderHook } from '@testing-library/react';
import { useBroadcastChannel } from './use-broadcast-channel';

const registry = new Map<string, Set<MockBroadcastChannel>>();

class MockBroadcastChannel extends EventTarget {
  name: string;
  closed = false;

  constructor(name: string) {
    super();
    this.name = name;
    if (!registry.has(name)) {
      registry.set(name, new Set());
    }
    registry.get(name)!.add(this);
  }

  postMessage(message: any) {
    if (this.closed) {
      throw new Error('Channel is closed');
    }
    registry.get(this.name)?.forEach((peer) => {
      if (peer !== this && !peer.closed) {
        peer.dispatchEvent(new MessageEvent('message', { data: message }));
      }
    });
  }

  close() {
    this.closed = true;
    registry.get(this.name)?.delete(this);
  }
}

function mockChannel() {
  (window as any).BroadcastChannel = MockBroadcastChannel;
}

function unmockChannel() {
  delete (window as any).BroadcastChannel;
}

describe('@mantine/hooks/use-broadcast-channel', () => {
  beforeEach(() => {
    registry.clear();
    mockChannel();
  });

  afterEach(() => {
    unmockChannel();
  });

  it('reports supported after mount when the API is available', () => {
    const { result } = renderHook(() => useBroadcastChannel('channel'));
    expect(result.current.supported).toBe(true);
    expect(result.current.channel).toBeInstanceOf(MockBroadcastChannel);
  });

  it('reports unsupported when the API is not available', () => {
    unmockChannel();
    const { result } = renderHook(() => useBroadcastChannel('channel'));
    expect(result.current.supported).toBe(false);
    expect(result.current.channel).toBe(null);
  });

  it('delivers a posted message to other subscribers of the same channel', () => {
    const sender = renderHook(() => useBroadcastChannel<string>('sync'));
    const receiver = renderHook(() => useBroadcastChannel<string>('sync'));

    act(() => {
      sender.result.current.post('hello');
    });

    expect(receiver.result.current.data).toBe('hello');
  });

  it('does not deliver a message back to the sender (self-exclusion)', () => {
    const sender = renderHook(() => useBroadcastChannel<string>('sync'));

    act(() => {
      sender.result.current.post('hello');
    });

    expect(sender.result.current.data).toBeUndefined();
  });

  it('does not deliver messages across different channel names', () => {
    const a = renderHook(() => useBroadcastChannel<string>('channel-a'));
    const b = renderHook(() => useBroadcastChannel<string>('channel-b'));

    act(() => {
      a.result.current.post('hello');
    });

    expect(b.result.current.data).toBeUndefined();
  });

  it('supports structured-clone payloads (objects)', () => {
    const sender = renderHook(() => useBroadcastChannel<{ count: number }>('objects'));
    const receiver = renderHook(() => useBroadcastChannel<{ count: number }>('objects'));

    act(() => {
      sender.result.current.post({ count: 42 });
    });

    expect(receiver.result.current.data).toEqual({ count: 42 });
  });

  it('recreates the channel when the name changes', () => {
    const receiverA = renderHook(() => useBroadcastChannel<string>('first'));
    const receiverB = renderHook(() => useBroadcastChannel<string>('second'));
    const { result, rerender } = renderHook(({ name }) => useBroadcastChannel<string>(name), {
      initialProps: { name: 'first' },
    });

    act(() => {
      result.current.post('to-first');
    });
    expect(receiverA.result.current.data).toBe('to-first');

    rerender({ name: 'second' });

    act(() => {
      result.current.post('to-second');
    });
    expect(receiverB.result.current.data).toBe('to-second');
  });

  it('sets error when a messageerror event is dispatched', () => {
    const { result } = renderHook(() => useBroadcastChannel<string>('errors'));

    act(() => {
      result.current.channel?.dispatchEvent(new MessageEvent('messageerror', { data: 'bad' }));
    });

    expect(result.current.error).toBeInstanceOf(MessageEvent);
  });

  it('closes the channel and makes post a no-op', () => {
    const sender = renderHook(() => useBroadcastChannel<string>('closable'));
    const receiver = renderHook(() => useBroadcastChannel<string>('closable'));

    act(() => {
      sender.result.current.close();
    });
    expect(sender.result.current.channel).toBe(null);

    act(() => {
      sender.result.current.post('after-close');
    });
    expect(receiver.result.current.data).toBeUndefined();
  });

  it('closes the channel on unmount', () => {
    const closeSpy = jest.spyOn(MockBroadcastChannel.prototype, 'close');
    const { unmount } = renderHook(() => useBroadcastChannel('unmount'));
    unmount();
    expect(closeSpy).toHaveBeenCalled();
    closeSpy.mockRestore();
  });
});
