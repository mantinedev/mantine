import { MantineTheme } from '../../types';

export function getFontStyles(theme: MantineTheme): any {
  return {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontFamily: theme.fontFamily || 'sans-serif',
  };
}
