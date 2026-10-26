import { Button, Paper, Title } from '@mantine/core';
import { formatDate, formatPrice, getTimeZoneName, type LessonType, shiftTime } from './data';
import { DETAILS_FORM_ID } from './Details';
import classes from './Booking.module.css';

interface SummaryProps {
  type: LessonType;
  day: number | null;
  slot: string | null;
  tz: number;
  booked: boolean;
}

function getButtonLabel(type: LessonType, booked: boolean) {
  if (booked) {
    return 'Booked';
  }
  if (type.id === 'trial') {
    return 'Book the free trial';
  }
  return type.id === 'pack' ? 'Book the first of 10' : 'Book this lesson';
}

export function Summary({ type, day, slot, tz, booked }: SummaryProps) {
  const rows = [
    { label: 'Lesson', value: `${type.name}, ${type.length} min` },
    {
      label: 'Day',
      value: day !== null ? formatDate(day) : '',
      empty: 'Press a key to pick a day',
    },
    {
      label: 'Time',
      value: slot ? `${shiftTime(slot, tz)}${tz ? ` ${getTimeZoneName(tz)} time` : ''}` : '',
      empty: 'Choose a time',
    },
    { label: 'Where', value: type.where },
  ];

  return (
    <Paper component="aside" className={classes.summary} aria-live="polite">
      <Title order={3}>Your lesson</Title>
      <dl className={classes.summaryList}>
        {rows.map((row) => (
          <div key={row.label}>
            <dt>{row.label}</dt>
            <dd data-empty={!row.value || undefined}>{row.value || row.empty}</dd>
          </div>
        ))}
      </dl>
      <div className={classes.total}>
        <span>To pay</span>
        <b>{formatPrice(type.price)}</b>
      </div>
      <Button
        type="submit"
        form={DETAILS_FORM_ID}
        fullWidth
        mt="md"
        disabled={booked || day === null || slot === null}
      >
        {getButtonLabel(type, booked)}
      </Button>
      <p className={classes.policy}>
        Free to cancel or move up to 24 hours before. You pay after the lesson.
      </p>
    </Paper>
  );
}
