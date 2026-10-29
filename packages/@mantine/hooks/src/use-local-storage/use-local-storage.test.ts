import { act, renderHook } from '@testing-library/react';
import { useLocalStorage } from './use-local-storage';

beforeEach(() => {
  localStorage.clear();
});

describe('@mantine/hooks/use-local-storage', () => {
  it('returns defaultValue when storage is empty', () => {
    const { result } = renderHook(() => useLocalStorage({ key: 'test', defaultValue: 'default' }));
    expect(result.current[0]).toBe('default');
  });

  it('reads an existing value from localStorage on mount', () => {
    localStorage.setItem('test', JSON.stringify('stored'));
    const { result } = renderHook(() =>
      useLocalStorage({ key: 'test', defaultValue: 'default', getInitialValueInEffect: false })
    );
    expect(result.current[0]).toBe('stored');
  });

  it('writes value to localStorage on set', () => {
    const { result } = renderHook(() => useLocalStorage({ key: 'test', defaultValue: '' }));
    act(() => result.current[1]('hello'));
    expect(localStorage.getItem('test')).toBe(JSON.stringify('hello'));
    expect(result.current[0]).toBe('hello');
  });

  it('resets value when key changes to a missing key', () => {
    localStorage.setItem('test', JSON.stringify('stored'));

    const { result, rerender } = renderHook(({ key }) => useLocalStorage({ key }), {
      initialProps: { key: 'test' },
    });

    expect(result.current[0]).toBe('stored');

    rerender({ key: 'missing' });

    expect(result.current[0]).toBeUndefined();
    expect(localStorage.getItem('missing')).toBeNull();
  });

  it('supports functional updater', async () => {
    const { result } = renderHook(() => useLocalStorage<number>({ key: 'count', defaultValue: 1 }));
    await act(async () => result.current[1]((prev) => prev + 1));
    expect(result.current[0]).toBe(2);
  });

  it('removes value from localStorage and resets to defaultValue', () => {
    const { result } = renderHook(() => useLocalStorage({ key: 'test', defaultValue: 'default' }));
    act(() => result.current[1]('set'));
    act(() => result.current[2]());
    expect(localStorage.getItem('test')).toBeNull();
    expect(result.current[0]).toBe('default');
  });

  it('serializes and deserializes objects', () => {
    const { result } = renderHook(() =>
      useLocalStorage<{ name: string }>({ key: 'obj', defaultValue: { name: 'init' } })
    );
    act(() => result.current[1]({ name: 'updated' }));
    expect(result.current[0]).toEqual({ name: 'updated' });
    expect(JSON.parse(localStorage.getItem('obj')!)).toEqual({ name: 'updated' });
  });

  it('reacts to a storage event (cross-tab update)', () => {
    const { result } = renderHook(() => useLocalStorage({ key: 'test', defaultValue: 'default' }));
    act(() => {
      window.dispatchEvent(
        new StorageEvent('storage', {
          storageArea: window.localStorage,
          key: 'test',
          newValue: JSON.stringify('from-other-tab'),
        })
      );
    });
    expect(result.current[0]).toBe('from-other-tab');
  });

  it('ignores storage events for different keys', () => {
    const { result } = renderHook(() => useLocalStorage({ key: 'mine', defaultValue: 'original' }));
    act(() => {
      window.dispatchEvent(
        new StorageEvent('storage', {
          storageArea: window.localStorage,
          key: 'other',
          newValue: JSON.stringify('intruder'),
        })
      );
    });
    expect(result.current[0]).toBe('original');
  });

  it('resets to defaultValue when another document clears storage', () => {
    localStorage.setItem('test', JSON.stringify('stored'));
    const { result } = renderHook(() =>
      useLocalStorage({
        key: 'test',
        defaultValue: 'default',
        deserialize: (value) => JSON.parse(value!),
      })
    );
    expect(result.current[0]).toBe('stored');

    act(() => {
      localStorage.clear();
      window.dispatchEvent(new StorageEvent('storage', { storageArea: localStorage, key: null }));
    });

    expect(result.current[0]).toBe('default');
    expect(localStorage.getItem('test')).toBeNull();
  });

  it('ignores clear events from a different storage area', () => {
    localStorage.setItem('test', JSON.stringify('stored'));
    const { result } = renderHook(() => useLocalStorage({ key: 'test', defaultValue: 'default' }));

    act(() => {
      window.dispatchEvent(new StorageEvent('storage', { storageArea: sessionStorage, key: null }));
    });

    expect(result.current[0]).toBe('stored');
  });

  it('ignores clear events when sync is disabled', () => {
    localStorage.setItem('test', JSON.stringify('stored'));
    const { result } = renderHook(() =>
      useLocalStorage({ key: 'test', defaultValue: 'default', sync: false })
    );

    act(() => {
      window.dispatchEvent(new StorageEvent('storage', { storageArea: localStorage, key: null }));
    });

    expect(result.current[0]).toBe('stored');
  });
});
