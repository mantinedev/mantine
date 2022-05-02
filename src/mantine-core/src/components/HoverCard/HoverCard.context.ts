import { createSafeContext } from '@mantine/utils';
import { HOVER_CARD_ERRORS } from './HoverCard.errors';

interface HoverCardContext {
  onMouseEnter(): void;
  onMouseLeave(): void;
}

export const [HoverCardContextProvider, useHoverCardContext] = createSafeContext<HoverCardContext>(
  HOVER_CARD_ERRORS['hover-card-context']
);
