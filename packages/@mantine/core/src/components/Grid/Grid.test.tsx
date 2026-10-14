import { render, tests } from '@mantine-tests/core';
import { Grid, GridProps, GridStylesNames } from './Grid';
import { GridCol } from './GridCol/GridCol';

const defaultProps: GridProps = {
  children: <Grid.Col span={12}>test</Grid.Col>,
};

describe('@mantine/core/Grid', () => {
  tests.itSupportsSystemProps<GridProps, GridStylesNames>({
    component: Grid,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/Grid',
    stylesApiSelectors: ['root', 'inner', 'col'],
  });

  it('exposes Grid.Col component', () => {
    expect(Grid.Col).toBe(GridCol);
  });

  it('renders container element when type="container" with breakpoints', () => {
    const { container } = render(
      <Grid
        type="container"
        breakpoints={{ xs: '100px', sm: '200px', md: '300px', lg: '400px', xl: '500px' }}
      >
        <Grid.Col span={12}>test</Grid.Col>
      </Grid>
    );
    expect(container.querySelector('.mantine-Grid-container')).toBeInTheDocument();
  });

  it('does not render container element with type="media"', () => {
    const { container } = render(
      <Grid type="media">
        <Grid.Col span={12}>test</Grid.Col>
      </Grid>
    );
    expect(container.querySelector('.mantine-Grid-container')).not.toBeInTheDocument();
  });

  it('renders container element when type="container" without breakpoints', () => {
    const { container } = render(
      <Grid type="container">
        <Grid.Col span={{ base: 12, sm: 6 }}>test</Grid.Col>
      </Grid>
    );
    expect(container.querySelector('.mantine-Grid-container')).toBeInTheDocument();
    const css = [...container.querySelectorAll('style')].map((s) => s.textContent).join('');
    expect(css).toContain('@container mantine-grid (min-width: 48em)');
  });

  it('does not render overflow as a DOM attribute', () => {
    const { container } = render(
      <Grid overflow="hidden">
        <Grid.Col span={12}>test</Grid.Col>
      </Grid>
    );
    expect(container.querySelector('.mantine-Grid-root')).not.toHaveAttribute('overflow');
  });

  it('applies justify prop correctly', () => {
    const { container } = render(
      <Grid justify="center">
        <Grid.Col span={12}>test</Grid.Col>
      </Grid>
    );
    const root = container.querySelector('.mantine-Grid-root') as HTMLElement;
    expect(root.style.getPropertyValue('--grid-justify')).toBe('center');
  });

  it('applies align prop correctly', () => {
    const { container } = render(
      <Grid align="flex-end">
        <Grid.Col span={12}>test</Grid.Col>
      </Grid>
    );
    const root = container.querySelector('.mantine-Grid-root') as HTMLElement;
    expect(root.style.getPropertyValue('--grid-align')).toBe('flex-end');
  });

  it('applies overflow prop correctly', () => {
    const { container } = render(
      <Grid overflow="hidden">
        <Grid.Col span={12}>test</Grid.Col>
      </Grid>
    );
    const root = container.querySelector('.mantine-Grid-root') as HTMLElement;
    expect(root.style.getPropertyValue('--grid-overflow')).toBe('hidden');
  });
});
