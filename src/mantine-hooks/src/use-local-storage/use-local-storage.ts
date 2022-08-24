import { createStorage, IStorageProperties } from './create-storage';

export function useLocalStorage<T = string>(props: Omit<IStorageProperties<T>, 'hookName'>) {
  return createStorage<T>('localStorage')({ ...props, hookName: 'use-local-storage' });
}
