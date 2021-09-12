import { createMemoStyles, MantineTheme } from '@mantine/core';

interface ToolbarStyles {
  theme: MantineTheme;
  sticky: boolean;
  stickyOffset: string | number;
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

  toolbar: ({ theme, sticky, stickyOffset }: ToolbarStyles) => ({
    position: sticky ? 'sticky' : 'relative',
    zIndex: 1,
    top: sticky ? stickyOffset : 0,
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4]
    }`,
    borderTopRightRadius: theme.radius.sm,
    borderTopLeftRadius: theme.radius.sm,
    padding: [theme.spacing.sm, theme.spacing.md],
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
