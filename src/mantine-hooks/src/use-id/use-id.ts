import { useState } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';
import { randomId } from '../utils';
import { useReactId } from './use-react-id';

export function useId(staticId?: string) {
  const reactId = useReactId();
  const [uuid, setUuid] = useState(reactId);

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
