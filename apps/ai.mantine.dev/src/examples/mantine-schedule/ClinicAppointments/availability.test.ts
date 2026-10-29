import dayjs from 'dayjs';
import { getPlacementProblem, isAvailableSlot } from './availability';
import { DOCTORS_BY_ID, generateAppointments } from './data';
import type { Appointment } from './types';

// Dr. Keller works Thursdays 09:00–17:00 with lunch 13:00–14:00 and is off at weekends
const keller = DOCTORS_BY_ID.keller;

const booked: Appointment = {
  id: 'a1',
  doctorId: 'keller',
  patientId: 'p01',
  type: 'consultation',
  start: '2026-10-29 11:00:00',
  end: '2026-10-29 11:30:00',
  note: '',
};

const check = (
  start: string,
  end: string,
  appointments: Appointment[] = [booked],
  ignoreId?: string
) => getPlacementProblem({ doctor: keller, appointments, start, end, ignoreId });

describe('placement rules', () => {
  it('accepts an appointment inside working hours', () => {
    expect(check('2026-10-29 09:00:00', '2026-10-29 09:30:00')).toBeNull();
  });

  it('rejects a day the doctor does not work', () => {
    expect(check('2026-10-31 10:00:00', '2026-10-31 10:30:00')).toBe(
      'Dr. Anna Keller does not work on Saturdays'
    );
  });

  it('rejects a start before working hours', () => {
    expect(check('2026-10-29 08:30:00', '2026-10-29 09:00:00')).toBe(
      'Dr. Anna Keller starts work at 09:00'
    );
  });

  it('rejects an appointment that ends after working hours', () => {
    expect(check('2026-10-29 16:30:00', '2026-10-29 17:30:00')).toBe(
      'It would end at 17:30, after working hours end at 17:00'
    );
  });

  it('rejects an appointment that runs into the lunch break', () => {
    expect(check('2026-10-29 12:45:00', '2026-10-29 13:15:00')).toBe(
      'It would end at 13:15, after the lunch break starts at 13:00'
    );
  });

  it('rejects a start inside the lunch break', () => {
    expect(check('2026-10-29 13:15:00', '2026-10-29 13:30:00')).toBe(
      '13:15 is in the lunch break (13:00–14:00)'
    );
  });

  it('rejects an appointment that runs into the next appointment', () => {
    expect(check('2026-10-29 10:45:00', '2026-10-29 11:15:00')).toBe(
      'It would end at 11:15, after the next appointment starts at 11:00'
    );
  });

  it('rejects a start during another appointment', () => {
    expect(check('2026-10-29 11:15:00', '2026-10-29 11:45:00')).toBe(
      'Another appointment runs from 11:00 to 11:30'
    );
  });

  it('accepts an appointment that ends when the next one starts', () => {
    expect(check('2026-10-29 10:30:00', '2026-10-29 11:00:00')).toBeNull();
  });

  it('does not count the moved appointment as a conflict with itself', () => {
    expect(check('2026-10-29 11:15:00', '2026-10-29 11:45:00', [booked], 'a1')).toBeNull();
  });

  it('ignores appointments of other doctors', () => {
    const otherDoctor = { ...booked, doctorId: 'liu' };
    expect(check('2026-10-29 11:00:00', '2026-10-29 11:30:00', [otherDoctor])).toBeNull();
  });
});

describe('available slots', () => {
  it('treats working time as available', () => {
    expect(isAvailableSlot(keller, '2026-10-29 16:45:00')).toBe(true);
  });

  it('treats the lunch break as unavailable', () => {
    expect(isAvailableSlot(keller, '2026-10-29 13:30:00')).toBe(false);
  });

  it('treats time after working hours as unavailable', () => {
    expect(isAvailableSlot(keller, '2026-10-29 17:00:00')).toBe(false);
  });
});

describe('generated appointments', () => {
  const appointments = generateAppointments('2026-10-29');

  it('creates about 30 appointments', () => {
    expect(appointments.length).toBeGreaterThanOrEqual(28);
    expect(appointments.length).toBeLessThanOrEqual(30);
  });

  it('places every appointment in the current or the next week', () => {
    const outside = appointments.filter(
      (appointment) =>
        dayjs(appointment.start).isBefore('2026-10-26') ||
        !dayjs(appointment.start).isBefore('2026-11-09')
    );
    expect(outside).toEqual([]);
  });

  it('gives every doctor appointments in both weeks', () => {
    const weeks = new Set(
      appointments.map(
        (appointment) =>
          `${appointment.doctorId}:${dayjs(appointment.start).isBefore('2026-11-02') ? 1 : 2}`
      )
    );
    expect(weeks.size).toBe(8);
  });

  it('places every appointment where it fits', () => {
    const problems = appointments
      .map((appointment) =>
        getPlacementProblem({
          doctor: DOCTORS_BY_ID[appointment.doctorId],
          appointments,
          start: appointment.start,
          end: appointment.end,
          ignoreId: appointment.id,
        })
      )
      .filter(Boolean);
    expect(problems).toEqual([]);
  });
});
