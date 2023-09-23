import { tests, createContextContainer } from '@mantine/tests';
import { GridCol, GridColProps, GridColStylesNames } from './GridCol';
import { Grid } from '../Grid';

const TestContainer = createContextContainer(GridCol, Grid, {});

const defaultProps: GridColProps = {};

describe('@mantine/core/GridCol', () => {
  tests.itSupportsSystemProps<GridColProps, GridColStylesNames>({
    component: TestContainer,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
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
