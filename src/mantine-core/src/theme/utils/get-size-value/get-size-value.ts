export function getSizeValue({
  size,
  sizes,
  defaultSize = 'md',
}: {
  size: string | number;
  sizes: Record<string, any>;
  defaultSize?: string;
}) {
  if (typeof size === 'number') {
    return size;
  }

  return sizes[size] || size || sizes[defaultSize];
}
