import {
  createStyles,
  MantineNumberSize,
  MantineColor,
  getStylesRef,
  MantineTheme,
} from '@mantine/styles';

export const sizes = {
  xs: 24,
  sm: 28,
  md: 32,
  lg: 36,
  xl: 40,
};

const iconSizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
};

const padding = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
};

const checkedPadding = {
  xs: 7.5,
  sm: 10,
  md: 11.5,
  lg: 13,
  xl: 15,
};

export interface ChipStylesParams {
  radius: MantineNumberSize;
  color: MantineColor;
}

function getVariantStyles(
  theme: MantineTheme,
  { color }: { color: MantineColor },
  variant: string
) {
  const filledColors = theme.fn.variant({ variant: 'filled', color });
  const lightColors = theme.fn.variant({ variant: 'light', color });

  if (variant === 'light') {
    return {
      label: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
        ...theme.fn.hover({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        }),
      },

      checked: {
        color: lightColors.color,
        backgroundColor: lightColors.background,
        ...theme.fn.hover({ backgroundColor: lightColors.hover }),
        '&, &:hover': {
          backgroundColor: theme.fn.variant({ variant: 'light', color }).background,
        },
      },
    };
  }

  if (variant === 'filled') {
    return {
      label: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
        ...theme.fn.hover({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        }),
      },

      checked: {
        color: filledColors.color,
        backgroundColor: filledColors.background,
        ...theme.fn.hover({ backgroundColor: filledColors.hover }),
      },
    };
  }

  if (variant === 'outline') {
    return {
      label: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4],

        ...theme.fn.hover({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        }),
      },

      checked: {
        border: `1px solid ${filledColors.background}`,
      },
    };
  }

  return { label: null, checked: null };
}

export default createStyles((theme, { radius, color }: ChipStylesParams, { size, variant }) => {
  const variantStyles = getVariantStyles(theme, { color }, variant);

  return {
    root: {},

    label: {
      ref: getStylesRef('label'),
      ...theme.fn.fontStyles(),
      boxSizing: 'border-box',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      display: 'inline-block',
      alignItems: 'center',
      userSelect: 'none',
      border: '1px solid transparent',
      borderRadius: theme.fn.radius(radius),
      height: theme.fn.size({ size, sizes }),
      fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
      lineHeight: `${theme.fn.size({ size, sizes }) - 2}px`,
      paddingLeft: theme.fn.size({ size, sizes: padding }),
      paddingRight: theme.fn.size({ size, sizes: padding }),
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'background-color 100ms ease',
      WebkitTapHighlightColor: 'transparent',
      ...variantStyles.label,

      '&[data-disabled]': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
        cursor: 'not-allowed',

        ...theme.fn.hover({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        }),

        [`& .${getStylesRef('iconWrapper')}`]: {
          color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
        },
      },

      '&[data-checked]': {
        paddingLeft: theme.fn.size({ size, sizes: checkedPadding }),
        paddingRight: theme.fn.size({ size, sizes: checkedPadding }),
        '&:not([data-disabled])': variantStyles.checked,
      },
    },

    iconWrapper: {
      ref: getStylesRef('iconWrapper'),
      color:
        variant === 'filled'
          ? theme.white
          : theme.fn.variant({ variant: 'filled', color }).background,
      width:
        theme.fn.size({ size, sizes: iconSizes }) +
        theme.fn.size({ size, sizes: theme.spacing }) / 1.5,
      maxWidth:
        theme.fn.size({ size, sizes: iconSizes }) +
        theme.fn.size({ size, sizes: theme.spacing }) / 1.5,
      height: theme.fn.size({ size, sizes: iconSizes }),
      display: 'inline-block',
      verticalAlign: 'middle',
      overflow: 'hidden',
    },

    checkIcon: {
      width: theme.fn.size({ size, sizes: iconSizes }),
      height: theme.fn.size({ size, sizes: iconSizes }) / 1.1,
      display: 'block',
    },

    input: {
      width: 0,
      height: 0,
      padding: 0,
      opacity: 0,
      margin: 0,

      '&:focus': {
        outline: 'none',

        [`& + .${getStylesRef('label')}`]: {
          ...(theme.focusRing === 'always' || theme.focusRing === 'auto'
            ? theme.focusRingStyles.styles(theme)
            : theme.focusRingStyles.resetStyles(theme)),
        },

        '&:focus:not(:focus-visible)': {
          [`& + .${getStylesRef('label')}`]: {
            ...(theme.focusRing === 'auto' || theme.focusRing === 'never'
              ? theme.focusRingStyles.resetStyles(theme)
              : null),
          },
        },
      },
    },
  };
});
