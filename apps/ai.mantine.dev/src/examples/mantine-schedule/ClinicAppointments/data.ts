import dayjs from 'dayjs';
import { getPlacementProblem } from './availability';
import type { Appointment, AppointmentType, AppointmentTypeId, Doctor, Patient } from './types';

export const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const APPOINTMENT_TYPES: Record<AppointmentTypeId, AppointmentType> = {
  consultation: { id: 'consultation', label: 'Consultation', minutes: 30, color: 'blue' },
  'follow-up': { id: 'follow-up', label: 'Follow-up', minutes: 15, color: 'teal' },
  procedure: { id: 'procedure', label: 'Procedure', minutes: 60, color: 'grape' },
  vaccination: { id: 'vaccination', label: 'Vaccination', minutes: 15, color: 'cyan.8' },
};

export const APPOINTMENT_TYPE_LIST = Object.values(APPOINTMENT_TYPES);

export const DOCTORS: Doctor[] = [
  {
    id: 'keller',
    name: 'Dr. Anna Keller',
    specialty: 'General practice',
    hours: {
      1: { start: '09:00', end: '17:00', lunch: { start: '13:00', end: '14:00' } },
      2: { start: '09:00', end: '17:00', lunch: { start: '13:00', end: '14:00' } },
      3: { start: '09:00', end: '17:00', lunch: { start: '13:00', end: '14:00' } },
      4: { start: '09:00', end: '17:00', lunch: { start: '13:00', end: '14:00' } },
      5: { start: '12:00', end: '20:00', lunch: { start: '16:00', end: '16:30' } },
    },
  },
  {
    id: 'liu',
    name: 'Dr. Marcus Liu',
    specialty: 'Pediatrics',
    hours: {
      1: { start: '08:00', end: '14:00', lunch: { start: '11:30', end: '12:00' } },
      2: { start: '12:00', end: '19:00', lunch: { start: '15:00', end: '15:30' } },
      3: { start: '08:00', end: '14:00', lunch: { start: '11:30', end: '12:00' } },
      4: { start: '12:00', end: '19:00', lunch: { start: '15:00', end: '15:30' } },
    },
  },
  {
    id: 'romano',
    name: 'Dr. Sofia Romano',
    specialty: 'Dermatology',
    hours: {
      2: { start: '10:00', end: '18:00', lunch: { start: '14:00', end: '14:45' } },
      3: { start: '10:00', end: '18:00', lunch: { start: '14:00', end: '14:45' } },
      4: { start: '10:00', end: '18:00', lunch: { start: '14:00', end: '14:45' } },
      5: { start: '10:00', end: '18:00', lunch: { start: '14:00', end: '14:45' } },
      6: { start: '09:00', end: '13:00' },
    },
  },
  {
    id: 'oconnor',
    name: "Dr. James O'Connor",
    specialty: 'Cardiology',
    hours: {
      1: { start: '08:00', end: '16:00', lunch: { start: '12:00', end: '12:30' } },
      3: { start: '08:00', end: '16:00', lunch: { start: '12:00', end: '12:30' } },
      5: { start: '08:00', end: '16:00', lunch: { start: '12:00', end: '12:30' } },
    },
  },
];

