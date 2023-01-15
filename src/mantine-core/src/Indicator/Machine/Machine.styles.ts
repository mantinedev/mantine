import { createStyles, rem } from '@mantine/styles';

export default createStyles(() => ({
  base: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    overflow: 'hidden',
    margin: 0,
    padding: 0,
  },

  plus: {
    height: rem(18),
  },
}));
