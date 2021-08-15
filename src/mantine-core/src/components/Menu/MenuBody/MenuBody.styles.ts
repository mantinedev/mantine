import { createMemoStyles, getSizeValue, MantineNumberSize, MantineTheme } from '../../../theme';

interface MenuBodyStyles {
  theme: MantineTheme;
  size: MantineNumberSize;
}

export const sizes = {
  xs: 120,
  sm: 160,
  md: 200,
  lg: 240,
  xl: 300,
};

const MENU_PADDING = 4;

export default createMemoStyles({
  body: ({ theme, size }: MenuBodyStyles) => ({
    width: getSizeValue({ size, sizes }),
    overflow: 'hidden',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    pointerEvents: 'all',
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    padding: MENU_PADDING,
  }),

  divider: ({ theme }: MenuBodyStyles) => ({
    borderTopColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2],
    margin: [theme.spacing.xs / 2, -MENU_PADDING],
  }),

  label: ({ theme }: MenuBodyStyles) => ({
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    fontWeight: 500,
    fontSize: theme.fontSizes.xs,
    padding: [theme.spacing.xs / 2, theme.spacing.sm],
    cursor: 'default',
  }),
});
