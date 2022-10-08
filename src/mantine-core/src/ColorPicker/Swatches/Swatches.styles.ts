import { createStyles } from '@mantine/styles';

interface SwatchesStyles {
  swatchesPerRow: number;
}

export default createStyles((_theme, { swatchesPerRow }: SwatchesStyles) => ({
  swatch: {
    width: `calc(${100 / swatchesPerRow}% - 4px)`,
    height: 0,
    paddingBottom: `calc(${100 / swatchesPerRow}% - 4px)`,
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
