import { useState } from 'react';
import { useInterval } from '@mantine/hooks';
import { AnyDateValue } from '../types';
import { resolveNow } from '../utils/resolve-now/resolve-now';

export function useNow(getCurrentTime: (() => AnyDateValue) | undefined) {
  const [, setTick] = useState(0);
  useInterval(() => setTick((tick) => tick + 1), 60000, { autoInvoke: true });
  return resolveNow(getCurrentTime);
}
