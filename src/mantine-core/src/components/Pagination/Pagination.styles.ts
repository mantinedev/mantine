import { createMemoStyles, MantineTheme, getSharedColorScheme } from '../../theme';

interface PaginationStyles {
  theme: MantineTheme;
  color: string;
}

export default createMemoStyles({
  item: ({ theme }: PaginationStyles) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 500,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[3]
    }`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    height: 32,
    width: 32,
    borderRadius: theme.radius.sm,
    lineHeight: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,

    '&:active:not(:disabled):not($dots)': {
      transform: 'translateY(1px)',
    },

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    },
  }),

  active: ({ theme, color }: PaginationStyles) => {
    const colors = getSharedColorScheme({
      color,
      theme,
      variant: 'filled',
    });

    return {
      borderColor: 'transparent',
      color: colors.color,
      backgroundColor: colors.background,
    };
  },

  dots: () => ({
    cursor: 'default',
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  }),
});
