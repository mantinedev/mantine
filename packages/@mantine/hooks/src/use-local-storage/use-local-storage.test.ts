import { act, renderHook } from '@testing-library/react';
import {
  readLocalStorageValue,
  removeLocalStorageValue,
  useLocalStorage,
  writeLocalStorageValue,
} from './use-local-storage';

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
});

describe('@mantine/hooks/write-local-storage-value', () => {
  it('writes serialized value to localStorage', () => {
    writeLocalStorageValue({ key: 'test', value: { name: 'draft' } });
    expect(localStorage.getItem('test')).toBe(JSON.stringify({ name: 'draft' }));
  });

  it('supports custom serialize', () => {
    writeLocalStorageValue({ key: 'test', value: 'draft', serialize: (value) => `raw:${value}` });
    expect(localStorage.getItem('test')).toBe('raw:draft');
  });

  it('updates mounted hooks with the same key', () => {
    const { result } = renderHook(() => useLocalStorage({ key: 'test', defaultValue: 'default' }));
    act(() => writeLocalStorageValue({ key: 'test', value: 'written' }));
    expect(result.current[0]).toBe('written');
  });

  it('does not update mounted hooks with a different key', () => {
    const { result } = renderHook(() => useLocalStorage({ key: 'mine', defaultValue: 'default' }));
    act(() => writeLocalStorageValue({ key: 'other', value: 'written' }));
    expect(result.current[0]).toBe('default');
  });

  it('does not update mounted hooks with sync disabled', () => {
    const { result } = renderHook(() =>
      useLocalStorage({ key: 'test', defaultValue: 'default', sync: false })
    );
    act(() => writeLocalStorageValue({ key: 'test', value: 'written' }));
    expect(result.current[0]).toBe('default');
  });

  it('does not rerender the component that writes the value', () => {
    let renders = 0;
    const { result } = renderHook(() => {
      renders += 1;
      return useLocalStorage({ key: 'reader', defaultValue: 'default' });
    });
    const rendersBeforeWrite = renders;
    act(() => writeLocalStorageValue({ key: 'writer', value: 'written' }));
    expect(renders).toBe(rendersBeforeWrite);
    expect(result.current[0]).toBe('default');
    expect(readLocalStorageValue({ key: 'writer' })).toBe('written');
  });
});

describe('@mantine/hooks/remove-local-storage-value', () => {
  it('removes value from localStorage', () => {
    localStorage.setItem('test', JSON.stringify('stored'));
    removeLocalStorageValue({ key: 'test' });
    expect(localStorage.getItem('test')).toBeNull();
  });

  it('resets mounted hooks with the same key to defaultValue', () => {
    const { result } = renderHook(() => useLocalStorage({ key: 'test', defaultValue: 'default' }));
    act(() => result.current[1]('set'));
    act(() => removeLocalStorageValue({ key: 'test' }));
    expect(result.current[0]).toBe('default');
    expect(localStorage.getItem('test')).toBeNull();
  });

  it('does not reset mounted hooks with a different key', () => {
    const { result } = renderHook(() => useLocalStorage({ key: 'mine', defaultValue: 'default' }));
    act(() => result.current[1]('set'));
    act(() => removeLocalStorageValue({ key: 'other' }));
    expect(result.current[0]).toBe('set');
  });
});
