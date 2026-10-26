'use client';

import { useState } from 'react';
import { IconAlertTriangle, IconMinus, IconPlus } from '@tabler/icons-react';
import { ActionIcon, Alert, Button, Modal, Select, Switch } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import {
  addDays,
  type Appointment,
  DAY_END,
  dayKey,
  fromKey,
  freeRoomFor,
  hm,
  NOW_MIN,
  PATIENTS,
  PRACS,
  pracFree,
  type RoomId,
  roomFits,
  ROOMS,
  roomTakenBy,
  sameDay,
  shortDate,
  timeOptions,
  TODAY,
  TYPES,
  typeOf,
  visitHistory,
} from './data';
import classes from './BookModal.module.css';

const TIMES = timeOptions(DAY_END - 20);
const TYPE_OPTIONS = TYPES.map((type) => type.name);
const PRAC_OPTIONS = PRACS.map((prac, index) => ({ value: String(index), label: prac.name }));
const PATIENT_OPTIONS = PATIENTS.map((name) => ({ value: name, label: name }));
const VISITS = Object.fromEntries(PATIENTS.map((name) => [name, visitHistory(name).length]));

export interface BookingRequest {
  patient: string;
  date: string;
  type: string;
  start: number;
  prac: number;
  room: RoomId;
  sessions: number;
}

interface BookModalProps {
  opened: boolean;
  current: Date;
  getDay: (date: Date) => Appointment[];
  onClose: () => void;
  onBook: (request: BookingRequest) => void;
}

function roomForType(typeName: string, room: RoomId, start: number, list: Appointment[]): RoomId {
  const type = typeOf(typeName);
  if (type.gym) {
    return 'Gym';
  }
  if (type.video) {
    return 'Video';
  }
  return (
    freeRoomFor(type.name, start, type.dur, list) ??
    (room === 'Gym' || room === 'Video' ? 'Room 1' : room)
  );
}

export function conflictMessage(
  date: Date,
  typeName: string,
  start: number,
  prac: number,
  room: RoomId,
  list: Appointment[]
): React.ReactNode {
  const type = typeOf(typeName);
  if (date.getDay() === 0) {
    return (
      <>
        <b>The clinic is closed on Sundays.</b> Pick another date.
      </>
    );
  }
  if (start + type.dur > DAY_END) {
    return (
      <>
        <b>Runs past closing.</b> A {type.name.toLowerCase()} takes {type.dur} minutes.
      </>
    );
  }
  if (!pracFree(prac, start, type.dur, list)) {
    const clash = list.find(
      (a) =>
        a.prac === prac &&
        a.status !== 'cancelled' &&
        a.start < start + type.dur &&
        start < a.start + a.dur
    );
    return (
      <>
        <b>{PRACS[prac].name} is busy.</b>{' '}
        {clash &&
          `${clash.patient} is booked ${hm(clash.start)} to ${hm(clash.start + clash.dur)}.`}
      </>
    );
  }
  if (room === 'Room 1' || room === 'Room 2') {
    const clash = roomTakenBy(room, start, type.dur, list);
    if (clash) {
      const other: RoomId = room === 'Room 1' ? 'Room 2' : 'Room 1';
      const free = !roomTakenBy(other, start, type.dur, list);
      return (
        <>
          <b>{room} is taken</b> by {PRACS[clash.prac].name} from {hm(clash.start)} to{' '}
          {hm(clash.start + clash.dur)}.{free ? ` ${other} is free then.` : ' Both rooms are busy.'}
        </>
      );
    }
    return null;
  }
  if (!roomFits(type.name, room)) {
    return (
      <b>
        {type.name} can’t go in {room}.
      </b>
    );
  }
  return null;
}

