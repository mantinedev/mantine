interface Options {
  dir: 'rtl' | 'ltr';
  orientation: 'horizontal' | 'vertical' | undefined;
  direction: 'next' | 'previous';
}

export function getChevronRotation({ dir, orientation, direction }: Options) {
  if (direction === 'previous') {
    return orientation === 'horizontal' ? 90 * (dir === 'ltr' ? 1 : -1) : -180;
  }

  return orientation === 'horizontal' ? 90 * (dir === 'ltr' ? -1 : 1) : 0;
}
