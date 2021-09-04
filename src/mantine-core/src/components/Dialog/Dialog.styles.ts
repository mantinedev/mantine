import { createMemoStyles, MantineTheme } from '../../theme';

interface DialogStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  root: {
    position: 'relative',
  },

  closeButton: ({ theme }: DialogStyles) => ({
    position: 'absolute',
    top: theme.spacing.sm,
    right: theme.spacing.sm,
  }),
});
