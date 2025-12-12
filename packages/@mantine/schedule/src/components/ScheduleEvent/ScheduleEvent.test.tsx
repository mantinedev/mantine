import { tests } from '@mantine-tests/core';
import { ScheduleEvent, ScheduleEventProps, ScheduleEventStylesNames } from './ScheduleEvent';

const defaultProps: ScheduleEventProps = {};

describe('@mantine/schedule/ScheduleEvent', () => {
  tests.itSupportsSystemProps<ScheduleEventProps, ScheduleEventStylesNames>({
    component: ScheduleEvent,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/schedule/ScheduleEvent',
    stylesApiSelectors: ['event'],
  });
});
