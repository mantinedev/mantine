import {
  createStorage,
  readValue,
  removeValue,
  UseStorageOptions,
  UseStorageReturnValue,
  writeValue,
} from '../use-local-storage/create-storage';

export function useSessionStorage<T = string>(
  props: UseStorageOptions<T> & { defaultValue: T }
): UseStorageReturnValue<T>;
export function useSessionStorage<T = string>(
  props: UseStorageOptions<T>
): UseStorageReturnValue<T | undefined>;
export function useSessionStorage<T = string>(props: UseStorageOptions<T>) {
  return createStorage<T>('sessionStorage', 'use-session-storage')(props);
}

interface ReadStorageValue {
  <T>(options: UseStorageOptions<T> & { defaultValue: T }): T;
  <T>(options: UseStorageOptions<T>): T | undefined;
}

export const readSessionStorageValue: ReadStorageValue = readValue('sessionStorage');

export const writeSessionStorageValue = writeValue('sessionStorage', 'use-session-storage');
export const removeSessionStorageValue = removeValue('sessionStorage');
