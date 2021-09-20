import { createStyles } from '@mantine/styles';

interface SwatchesStyles {
  swatchesPerRow: number;
}

export default createStyles((_theme, { swatchesPerRow }: SwatchesStyles) => ({
  swatch: {
    width: `calc(${100 / swatchesPerRow}% - 4px) !important`,
    height: '0 !important',
    paddingBottom: `calc(${100 / swatchesPerRow}% - 4px) !important`,
    margin: 2,
    boxSizing: 'content-box',
  },

  swatches: {
    boxSizing: 'border-box',
    marginLeft: -2,
    marginRight: -2,
    display: 'flex',
    flexWrap: 'wrap',
  },
}));
