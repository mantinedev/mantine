import { createStyles, MantineNumberSize } from '@mantine/styles';

interface MenuStyles {
  size: MantineNumberSize | 'auto';
}

export const sizes = {
  xs: 120,
  sm: 160,
  md: 200,
  lg: 240,
  xl: 300,
};

const MENU_PADDING = 4;

export default createStyles((theme, { size }: MenuStyles) => ({
  root: {
    display: 'inline-block',
    position: 'relative',
  },

  arrow: {
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
    background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
  },

  body: {
    width: theme.fn.size({ size, sizes }),
    overflow: 'hidden',
    pointerEvents: 'all',
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    padding: MENU_PADDING,
  },

  divider: {
    borderTopColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2],
    margin: `${theme.spacing.xs / 2}px -${MENU_PADDING}px`,
  },

  label: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    fontWeight: 500,
    fontSize: theme.fontSizes.xs,
    padding: `${theme.spacing.xs / 2}px ${theme.spacing.sm}px`,
    cursor: 'default',
  },
}));
