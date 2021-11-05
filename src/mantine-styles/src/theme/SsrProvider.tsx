import React, { useState } from 'react';

function randomId() {
  return `mantine-${Math.random().toString(36).substr(2, 9)}`;
}

export const useUuid = (staticId?: string) => {
  const [uid, setUid] = useState('');
  const _useEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

  _useEffect(() => {
    setUid(randomId());
  }, []);

  return staticId || uid;
};
