import { createStyles } from '@mantine/tss';

export default createStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'inline-block',
  },

  arrow: {
    borderColor: `${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    } !important`,
    background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
  },

  target: {
    zIndex: 1,
  },
}));
