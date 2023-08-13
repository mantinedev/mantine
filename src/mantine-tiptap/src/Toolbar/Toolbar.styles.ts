import { createStyles, rem } from '@mantine/core';

export interface ToolbarStylesParams {
  sticky: boolean;
  stickyOffset: React.CSSProperties['top'];
}

export default createStyles((theme, { sticky, stickyOffset }: ToolbarStylesParams) => ({
  toolbar: {
    position: sticky ? 'sticky' : 'static',
    top: sticky ? rem(stickyOffset) : undefined,
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    zIndex: 1,
    borderTopRightRadius: theme.fn.radius(),
    borderTopLeftRadius: theme.fn.radius(),
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
    }`,
  },
}));
