import { MantineNumberSize } from '../../types';
import { rem, em } from '../rem/rem';

export function getSize<
  Sizes extends Record<string, any>,
  Key extends keyof Sizes,
  Size extends MantineNumberSize
>({
  size,
  sizes,
  units,
}: {
  size: Size;
  sizes: Sizes;
  units?: 'em' | 'rem';
}): Size extends Key ? Sizes[Size] : Size extends number ? string : Size {
  if (size in sizes) {
    return sizes[size as any];
  }

  if (typeof size === 'number') {
    return units === 'em' ? em(size) : (rem(size) as any);
  }

  return (size as any) || sizes.md;
}
