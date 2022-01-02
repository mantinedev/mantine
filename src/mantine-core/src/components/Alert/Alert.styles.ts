import {
  createStyles,
  MantineColor,
  MantineNumberSize,
  getSharedColorScheme,
} from '@mantine/styles';

interface AlertStyles {
  color: MantineColor;
  radius: MantineNumberSize;
}

export default createStyles((theme, { color, radius }: AlertStyles) => {
  const lightColors = getSharedColorScheme({ color, theme, variant: 'light' });
  const filledColors = getSharedColorScheme({ theme, color, variant: 'filled' });
  const outlineColors = getSharedColorScheme({ theme, color, variant: 'outline' });

  return {
    root: {
      ...theme.fn.fontStyles(),
      position: 'relative',
      overflow: 'hidden',
      padding: `${theme.spacing.sm}px ${theme.spacing.md}px`,
      borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
    },

    wrapper: {
      display: 'flex',
    },

    body: {
      flex: 1,
    },

    title: {
      boxSizing: 'border-box',
      margin: 0,
      marginBottom: 7,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      lineHeight: theme.lineHeight,
      fontSize: theme.fontSizes.sm,
      fontWeight: 700,
    },

    label: {
      display: 'block',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },

    light: {
      backgroundColor: lightColors.background,
      color: lightColors.color,
      border: '1px solid transparent',
    },

    filled: {
      backgroundColor: filledColors.background,
      color: filledColors.color,
      border: '1px solid transparent',
    },

    outline: {
      backgroundColor: outlineColors.background,
      color: outlineColors.color,
      border: `1px solid ${outlineColors.border}`,
    },

    icon: {
      lineHeight: 1,
      width: 20,
      height: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginRight: theme.spacing.md,
      marginTop: 1,
    },

    message: {
      ...theme.fn.fontStyles(),
      lineHeight: theme.lineHeight,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      fontSize: theme.fontSizes.sm,
    },

    closeButton: {
      marginTop: 2,
    },
  };
});
