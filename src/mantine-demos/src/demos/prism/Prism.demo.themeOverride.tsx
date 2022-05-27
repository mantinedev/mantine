import React from 'react';
import { Prism, getPrismTheme as defaultGetPrismTheme, PrismThemeSelector } from '@mantine/prism';

const demoCode = `
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

const code = `
import React from 'react';
import { Prism, getPrismTheme as defaultGetPrismTheme, type PrismThemeSelector } from '@mantine/prism';

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

function Demo() {
  return (
    <Prism language="tsx" getPrismTheme={getPrismTheme}>
      {demoCode}
    </Prism>
  );
}
`;

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

function Demo() {
  return (
    <Prism language="tsx" getPrismTheme={getPrismTheme}>
      {demoCode}
    </Prism>
  );
}

export const themeOverride: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
