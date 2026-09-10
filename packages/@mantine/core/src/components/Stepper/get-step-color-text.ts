import { MantineTheme, parseThemeColor } from '../../core';

export function getStepColorText(color: string, theme: MantineTheme) {
  const parsed = parseThemeColor({ color, theme });

  if (parsed.isThemeColor && parsed.shade === undefined) {
    return `var(--mantine-color-${parsed.color}-text)`;
  }

  return parsed.variable ? `var(${parsed.variable})` : parsed.color;
}
