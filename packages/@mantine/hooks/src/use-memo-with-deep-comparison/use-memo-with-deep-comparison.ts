import { DependencyList, useMemo, useRef } from 'react';
import isDeepEqual from 'fast-deep-equal';

function useDeepCompareMemoize(dependencies: DependencyList) {
  const previousDependenciesRef = useRef<DependencyList>();
  if (!isDeepEqual(dependencies, previousDependenciesRef.current)) {
    previousDependenciesRef.current = dependencies;
  }
  return previousDependenciesRef.current;
}

export function useMemoWithDeepComparison<T>(factory: () => T, dependencies: DependencyList): T {
    const deepComparedDependencies = useDeepCompareMemoize(dependencies);
    return useMemo<T>(factory, [deepComparedDependencies]);
}
