import { MantineTheme, getFontStyles, getThemeColor } from '@mantine/theme';
import { createUseStyles } from 'react-jss';

interface MenuButtonStylesProps {
  theme: MantineTheme;
  color: string;
}

export default createUseStyles({
  hovered: {},
  cmd: {},

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
    color: color ? getThemeColor({ theme, color, shade: 6 }) : theme.colors.gray[9],

    '&:disabled': {
      color: theme.colors.gray[5],
      cursor: 'not-allowed',
      pointerEvents: 'none',

      '& $cmd': {
        color: theme.colors.gray[5],
      },
    },

    '&$hovered, &:hover': {
      backgroundColor: theme.colors.gray[0],

      '&:active': {
        backgroundColor: theme.colors.gray[1],
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
});
