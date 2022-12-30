import { createStyles, MantineNumberSize, MantineSize, MantineTheme } from '@mantine/styles';

export interface InputStylesParams {
  radius: MantineNumberSize;
  size: MantineSize;
  variant: string;
  multiline: boolean;
  invalid: boolean;
  rightSectionWidth: string | number;
  withRightSection: boolean;
  iconWidth: string | number;
  offsetBottom: boolean;
  offsetTop: boolean;
  pointer: boolean;
}

export const sizes = {
  xs: 30,
  sm: 36,
  md: 42,
  lg: 50,
  xl: 60,
};

const INPUT_VARIANTS = ['default', 'filled', 'unstyled'];

interface GetVariantStylesInput {
  theme: MantineTheme;
  variant: string;
}

function getVariantStyles({ theme, variant }: GetVariantStylesInput) {
  if (!INPUT_VARIANTS.includes(variant)) {
    return null;
  }

  if (variant === 'default') {
    return {
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
      }`,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      transition: 'border-color 100ms ease',
      '&:focus, &:focus-within': theme.focusRingStyles.inputStyles(theme),
    };
  }

  if (variant === 'filled') {
    return {
      border: '1px solid transparent',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
      '&:focus, &:focus-within': theme.focusRingStyles.inputStyles(theme),
    };
  }

  return {
    borderWidth: 0,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    backgroundColor: 'transparent',
    minHeight: 28,
    outline: 0,

    '&:focus, &:focus-within': {
      outline: 'none',
      borderColor: 'transparent',
    },

    '&:disabled': {
      backgroundColor: 'transparent',

      '&:focus, &:focus-within': {
        outline: 'none',
        borderColor: 'transparent',
      },
    },
  };
}

export default createStyles(
  (
    theme,
    {
      size,
      multiline,
      radius,
      variant,
      invalid,
      rightSectionWidth,
      withRightSection,
      iconWidth,
      offsetBottom,
      offsetTop,
      pointer,
    }: InputStylesParams
  ) => {
    const invalidColor = theme.fn.variant({ variant: 'filled', color: 'red' }).background;
    const sizeStyles =
      variant === 'default' || variant === 'filled'
        ? {
            minHeight: theme.fn.size({ size, sizes }),
            paddingLeft: theme.fn.size({ size, sizes }) / 3,
            paddingRight: withRightSection ? rightSectionWidth : theme.fn.size({ size, sizes }) / 3,
            borderRadius: theme.fn.radius(radius),
          }
        : null;

    return {
      wrapper: {
        position: 'relative',
        marginTop: offsetTop ? `calc(${theme.spacing.xs}px / 2)` : undefined,
        marginBottom: offsetBottom ? `calc(${theme.spacing.xs}px / 2)` : undefined,
      },

      input: {
        ...theme.fn.fontStyles(),
        height: multiline
          ? variant === 'unstyled'
            ? undefined
            : 'auto'
          : theme.fn.size({ size, sizes }),
        WebkitTapHighlightColor: 'transparent',
        lineHeight: multiline ? theme.lineHeight : `${theme.fn.size({ size, sizes }) - 2}px`,
        appearance: 'none',
        resize: 'none',
        boxSizing: 'border-box',
        fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
        width: '100%',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        display: 'block',
        textAlign: 'left',
        cursor: pointer ? 'pointer' : undefined,
        ...getVariantStyles({ theme, variant }),
        ...sizeStyles,

        '&:disabled, &[data-disabled]': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
          color: theme.colors.dark[2],
          opacity: 0.6,
          cursor: 'not-allowed',

          '&::placeholder': {
            color: theme.colors.dark[2],
          },
        },

        '&[data-invalid]': {
          color: invalidColor,
          borderColor: invalidColor,

          '&::placeholder': {
            opacity: 1,
            color: invalidColor,
          },
        },

        '&[data-with-icon]': {
          paddingLeft: typeof iconWidth === 'number' ? iconWidth : theme.fn.size({ size, sizes }),
        },

        '&::placeholder': {
          ...theme.fn.placeholderStyles(),
          opacity: 1,
        },

        '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
          {
            appearance: 'none',
          },

        '&[type=number]': {
          MozAppearance: 'textfield',
        },
      },

      icon: {
        pointerEvents: 'none',
        position: 'absolute',
        zIndex: 1,
        left: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: typeof iconWidth === 'number' ? iconWidth : theme.fn.size({ size, sizes }),
        color: invalid
          ? theme.colors.red[theme.colorScheme === 'dark' ? 6 : 7]
          : theme.colorScheme === 'dark'
          ? theme.colors.dark[2]
          : theme.colors.gray[5],
      },

      rightSection: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: rightSectionWidth,
      },
    };
  }
);
