import { tests } from '@mantine-tests/core';
import { Grid, GridProps, GridStylesNames } from './Grid';
import { GridCol } from './GridCol/GridCol';

const defaultProps: GridProps = {
  children: <Grid.Col span={12}>test</Grid.Col>,
};

describe('@mantine/core/Grid', () => {
  tests.itSupportsSystemProps<GridProps, GridStylesNames>({
    component: Grid,
    props: defaultProps,
    children: true,
    id: true,
    displayName: '@mantine/core/Grid',
    stylesApiSelectors: ['root', 'inner', 'col'],
  });

  it('exposes Grid.Col component', () => {
    expect(Grid.Col).toBe(GridCol);
  });
});
