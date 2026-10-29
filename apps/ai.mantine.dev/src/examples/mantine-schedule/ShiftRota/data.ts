import dayjs from 'dayjs';

export const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export type TeamId = 'kitchen' | 'bar' | 'floor';

export interface Team {
  id: TeamId;
  label: string;
}

export interface Employee {
  id: string;
  name: string;
  team: TeamId;
  contractHours: number;
}

export interface ShiftTemplate {
  id: 'morning' | 'evening' | 'night';
  label: string;
  startTime: string;
  durationHours: number;
  color: string;
}

export interface Shift {
  id: string;
  employeeId: string;
  title: string;
  start: string;
  end: string;
  note: string;
}

export interface Vacation {
  id: string;
  employeeId: string;
  date: string;
}

export const TEAMS: Team[] = [
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'bar', label: 'Bar' },
  { id: 'floor', label: 'Floor' },
];

export const EMPLOYEES: Employee[] = [
  { id: 'marta', name: 'Marta Silva', team: 'kitchen', contractHours: 40 },
  { id: 'tom', name: 'Tom Becker', team: 'kitchen', contractHours: 32 },
  { id: 'aisha', name: 'Aisha Khan', team: 'kitchen', contractHours: 32 },
  { id: 'luis', name: 'Luis Ortega', team: 'kitchen', contractHours: 20 },
  { id: 'nina', name: 'Nina Petrova', team: 'bar', contractHours: 40 },
  { id: 'jonas', name: 'Jonas Weber', team: 'bar', contractHours: 32 },
  { id: 'chloe', name: 'Chloé Martin', team: 'bar', contractHours: 24 },
  { id: 'omar', name: 'Omar Haddad', team: 'bar', contractHours: 16 },
  { id: 'sofia', name: 'Sofia Rossi', team: 'floor', contractHours: 40 },
  { id: 'ben', name: 'Ben Carter', team: 'floor', contractHours: 32 },
  { id: 'lena', name: 'Lena Fischer', team: 'floor', contractHours: 24 },
  { id: 'yuki', name: 'Yuki Tanaka', team: 'floor', contractHours: 20 },
];

export const SHIFT_TEMPLATES: ShiftTemplate[] = [
  { id: 'morning', label: 'Morning', startTime: '06:00', durationHours: 8, color: 'blue' },
  { id: 'evening', label: 'Evening', startTime: '14:00', durationHours: 8, color: 'teal' },
  { id: 'night', label: 'Night', startTime: '22:00', durationHours: 8, color: 'violet' },
];

export const GENERIC_SHIFT_HOURS = 8;

export function getEmployee(employeeId: string | number | undefined) {
  return EMPLOYEES.find((employee) => employee.id === employeeId);
}

export function getWeekStart(date: string | Date | dayjs.Dayjs) {
  const day = dayjs(date).startOf('day');
  return day.subtract((day.day() + 6) % 7, 'day');
}

/** Start and end of a template shift on the given day */
export function getTemplateRange(template: ShiftTemplate, day: string | dayjs.Dayjs) {
  const [hours, minutes] = template.startTime.split(':').map(Number);
  const start = dayjs(day).startOf('day').hour(hours).minute(minutes);
  return {
    start: start.format(DATE_TIME_FORMAT),
    end: start.add(template.durationHours, 'hour').format(DATE_TIME_FORMAT),
  };
}

export function findTemplate(start: string, end: string) {
  return SHIFT_TEMPLATES.find((template) => {
    const range = getTemplateRange(template, start);
    return range.start === start && range.end === end;
  });
}

/** Weekday offsets from Monday (0) to Sunday (6) */
const PLAN: { employeeId: string; template: ShiftTemplate['id']; days: number[] }[] = [
  { employeeId: 'marta', template: 'morning', days: [0, 1, 2, 3, 4] },
  { employeeId: 'tom', template: 'evening', days: [0, 1, 2, 4] },
  { employeeId: 'aisha', template: 'morning', days: [0, 1, 2] },
  { employeeId: 'luis', template: 'night', days: [1, 3, 5] },
  { employeeId: 'nina', template: 'evening', days: [1, 2, 3, 4, 5] },
  { employeeId: 'jonas', template: 'morning', days: [2, 3, 4, 5] },
  { employeeId: 'chloe', template: 'evening', days: [0, 3, 6] },
  { employeeId: 'omar', template: 'night', days: [4, 5] },
  { employeeId: 'sofia', template: 'morning', days: [0, 1, 3, 4] },
  { employeeId: 'ben', template: 'evening', days: [0, 2, 3, 6] },
  { employeeId: 'lena', template: 'morning', days: [0, 5, 6] },
  { employeeId: 'yuki', template: 'evening', days: [1, 4] },
];

/** Weekday offsets from the Monday of the current week, 7+ is next week */
const VACATION_PLAN: { employeeId: string; days: number[] }[] = [
  { employeeId: 'aisha', days: [3, 4] },
  { employeeId: 'yuki', days: [2] },
  { employeeId: 'lena', days: [7, 8, 9] },
  { employeeId: 'jonas', days: [7, 8] },
];

export function createInitialShifts(today = dayjs()): Shift[] {
  const weekStart = getWeekStart(today);

  return PLAN.flatMap(({ employeeId, template, days }) => {
    const shiftTemplate = SHIFT_TEMPLATES.find((item) => item.id === template)!;
    return days.map((offset) => ({
      id: `${employeeId}-${offset}`,
      employeeId,
      title: shiftTemplate.label,
      note: '',
      ...getTemplateRange(shiftTemplate, weekStart.add(offset, 'day')),
    }));
  });
}

export function createVacations(today = dayjs()): Vacation[] {
  const weekStart = getWeekStart(today);

  return VACATION_PLAN.flatMap(({ employeeId, days }) =>
    days.map((offset) => ({
      id: `vacation-${employeeId}-${offset}`,
      employeeId,
      date: weekStart.add(offset, 'day').format('YYYY-MM-DD'),
    }))
  );
}
