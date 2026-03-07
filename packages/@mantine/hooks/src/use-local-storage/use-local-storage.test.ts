import { act, renderHook } from '@testing-library/react';
import { useLocalStorage } from './use-local-storage';

beforeEach(() => {
  localStorage.clear();
});

describe('@mantine/hooks/use-local-storage', () => {
  it('returns defaultValue when storage is empty', () => {
    const { result } = renderHook(() =>
      useLocalStorage({ key: 'test', defaultValue: 'default' })
    );
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
    const { result } = renderHook(() =>
      useLocalStorage({ key: 'test', defaultValue: '' })
    );
    act(() => result.current[1]('hello'));
    expect(localStorage.getItem('test')).toBe(JSON.stringify('hello'));
    expect(result.current[0]).toBe('hello');
  });

  it('supports functional updater', async () => {
    const { result } = renderHook(() =>
      useLocalStorage<number>({ key: 'count', defaultValue: 1 })
    );
    await act(async () => result.current[1]((prev) => prev + 1));
    expect(result.current[0]).toBe(2);
  });

  it('removes value from localStorage and resets to defaultValue', () => {
    const { result } = renderHook(() =>
      useLocalStorage({ key: 'test', defaultValue: 'default' })
    );
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
    const { result } = renderHook(() =>
      useLocalStorage({ key: 'test', defaultValue: 'default' })
    );
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
    const { result } = renderHook(() =>
      useLocalStorage({ key: 'mine', defaultValue: 'original' })
    );
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
});
