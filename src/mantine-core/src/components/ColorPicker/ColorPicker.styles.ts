import { createStyles, getSizeValue, MantineSize } from '@mantine/styles';

interface ColorPickerStyles {
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

export default createStyles((theme, { size, fullWidth }: ColorPickerStyles) => ({
  preview: {},

  root: {
    boxSizing: 'border-box',
    width: fullWidth ? '100%' : getSizeValue({ size, sizes }),
    padding: 1,
  },

  body: {
    display: 'flex',
    boxSizing: 'border-box',
    paddingTop: getSizeValue({ size, sizes: theme.spacing }) / 2,
  },

  sliders: {
    flex: 1,
    boxSizing: 'border-box',

    '&:not(:only-child)': {
      marginRight: theme.spacing.xs,
    },
  },

  slider: {
    boxSizing: 'border-box',

    '& + &': {
      marginTop: 5,
    },
  },

  swatch: {
    cursor: 'pointer',
  },
}));
