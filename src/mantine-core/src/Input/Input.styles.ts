import { createUseStyles } from 'react-jss';
import { MantineTheme, MantineNumberSize, getFontStyles, getSizeValue } from '@mantine/theme';

interface InputStylesProps {
  theme: MantineTheme;
  radius: MantineNumberSize;
}

export default createUseStyles(
  {
    withIcon: {},

    inputWrapper: ({ radius, theme }: InputStylesProps) => ({
      position: 'relative',
      overflow: 'hidden',
      borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),

      '&, & *': { boxSizing: 'border-box' },
    }),

    defaultVariant: ({ theme, radius }: InputStylesProps) => ({
      '& $input': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
        minHeight: 36,
        padding: [7, theme.spacing.sm],
        borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
        border: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
        }`,
        transition: 'border-color 100ms ease, box-shadow 100ms ease',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:focus': {
          outline: 'none',
          borderColor: theme.colors[theme.primaryColor][6],
          boxShadow: `0 0 4px ${theme.colors.gray[3]}`,
        },
      },

      '&$invalid $input': {
        borderColor: theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6],
      },

      '& $withIcon': {
        paddingLeft: 35,
      },

      '& $icon': {
        width: 36,
      },
    }),

    filledVariant: ({ theme, radius }: InputStylesProps) => ({
      '& $input': {
        minHeight: 36,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
        border: '1px solid transparent',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[1],
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:focus': {
          outline: 'none',
          borderColor: `${
            theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]
          } !important`,
          boxShadow: `0 0 4px ${theme.colors.gray[3]}`,
        },

        '&::placeholder': {
          color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
        },
      },

      '& $input:disabled': {
        '&::placeholder': {
          color: theme.colors.gray[5],
        },
      },

      '&$invalid $input': {
        borderColor: theme.colorScheme === 'dark' ? theme.colors.red[4] : 'transparent',
        backgroundColor: theme.colorScheme !== 'dark' && theme.colors.red[0],
      },

      '& $withIcon': {
        paddingLeft: 35,
      },

      '& $icon': {
        width: 36,
        color: theme.colors.gray[6],
      },
    }),

    unstyledVariant: ({ theme }: InputStylesProps) => ({
      '& $input': {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        backgroundColor: 'transparent',
        height: 28,
        border: 0,
        outline: 0,

        '&:disabled': {
          backgroundColor: 'transparent',
        },
      },

      '& $icon': {
        width: 28,
      },

      '& $withIcon': {
        paddingLeft: 34,
      },
    }),

    input: ({ theme }: InputStylesProps) => ({
      ...getFontStyles(theme),
      WebkitTapHighlightColor: 'transparent',
      lineHeight: theme.lineHeight,
      appearance: 'none',
      resize: 'none',
      boxSizing: 'border-box',
      fontSize: 14,
      width: '100%',
      color: theme.black,
      display: 'block',
      textAlign: 'left',

      '&:disabled': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
        opacity: 0.6,
        cursor: 'not-allowed',
      },

      '&::placeholder': {
        opacity: 1,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
      },

      '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration': {
        appearance: 'none',
      },

      '&[type=number]': {
        MozAppearance: 'textfield',
      },
    }),

    icon: ({ theme }: InputStylesProps) => ({
      pointerEvents: 'none',
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),

    invalid: ({ theme }: InputStylesProps) => ({
      '& $input': {
        color: theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6],
        borderColor: theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6],

        '&::placeholder': {
          color: theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6],
        },
      },

      '& $icon': {
        color: theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6],
      },
    }),

    rightSection: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  { link: true }
);
