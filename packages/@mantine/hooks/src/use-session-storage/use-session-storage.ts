import {
  createStorage,
  readValue,
  UseStorageOptions,
  UseStorageReturnValue,
} from '../use-local-storage/create-storage';

export function useSessionStorage<T = string>(
  props: UseStorageOptions<T> & { defaultValue: T }
): UseStorageReturnValue<T>;

export function useSessionStorage<T = string>(
  props: Omit<UseStorageOptions<T>, 'defaultValue'> & { defaultValue?: undefined }
): UseStorageReturnValue<T | undefined>;

export function useSessionStorage<T = string>(props: UseStorageOptions<T>) {
  return createStorage<T>('sessionStorage', 'use-session-storage')(props);
}

export const readSessionStorageValue = readValue('sessionStorage');
