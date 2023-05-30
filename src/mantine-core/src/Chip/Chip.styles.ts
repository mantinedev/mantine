import {
  createStyles,
  MantineNumberSize,
  MantineColor,
  getStylesRef,
  MantineTheme,
  rem,
  getSize,
} from '@mantine/styles';

export const sizes = {
  xs: rem(24),
  sm: rem(28),
  md: rem(32),
  lg: rem(36),
  xl: rem(40),
};

const iconSizes = {
  xs: rem(10),
  sm: rem(12),
  md: rem(14),
  lg: rem(16),
  xl: rem(18),
};

const padding = {
  xs: rem(16),
  sm: rem(20),
  md: rem(24),
  lg: rem(28),
  xl: rem(32),
};

const checkedPadding = {
  xs: rem(7.5),
  sm: rem(10),
  md: rem(11.5),
  lg: rem(13),
  xl: rem(15),
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
        border: `${rem(1)} solid ${filledColors.background}`,
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
      display: 'inline-flex',
      alignItems: 'center',
      userSelect: 'none',
      border: `${rem(1)} solid transparent`,
      borderRadius: theme.fn.radius(radius),
      height: getSize({ size, sizes }),
      fontSize: getSize({ size, sizes: theme.fontSizes }),
      lineHeight: `calc(${getSize({ size, sizes })} - ${rem(2)})`,
      paddingLeft: getSize({ size, sizes: padding }),
      paddingRight: getSize({ size, sizes: padding }),
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
        pointerEvents: 'none',

        ...theme.fn.hover({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        }),

        [`& .${getStylesRef('iconWrapper')}`]: {
          color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
        },
      },

      '&[data-checked]': {
        paddingLeft: getSize({ size, sizes: checkedPadding }),
        paddingRight: getSize({ size, sizes: checkedPadding }),
        '&:not([data-disabled])': variantStyles.checked,
      },
    },

    iconWrapper: {
      ref: getStylesRef('iconWrapper'),
      color:
        variant === 'filled'
          ? theme.white
          : theme.fn.variant({ variant: 'filled', color }).background,
      width: `calc(${getSize({ size, sizes: iconSizes })} + (${getSize({
        size,
        sizes: theme.spacing,
      })} / 1.5))`,
      maxWidth: `calc(${getSize({ size, sizes: iconSizes })} + (${getSize({
        size,
        sizes: theme.spacing,
      })} / 1.5))`,
      height: getSize({ size, sizes: iconSizes }),
      display: 'inline-block',
      verticalAlign: 'middle',
      overflow: 'hidden',
    },

    checkIcon: {
      width: getSize({ size, sizes: iconSizes }),
      height: `calc(${getSize({ size, sizes: iconSizes })} / 1.1)`,
      display: 'block',
    },

    input: {
      width: 0,
      height: 0,
      padding: 0,
      opacity: 0,
      margin: 0,

      '&:disabled + label': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
        cursor: 'not-allowed',
        pointerEvents: 'none',

        ...theme.fn.hover({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        }),

        [`& .${getStylesRef('iconWrapper')}`]: {
          color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
        },

        '&[data-checked]': {
          paddingLeft: getSize({ size, sizes: checkedPadding }),
          paddingRight: getSize({ size, sizes: checkedPadding }),

          '&:not([data-disabled])': {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
            borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
            color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
          },
        },
      },

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
