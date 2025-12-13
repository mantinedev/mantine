import { tests } from '@mantine-tests/core';
import { ScheduleEventData } from '../../types';
import { MoreEvents, MoreEventsProps, MoreEventsStylesNames } from './MoreEvents';

const events: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Project Kickoff',
    start: new Date(2025, 11, 13, 9, 0),
    end: new Date(2025, 11, 13, 10, 0),
    color: 'blue',
    payload: {},
  },
  {
    id: 2,
    title: 'Team Standup',
    start: new Date(2025, 11, 13, 10, 30),
    end: new Date(2025, 11, 13, 11, 0),
    color: 'green',
    payload: {},
  },
  {
    id: 3,
    title: 'Client Meeting',
    start: new Date(2025, 11, 13, 14, 0),
    end: new Date(2025, 11, 13, 15, 30),
    color: 'red',
    payload: {},
  },
  {
    id: 4,
    title: 'Code Review',
    start: new Date(2025, 11, 13, 16, 0),
    end: new Date(2025, 11, 13, 17, 0),
    color: 'purple',
    payload: {},
  },
];

const defaultProps: MoreEventsProps = {
  events,
  moreEventsCount: 2,
};

describe('@mantine/schedule/MoreEvents', () => {
  tests.itSupportsSystemProps<MoreEventsProps, MoreEventsStylesNames>({
    component: MoreEvents,
    props: { ...defaultProps, popoverProps: { opened: true } },
    polymorphic: true,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLButtonElement,
    displayName: '@mantine/schedule/MoreEvents',
    stylesApiSelectors: ['moreEventsButton', 'moreEventsList'],
  });
});
