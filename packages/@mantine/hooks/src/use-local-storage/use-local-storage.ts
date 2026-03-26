import { createStorage, readValue, UseStorageOptions, UseStorageReturnValue } from './create-storage';

export function useLocalStorage<T>(props: UseStorageOptions<T> & { defaultValue: T }): UseStorageReturnValue<T>;
export function useLocalStorage<T>(props: UseStorageOptions<T>): UseStorageReturnValue<T | undefined>;
export function useLocalStorage<T = string>(props: UseStorageOptions<T>) {
  return createStorage<T>('localStorage', 'use-local-storage')(props);
}

export const readLocalStorageValue = readValue('localStorage');
