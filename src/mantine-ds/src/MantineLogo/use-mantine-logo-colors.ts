import { MantineColor, useMantineTheme } from '@mantine/core';

export type MantineLogoVariant = 'mantine.dev' | 'ui.mantine.dev';

export interface LogoProps extends React.ComponentPropsWithoutRef<'svg'> {
  color?: MantineColor;
  variant?: MantineLogoVariant;
  size?: number;
}

export function useMantineLogoColors(
  color: MantineColor = 'blue',
  variant: MantineLogoVariant = 'mantine.dev'
) {
  const theme = useMantineTheme();
  if (variant === 'mantine.dev') {
    return { background: theme.fn.themeColor(color, 5), color: theme.white };
  }

  return {
    background: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.cyan[6],
    color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white,
  };
}
