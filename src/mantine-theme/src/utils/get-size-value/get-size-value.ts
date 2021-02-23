import { MantineNumberSize, MantineSizes, MantineSize } from '../../types';

export function getSizeValue({
  size,
  sizes,
  defaultSize = 'md',
}: {
  size: MantineNumberSize;
  sizes: MantineSizes;
  defaultSize?: MantineSize;
}) {
  if (typeof size === 'number') {
    return size;
  }

  return sizes[size] || sizes[defaultSize];
}
