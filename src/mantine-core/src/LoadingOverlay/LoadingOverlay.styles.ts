import { createStyles } from '@mantine/styles';

export default createStyles((theme) => ({
  root: {
    ...theme.fn.cover(),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
}));
