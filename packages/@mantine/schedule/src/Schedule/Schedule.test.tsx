import { tests } from '@mantine-tests/core';
import { Schedule, ScheduleProps, ScheduleStylesNames } from './Schedule';

const defaultProps: ScheduleProps = {};

describe('@mantine/schedule/Schedule', () => {
  tests.itSupportsSystemProps<ScheduleProps, ScheduleStylesNames>({
    component: Schedule,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/schedule/Schedule',
    stylesApiSelectors: ['root'],
  });
});
