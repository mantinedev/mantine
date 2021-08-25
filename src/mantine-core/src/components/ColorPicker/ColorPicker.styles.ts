import { createMemoStyles, getSizeValue, MantineSize, MantineTheme } from '../../theme';

interface ColorPickerStyles {
  theme: MantineTheme;
  size: MantineSize;
  fullWidth: boolean;
}

export const sizes = {
  xs: 180,
  sm: 200,
  md: 240,
  lg: 280,
  xl: 320,
};

export default createMemoStyles({
  preview: {},

  root: ({ size, fullWidth }: ColorPickerStyles) => ({
    boxSizing: 'border-box',
    width: fullWidth ? '100%' : getSizeValue({ size, sizes }),
    padding: 1,
  }),

  body: ({ theme, size }: ColorPickerStyles) => ({
    display: 'flex',
    boxSizing: 'border-box',
    paddingTop: getSizeValue({ size, sizes: theme.spacing }) / 2,
  }),

  sliders: ({ theme }: ColorPickerStyles) => ({
    flex: 1,
    boxSizing: 'border-box',

    '&:not(:only-child)': {
      marginRight: theme.spacing.xs,
    },
  }),

  slider: {
    boxSizing: 'border-box',

    '& + &': {
      marginTop: 5,
    },
  },

  swatch: {
    cursor: 'pointer',
  },
});
