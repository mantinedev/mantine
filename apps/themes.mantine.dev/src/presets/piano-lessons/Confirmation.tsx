import { useEffect, useRef } from 'react';
import { IconCalendar, IconCheck, IconChevronDown } from '@tabler/icons-react';
import { Button, Menu, Paper, ThemeIcon, Title } from '@mantine/core';
import { formatDate, type LessonType } from './data';
import classes from './Booking.module.css';

const CALENDARS = [
  { label: 'Google Calendar', target: 'Google Calendar' },
  { label: 'Outlook', target: 'Outlook' },
  { label: 'Download .ics file', target: 'an .ics file' },
];

interface ConfirmationProps {
  type: LessonType;
  day: number;
  slot: string;
  name: string;
  email: string;
  onToast: (message: string) => void;
  onReset: () => void;
}

export function Confirmation({
  type,
  day,
  slot,
  name,
  email,
  onToast,
  onReset,
}: ConfirmationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <Paper ref={ref} className={classes.confirm} tabIndex={-1}>
      <ThemeIcon size={52} radius="xl">
        <IconCheck size={26} stroke={2.4} />
      </ThemeIcon>
      <Title order={3} className={classes.confirmTitle}>
        See you at the piano, {name.split(' ')[0]}
      </Title>
      <p className={classes.when}>
        {type.name}, {formatDate(day)} at {slot} Amsterdam time
      </p>
      <p>
        A confirmation is on its way to <b>{email}</b>.{' '}
        {type.id === 'online'
          ? 'The video link comes the evening before.'
          : 'Ring the bell marked Verbeek, first floor.'}
      </p>
      <div className={classes.actions}>
        <Menu position="bottom-start">
          <Menu.Target>
            <Button
              leftSection={<IconCalendar size={18} stroke={1.7} />}
              rightSection={<IconChevronDown size={18} stroke={1.7} />}
            >
              Add to calendar
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            {CALENDARS.map((calendar) => (
              <Menu.Item
                key={calendar.label}
                onClick={() => onToast(`Added to ${calendar.target}`)}
              >
                {calendar.label}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
        <Button variant="default" onClick={onReset}>
          Book another lesson
        </Button>
      </div>
      <div className={classes.policyBox}>
        Need to move it? Use the link in the email up to 24 hours before. Later cancellations are
        charged at half the lesson price.
      </div>
    </Paper>
  );
}
