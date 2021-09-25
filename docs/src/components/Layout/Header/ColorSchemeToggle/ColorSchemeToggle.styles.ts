import { createStyles, INPUT_SIZES } from '@mantine/core';
import { HEADER_BREAKPOINT } from '../Header.styles';

export default createStyles((theme) => ({
  control: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.black : theme.colors.gray[0],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 1000,
    paddingLeft: theme.spacing.sm,
    paddingRight: 4,
    width: 136,
    height: INPUT_SIZES.sm,

    [`@media (max-width: ${HEADER_BREAKPOINT}px)`]: {
      width: 28,
      height: 28,
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  iconWrapper: {
    height: 28,
    width: 28,
    borderRadius: 28,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.dark[4],
    color: theme.colorScheme === 'dark' ? theme.black : theme.colors.blue[2],
  },

  value: {
    lineHeight: 1,
    [`@media (max-width: ${HEADER_BREAKPOINT}px)`]: {
      display: 'none',
    },
  },
}));
