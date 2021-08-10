import { createMemoStyles, MantineTheme } from '../../../theme';

interface ColorPickerStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  slider: {
    '& + &': {
      marginTop: 5,
    },
  },

  body: ({ theme }: ColorPickerStyles) => ({
    display: 'flex',
    marginTop: theme.spacing.sm,
  }),

  sliders: ({ theme }: ColorPickerStyles) => ({
    flex: 1,

    '&:not(:only-child)': {
      marginRight: theme.spacing.xs,
    },
  }),

  swatch: {
    cursor: 'pointer',
  },
});
