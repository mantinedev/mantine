import { createStorage, StorageProperties } from '../use-local-storage/create-storage';

export function useSessionStorage<T = string>(props: StorageProperties<T>) {
  return createStorage<T>('sessionStorage', 'use-session-storage')(props);
}
