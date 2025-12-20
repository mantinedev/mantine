import { tests } from '@mantine-tests/core';
import { Schedule, ScheduleProps, ScheduleStylesNames } from './Schedule';

const defaultProps: ScheduleProps = {};

describe('@mantine/schedule/Schedule', () => {
  tests.itSupportsSystemProps<ScheduleProps, ScheduleStylesNames>({
    component: Schedule,
    props: defaultProps,
    displayName: '@mantine/schedule/Schedule',
    stylesApiSelectors: ['root'],
  });
});
