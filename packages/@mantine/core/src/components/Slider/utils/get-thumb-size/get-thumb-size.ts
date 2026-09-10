import { MantineSize, rem } from '../../../../core';

const NAMED_SIZES: string[] = ['xs', 'sm', 'md', 'lg', 'xl'];

export function getThumbSize(
  size: MantineSize | (string & {}) | number | undefined,
  thumbSize: number | string | undefined
) {
  if (thumbSize !== undefined) {
    return rem(thumbSize);
  }

  if (typeof size === 'string' && NAMED_SIZES.includes(size)) {
    return `var(--slider-thumb-size-${size})`;
  }

  return `calc(var(--slider-size) + ${rem(10)})`;
}
