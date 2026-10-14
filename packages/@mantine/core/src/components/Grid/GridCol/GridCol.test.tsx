import { createContextContainer, render, tests } from '@mantine-tests/core';
import { Grid } from '../Grid';
import { GridCol, GridColProps, GridColStylesNames } from './GridCol';

const TestContainer = createContextContainer(GridCol, Grid, {});

const defaultProps: GridColProps = {};

describe('@mantine/core/GridCol', () => {
  tests.itSupportsSystemProps<GridColProps, GridColStylesNames>({
    component: TestContainer,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/GridCol',
    stylesApiSelectors: ['col'],
    stylesApiName: 'Grid',
    selector: '.mantine-Grid-col',
    compound: true,
    providerStylesApi: false,
  });

  const getCss = (container: HTMLElement) =>
    [...container.querySelectorAll('style')].map((s) => s.textContent).join('');

  it('spans all grid columns when span is not set', () => {
    const { container } = render(
      <Grid columns={24}>
        <GridCol>test</GridCol>
        <GridCol span={{ md: 12 }}>test</GridCol>
      </Grid>
    );
    const css = getCss(container);
    expect(css.match(/--col-flex-basis:100%/g)).toHaveLength(2);
  });

  it('emits a valid flex-grow value for numeric spans', () => {
    const { container } = render(
      <Grid>
        <GridCol span={{ base: 6, md: 'content' }}>test</GridCol>
      </Grid>
    );
    const css = getCss(container);
    expect(css).not.toContain('--col-flex-grow:auto');
    expect(css).toContain('--col-flex-grow:0');
  });
});
