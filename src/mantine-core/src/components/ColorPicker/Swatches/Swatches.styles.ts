import { createMemoStyles } from '../../../theme';

interface SwatchesStyles {
  swatchesPerRow: number;
}

export default createMemoStyles({
  swatch: ({ swatchesPerRow }: SwatchesStyles) => ({
    width: `calc(${100 / swatchesPerRow}% - 4px)`,
    height: 0,
    paddingBottom: `calc(${100 / swatchesPerRow}% - 4px)`,
    margin: 2,
    boxSizing: 'content-box',
  }),

  group: {
    marginLeft: -2,
    marginRight: -2,
    display: 'flex',
    flexWrap: 'wrap',
  },
});
