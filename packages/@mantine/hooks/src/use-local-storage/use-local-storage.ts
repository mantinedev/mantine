import {
  createStorage,
  readValue,
  UseStorageOptions,
  UseStorageReturnValue,
} from './create-storage';

export function useLocalStorage<T = string>(
  props: UseStorageOptions<T> & { defaultValue: T }
): UseStorageReturnValue<T>;
export function useLocalStorage<T = string>(
  props: UseStorageOptions<T>
): UseStorageReturnValue<T | undefined>;
export function useLocalStorage<T = string>(props: UseStorageOptions<T>) {
  return createStorage<T>('localStorage', 'use-local-storage')(props);
}

interface ReadStorageValue {
  <T>(options: UseStorageOptions<T> & { defaultValue: T }): T;
  <T>(options: UseStorageOptions<T>): T | undefined;
}

export const readLocalStorageValue: ReadStorageValue = readValue('localStorage');
