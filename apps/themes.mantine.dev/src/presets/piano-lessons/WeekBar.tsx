import { useState } from 'react';
import { IconCalendar, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { ActionIcon, Button, Popover, Switch, Text } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import {
  DAY,
  FIRST_MONDAY,
  formatWeekRange,
  fromDateString,
  getDayInfo,
  LAST_DAY,
  toDateString,
  TODAY,
} from './data';
import classes from './Booking.module.css';

const ICON_PROPS = { size: 20, stroke: 1.7 };

interface WeekBarProps {
  weekStart: number;
  onWeekStartChange: (weekStart: number) => void;
  typeId: string;
  day: number | null;
  onMonthPick: (day: number) => void;
  sound: boolean;
  onSoundChange: (sound: boolean) => void;
}

export function WeekBar({
  weekStart,
  onWeekStartChange,
  typeId,
  day,
  onMonthPick,
  sound,
  onSoundChange,
}: WeekBarProps) {
  const [opened, setOpened] = useState(false);
  const [month, setMonth] = useState('2026-11-01');

  return (
    <div className={classes.weekBar}>
      <ActionIcon
        aria-label="Previous week"
        disabled={weekStart <= FIRST_MONDAY}
        onClick={() => onWeekStartChange(weekStart - 7 * DAY)}
      >
        <IconChevronLeft {...ICON_PROPS} />
      </ActionIcon>
      <span className={classes.range}>{formatWeekRange(weekStart)}</span>
      <ActionIcon
        aria-label="Next week"
        disabled={weekStart + 7 * DAY > LAST_DAY}
        onClick={() => onWeekStartChange(weekStart + 7 * DAY)}
      >
        <IconChevronRight {...ICON_PROPS} />
      </ActionIcon>

      <Popover
        opened={opened}
        onDismiss={() => setOpened(false)}
        position="bottom-start"
        width={320}
        trapFocus
        returnFocus
      >
        <Popover.Target>
          <Button
            variant="default"
            size="xs"
            leftSection={<IconCalendar size={18} stroke={1.7} />}
            aria-haspopup="dialog"
            onClick={() => setOpened((current) => !current)}
          >
            Show month
          </Button>
        </Popover.Target>
        <Popover.Dropdown className={classes.monthDropdown} aria-label="Pick a date">
          <DatePicker
            value={day !== null ? toDateString(day) : null}
            onChange={(value) => {
              if (value) {
                setOpened(false);
                onMonthPick(fromDateString(value));
              }
            }}
            date={month}
            onDateChange={setMonth}
            minDate={toDateString(TODAY)}
            maxDate={toDateString(LAST_DAY)}
            maxLevel="month"
            weekendDays={[]}
            highlightToday={false}
            hideOutsideDates
            withCellSpacing={false}
            fullWidth
            excludeDate={(value) => getDayInfo(fromDateString(value), typeId).status !== 'open'}
            getDayProps={(value) => {
              const status = getDayInfo(fromDateString(value), typeId).status;
              return { className: classes.calDay, mod: { status } };
            }}
            ariaLabels={{ previousMonth: 'Previous month', nextMonth: 'Next month' }}
          />
          <Text className={classes.calNote}>
            Dots mark days with free times. Booking is open until 20 December.
          </Text>
        </Popover.Dropdown>
      </Popover>

      <span className={classes.spacer} />
      <Switch
        label="Play a note"
        checked={sound}
        onChange={(event) => onSoundChange(event.currentTarget.checked)}
      />
    </div>
  );
}
