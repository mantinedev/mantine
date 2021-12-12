import { createStyles } from '@mantine/styles';

export default createStyles((theme) => ({
  dropdown: {
    ...theme.fn.fontStyles(),
    boxSizing: 'border-box',
    pointerEvents: 'auto',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
    }`,
    padding: 4,
    overflow: 'hidden',
    width: '100%',
  },
}));
