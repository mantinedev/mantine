import { createSafeContext, GetStylesApi } from '../../core';
import type { TiltFactory } from './Tilt';

interface TiltContextValue {
  getStyles: GetStylesApi<TiltFactory>;
  roll: number;
  tilt: number;
  transition: string;
}

export const [TiltProvider, useTiltContext] = createSafeContext<TiltContextValue>(
  'Tilt component was not found in tree'
);
