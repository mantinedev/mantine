import { createSafeContext, GetStylesApi } from '../../core';
import type { CardFactory } from './Card';

interface CardContextValue {
  getStyles: GetStylesApi<CardFactory>;
}

export const [CardProvider, useCardContext] = createSafeContext<CardContextValue>(
  'Card component was not found in tree'
);
