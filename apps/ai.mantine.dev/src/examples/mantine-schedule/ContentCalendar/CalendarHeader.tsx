import { Group } from '@mantine/core';
import { ScheduleHeader } from '@mantine/schedule';
import type { CalendarView } from './types';

const VIEWS: { value: CalendarView; label: string }[] = [
  { value: 'month', label: 'Month' },
  { value: 'week', label: 'Week' },
  { value: 'agenda', label: 'Agenda' },
];

interface CalendarHeaderProps {
  label: string;
  view: CalendarView;
  onViewChange: (view: CalendarView) => void;
  onPrevious: () => void;
  onNext: () => void;
  onToday: () => void;
}

export function CalendarHeader({
  label,
  view,
  onViewChange,
  onPrevious,
  onNext,
  onToday,
}: CalendarHeaderProps) {
  return (
    <ScheduleHeader>
      <ScheduleHeader.Previous onClick={onPrevious} />
      <ScheduleHeader.Control interactive={false} miw={170} aria-live="polite">
        {label}
      </ScheduleHeader.Control>
      <ScheduleHeader.Next onClick={onNext} />
      <ScheduleHeader.Today onClick={onToday} />
      <Group gap={0} ms="auto" role="group" aria-label="Calendar view" wrap="nowrap">
        {VIEWS.map((item) => (
          <ScheduleHeader.Control
            key={item.value}
            active={view === item.value}
            aria-pressed={view === item.value}
            onClick={() => onViewChange(item.value)}
          >
            {item.label}
          </ScheduleHeader.Control>
        ))}
      </Group>
    </ScheduleHeader>
  );
}
