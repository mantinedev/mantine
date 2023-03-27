import { createStyles, rem } from '@mantine/styles';

interface SwatchesStyles {
  swatchesPerRow: number;
}

export default createStyles((_theme, { swatchesPerRow }: SwatchesStyles) => ({
  swatch: {
    width: `calc(${100 / swatchesPerRow}% - ${rem(4)})`,
    height: 0,
    paddingBottom: `calc(${100 / swatchesPerRow}% - ${rem(4)})`,
    margin: rem(2),
    boxSizing: 'content-box',
  },

  swatches: {
    boxSizing: 'border-box',
    marginLeft: rem(-2),
    marginRight: rem(-2),
    display: 'flex',
    flexWrap: 'wrap',
  },
}));
