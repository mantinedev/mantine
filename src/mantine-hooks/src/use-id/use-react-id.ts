import React from 'react';

const __useId: () => string | undefined = (React as any)['useId'.toString()] || (() => undefined);

export function useReactId() {
  const id = __useId();
  return id ? `mantine-${id.replace(/:/g, '')}` : '';
}
