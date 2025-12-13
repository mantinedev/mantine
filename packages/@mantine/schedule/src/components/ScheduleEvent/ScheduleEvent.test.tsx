import { tests } from '@mantine-tests/core';
import { ScheduleEvent, ScheduleEventProps, ScheduleEventStylesNames } from './ScheduleEvent';

const defaultProps: ScheduleEventProps = {
  event: {
    id: '1',
    title: 'Test event',
    color: 'blue',
    start: `2024-01-01 10:00:00`,
    end: `2024-01-01 11:00:00`,
    payload: {},
  },
};

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
    stylesApiSelectors: ['event', 'eventInner'],
  });
});
