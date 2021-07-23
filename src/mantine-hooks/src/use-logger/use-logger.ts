/* eslint-disable no-console */
import { useEffect } from 'react';

export function useLogger(
  props: any,
  deps: React.DependencyList,
  options?: {
    logLevel?: 'debug' | 'info' | 'warn' | 'error';
    logName?: string;
  }
) {
  useEffect(() => {
    options?.logName
      ? console[options?.logLevel || 'log'](options.logName, props)
      : console[options?.logLevel || 'log'](props);
  }, [deps]);

  return null;
}
