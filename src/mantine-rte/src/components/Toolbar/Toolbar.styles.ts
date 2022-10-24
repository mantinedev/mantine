import { createStyles } from '@mantine/core';

interface ToolbarStyles {
  sticky: boolean;
  stickyOffset: string | number;
}

export default createStyles((theme, { sticky, stickyOffset }: ToolbarStyles) => ({
  toolbarGroup: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: `calc(${theme.spacing.md}px / 2)`,
  },

  toolbar: {
    position: sticky ? 'sticky' : 'relative',
    zIndex: 1,
    top: sticky ? stickyOffset : 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[4]
    }`,
    borderTopRightRadius: theme.radius.sm,
    borderTopLeftRadius: theme.radius.sm,
    padding: `${theme.spacing.sm}px ${theme.spacing.md}px`,
  },

  toolbarInner: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: `calc(${-theme.spacing.md}px / 2)`,
  },

  toolbarControl: {
    '& + &': {
      borderLeftWidth: 0,
    },

    '&:first-of-type': {
      borderTopLeftRadius: theme.fn.radius(theme.defaultRadius),
      borderBottomLeftRadius: theme.fn.radius(theme.defaultRadius),
    },

    '&:last-of-type': {
      borderTopRightRadius: theme.fn.radius(theme.defaultRadius),
      borderBottomRightRadius: theme.fn.radius(theme.defaultRadius),
    },
  },
}));
