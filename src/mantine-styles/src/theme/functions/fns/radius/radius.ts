import type { MantineThemeBase, MantineNumberSize } from '../../../types';

export function radius(theme: MantineThemeBase) {
  return (size?: MantineNumberSize | (string & {})): string | number => {
    if (typeof size === 'number') {
      return size;
    }

    const defaultRadius =
      typeof theme.defaultRadius === 'number'
        ? theme.defaultRadius
        : theme.radius[theme.defaultRadius] || theme.defaultRadius;

    return theme.radius[size] || size || defaultRadius;
  };
}