export const PATIENTS: Patient[] = [
  { id: 'p01', name: 'Olivia Bennett', dateOfBirth: '1986-03-14', phone: '(555) 201-4417' },
  { id: 'p02', name: 'Liam Carter', dateOfBirth: '1979-11-02', phone: '(555) 208-3391' },
  { id: 'p03', name: 'Emma Thompson', dateOfBirth: '1992-07-21', phone: '(555) 214-7720' },
  { id: 'p04', name: 'Noah Ramirez', dateOfBirth: '2015-01-09', phone: '(555) 219-0048' },
  { id: 'p05', name: 'Ava Patel', dateOfBirth: '1968-05-30', phone: '(555) 223-6612' },
  { id: 'p06', name: 'Ethan Brooks', dateOfBirth: '2001-09-17', phone: '(555) 227-1185' },
  { id: 'p07', name: 'Sophia Nguyen', dateOfBirth: '1995-12-04', phone: '(555) 231-9904' },
  { id: 'p08', name: 'Mason Clarke', dateOfBirth: '1957-02-26', phone: '(555) 236-4473' },
  { id: 'p09', name: 'Isabella Rossi', dateOfBirth: '2012-06-11', phone: '(555) 240-2259' },
  { id: 'p10', name: 'Lucas Fischer', dateOfBirth: '1983-08-08', phone: '(555) 244-8136' },
  { id: 'p11', name: 'Mia Johansson', dateOfBirth: '1974-04-19', phone: '(555) 249-5520' },
  { id: 'p12', name: 'Oliver Walsh', dateOfBirth: '1990-10-27', phone: '(555) 253-3067' },
  { id: 'p13', name: 'Charlotte Dubois', dateOfBirth: '1988-01-15', phone: '(555) 257-7781' },
  { id: 'p14', name: 'Elijah Morgan', dateOfBirth: '2018-03-03', phone: '(555) 262-0394' },
  { id: 'p15', name: 'Amelia Kowalski', dateOfBirth: '1963-09-22', phone: '(555) 266-6615' },
  { id: 'p16', name: 'James Okafor', dateOfBirth: '1997-05-06', phone: '(555) 270-1928' },
  { id: 'p17', name: 'Harper Lindqvist', dateOfBirth: '1981-12-29', phone: '(555) 275-8842' },
  { id: 'p18', name: 'Benjamin Haas', dateOfBirth: '1970-07-13', phone: '(555) 279-4406' },
  { id: 'p19', name: 'Evelyn Moreau', dateOfBirth: '2009-02-18', phone: '(555) 283-2573' },
  { id: 'p20', name: 'Henry Sullivan', dateOfBirth: '1952-11-30', phone: '(555) 288-9150' },
  { id: 'p21', name: 'Abigail Santos', dateOfBirth: '1993-04-01', phone: '(555) 292-6638' },
  { id: 'p22', name: 'Alexander Petrov', dateOfBirth: '1985-06-24', phone: '(555) 296-3014' },
  { id: 'p23', name: 'Emily Novak', dateOfBirth: '2004-08-16', phone: '(555) 301-7462' },
  { id: 'p24', name: 'Daniel Becker', dateOfBirth: '1977-01-07', phone: '(555) 305-2289' },
  { id: 'p25', name: 'Ella Hughes', dateOfBirth: '2016-10-10', phone: '(555) 309-5873' },
  { id: 'p26', name: 'Matthew Kim', dateOfBirth: '1989-03-28', phone: '(555) 314-0617' },
  { id: 'p27', name: 'Scarlett Murphy', dateOfBirth: '1966-12-12', phone: '(555) 318-4490' },
  { id: 'p28', name: 'Jackson Reyes', dateOfBirth: '1999-07-05', phone: '(555) 322-8156' },
  { id: 'p29', name: 'Grace Andersen', dateOfBirth: '1972-05-23', phone: '(555) 327-3348' },
  { id: 'p30', name: 'Sebastian Vogel', dateOfBirth: '2011-09-01', phone: '(555) 331-6905' },
  { id: 'p31', name: 'Chloe Martin', dateOfBirth: '1994-02-09', phone: '(555) 335-1772' },
  { id: 'p32', name: 'Jack Hoffmann', dateOfBirth: '1960-08-20', phone: '(555) 340-9231' },
  { id: 'p33', name: 'Lily Chen', dateOfBirth: '2007-11-14', phone: '(555) 344-5584' },
  { id: 'p34', name: 'Samuel Adeyemi', dateOfBirth: '1980-04-26', phone: '(555) 348-2047' },
  { id: 'p35', name: 'Zoe Laurent', dateOfBirth: '1991-06-18', phone: '(555) 353-7719' },
  { id: 'p36', name: 'David Silva', dateOfBirth: '1975-10-03', phone: '(555) 357-4362' },
  { id: 'p37', name: 'Nora Eriksen', dateOfBirth: '2019-12-25', phone: '(555) 361-0935' },
  { id: 'p38', name: 'Joseph Marino', dateOfBirth: '1958-03-07', phone: '(555) 366-6208' },
  { id: 'p39', name: 'Hannah Weiss', dateOfBirth: '1987-09-29', phone: '(555) 370-3871' },
  { id: 'p40', name: 'William Grant', dateOfBirth: '1969-01-31', phone: '(555) 374-8524' },
];

export const PATIENTS_BY_ID = Object.fromEntries(PATIENTS.map((patient) => [patient.id, patient]));
export const DOCTORS_BY_ID = Object.fromEntries(DOCTORS.map((doctor) => [doctor.id, doctor]));

const TYPE_SEQUENCE: AppointmentTypeId[] = [
  'consultation',
  'follow-up',
  'procedure',
  'consultation',
  'vaccination',
  'follow-up',
];
const NOTES = ['', 'Bring previous test results', '', 'Fasting since midnight', '', ''];
// Minutes after the start of the working day, tried in turn until one fits
const START_OFFSETS = [60, 150, 0, 225, 300, 90, 360];
const APPOINTMENTS_PER_DAY = [1, 0, 2, 1];
const APPOINTMENT_COUNT = 30;

export function generateAppointments(today: Date | string = new Date()): Appointment[] {
  const weekStart = dayjs(today)
    .startOf('day')
    .subtract((dayjs(today).day() + 6) % 7, 'day');
  const appointments: Appointment[] = [];
  let index = 0;

  for (let dayOffset = 0; dayOffset < 14; dayOffset += 1) {
    const day = weekStart.add(dayOffset, 'day');

    DOCTORS.forEach((doctor, doctorIndex) => {
      const workingDay = doctor.hours[day.day()];
      const wanted = APPOINTMENTS_PER_DAY[(dayOffset + doctorIndex) % APPOINTMENTS_PER_DAY.length];

      if (!workingDay) {
        return;
      }

      const [hours, minutes] = workingDay.start.split(':').map(Number);
      const dayStart = day.hour(hours).minute(minutes);
      let placed = 0;

      for (let attempt = 0; attempt < START_OFFSETS.length && placed < wanted; attempt += 1) {
        if (appointments.length >= APPOINTMENT_COUNT) {
          return;
        }

        const type = TYPE_SEQUENCE[index % TYPE_SEQUENCE.length];
        const offset = START_OFFSETS[(attempt + index) % START_OFFSETS.length];
        const start = dayStart.add(offset, 'minute');
        const end = start.add(APPOINTMENT_TYPES[type].minutes, 'minute');
        const candidate = {
          start: start.format(DATE_TIME_FORMAT),
          end: end.format(DATE_TIME_FORMAT),
        };

        if (getPlacementProblem({ doctor, appointments, ...candidate }) === null) {
          appointments.push({
            id: `apt-${index + 1}`,
            doctorId: doctor.id,
            patientId: PATIENTS[(index * 7) % PATIENTS.length].id,
            type,
            note: NOTES[index % NOTES.length],
            ...candidate,
          });
          index += 1;
          placed += 1;
        }
      }
    });
  }

  return appointments;
}
