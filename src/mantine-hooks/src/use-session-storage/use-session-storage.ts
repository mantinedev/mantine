import { createStorage, IStorageProperties } from '../use-local-storage/create-storage';

export function useSessionStorage<T = string>(props: IStorageProperties<T>) {
  return createStorage<T>('sessionStorage', 'use-session-storage')(props);
}
