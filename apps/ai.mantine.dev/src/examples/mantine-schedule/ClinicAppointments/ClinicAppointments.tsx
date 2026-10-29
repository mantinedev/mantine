import dayjs from 'dayjs';
import { useMemo, useRef, useState } from 'react';
import { IconPlus } from '@tabler/icons-react';
import { ActionIcon, Code, Group, Stack, Text, useModal } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import {
  getStartOfWeek,
  MobileMonthView,
  ScheduleEventData,
  ScheduleEventPlacementRejectedData,
  ScheduleHeader,
  WeekView,
} from '@mantine/schedule';
import { AppointmentChanges, AppointmentForm } from './AppointmentForm';
import {
  getBusinessHours,
  getLunchBreaks,
  getPlacementProblem,
  getWorkingDay,
  isAvailableSlot,
} from './availability';
import {
  APPOINTMENT_TYPES,
  DATE_TIME_FORMAT,
  DOCTORS,
  DOCTORS_BY_ID,
  generateAppointments,
  PATIENTS_BY_ID,
} from './data';
import { DoctorSelect } from './DoctorSelect/DoctorSelect';
import type { Appointment } from './types';
import classes from './ClinicAppointments.module.css';

const summarize = (appointment: Pick<Appointment, 'patientId' | 'start'>) =>
  `${PATIENTS_BY_ID[appointment.patientId].name} · ${dayjs(appointment.start).format('ddd, MMM D, HH:mm')}`;

const toEvent = (appointment: Appointment): ScheduleEventData<Appointment> => {
  const type = APPOINTMENT_TYPES[appointment.type];

  return {
    id: appointment.id,
    title: `${PATIENTS_BY_ID[appointment.patientId].name} · ${type.label}`,
    start: appointment.start,
    end: appointment.end,
    color: type.color,
    payload: appointment,
  };
};

const toJson = (appointments: Appointment[]) =>
  JSON.stringify(
    appointments.map((appointment) => ({
      id: appointment.id,
      patient: PATIENTS_BY_ID[appointment.patientId].name,
      phone: PATIENTS_BY_ID[appointment.patientId].phone,
      type: appointment.type,
      start: appointment.start,
      end: appointment.end,
      note: appointment.note,
    })),
    null,
    2
  );

function renderEventBody(event: ScheduleEventData) {
  const appointment = event.payload as Appointment | undefined;

  if (!appointment) {
    return <Text size="xs">{event.title}</Text>;
  }

  const patient = PATIENTS_BY_ID[appointment.patientId].name;
  const type = APPOINTMENT_TYPES[appointment.type].label;

  if (dayjs(appointment.end).diff(appointment.start, 'minute') <= 15) {
    return (
      <Text size="xs" truncate>
        <span className={classes.patient}>{patient}</span> · {type}
      </Text>
    );
  }

  return (
    <>
      <Text size="xs" truncate className={classes.patient}>
        {patient}
      </Text>
      <Text size="xs" truncate>
        {type} · {dayjs(appointment.start).format('HH:mm')}–{dayjs(appointment.end).format('HH:mm')}
      </Text>
    </>
  );
}

interface ClinicAppointmentsProps {
  /** Appointments to start with, generated around today by default */
  initialAppointments?: Appointment[];
}

