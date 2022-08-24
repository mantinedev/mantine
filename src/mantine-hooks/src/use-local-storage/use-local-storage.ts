import { createStorage, IStorageProperties } from './create-storage';

export function useLocalStorage<T = string>(props: IStorageProperties<T>) {
  return createStorage<T>('localStorage', 'use-local-storage')(props);
}
