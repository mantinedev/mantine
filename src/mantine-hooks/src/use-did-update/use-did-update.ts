import { useEffect, useRef } from 'react';

export function useDidUpdate(fn: React.EffectCallback, dependencies?: React.DependencyList) {
  const mounted = useRef(false);

  // for react-refresh
  useEffect(
    () => () => {
      mounted.current = false;
    },
    []
  );

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (mounted.current) {
      return fn();
    }

    mounted.current = true;
  }, dependencies);
}
