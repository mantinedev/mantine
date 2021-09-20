interface GetSizeValue {
  size: string | number;
  sizes: Record<string, any>;
  defaultSize?: string;
}

export function getSizeValue({ size, sizes, defaultSize = 'md' }: GetSizeValue) {
  if (typeof size === 'number') {
    return size;
  }

  return sizes[size] || size || sizes[defaultSize];
}
