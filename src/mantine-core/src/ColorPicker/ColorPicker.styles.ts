import { createStyles, rem, getSize } from '@mantine/styles';

export interface ColorPickerStylesParams {
  fullWidth: boolean;
}

export const sizes = {
  xs: rem(180),
  sm: rem(200),
  md: rem(240),
  lg: rem(280),
  xl: rem(320),
};

export default createStyles((theme, { fullWidth }: ColorPickerStylesParams, { size }) => ({
  preview: {},

  wrapper: {
    boxSizing: 'border-box',
    width: fullWidth ? '100%' : getSize({ size, sizes }),
    padding: rem(1),
  },

  body: {
    display: 'flex',
    boxSizing: 'border-box',
    paddingTop: `calc(${getSize({ size, sizes: theme.spacing })} / 2)`,
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
      marginTop: rem(5),
    },
  },

  swatch: {
    cursor: 'pointer',
  },
}));
