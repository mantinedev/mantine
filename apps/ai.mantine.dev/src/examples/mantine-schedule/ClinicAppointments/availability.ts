import dayjs from 'dayjs';
import type { ScheduleEventData } from '@mantine/schedule';
import type { Appointment, Doctor, WorkingDay } from './types';

interface PlacementInput {
  doctor: Doctor;
  /** Appointments of the doctor; other doctors' appointments are ignored */
  appointments: Appointment[];
  start: string;
  end: string;
  /** The appointment being moved or edited, it never conflicts with itself */
  ignoreId?: string;
}

const toMinutes = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

const minutesOfDay = (date: dayjs.Dayjs) => date.hour() * 60 + date.minute();

export function getWorkingDay(doctor: Doctor, date: string): WorkingDay | null {
  return doctor.hours[dayjs(date).day()] ?? null;
}

/** Returns why the appointment cannot be placed there, or `null` when it fits */
export function getPlacementProblem({
  doctor,
  appointments,
  start,
  end,
  ignoreId,
}: PlacementInput): string | null {
  const startDate = dayjs(start);
  const endDate = dayjs(end);
  const workingDay = getWorkingDay(doctor, start);

  if (!workingDay) {
    return `${doctor.name} does not work on ${startDate.format('dddd')}s`;
  }

  const startMinutes = minutesOfDay(startDate);
  const endMinutes = endDate.isSame(startDate, 'day') ? minutesOfDay(endDate) : 24 * 60;
  const endLabel = endDate.format('HH:mm');

  if (startMinutes < toMinutes(workingDay.start)) {
    return `${doctor.name} starts work at ${workingDay.start}`;
  }

  if (startMinutes >= toMinutes(workingDay.end)) {
    return `${doctor.name} finishes work at ${workingDay.end}`;
  }

  const { lunch } = workingDay;

  if (lunch && startMinutes < toMinutes(lunch.end) && endMinutes > toMinutes(lunch.start)) {
    return startMinutes >= toMinutes(lunch.start)
      ? `${startDate.format('HH:mm')} is in the lunch break (${lunch.start}–${lunch.end})`
      : `It would end at ${endLabel}, after the lunch break starts at ${lunch.start}`;
  }

  if (endMinutes > toMinutes(workingDay.end)) {
    return `It would end at ${endLabel}, after working hours end at ${workingDay.end}`;
  }

  const conflict = appointments
    .filter(
      (appointment) =>
        appointment.doctorId === doctor.id &&
        appointment.id !== ignoreId &&
        dayjs(appointment.start).isBefore(endDate) &&
        dayjs(appointment.end).isAfter(startDate)
    )
    .sort((a, b) => a.start.localeCompare(b.start))[0];

  if (conflict) {
    return dayjs(conflict.start).isAfter(startDate)
      ? `It would end at ${endLabel}, after the next appointment starts at ${dayjs(conflict.start).format('HH:mm')}`
      : `Another appointment runs from ${dayjs(conflict.start).format('HH:mm')} to ${dayjs(conflict.end).format('HH:mm')}`;
  }

  return null;
}

export function isAvailableSlot(doctor: Doctor, slotStart: string) {
  const workingDay = getWorkingDay(doctor, slotStart);

  if (!workingDay) {
    return false;
  }

  const minutes = minutesOfDay(dayjs(slotStart));
  const inLunch =
    workingDay.lunch &&
    minutes >= toMinutes(workingDay.lunch.start) &&
    minutes < toMinutes(workingDay.lunch.end);

  return minutes >= toMinutes(workingDay.start) && minutes < toMinutes(workingDay.end) && !inLunch;
}

export function getBusinessHours(doctor: Doctor) {
  return Object.fromEntries(
    [0, 1, 2, 3, 4, 5, 6].map((day) => {
      const workingDay = doctor.hours[day];
      return [day, workingDay ? [workingDay.start, workingDay.end] : null];
    })
  ) as Record<number, [string, string] | null>;
}

export function getLunchBreaks(doctor: Doctor, weekStart: string): ScheduleEventData[] {
  return Array.from({ length: 7 }, (_, offset) => dayjs(weekStart).add(offset, 'day')).flatMap(
    (day) => {
      const lunch = doctor.hours[day.day()]?.lunch;

      if (!lunch) {
        return [];
      }

      const date = day.format('YYYY-MM-DD');
      return [
        {
          id: `lunch-${doctor.id}-${date}`,
          title: 'Lunch break',
          start: `${date} ${lunch.start}:00`,
          end: `${date} ${lunch.end}:00`,
          color: 'gray',
          display: 'background' as const,
        },
      ];
    }
  );
}
