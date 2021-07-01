import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

export const BREAKPOINT = '@media (max-width: 960px)';

export default createUseStyles(
  (theme) => ({
    wrapper: {
      position: 'relative',
      paddingTop: 80,
      paddingBottom: 120,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    },
  }),
  { theming }
);
