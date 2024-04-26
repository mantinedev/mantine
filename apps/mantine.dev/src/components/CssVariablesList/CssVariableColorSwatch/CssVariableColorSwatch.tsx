import { ColorSwatch } from '@mantine/core';

const colorVariableRegex = /^(var\(--mantine-color[\w-]+\)|#\w+|rgba?\([\w,. ]+\))$/gm;

export interface CssVariableColorSwatchProps {
  variable: string;
}

export function CssVariableColorSwatch({ variable }: CssVariableColorSwatchProps) {
  if (!variable || !variable.match(colorVariableRegex)) {
    return null;
  }

  return <ColorSwatch size={20} color={variable} />;
}
