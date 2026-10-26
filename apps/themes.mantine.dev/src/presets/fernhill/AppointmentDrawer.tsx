'use client';

import { useState } from 'react';
import {
  IconAlertTriangle,
  IconBan,
  IconCheck,
  IconCircleCheck,
  IconCircleX,
  IconClock,
  IconPlayerPlay,
} from '@tabler/icons-react';
import { Alert, Button, Drawer, Select, Textarea, Title } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import {
  type Appointment,
  DAY_END,
  dayKey,
  hm,
  initials,
  longDate,
  MONTHS,
  PRACS,
  type RoomId,
  ROOMS,
  type StatusId,
  STATUS,
  timeOptions,
  visitHistory,
} from './data';
import { PracAvatar } from './PracAvatar';
import classes from './AppointmentDrawer.module.css';

export const STATUS_ICONS: Record<StatusId, typeof IconClock> = {
  booked: IconClock,
  arrived: IconCheck,
  treatment: IconPlayerPlay,
  done: IconCircleCheck,
  noshow: IconBan,
  cancelled: IconCircleX,
};

const NEXT: Partial<Record<StatusId, { status: StatusId; label: string }>> = {
  booked: { status: 'arrived', label: 'Mark arrived' },
  arrived: { status: 'treatment', label: 'Start treatment' },
  treatment: { status: 'done', label: 'Mark done' },
};

const TIMES = timeOptions(DAY_END - 15);

interface AppointmentDrawerProps {
  appointment: Appointment | undefined;
  date: Date;
  conflict: boolean;
  opened: boolean;
  onClose: () => void;
  onStatus: (appointment: Appointment, status: StatusId) => void;
  onMove: (appointment: Appointment, date: string, start: number, room: RoomId) => void;
}

interface ContentProps extends Omit<AppointmentDrawerProps, 'appointment' | 'opened' | 'onClose'> {
  appointment: Appointment;
}

function DrawerContent({ appointment: a, date, conflict, onStatus, onMove }: ContentProps) {
  const [moveDate, setMoveDate] = useState<string | null>(dayKey(date));
  const [moveTime, setMoveTime] = useState(String(a.start));
  const [moveRoom, setMoveRoom] = useState<string>(a.room);
  const Icon = STATUS_ICONS[a.status];
  const next = NEXT[a.status];
  const NextIcon = next ? STATUS_ICONS[next.status] : null;

  return (
    <>
      <div className={classes.head}>
        <PracAvatar index={a.prac} size={40} className={classes.avatar}>
          {initials(a.patient)}
        </PracAvatar>
        <div className={classes.headText}>
          <Drawer.Title component="h2" id="fernhill-drawer-title" className={classes.title}>
            {a.patient}
          </Drawer.Title>
          <div className={classes.sub}>
            {a.type}, {hm(a.start)} to {hm(a.start + a.dur)}
          </div>
          <div className={classes.pillRow}>
            <span className={classes.pill} data-status={a.status}>
              <Icon size={13} stroke={2.2} />
              {STATUS[a.status].label}
            </span>
          </div>
        </div>
        <Drawer.CloseButton aria-label="Close" />
      </div>

      <div className={classes.body}>
        {conflict && (
          <Alert icon={<IconAlertTriangle size={18} stroke={1.8} />} variant="default">
            <b>{a.room} is double-booked.</b> Move this appointment or switch it to the other room.
          </Alert>
        )}

        <div>
          <Title order={3} className={classes.secTitle}>
            Appointment
          </Title>
          <dl className={classes.facts}>
            <dt>With</dt>
            <dd>{PRACS[a.prac].name}</dd>
            <dt>Where</dt>
            <dd>{a.room}</dd>
            <dt>Date</dt>
            <dd>{longDate(date)}</dd>
            <dt>Phone</dt>
            <dd className={classes.tnum}>07700 900{100 + ((a.patient.length * 37) % 900)}</dd>
          </dl>
        </div>

        <div>
          <Title order={3} className={classes.secTitle}>
            Move to
          </Title>
          <div className={classes.row2}>
            <DatePickerInput
              value={moveDate}
              onChange={setMoveDate}
              valueFormat="DD/MM/YYYY"
              aria-label="New date"
              className={classes.tnum}
            />
            <Select
              data={TIMES}
              value={moveTime}
              onChange={(value) => value && setMoveTime(value)}
              aria-label="New start time"
              className={classes.tnum}
            />
          </div>
          <div className={classes.moveRow}>
            <Select
              data={ROOMS}
              value={moveRoom}
              onChange={(value) => value && setMoveRoom(value)}
              aria-label="Room"
              className={classes.grow}
            />
            <Button
              variant="default"
              onClick={() =>
                onMove(a, moveDate ?? dayKey(date), Number(moveTime), moveRoom as RoomId)
              }
            >
              Move
            </Button>
          </div>
        </div>

        <div>
          <Title order={3} className={classes.secTitle}>
            Previous visits
          </Title>
          <ul className={classes.history}>
            {visitHistory(a.patient).map((visit) => (
              <li key={dayKey(visit.date)}>
                <span className={classes.tnum}>
                  {visit.date.getDate()} {MONTHS[visit.date.getMonth()].slice(0, 3)}
                </span>
                <span>
                  <b>{visit.type}</b>
                  <br />
                  {visit.note}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Textarea
          label="Notes for this visit"
          placeholder="What did you work on today?"
          minRows={3}
          autosize
        />
      </div>

      <div className={classes.foot}>
        {next && NextIcon && (
          <Button leftSection={<NextIcon stroke={1.8} />} onClick={() => onStatus(a, next.status)}>
            {next.label}
          </Button>
        )}
        {a.status === 'booked' && (
          <Button variant="default" onClick={() => onStatus(a, 'noshow')}>
            No-show
          </Button>
        )}
        {a.status !== 'cancelled' && a.status !== 'done' && (
          <Button
            variant="default"
            className={classes.danger}
            onClick={() => onStatus(a, 'cancelled')}
          >
            Cancel appointment
          </Button>
        )}
        {(a.status === 'cancelled' || a.status === 'noshow') && (
          <Button variant="default" onClick={() => onStatus(a, 'booked')}>
            Restore booking
          </Button>
        )}
      </div>
    </>
  );
}

export function AppointmentDrawer({
  appointment,
  opened,
  onClose,
  ...others
}: AppointmentDrawerProps) {
  return (
    <Drawer.Root
      opened={opened}
      onClose={onClose}
      withinPortal={false}
      lockScroll={false}
      classNames={{ panel: classes.panel }}
    >
      <Drawer.Overlay className={classes.overlay} />
      <Drawer.Content aria-labelledby="fernhill-drawer-title">
        {appointment && (
          <DrawerContent key={appointment.id} appointment={appointment} {...others} />
        )}
      </Drawer.Content>
    </Drawer.Root>
  );
}
