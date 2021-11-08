import { createStyles, MantineNumberSize, MantineSize, MantineTheme } from '@mantine/styles';

import type { InputVariant } from './Input';

interface InputStyles {
  radius: MantineNumberSize;
  size: MantineSize;
  variant: InputVariant;
  multiline: boolean;
  invalid: boolean;
  disabled: boolean;
}

export const sizes = {
  xs: 30,
  sm: 36,
  md: 42,
  lg: 50,
  xl: 60,
};

function getVariantStyles({ variant, theme }: { variant: InputVariant; theme: MantineTheme }) {
  if (variant === 'default') {
    return {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[4],
      transition: 'border-color 100ms ease, box-shadow 100ms ease',

      '&:focus, &:focus-within': {
        outline: 'none',
        borderColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 8 : 5],
      },
    };
  }

  if (variant === 'filled') {
    return {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'transparent',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

      '&:focus, &:focus-within': {
        outline: 'none',
        borderColor: `${
          theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 8 : 5]
        } !important`,
      },
    };
  }

  if (variant === 'unstyled') {
    return {
      borderWidth: 1,
      borderColor: 'transparent',
      borderStyle: 'solid',
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

  return null;
}

function getInvalidStyles({ invalid, theme }: { invalid: boolean; theme: MantineTheme }) {
  if (!invalid) {
    return null;
  }

  const color = theme.colors.red[theme.colorScheme === 'dark' ? 6 : 7];

  return {
    color,
    borderColor: color,

    '&::placeholder': {
      opacity: 1,
      color,
    },
  };
}

export default createStyles(
  (theme, { size, multiline, radius, variant, invalid, disabled }: InputStyles) => {
    const sizeStyles =
      variant === 'default' || variant === 'filled'
        ? {
            minHeight: theme.fn.size({ size, sizes }),
            paddingLeft: theme.fn.size({ size, sizes }) / 3,
            paddingRight: theme.fn.size({ size, sizes }) / 3,
            borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
          }
        : null;

    const disabledStyles = disabled
      ? {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
          color: theme.colors.dark[2],
          opacity: 0.6,
          cursor: 'not-allowed',

          '&::placeholder': {
            color: theme.colors.dark[2],
          },
        }
      : null;

    return {
      root: {
        position: 'relative',
        borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
      },

      input:
        variant === 'headless'
          ? {}
          : {
              ...theme.fn.fontStyles(),
              ...getVariantStyles({ variant, theme }),
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
              ...sizeStyles,
              ...disabledStyles,

              '&:disabled': {
                backgroundColor:
                  theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
                color: theme.colors.dark[2],
                opacity: 0.6,
                cursor: 'not-allowed',

                '&::placeholder': {
                  color: theme.colors.dark[2],
                },
              },

              '&::placeholder': {
                opacity: 1,
                userSelect: 'none',
                color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
              },

              '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
                {
                  appearance: 'none',
                },

              '&[type=number]': {
                MozAppearance: 'textfield',
              },

              ...getInvalidStyles({ invalid, theme }),
            },

      withIcon: {
        paddingLeft: `${theme.fn.size({ size, sizes })}px !important`,
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
        width: theme.fn.size({ size, sizes }),
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
      },
    };
  }
);
