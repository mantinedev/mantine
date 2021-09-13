import { createMemoStyles, MantineTheme, getSharedColorScheme } from '../../theme';

interface PaginationControlStyles {
  theme: MantineTheme;
  color: string;
}

export default createMemoStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: 0,
    padding: 0,
  },
  item: ({ theme, color }: PaginationControlStyles) => {
    const colors = getSharedColorScheme({
      color,
      theme,
      variant: 'light',
    });

    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 600,
      border: `1px solid ${colors.border}`,
      color: colors.color,
      height: 32,
      width: 32,
      borderRadius: theme.radius.sm,
      marginBottom: 5,
      lineHeight: 1,

      '&:not($dots):not($active):not($disabled)': {
        backgroundColor: colors.background,
      },

      '&:not(:last-of-type),  &:not(:first-of-type)': {
        marginLeft: 5,
      },

      '&:active:not($disabled):not($dots)': {
        transform: 'translateY(1px)',
      },
    };
  },

  active: ({ theme, color }: PaginationControlStyles) => {
    const colors = getSharedColorScheme({
      color,
      theme,
      variant: 'filled',
    });

    return {
      border: `1px solid ${colors.border}`,
      color: colors.color,
      backgroundColor: colors.background,
    };
  },

  dots: {
    cursor: 'default',
  },

  disabled: ({ theme }: PaginationControlStyles) => ({
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
    color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
    cursor: 'not-allowed',
  }),
});
