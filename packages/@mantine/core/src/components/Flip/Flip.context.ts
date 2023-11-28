import { createSafeContext } from '../../core';
import { FLIP_ERRORS } from './Flip.errors';

interface FlipContext {
  toggleFlip: () => void;
  flipped: boolean;
}

export const [FlipContextProvider, useFlipContext] = createSafeContext<FlipContext>(
  FLIP_ERRORS.context
);
