import { colorsTuple } from '../../color-functions';
import { MantineColor, MantineColorsTuple } from '../../theme.types';

interface VirtualColorInput {
  dark: MantineColor;
  light: MantineColor;
  name: string;
}

type VirtualColor = MantineColorsTuple & {
  'mantine-virtual-color': true;
  name: string;
  dark: MantineColor;
  light: MantineColor;
};

export function virtualColor(input: VirtualColorInput): MantineColorsTuple {
  const result = colorsTuple(
    Array.from({ length: 10 }).map((_, i) => `var(--mantine-color-${input.name}-${i})`)
  );

  Object.defineProperty(result, 'mantine-virtual-color', {
    enumerable: false,
    writable: false,
    configurable: false,
    value: true,
  });

  Object.defineProperty(result, 'dark', {
    enumerable: false,
    writable: false,
    configurable: false,
    value: input.dark,
  });

  Object.defineProperty(result, 'light', {
    enumerable: false,
    writable: false,
    configurable: false,
    value: input.light,
  });

  Object.defineProperty(result, 'name', {
    enumerable: false,
    writable: false,
    configurable: false,
    value: input.name,
  });

  return result;
}

export function isVirtualColor(value: unknown): value is VirtualColor {
  return !!value && typeof value === 'object' && 'mantine-virtual-color' in value;
}
