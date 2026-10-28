import { act, renderHook } from '@testing-library/react';
import { useSessionStorage } from '../use-session-storage/use-session-storage';
import { useLocalStorage } from './use-local-storage';

describe.each([
  ['localStorage', useLocalStorage, 'sessionStorage'],
  ['sessionStorage', useSessionStorage, 'localStorage'],
] as const)('@mantine/hooks/%s clear events', (storageType, useStorage, otherStorageType) => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    window[storageType].setItem('test', JSON.stringify('stored'));
  });

  const clearStorage = (storage: Storage) => {
    storage.clear();
    window.dispatchEvent(
      new StorageEvent('storage', {
        storageArea: storage,
        key: null,
        oldValue: null,
        newValue: null,
      })
    );
  };

  it.each(['default', '', undefined])(
    'resets to defaultValue %p when another document clears storage',
    (defaultValue) => {
      const { result } = renderHook(() => useStorage({ key: 'test', defaultValue }));
      expect(result.current[0]).toBe('stored');

      act(() => clearStorage(window[storageType]));

      expect(result.current[0]).toBe(defaultValue);
      expect(window[storageType].getItem('test')).toBeNull();
    }
  );

  it('resets to defaultValue without deserializing a missing value', () => {
    const { result } = renderHook(() =>
      useStorage({
        key: 'test',
        defaultValue: 'default',
        deserialize: (value) => JSON.parse(value!),
      })
    );
    expect(result.current[0]).toBe('stored');

    act(() => clearStorage(window[storageType]));

    expect(result.current[0]).toBe('default');
    expect(window[storageType].getItem('test')).toBeNull();
  });

  it('ignores clear events from a different storage area', () => {
    const { result } = renderHook(() => useStorage({ key: 'test', defaultValue: 'default' }));

    act(() => clearStorage(window[otherStorageType]));

    expect(result.current[0]).toBe('stored');
    expect(window[storageType].getItem('test')).toBe(JSON.stringify('stored'));
  });

  it('ignores clear events when synchronization is disabled', () => {
    const { result } = renderHook(() =>
      useStorage({ key: 'test', defaultValue: 'default', sync: false })
    );

    act(() => clearStorage(window[storageType]));

    expect(result.current[0]).toBe('stored');
    expect(window[storageType].getItem('test')).toBeNull();
  });
});
