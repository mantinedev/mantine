import { MantineTheme, getFontStyles, getThemeColor } from '@mantine/theme';
import { createUseStyles } from 'react-jss';

interface MenuButtonStylesProps {
  theme: MantineTheme;
  color: string;
}

export default createUseStyles(
  {
    hovered: {},

    item: ({ theme, color }: MenuButtonStylesProps) => ({
      ...getFontStyles(theme),
      WebkitTapHighlightColor: 'transparent',
      fontSize: theme.fontSizes.sm,
      border: 0,
      backgroundColor: 'transparent',
      outline: 0,
      width: '100%',
      textAlign: 'left',
      height: 32,
      padding: [0, theme.spacing.sm],
      cursor: 'pointer',
      color: color
        ? getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 })
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[9],

      '&:disabled': {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[5],
        cursor: 'not-allowed',
      },

      '&$hovered:not(:disabled), &:not(:disabled):hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

        '&:not(:disabled):active': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
        },
      },
    }),

    inner: {
      display: 'flex',
      alignItems: 'center',
    },

    body: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flex: 1,
    },

    icon: ({ theme }: MenuButtonStylesProps) => ({
      marginRight: theme.spacing.xs,

      '& > *': {
        display: 'block',
      },
    }),

    label: {
      lineHeight: 1,
    },
  },
  { link: true }
);
