import { MantineTheme } from '../../types';

export function getFontStyles(theme: MantineTheme) {
  return {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontFamily: theme.fontFamily || 'sans-serif',
  };
}
