import { createSafeContext, GetStylesApi } from '../../core';
import type { RatingFactory } from './Rating';

interface RatingContextValue {
  getStyles: GetStylesApi<RatingFactory>;
}

export const [RatingProvider, useRatingContext] = createSafeContext<RatingContextValue>(
  'Rating was not found in tree'
);
