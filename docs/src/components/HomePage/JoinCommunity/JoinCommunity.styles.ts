import { createStyles } from '@mantine/core';

export const BREAKPOINT = '@media (max-width: 960px)';

export default createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 120,
    paddingBottom: 80,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },
}));
