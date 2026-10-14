import { getGridQueries } from './get-grid-queries';

const breakpoints = { xs: '30em', sm: '10em', md: '50em', lg: '20em', xl: '90em' };

describe('@mantine/core/Grid/get-grid-queries', () => {
  it('sorts breakpoints by value and skips breakpoints without styles', () => {
    expect(
      getGridQueries({
        breakpoints,
        type: 'media',
        getBreakpointStyles: (breakpoint) =>
          breakpoint === 'md' ? {} : { '--test': breakpoint, '--empty': undefined },
      })
    ).toEqual({
      media: [
        { query: '(min-width: 10em)', styles: { '--test': 'sm', '--empty': undefined } },
        { query: '(min-width: 20em)', styles: { '--test': 'lg', '--empty': undefined } },
        { query: '(min-width: 30em)', styles: { '--test': 'xs', '--empty': undefined } },
        { query: '(min-width: 90em)', styles: { '--test': 'xl', '--empty': undefined } },
      ],
    });
  });

  it('returns container queries for type="container"', () => {
    expect(
      getGridQueries({
        breakpoints,
        type: 'container',
        getBreakpointStyles: (breakpoint) => (breakpoint === 'sm' ? { '--test': '1' } : {}),
      })
    ).toEqual({
      container: [{ query: 'mantine-grid (min-width: 10em)', styles: { '--test': '1' } }],
    });
  });
});