function BookForm({ current, getDay, onClose, onBook }: Omit<BookModalProps, 'opened'>) {
  const initialDate = current.getDay() === 0 ? addDays(current, 1) : current;
  const initialStart = Math.min(
    sameDay(current, TODAY) ? Math.ceil((NOW_MIN + 15) / 15) * 15 : 540,
    DAY_END - 60
  );
  const [patient, setPatient] = useState<string | null>(null);
  const [patientError, setPatientError] = useState(false);
  const [type, setType] = useState('Follow-up');
  const [prac, setPrac] = useState('0');
  const [date, setDate] = useState(dayKey(initialDate));
  const [start, setStart] = useState(String(initialStart));
  const [room, setRoom] = useState<RoomId>(() =>
    roomForType('Follow-up', 'Room 1', initialStart, getDay(initialDate))
  );
  const [repeat, setRepeat] = useState(false);
  const [sessions, setSessions] = useState(4);

  const day = fromKey(date);
  const message = conflictMessage(day, type, Number(start), Number(prac), room, getDay(day));

  const syncRoom = (nextType: string, nextDate: string, nextStart: string) =>
    setRoom((currentRoom) =>
      roomForType(nextType, currentRoom, Number(nextStart), getDay(fromKey(nextDate)))
    );

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!patient) {
      setPatientError(true);
      return;
    }
    if (message) {
      return;
    }
    onBook({
      patient,
      date,
      type,
      start: Number(start),
      prac: Number(prac),
      room,
      sessions: repeat ? sessions : 1,
    });
  };

  return (
    <form onSubmit={submit} noValidate>
      <div className={classes.body}>
        <Select
          label="Patient"
          placeholder="Start typing a name"
          data={PATIENT_OPTIONS}
          value={patient}
          onChange={(value) => {
            setPatient(value);
            setPatientError(false);
          }}
          searchable
          limit={7}
          nothingFoundMessage="No patient called that. Check the spelling."
          error={patientError ? 'Choose a patient from the list.' : undefined}
          renderOption={({ option }) => (
            <span className={classes.patientOption}>
              <b>{option.label}</b>
              <span>
                {VISITS[option.value]} {VISITS[option.value] === 1 ? 'visit' : 'visits'}
              </span>
            </span>
          )}
          data-autofocus
        />
        <div className={classes.row2}>
          <Select
            label="Treatment"
            data={TYPE_OPTIONS}
            value={type}
            description={`${typeOf(type).dur} minutes`}
            inputWrapperOrder={['label', 'input', 'description', 'error']}
            onChange={(value) => {
              if (value) {
                setType(value);
                syncRoom(value, date, start);
              }
            }}
          />
          <Select
            label="Practitioner"
            data={PRAC_OPTIONS}
            value={prac}
            onChange={(value) => value && setPrac(value)}
          />
        </div>
        <div className={classes.row2}>
          <DatePickerInput
            label="Date"
            value={date}
            valueFormat="DD/MM/YYYY"
            minDate="2026-10-01"
            maxDate="2026-12-31"
            className={classes.tnum}
            onChange={(value) => {
              if (value) {
                setDate(value);
                syncRoom(type, value, start);
              }
            }}
          />
          <Select
            label="Start"
            data={TIMES}
            value={start}
            className={classes.tnum}
            onChange={(value) => {
              if (value) {
                setStart(value);
                syncRoom(type, date, value);
              }
            }}
          />
        </div>
        <Select
          label="Room"
          data={ROOMS}
          value={room}
          onChange={(value) => value && setRoom(value as RoomId)}
        />
        {message && (
          <Alert icon={<IconAlertTriangle size={18} stroke={1.8} />} variant="default">
            {message}
          </Alert>
        )}
        <Switch
          label="Repeat weekly"
          checked={repeat}
          onChange={(event) => setRepeat(event.currentTarget.checked)}
        />
        {repeat && (
          <div className={classes.recur}>
            <div className={classes.recurRow}>
              Sessions
              <ActionIcon.Group>
                <ActionIcon
                  size={32}
                  aria-label="Fewer sessions"
                  onClick={() => setSessions((n) => Math.max(2, n - 1))}
                >
                  <IconMinus size={14} stroke={2} />
                </ActionIcon>
                <ActionIcon.GroupSection variant="default" className={classes.stepperValue}>
                  {sessions}
                </ActionIcon.GroupSection>
                <ActionIcon
                  size={32}
                  aria-label="More sessions"
                  onClick={() => setSessions((n) => Math.min(12, n + 1))}
                >
                  <IconPlus size={14} stroke={2} />
                </ActionIcon>
              </ActionIcon.Group>
            </div>
            <div className={classes.recurDates}>
              {Array.from({ length: sessions }, (_, index) => (
                <span key={index}>{shortDate(addDays(day, index * 7))}</span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className={classes.foot}>
        <Button variant="default" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">{repeat ? `Book ${sessions} sessions` : 'Book appointment'}</Button>
      </div>
    </form>
  );
}

export function BookModal({ opened, onClose, ...others }: BookModalProps) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Book an appointment"
      centered
      withinPortal={false}
      lockScroll={false}
      classNames={{ overlay: classes.overlay, inner: classes.inner, content: classes.content }}
    >
      {opened && <BookForm onClose={onClose} {...others} />}
    </Modal>
  );
}
