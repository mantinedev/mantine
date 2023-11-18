/* eslint-disable no-console */
import { useEffect } from 'react';
import { useDidUpdate } from '../use-did-update/use-did-update';

export function useLogger(componentName: string, props: any[]) {
  useEffect(() => {
    console.log(`${componentName} mounted`, ...props);
    return () => console.log(`${componentName} unmounted`);
  }, []);

  useDidUpdate(() => {
    console.log(`${componentName} updated`, ...props);
  }, props);

  return null;
}
