import { rem } from '../../../../core';

export function getResizedValue(size: number, axis: 'horizontal' | 'vertical') {
  return `min(${rem(size)}, ${axis === 'horizontal' ? '100vw' : '100dvh'})`;
}
