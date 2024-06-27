import { useRatingContext } from '../Rating.context';
import { StarIcon } from './StarIcon';

export interface StarSymbolProps {
  type: 'empty' | 'full';
}

export function StarSymbol({ type }: StarSymbolProps) {
  const ctx = useRatingContext();
  return <StarIcon {...ctx.getStyles('starSymbol')} data-filled={type === 'full' || undefined} />;
}

StarSymbol.displayName = '@mantine/core/StarSymbol';
