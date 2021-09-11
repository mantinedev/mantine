import { createMemoStyles, MantineTheme } from '@mantine/core';

interface ToolbarStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  toolbarGroup: ({ theme }: ToolbarStyles) => ({
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',

    '& + &': {
      marginLeft: theme.spacing.md,
    },
  }),

  toolbar: ({ theme }: ToolbarStyles) => ({
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.white,
    borderBottom: `1px solid ${theme.colors.gray[3]}`,
    padding: [theme.spacing.md, theme.spacing.sm],
  }),

  toolbarControl: ({ theme }: ToolbarStyles) => ({
    '& + &': {
      borderLeftWidth: 0,
    },

    '&:first-child': {
      borderTopLeftRadius: theme.radius.sm,
      borderBottomLeftRadius: theme.radius.sm,
    },

    '&:last-child': {
      borderTopRightRadius: theme.radius.sm,
      borderBottomRightRadius: theme.radius.sm,
    },
  }),
});
