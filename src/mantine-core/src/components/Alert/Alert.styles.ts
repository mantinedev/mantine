import {
  createStyles,
  MantineColor,
  MantineNumberSize,
  getSharedColorScheme,
} from '@mantine/styles';

interface AlertStyles {
  color: MantineColor;
  radius: MantineNumberSize;
  variant: 'filled' | 'outline' | 'light';
}

export default createStyles((theme, { color, radius, variant }: AlertStyles) => {
  const lightColors = getSharedColorScheme({ color, theme, variant });
  const filledColors = getSharedColorScheme({ theme, color, variant });
  const outlineColors = getSharedColorScheme({ theme, color, variant });

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
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : lightColors.background,
      color: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 5 : 7),
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
      color:
        variant === 'filled'
          ? filledColors.color
          : theme.colorScheme === 'dark'
          ? theme.colors.dark[0]
          : theme.black,
    },

    closeButton: {
      marginTop: 2,
    },
  };
});
