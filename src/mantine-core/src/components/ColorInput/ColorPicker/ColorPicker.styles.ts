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

  swatchShadow: ({ theme }: ColorPickerStyles) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    boxShadow: 'rgba(0, 0, 0, .1) 0px 0px 0px 1px inset, rgb(0, 0, 0, .15) 0px 0px 4px inset',
    borderRadius: theme.radius.sm,
  }),

  sliders: ({ theme }: ColorPickerStyles) => ({
    flex: 1,
    marginRight: theme.spacing.xs,
  }),
});
