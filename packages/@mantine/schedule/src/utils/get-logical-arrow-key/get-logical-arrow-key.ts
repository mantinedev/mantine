export function getLogicalArrowKey(key: string, dir: 'ltr' | 'rtl' | undefined): string {
  if (dir !== 'rtl') {
    return key;
  }

  if (key === 'ArrowLeft') {
    return 'ArrowRight';
  }

  if (key === 'ArrowRight') {
    return 'ArrowLeft';
  }

  return key;
}
