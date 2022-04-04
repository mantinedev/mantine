import React, { useState } from 'react';
import { useIsomorphicEffect, randomId } from '@mantine/hooks';

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
  return id ? `mantine-${id.replaceAll(':', '')}` : '';
}

export function useId(staticId?: string) {
  return staticId || getReactId() || useClientId();
}
