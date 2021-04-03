import { MantineTheme, getFontStyles } from '@mantine/theme';
import { createUseStyles } from 'react-jss';

interface MenuButtonStylesProps {
  theme: MantineTheme;
}

export default createUseStyles({
  item: ({ theme }: MenuButtonStylesProps) => ({
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
    color: theme.colors.gray[9],
    cursor: 'pointer',
  }),

  hovered: ({ theme }: MenuButtonStylesProps) => ({
    backgroundColor: theme.colors.gray[0],

    '&:active': {
      backgroundColor: theme.colors.gray[1],
    },
  }),

  inner: {
    display: 'flex',
    alignItems: 'center',
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
