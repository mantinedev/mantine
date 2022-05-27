import type { Language, PrismTheme } from 'prism-react-renderer';
import type { MantineColor, MantineTheme } from '@mantine/core';

export interface PrismSharedProps {
  /** Code which will be highlighted */
  children: string;

  /** Programming language that should be highlighted */
  language: Language;

  /** True to remove copy to clipboard button */
  noCopy?: boolean;

  /** Copy button tooltip */
  copyLabel?: string;

  /** Copy button tooltip in copied state */
  copiedLabel?: string;

  /** Display line numbers */
  withLineNumbers?: boolean;

  /** Highlight line at given line number with color from theme.colors */
  highlightLines?: Record<string, { color: MantineColor; label?: string }>;

  /** Force color scheme, defaults to theme.colorScheme */
  colorScheme?: 'dark' | 'light';

  /** Override the PrismTheme syntax rules @see {https://github.com/FormidableLabs/prism-react-renderer#theming} */
  getPrismTheme?: PrismThemeSelector;

  /** Change scroll area component */
  scrollAreaComponent?: any;

  /** Defines whether the code should be trimmed, defaults to true */
  trim?: boolean;
}

export type PrismThemeSelector = (theme: MantineTheme, colorScheme: 'light' | 'dark') => PrismTheme;
