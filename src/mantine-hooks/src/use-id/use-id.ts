import React, { useState } from 'react';
import { useIsomorphicEffect } from '../use-isomorphic-effect/use-isomorphic-effect';

const randomId = () => `mantine-${Math.random().toString(36).slice(2, 11)}`;

const useReactId: () => string | undefined =
  (React as any)['useId'.toString()] || (() => undefined);

function useClientId() {
  const [uuid, setUuid] = useState('');

  useIsomorphicEffect(() => {
    setUuid(randomId());
  }, []);

  return uuid;
}

function getReactId() {
  const id = useReactId();
  return id ? `mantine-${id.replace(/:/g, '')}` : '';
}

export function useId(staticId?: string) {
  return typeof staticId === 'string' ? staticId : getReactId() || useClientId();
}
