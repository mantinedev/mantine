import { MantineTheme, parseThemeColor } from '../../../../MantineProvider';

export function colorResolver(color: unknown, theme: MantineTheme) {
  const parsedColor = parseThemeColor({ color, theme });

  if (parsedColor.color === 'dimmed') {
    return 'var(--mantine-color-dimmed)';
  }

  if (parsedColor.color === 'bright') {
    return 'var(--mantine-color-bright)';
  }

  if (parsedColor.isThemeColor && parsedColor.shade === undefined) {
    return `var(--mantine-color-${parsedColor.color}-text)`;
  }

  return parsedColor.variable ? `var(${parsedColor.variable})` : parsedColor.color;
}
