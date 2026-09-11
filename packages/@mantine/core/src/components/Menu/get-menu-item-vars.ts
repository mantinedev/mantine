import { MantineColor, MantineTheme, parseThemeColor } from '../../core';
import type { MenuVariant } from './Menu';

interface GetMenuItemVarsInput {
  theme: MantineTheme;
  color: MantineColor | undefined;
  variant: MenuVariant | undefined;
}

export function getMenuItemVars({ theme, color, variant }: GetMenuItemVarsInput) {
  if (!color) {
    return {
      '--menu-item-color': undefined,
      '--menu-item-hover': undefined,
      '--menu-item-hover-color': undefined,
    };
  }

  const lightColors = theme.variantColorResolver({ color, theme, variant: 'light' });
  const filledColors =
    variant === 'filled' ? theme.variantColorResolver({ color, theme, variant: 'filled' }) : null;
  const parsedThemeColor = parseThemeColor({ color, theme });

  return {
    '--menu-item-color':
      parsedThemeColor.isThemeColor && parsedThemeColor.shade === undefined
        ? `var(--mantine-color-${parsedThemeColor.color}-6)`
        : lightColors.color,
    '--menu-item-hover': filledColors ? filledColors.background : lightColors.hover,
    '--menu-item-hover-color': filledColors ? filledColors.color : undefined,
  };
}
