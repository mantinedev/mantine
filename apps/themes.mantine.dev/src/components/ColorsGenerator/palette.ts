import { formatHex, parse, wcagContrast } from 'culori';
import { type GenerateColorsOptions, generateColorFormats } from '@mantine/colors-generator';
import { DEFAULT_THEME, isLightColor } from '@mantine/core';
import type { OutputFormat } from './params';

export interface ShadeInfo {
  index: number;
  value: string;
  hex: string;
  textColor: 'black' | 'white';
  contrast: number;
}

export interface Palette {
  baseColorIndex: number;
  colors: string[];
  values: string[];
  shades: ShadeInfo[];
}

export function buildPalette(
  color: string,
  options: GenerateColorsOptions,
  format: OutputFormat
): Palette | null {
  try {
    const { baseColorIndex, colors, formats } = generateColorFormats(color, options);
    const values = formats[format];

    return {
      baseColorIndex,
      colors,
      values,
      shades: colors.map((shade, index) => {
        const hex = formats.hex[index];
        const textColor = isLightColor(shade, DEFAULT_THEME.luminanceThreshold) ? 'black' : 'white';
        return {
          index,
          value: values[index],
          hex,
          textColor,
          contrast: Math.round(wcagContrast(hex, textColor) * 10) / 10,
        };
      }),
    };
  } catch {
    return null;
  }
}

export function toHex(color: string) {
  const parsed = parse(color);
  return parsed ? formatHex(parsed) : '#000000';
}

function toCamelCase(name: string) {
  return name.replace(/-+([a-z0-9])/g, (_, char: string) => char.toUpperCase());
}

function formatTuple(values: string[]) {
  return `[\n${values.map((value) => `  '${value}'`).join(',\n')},\n]`;
}

function formatShade(light: number, dark: number) {
  return light === dark ? String(light) : `{ light: ${light}, dark: ${dark} }`;
}

interface ThemeCodeInput {
  name: string;
  light: Palette;
  dark: Palette | null;
}

export function getColorsJson({ light, dark }: Omit<ThemeCodeInput, 'name'>) {
  return JSON.stringify(dark ? { light: light.values, dark: dark.values } : light.values, null, 2);
}

export function getThemeCode({ name, light, dark }: ThemeCodeInput) {
  const variable = toCamelCase(name);
  const key = /^[a-z][a-z0-9]*$/.test(name) ? name : `'${name}'`;

  if (!dark) {
    return `import { createTheme, MantineProvider, type MantineColorsTuple } from '@mantine/core';

const ${variable}: MantineColorsTuple = ${formatTuple(light.values)};

const theme = createTheme({
  colors: {
    ${key === variable ? variable : `${key}: ${variable}`},
  },
  primaryColor: '${name}',
  primaryShade: ${light.baseColorIndex},
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      {/* Your app here */}
    </MantineProvider>
  );
}`;
  }

  return `import {
  createTheme,
  MantineProvider,
  virtualColor,
  type MantineColorsTuple,
} from '@mantine/core';

const ${variable}Light: MantineColorsTuple = ${formatTuple(light.values)};

const ${variable}Dark: MantineColorsTuple = ${formatTuple(dark.values)};

const theme = createTheme({
  colors: {
    '${name}-light': ${variable}Light,
    '${name}-dark': ${variable}Dark,
    ${key}: virtualColor({
      name: '${name}',
      light: '${name}-light',
      dark: '${name}-dark',
    }),
  },
  primaryColor: '${name}',
  primaryShade: ${formatShade(light.baseColorIndex, dark.baseColorIndex)},
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      {/* Your app here */}
    </MantineProvider>
  );
}`;
}
