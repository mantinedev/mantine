import { createContextContainer, tests } from '@mantine-tests/core';
import { Grid } from '../Grid';
import { GridCol, GridColProps, GridColStylesNames } from './GridCol';

const TestContainer = createContextContainer(GridCol, Grid, {});

const defaultProps: GridColProps = {};

describe('@mantine/core/GridCol', () => {
  tests.itSupportsSystemProps<GridColProps, GridColStylesNames>({
    component: TestContainer,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/GridCol',
    stylesApiSelectors: ['col'],
    stylesApiName: 'Grid',
    selector: '.mantine-Grid-col',
    compound: true,
    providerStylesApi: false,
  });
});
