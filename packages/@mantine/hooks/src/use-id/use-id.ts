import { useId as useReactId, useRef, useState } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';
import { randomId } from '../utils';

export function useId(staticId?: string) {
  const reactId = useReactId();
  const [uuid, setUuid] = useState(`mantine-${reactId.replace(/:/g, '')}`);
  const hasInitializedRef = useRef(false);

  useIsomorphicEffect(() => {
    if (hasInitializedRef.current) {
      return;
    }
    hasInitializedRef.current = true;
    setUuid(randomId());
  }, []);

  if (typeof staticId === 'string') {
    return staticId;
  }

  return uuid;
}
