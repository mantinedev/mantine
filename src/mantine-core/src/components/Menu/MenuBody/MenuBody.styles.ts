import { createStyles, getSizeValue, MantineNumberSize } from '@mantine/styles';

interface MenuBodyStyles {
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

export default createStyles((theme, { size }: MenuBodyStyles) => ({
  body: {
    width: getSizeValue({ size, sizes }),
    overflow: 'hidden',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    pointerEvents: 'all',
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    padding: `${MENU_PADDING}px !important`,
  },

  divider: {
    borderTopColor: `${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2]
    } !important`,
    margin: `${theme.spacing.xs / 2}px -${MENU_PADDING}px !important`,
  },

  label: {
    color: `${
      theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6]
    } !important`,
    fontWeight: 500,
    fontSize: `${theme.fontSizes.xs}px !important`,
    padding: `${theme.spacing.xs / 2}px ${theme.spacing.sm}px !important`,
    cursor: 'default',
  },
}));
