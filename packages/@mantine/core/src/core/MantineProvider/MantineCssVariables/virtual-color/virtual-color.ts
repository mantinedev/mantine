import { MantineColor } from '../../theme.types';

interface VirtualColor {
  'mantine-virtual-color': true;
  dark: MantineColor;
  light: MantineColor;
}

export function virtualColor(input: { dark: MantineColor; light: MantineColor }): VirtualColor {
  const result = { ...input };

  Object.defineProperty(result, 'mantine-virtual-color', {
    enumerable: false,
    writable: false,
    configurable: false,
    value: true,
  });

  return result as VirtualColor;
}

export function isVirtualColor(value: unknown): value is VirtualColor {
  return !!value && typeof value === 'object' && 'mantine-virtual-color' in value;
}