export function ClinicAppointments({ initialAppointments }: ClinicAppointmentsProps) {
  const [appointments, setAppointments] = useState<Appointment[]>(
    () => initialAppointments ?? generateAppointments()
  );
  const [doctorId, setDoctorId] = useState(DOCTORS[0].id);
  const [date, setDate] = useState(() => dayjs().format('YYYY-MM-DD'));
  const nextId = useRef(appointments.length + 1);
  const isMobile = useMediaQuery('(max-width: 47.99em)');
  const modal = useModal({ closeOnClickOutside: false, fullScreenBelow: 'sm' });

  const doctor = DOCTORS_BY_ID[doctorId];
  const weekStart = getStartOfWeek({ date, firstDayOfWeek: 1 });

  const doctorAppointments = useMemo(
    () =>
      appointments
        .filter((appointment) => appointment.doctorId === doctorId)
        .sort((a, b) => a.start.localeCompare(b.start)),
    [appointments, doctorId]
  );

  const appointmentEvents = useMemo(() => doctorAppointments.map(toEvent), [doctorAppointments]);
  const weekEvents = useMemo(
    () => [...appointmentEvents, ...getLunchBreaks(doctor, weekStart)],
    [appointmentEvents, doctor, weekStart]
  );

  const updateAppointment = (id: string, changes: Partial<Appointment>) =>
    setAppointments((current) =>
      current.map((appointment) =>
        appointment.id === id ? { ...appointment, ...changes } : appointment
      )
    );

  const openForm = ({ appointment, start }: { appointment?: Appointment; start?: string }) => {
    const save = (changes: AppointmentChanges) => {
      if (appointment) {
        updateAppointment(appointment.id, changes);
        notifications.show({ title: 'Appointment updated', message: summarize(changes) });
      } else {
        const id = `apt-${nextId.current}`;
        nextId.current += 1;
        setAppointments((current) => [...current, { id, doctorId: doctor.id, ...changes }]);
        notifications.show({ title: 'Appointment booked', message: summarize(changes) });
      }

      modal.close();
    };

    const cancel = appointment
      ? () => {
          setAppointments((current) => current.filter((item) => item.id !== appointment.id));
          notifications.show({ title: 'Appointment cancelled', message: summarize(appointment) });
          modal.close();
        }
      : undefined;

    modal.open({
      title: appointment ? 'Edit appointment' : 'New appointment',
      children: (
        <AppointmentForm
          doctor={doctor}
          appointments={doctorAppointments}
          appointment={appointment}
          start={start}
          onSave={save}
          onCancelAppointment={cancel}
          onClose={modal.close}
        />
      ),
    });
  };

  const openEvent = (event: ScheduleEventData) => {
    const appointment = appointments.find((item) => item.id === event.id);

    if (appointment) {
      openForm({ appointment });
    }
  };

  const fits = (event: ScheduleEventData, start: string, end: string) =>
    getPlacementProblem({
      doctor,
      appointments: doctorAppointments,
      start,
      end,
      ignoreId: String(event.id),
    }) === null;

  const changeTime =
    (title: string) =>
    ({
      eventId,
      newStart,
      newEnd,
    }: {
      eventId: string | number;
      newStart: string;
      newEnd: string;
    }) => {
      const appointment = appointments.find((item) => item.id === eventId);

      if (appointment) {
        updateAppointment(appointment.id, { start: newStart, end: newEnd });
        notifications.show({
          title,
          message: `${summarize({ ...appointment, start: newStart })}–${dayjs(newEnd).format('HH:mm')}`,
        });
      }
    };

  const explainRejection = (data: ScheduleEventPlacementRejectedData) => {
    if (data.action === 'external-drop') {
      return;
    }

    const reason =
      getPlacementProblem({
        doctor,
        appointments: doctorAppointments,
        start: data.start,
        end: data.end,
        ignoreId: String(data.event.id),
      }) ?? 'Another appointment is booked at that time';

    notifications.show({
      color: 'red',
      title: data.action === 'resize' ? 'Cannot resize appointment' : 'Cannot move appointment',
      message: reason,
    });
  };

  const doctorSelect = <DoctorSelect value={doctorId} onChange={setDoctorId} />;

  const calendar = isMobile ? (
    <MobileMonthView
      date={date}
      onDateChange={(next) => setDate(dayjs(next).format('YYYY-MM-DD'))}
      selectedDate={date}
      onSelectedDateChange={(next) => next && setDate(dayjs(next).format('YYYY-MM-DD'))}
      events={appointmentEvents}
      onEventClick={openEvent}
      renderHeader={({ defaultHeader }) => (
        <Group wrap="nowrap" gap="xs" className={classes.mobileHeader}>
          {defaultHeader}
          {doctorSelect}
          <ActionIcon
            variant="default"
            size="input-sm"
            aria-label="New appointment"
            onClick={() => {
              const [hours, minutes] = (getWorkingDay(doctor, date)?.start ?? '09:00')
                .split(':')
                .map(Number);
              openForm({ start: dayjs(date).hour(hours).minute(minutes).format(DATE_TIME_FORMAT) });
            }}
          >
            <IconPlus size={18} />
          </ActionIcon>
        </Group>
      )}
    />
  ) : (
    <div>
      <ScheduleHeader>
        <ScheduleHeader.Previous
          onClick={() => setDate(dayjs(weekStart).subtract(1, 'week').format('YYYY-MM-DD'))}
        />
        <ScheduleHeader.Control interactive={false} miw={180}>
          {dayjs(weekStart).format('MMM D')} –{' '}
          {dayjs(weekStart).add(6, 'day').format('MMM D, YYYY')}
        </ScheduleHeader.Control>
        <ScheduleHeader.Next
          onClick={() => setDate(dayjs(weekStart).add(1, 'week').format('YYYY-MM-DD'))}
        />
        <ScheduleHeader.Today onClick={() => setDate(dayjs().format('YYYY-MM-DD'))} />
        {doctorSelect}
      </ScheduleHeader>

      <WeekView
        withHeader={false}
        date={date}
        onDateChange={(next) => setDate(dayjs(next).format('YYYY-MM-DD'))}
        events={weekEvents}
        startTime="07:00:00"
        endTime="21:00:00"
        intervalMinutes={15}
        slotHeight={88}
        startScrollTime="08:00:00"
        scrollAreaProps={{ mah: 680 }}
        withAllDaySlots={false}
        withWeekendDays={[0, 6].some((day) => doctor.hours[day])}
        highlightBusinessHours
        businessHours={getBusinessHours(doctor)}
        classNames={{ weekViewBackgroundEvent: classes.lunch }}
        renderEventBody={renderEventBody}
        onTimeSlotClick={({ slotStart }) => {
          if (isAvailableSlot(doctor, slotStart)) {
            openForm({ start: slotStart });
          }
        }}
        onEventClick={openEvent}
        withEventsDragAndDrop
        withEventResize
        eventDragInterval={15}
        eventResizeInterval={15}
        canDragEvent={(event) => event.display !== 'background'}
        canResizeEvent={(event) => event.display !== 'background'}
        preventEventOverlap
        canDropEvent={({ event, start, end }) => fits(event, start, end)}
        canResizeEventTo={({ event, start, end }) => fits(event, start, end)}
        onEventDrop={changeTime('Appointment moved')}
        onEventResize={changeTime('Appointment resized')}
        onEventPlacementRejected={explainRejection}
      />
    </div>
  );

  return (
    <Stack>
      {calendar}

      <Stack gap="xs">
        <Text size="sm">
          Appointments of {doctor.name} ({doctorAppointments.length})
        </Text>
        <Code block className={classes.json} aria-label={`Appointments of ${doctor.name} as JSON`}>
          {toJson(doctorAppointments)}
        </Code>
      </Stack>
    </Stack>
  );
}
