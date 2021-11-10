interface GetSize {
  size: string | number;
  sizes: Record<string, any>;
}

export function size(props: GetSize) {
  if (typeof props.size === 'number') {
    return props.size;
  }

  return props.sizes[props.size] || props.size || props.sizes.md;
}
