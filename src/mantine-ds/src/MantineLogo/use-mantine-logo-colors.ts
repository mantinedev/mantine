import { MantineColor, useMantineTheme } from '@mantine/core';

export type MantineLogoVariant = 'mantine.dev' | 'ui.mantine.dev';

export interface LogoProps extends React.ComponentPropsWithoutRef<'svg'> {
  color?: MantineColor;
  variant?: MantineLogoVariant;
  size?: number;
  inverted?: boolean;
}

export function useMantineLogoColors(
  color: MantineColor = 'blue',
  variant: MantineLogoVariant = 'mantine.dev',
  inverted: boolean = false
) {
  const theme = useMantineTheme();

  if (variant === 'mantine.dev') {
    return {
      background: inverted ? theme.white : theme.fn.themeColor(color, 5),
      color: inverted ? theme.fn.themeColor(color, 5) : theme.white,
    };
  }

  return {
    background: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.cyan[6],
    color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white,
  };
}
