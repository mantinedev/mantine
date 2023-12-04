import { createStorage, StorageProperties } from './create-storage';

export function useLocalStorage<T = string>(props: StorageProperties<T>) {
  return createStorage<T>('localStorage', 'use-local-storage')(props);
}
