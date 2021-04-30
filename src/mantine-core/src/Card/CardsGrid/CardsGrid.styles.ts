import { createUseStyles } from 'react-jss';
import { MantineNumberSize, MantineTheme, getSizeValue } from '@mantine/theme';

interface CardsGridStyles {
  theme: MantineTheme;
  gutter: MantineNumberSize;
  cardsPerRow: number;
  breakpoints: { maxWidth: number | string; cardsPerRow: number }[];
  grow: boolean;
}

export default createUseStyles({
  grid: ({ theme, gutter, cardsPerRow, breakpoints, grow }: CardsGridStyles) => {
    const gutterSize = getSizeValue({ size: gutter, sizes: theme.spacing });

    const getCardFlex = (perRow: number) =>
      `${grow ? 1 : 0} 0 calc(${100 / perRow}% - ${gutterSize}px)`;
    const breakpointsStyles = breakpoints.reduce((acc, breakpoint) => {
      acc[
        `@media (max-width: ${breakpoint.maxWidth}${
          typeof breakpoint.maxWidth === 'number' ? 'px' : ''
        })`
      ] = {
        '& [data-mantine-card]': {
          flex: getCardFlex(breakpoint.cardsPerRow),
        },
      };

      return acc;
    }, {});

    return {
      display: 'flex',
      flexWrap: 'wrap',
      margin: -gutterSize / 2,

      '& [data-mantine-card]': {
        margin: gutterSize / 2,
        flex: getCardFlex(cardsPerRow),
      },
      ...breakpointsStyles,
    };
  },
});
