import { act, renderHook } from '@testing-library/react';
import {
  readSessionStorageValue,
  removeSessionStorageValue,
  useSessionStorage,
  writeSessionStorageValue,
} from './use-session-storage';

beforeEach(() => {
  sessionStorage.clear();
});

describe('@mantine/hooks/use-session-storage', () => {
  it('returns defaultValue when storage is empty', () => {
    const { result } = renderHook(() =>
      useSessionStorage({ key: 'test', defaultValue: 'default' })
    );
    expect(result.current[0]).toBe('default');
  });

  it('reads an existing value from sessionStorage on mount', () => {
    sessionStorage.setItem('test', JSON.stringify('stored'));
    const { result } = renderHook(() =>
      useSessionStorage({ key: 'test', defaultValue: 'default', getInitialValueInEffect: false })
    );
    expect(result.current[0]).toBe('stored');
  });

  it('writes value to sessionStorage on set', () => {
    const { result } = renderHook(() => useSessionStorage({ key: 'test', defaultValue: '' }));
    act(() => result.current[1]('hello'));
    expect(sessionStorage.getItem('test')).toBe(JSON.stringify('hello'));
    expect(result.current[0]).toBe('hello');
  });

  it('removes value from sessionStorage and resets to defaultValue', () => {
    const { result } = renderHook(() =>
      useSessionStorage({ key: 'test', defaultValue: 'default' })
    );
    act(() => result.current[1]('set'));
    act(() => result.current[2]());
    expect(sessionStorage.getItem('test')).toBeNull();
    expect(result.current[0]).toBe('default');
  });

  it('writeSessionStorageValue writes to sessionStorage and updates mounted hooks', () => {
    const { result } = renderHook(() =>
      useSessionStorage({ key: 'test', defaultValue: 'default' })
    );
    act(() => writeSessionStorageValue({ key: 'test', value: 'written' }));
    expect(sessionStorage.getItem('test')).toBe(JSON.stringify('written'));
    expect(localStorage.getItem('test')).toBeNull();
    expect(result.current[0]).toBe('written');
    expect(readSessionStorageValue({ key: 'test' })).toBe('written');
  });

  it('removeSessionStorageValue removes from sessionStorage and resets mounted hooks', () => {
    const { result } = renderHook(() =>
      useSessionStorage({ key: 'test', defaultValue: 'default' })
    );
    act(() => result.current[1]('set'));
    act(() => removeSessionStorageValue({ key: 'test' }));
    expect(sessionStorage.getItem('test')).toBeNull();
    expect(result.current[0]).toBe('default');
  });
});
