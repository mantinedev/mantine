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

export default createMemoStyles({
  menu: ({ theme, size }: MenuBodyStyles) => ({
    position: 'absolute',
    width: getSizeValue({ size, sizes }),
    overflow: 'hidden',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    paddingTop: theme.spacing.xs / 2,
    paddingBottom: theme.spacing.xs / 2,
  }),

  divider: ({ theme }: MenuBodyStyles) => ({
    borderTopColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2],
    marginTop: theme.spacing.xs / 2,
    marginBottom: theme.spacing.xs / 2,
  }),
});
