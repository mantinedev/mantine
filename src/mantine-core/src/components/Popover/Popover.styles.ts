import { createMemoStyles, MantineTheme } from '../../theme';

interface PopoverStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  root: {
    position: 'relative',
    display: 'inline-block',
  },

  arrow: ({ theme }: PopoverStyles) => ({
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2],
    background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
  }),

  target: {
    zIndex: 1,
  },
});
