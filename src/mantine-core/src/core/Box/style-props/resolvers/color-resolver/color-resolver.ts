import { MantineTheme, parseThemeColor } from '../../../../MantineProvider';

export function colorResolver(color: unknown, theme: MantineTheme) {
  const parsedColor = parseThemeColor({ color, theme });

  if (parsedColor.color === 'dimmed') {
    return 'var(--mantine-color-dimmed)';
  }

  if (parsedColor.color === 'bright') {
    return 'var(--mantine-color-bright)';
  }

  return parsedColor.variable ? `var(${parsedColor.variable})` : parsedColor.color;
}
