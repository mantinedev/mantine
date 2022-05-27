import React from 'react';
import { Prism } from './Prism';
import { getPrismTheme as defaultGetPrismTheme } from './prism-theme';
import type { PrismThemeSelector } from './types';

const code2 = Array(20)
  .fill(0)
  .map(() => 'Some line')
  .join('\n');

const code3 = Array(120)
  .fill(0)
  .map(() => 'Some line')
  .join('\n');

export default {
  title: 'Prism',
};

export const TwoDigitLineNumbers = () => (
  <Prism language="javascript" withLineNumbers>
    {code2}
  </Prism>
);

export const ThreeDigitLineNumbers = () => (
  <Prism language="javascript" withLineNumbers>
    {code3}
  </Prism>
);

const getPrismTheme: PrismThemeSelector = (theme, colorScheme) => {
  if (colorScheme === 'dark') {
    // We can chain to the defaults if we want
    return defaultGetPrismTheme(theme, colorScheme);
  }
  // Or completely override the theme to just highlight certain tokens
  return {
    plain: {
      color: theme.colors.gray[9],
      backgroundColor: theme.colors.gray[0],
    },

    styles: [
      {
        types: ['class-name', 'maybe-class-name'],
        style: {
          color: theme.colors.red[9],
        },
      },
    ],
  };
};

const customThemeCode = `
export interface MantineProviderProps {
  theme?: MantineThemeOverride;
  styles?: ProviderStyles;
  classNames?: ProviderClassNames;
  defaultProps?: MantineDefaultProps;
  emotionOptions?: EmotionCacheOptions;
  withNormalizeCSS?: boolean;
  withGlobalStyles?: boolean;
  withCSSVariables?: boolean;
  children: React.ReactNode;
  inherit?: boolean;
}
const getPrismTheme = (theme, colorScheme) => {};
getPrismTheme(mantineTheme, colorScheme);
`;

export const CustomPrismTheme = () => (
  <Prism language="typescript" withLineNumbers getPrismTheme={getPrismTheme}>
    {customThemeCode}
  </Prism>
);
