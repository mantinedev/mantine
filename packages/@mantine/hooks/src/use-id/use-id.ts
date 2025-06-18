import { useId as useReactId, useState } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';
import { randomId } from '../utils';

export function useId(staticId?: string) {
  const reactId = useReactId();
  const [uuid, setUuid] = useState(`mantine-${reactId.replace(/:/g, '')}`);

  useIsomorphicEffect(() => {
    setUuid(randomId());
  }, []);

  if (typeof staticId === 'string') {
    return staticId;
  }

  if (typeof window === 'undefined') {
    return reactId;
  }

  return uuid;
}
