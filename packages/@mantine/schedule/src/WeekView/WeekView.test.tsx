import { tests } from '@mantine-tests/core';
import { WeekView, WeekViewProps, WeekViewStylesNames } from './WeekView';

const defaultProps: WeekViewProps = {
  week: '2025-11-03',
};

describe('@mantine/schedule/WeekView', () => {
  tests.itSupportsSystemProps<WeekViewProps, WeekViewStylesNames>({
    component: WeekView,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/schedule/WeekView',
    stylesApiSelectors: ['weekView'],
  });
});
