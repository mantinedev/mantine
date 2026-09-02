import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

function dependenciesChanged(previous: DependencyList, next: DependencyList) {
  return (
    previous.length !== next.length || next.some((dep, index) => !Object.is(dep, previous[index]))
  );
}

export function useDidUpdate(fn: EffectCallback, dependencies?: DependencyList) {
  const mounted = useRef(false);
  const previousRender = useRef<object>(null);
  const previousDependencies = useRef<DependencyList | undefined>(undefined);
  const render = {};

  useEffect(() => {
    const isSameRender = previousRender.current === render;
    const previous = previousDependencies.current;

    previousRender.current = render;
    previousDependencies.current = dependencies;

    if (!mounted.current) {
      mounted.current = true;
      return undefined;
    }

    if (isSameRender) {
      return undefined;
    }

    if (dependencies && previous && !dependenciesChanged(previous, dependencies)) {
      return undefined;
    }

    return fn();
  }, dependencies);
}
