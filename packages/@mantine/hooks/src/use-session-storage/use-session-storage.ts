import { createStorage, readValue, UseStorageOptions } from '../use-local-storage/create-storage';

export function useSessionStorage<T = string>(props: UseStorageOptions<T>) {
  return createStorage<T>('sessionStorage', 'use-session-storage')(props);
}

export const readSessionStorageValue = readValue('sessionStorage');
