import { useState } from 'react';
import { randomId } from '../utils';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';

export function useUuid(staticId?: string) {
  const [uuid, setUuid] = useState('');

  useIsomorphicEffect(() => {
    setUuid(randomId());
  }, []);

  return staticId || uuid;
}
