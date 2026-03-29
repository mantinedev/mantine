import { useState } from 'react';
import { Box, Stack, Text } from '@mantine/core';
import { ScheduleEventData } from '../../types';
import { AgendaView } from './AgendaView';

export default { title: 'schedule/AgendaView' };

const november2025Events: ScheduleEventData[] = [
  {
    id: 1,
    title: 'Project Kickoff',
    start: '2025-11-03 09:00:00',
    end: '2025-11-03 10:30:00',
    color: 'blue',
    payload: {},
  },
  {
    id: 2,
    title: 'Conference - Day 1',
    start: '2025-11-05',
    end: '2025-11-07',
    color: 'red',
    payload: {},
  },
  {
    id: 3,
    title: 'Morning Standup',
    start: '2025-11-10 08:00:00',
    end: '2025-11-10 08:30:00',
    color: 'green',
    payload: {},
  },
  {
    id: 4,
    title: 'Team Sync',
    start: '2025-11-10 10:00:00',
    end: '2025-11-10 11:00:00',
    color: 'violet',
    payload: {},
  },
  {
    id: 5,
    title: 'Lunch Meeting',
    start: '2025-11-10 12:00:00',
    end: '2025-11-10 13:00:00',
    color: 'orange',
    payload: {},
  },
  {
    id: 6,
    title: 'Product Workshop',
    start: '2025-11-10 14:00:00',
    end: '2025-11-10 15:30:00',
    color: 'cyan',
    payload: {},
  },
  {
    id: 7,
    title: 'Client Review',
    start: '2025-11-10 16:00:00',
    end: '2025-11-10 17:00:00',
    color: 'pink',
    payload: {},
  },
  {
    id: 8,
    title: 'Sales Summit',
    start: '2025-11-15',
    end: '2025-11-17',
    color: 'yellow',
    payload: {},
  },
  {
    id: 9,
    title: 'Thanksgiving Holiday',
    start: '2025-11-25',
    end: '2025-11-28',
    color: 'blue',
    payload: {},
  },
  {
    id: 10,
    title: 'Month Closing',
    start: '2025-11-28 10:00:00',
    end: '2025-11-28 11:00:00',
    color: 'grape',
    payload: {},
  },
];

export function Usage() {
  return (
    <Box style={{ width: 500, border: '1px solid #ccc' }}>
      <AgendaView
        rangeStart="2025-11-01"
        rangeEnd="2025-11-30"
        events={november2025Events}
      />
    </Box>
  );
}

export function SingleDay() {
  return (
    <Box style={{ width: 500, border: '1px solid #ccc' }}>
      <AgendaView
        rangeStart="2025-11-10"
        rangeEnd="2025-11-10"
        events={november2025Events}
      />
    </Box>
  );
}

export function NoEvents() {
  return (
    <Box style={{ width: 500, border: '1px solid #ccc' }}>
      <AgendaView
        rangeStart="2025-12-01"
        rangeEnd="2025-12-31"
        events={november2025Events}
      />
    </Box>
  );
}

export function StaticMode() {
  return (
    <Box style={{ width: 500, border: '1px solid #ccc' }}>
      <AgendaView
        rangeStart="2025-11-01"
        rangeEnd="2025-11-30"
        events={november2025Events}
        mode="static"
      />
    </Box>
  );
}

export function CustomNoEventsText() {
  return (
    <Box style={{ width: 500, border: '1px solid #ccc' }}>
      <AgendaView
        rangeStart="2025-12-01"
        rangeEnd="2025-12-31"
        events={november2025Events}
        labels={{ noEvents: 'Nothing scheduled' }}
      />
    </Box>
  );
}

export function WeekRange() {
  return (
    <Box style={{ width: 500, border: '1px solid #ccc' }}>
      <AgendaView
        rangeStart="2025-11-03"
        rangeEnd="2025-11-09"
        events={november2025Events}
      />
    </Box>
  );
}
