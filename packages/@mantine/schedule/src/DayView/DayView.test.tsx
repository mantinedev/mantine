import { tests } from '@mantine-tests/core';
import { DayView, DayViewProps, DayViewStylesNames } from './DayView';

const defaultProps: DayViewProps = {
  day: '2025-11-03',
};

describe('@mantine/schedule/DayView', () => {
  tests.itSupportsSystemProps<DayViewProps, DayViewStylesNames>({
    component: DayView,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/schedule/DayView',
    stylesApiSelectors: ['dayView'],
  });

  it('renders day view for the given date', () => {});
});
