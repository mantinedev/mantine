import {
  createStyles,
  MantineSize,
  getFontStyles,
  getSizeValue,
  getThemeColor,
  getFocusStyles,
  MantineColor,
} from '@mantine/styles';

export const sizes = {
  xs: 14,
  sm: 18,
  md: 22,
  lg: 28,
  xl: 34,
};

const iconSizes = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 16,
  xl: 20,
};

interface CheckboxStyles {
  size: MantineSize;
  color: MantineColor;
  transitionDuration: number;
}

export default createStyles(
  (theme, { size, color, transitionDuration }: CheckboxStyles, getRef) => {
    const icon = {
      ref: getRef('icon'),
      color: theme.white,
      transform: 'translateY(5px) scale(0.5)',
      opacity: 0,
      transition: `opacity ${transitionDuration}ms ease, transform ${transitionDuration}ms ease`,
      pointerEvents: 'none',
      width: getSizeValue({ size, sizes: iconSizes }),
      position: 'absolute',
      zIndex: 1,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: 'auto',
    } as const;

    return {
      icon,

      root: {
        display: 'flex',
        alignItems: 'center',
      },

      inner: {
        position: 'relative',
        width: getSizeValue({ size, sizes }),
        height: getSizeValue({ size, sizes }),
      },

      label: {
        ...getFontStyles(theme),
        WebkitTapHighlightColor: 'transparent',
        paddingLeft: theme.spacing.sm,
        fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
        lineHeight: `${getSizeValue({ size, sizes })}px`,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      },

      input: {
        ...getFocusStyles(theme),
        appearance: 'none',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,
        border: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
        }`,
        width: getSizeValue({ size, sizes }),
        height: getSizeValue({ size, sizes }),
        borderRadius: theme.radius.sm,
        padding: 0,
        outline: 0,
        display: 'block',
        margin: 0,
        transition: `border-color ${transitionDuration}ms ease, background-color ${transitionDuration}ms ease`,

        '&:checked': {
          backgroundColor: getThemeColor({ theme, color, shade: 6 }),
          borderColor: getThemeColor({ theme, color, shade: 6 }),

          [`& + .${icon.ref}`]: {
            opacity: 1,
            transform: 'translateY(0) scale(1)',
          },
        },

        '&:disabled': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
          borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[3],
          cursor: 'not-allowed',

          [`& + .${icon.ref}`]: {
            color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
          },
        },
      },
    };
  }
);
