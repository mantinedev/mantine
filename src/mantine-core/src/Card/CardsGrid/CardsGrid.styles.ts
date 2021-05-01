import { createUseStyles } from 'react-jss';
import { MantineNumberSize, MantineTheme, getSizeValue } from '@mantine/theme';

interface CardsGridStyles {
  theme: MantineTheme;
  gutter: MantineNumberSize;
  cardsPerRow: number;
  grow: boolean;
}

export default createUseStyles(
  {
    grid: ({ theme, gutter, cardsPerRow, grow }: CardsGridStyles) => {
      const gutterSize = getSizeValue({ size: gutter, sizes: theme.spacing });

      const getCardFlex = (perRow: number) =>
        `${grow ? 1 : 0} 0 calc(${100 / perRow}% - ${gutterSize}px)`;

      return {
        display: 'flex',
        flexWrap: 'wrap',
        margin: -gutterSize / 2,

        '& [data-mantine-card]': {
          margin: gutterSize / 2,
          flex: getCardFlex(cardsPerRow),
        },
      };
    },
  },
  { link: true }
);
