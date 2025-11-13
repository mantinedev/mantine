import { tests } from '@mantine-tests/core';
import { YearView, YearViewProps, YearViewStylesNames } from './YearView';

const defaultProps: YearViewProps = {};

describe('@mantine/schedule/YearView', () => {
  tests.itSupportsSystemProps<YearViewProps, YearViewStylesNames>({
    component: YearView,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/schedule/YearView',
    stylesApiSelectors: ['yearView'],
  });
});
