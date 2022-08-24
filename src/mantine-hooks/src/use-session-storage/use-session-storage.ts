import { createStorage, IStorageProperties } from '../use-local-storage/create-storage';

export function useSessionStorage<T = string>(props: Omit<IStorageProperties<T>, 'hookName'>) {
  return createStorage<T>('sessionStorage')({ ...props, hookName: 'use-session-storage' });
}
