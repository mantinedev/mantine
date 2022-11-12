import { createStyles } from '@mantine/core';

export interface ToolbarStylesParams {
  sticky: boolean;
  stickyOffset: React.CSSProperties['top'];
}

export default createStyles((theme, { sticky, stickyOffset }: ToolbarStylesParams) => ({
  toolbar: {
    position: sticky ? 'sticky' : 'static',
    top: sticky ? stickyOffset : undefined,
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    zIndex: 1,
    borderTopRightRadius: theme.fn.radius(),
    borderTopLeftRadius: theme.fn.radius(),
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
    }`,
  },
}));
