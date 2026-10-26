export const DAY_START = 450;
export const DAY_END = 1140;
export const SLOT_PX = 26;
export const NOW_MIN = 11 * 60 + 20;
export const TODAY = new Date(2026, 9, 27);

export type StatusId = 'booked' | 'arrived' | 'treatment' | 'done' | 'noshow' | 'cancelled';
export type RoomId = 'Room 1' | 'Room 2' | 'Gym' | 'Video';
export type ViewId = 'prac' | 'room';

export interface Practitioner {
  name: string;
  short: string;
  role: string;
}

export interface Appointment {
  id: string;
  prac: number;
  start: number;
  dur: number;
  type: string;
  patient: string;
  room: RoomId;
  status: StatusId;
}

export interface WaitingPatient {
  id: string;
  patient: string;
  type: string;
  prac: number | null;
  note: string;
  since: string;
  urgent?: boolean;
}

interface TreatmentType {
  name: string;
  dur: number;
  gym?: boolean;
  video?: boolean;
}

export const PRACS: Practitioner[] = [
  { name: 'Siân Morgan', short: 'SM', role: 'Muscles and joints' },
  { name: 'Tom Achterberg', short: 'TA', role: 'Sports injuries' },
  { name: 'Leila Haddad', short: 'LH', role: 'Pelvic health' },
  { name: 'Raj Patel', short: 'RP', role: 'Neuro rehab' },
];

export const ROOMS: RoomId[] = ['Room 1', 'Room 2', 'Gym', 'Video'];
export const TREATMENT_ROOMS: RoomId[] = ['Room 1', 'Room 2'];

export const ROOM_ROLES: Record<RoomId, string> = {
  'Room 1': 'Treatment room',
  'Room 2': 'Treatment room',
  Gym: 'Open space',
  Video: 'Calls from home',
};

export const TYPES: TreatmentType[] = [
  { name: 'Initial assessment', dur: 60 },
  { name: 'Follow-up', dur: 30 },
  { name: 'Sports massage', dur: 45 },
  { name: 'Pelvic health', dur: 45 },
  { name: 'Neuro rehab', dur: 60, gym: true },
  { name: 'Video review', dur: 20, video: true },
];

export const typeOf = (name: string) => TYPES.find((type) => type.name === name) ?? TYPES[1];

export const STATUS: Record<StatusId, { label: string }> = {
  booked: { label: 'Booked' },
  arrived: { label: 'Arrived' },
  treatment: { label: 'In treatment' },
  done: { label: 'Done' },
  noshow: { label: 'No-show' },
  cancelled: { label: 'Cancelled' },
};

export const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const DOW_LONG = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const pad = (value: number) => String(value).padStart(2, '0');
export const hm = (minutes: number) => `${pad(Math.floor(minutes / 60))}:${pad(minutes % 60)}`;
const toMin = (value: string) => {
  const [h, m] = value.split(':').map(Number);
  return h * 60 + m;
};
export const dayKey = (date: Date) =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
export const fromKey = (key: string) => {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(y, m - 1, d);
};
export const addDays = (date: Date, amount: number) => {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
};
export const sameDay = (a: Date, b: Date) => dayKey(a) === dayKey(b);
export const longDate = (date: Date) =>
  `${DOW_LONG[date.getDay()]} ${date.getDate()} ${MONTHS[date.getMonth()]}`;
export const shortDate = (date: Date) =>
  `${DOW[date.getDay()]} ${date.getDate()} ${MONTHS[date.getMonth()].slice(0, 3)}`;
export const initials = (name: string) =>
  name
    .split(' ')
    .map((word) => word[0])
    .join('');
export const firstName = (name: string) => name.split(' ')[0];
export const slotY = (minutes: number) => ((minutes - DAY_START) / 15) * SLOT_PX;

let todayUid = 1;
const A = (
  prac: number,
  start: string,
  type: string,
  patient: string,
  room: RoomId,
  status: StatusId
): Appointment => ({
  id: `a${todayUid++}`,
  prac,
  start: toMin(start),
  dur: typeOf(type).dur,
  type,
  patient,
  room,
  status,
});

const todays: Appointment[] = [
  A(0, '08:00', 'Follow-up', 'Gareth Lloyd', 'Room 1', 'done'),
  A(0, '08:45', 'Initial assessment', 'Priya Shah', 'Room 1', 'done'),
  A(0, '10:00', 'Follow-up', 'Owen Hughes', 'Room 1', 'done'),
  A(0, '11:00', 'Sports massage', 'Callum Reid', 'Room 1', 'treatment'),
  A(0, '12:00', 'Follow-up', 'Maria Silva', 'Room 1', 'booked'),
  A(0, '14:00', 'Initial assessment', 'Ben Carter', 'Room 1', 'booked'),
  A(0, '15:30', 'Follow-up', 'Ffion Davies', 'Room 1', 'booked'),
  A(0, '16:30', 'Follow-up', 'Joe Bennett', 'Room 1', 'booked'),
  A(1, '07:30', 'Sports massage', 'Lewis Grant', 'Room 2', 'done'),
  A(1, '08:30', 'Follow-up', 'Anya Kowalski', 'Room 2', 'noshow'),
  A(1, '09:30', 'Initial assessment', 'Sam Whitfield', 'Room 2', 'done'),
  A(1, '11:00', 'Follow-up', 'Noah Evans', 'Room 2', 'treatment'),
  A(1, '11:45', 'Sports massage', 'Isla Murray', 'Room 2', 'arrived'),
  A(1, '13:30', 'Follow-up', 'Rhys Thomas', 'Room 2', 'booked'),
  A(1, '14:30', 'Sports massage', 'Kai Jones', 'Room 1', 'booked'),
  A(1, '17:00', 'Initial assessment', 'Ella Wright', 'Room 2', 'booked'),
  A(2, '09:00', 'Video review', 'Grace Hall', 'Video', 'done'),
  A(2, '10:30', 'Pelvic health', 'Chloe Adams', 'Room 2', 'done'),
  A(2, '12:30', 'Pelvic health', 'Megan Ellis', 'Room 2', 'booked'),
  A(2, '14:00', 'Video review', 'Zara Ahmed', 'Video', 'booked'),
  A(2, '15:30', 'Pelvic health', 'Laura Jenkins', 'Room 2', 'booked'),
  A(2, '17:15', 'Video review', 'Holly Price', 'Video', 'booked'),
  A(3, '08:00', 'Neuro rehab', 'Peter Walsh', 'Gym', 'done'),
  A(3, '09:30', 'Neuro rehab', 'Jean Douglas', 'Gym', 'done'),
  A(3, '11:00', 'Neuro rehab', 'Arthur Byrne', 'Gym', 'treatment'),
  A(3, '13:00', 'Initial assessment', 'Diane Foster', 'Room 1', 'booked'),
  A(3, '15:00', 'Neuro rehab', 'Tomasz Nowak', 'Gym', 'booked'),
  A(3, '16:30', 'Follow-up', 'Ruth Carter', 'Room 2', 'booked'),
  A(3, '18:00', 'Follow-up', 'Alan Hughes', 'Room 1', 'cancelled'),
];

const NAMES = [
  'Aled Price',
  'Bethan Rees',
  'Carys Owen',
  'Dylan Moss',
  'Eleri James',
  'Finn Walker',
  'Gwen Parry',
  'Harri Evans',
  'Iwan Lewis',
  'Jess Marsh',
  'Kieran Doyle',
  'Lowri Pugh',
  'Mali Roberts',
  'Nia Howells',
  'Osian Bell',
  'Poppy Shaw',
  'Rob Turner',
  'Seren Hopkins',
  'Tegan Ward',
  'Will Harding',
  'Yusuf Ali',
  'Zoe Clarke',
  'Amira Khan',
  'Bryn Collins',
];

const PRAC_TYPES = [
  ['Initial assessment', 'Follow-up', 'Follow-up', 'Sports massage'],
  ['Sports massage', 'Follow-up', 'Initial assessment', 'Sports massage'],
  ['Pelvic health', 'Video review', 'Pelvic health', 'Follow-up'],
  ['Neuro rehab', 'Neuro rehab', 'Follow-up', 'Initial assessment'],
];

function rng(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function generateDay(date: Date): Appointment[] {
  const key = dayKey(date);
  if (sameDay(date, TODAY)) {
    return todays;
  }
  const dow = date.getDay();
  if (dow === 0) {
    return [];
  }
  const random = rng(Number(key.replace(/-/g, '')));
  const list: Appointment[] = [];
  const pracs = dow === 6 ? [0, 1] : [0, 1, 2, 3];
  const end = dow === 6 ? 13 * 60 : DAY_END;
  const past = date < TODAY;
  let uid = 1;
  pracs.forEach((prac) => {
    let t = (dow === 6 ? 480 : DAY_START) + Math.floor(random() * 3) * 15;
    while (t < end - 30) {
      const type = typeOf(PRAC_TYPES[prac][Math.floor(random() * 4)]);
      if (t + type.dur > end) {
        break;
      }
      const start = t;
      let room: RoomId | undefined = type.gym ? 'Gym' : type.video ? 'Video' : undefined;
      if (!room) {
        room =
          TREATMENT_ROOMS.find(
            (rm) =>
              !list.some(
                (a) => a.room === rm && a.start < start + type.dur && start < a.start + a.dur
              )
          ) ?? 'Gym';
      }
      const status: StatusId = past
        ? random() < 0.06
          ? 'noshow'
          : 'done'
        : random() < 0.04
          ? 'cancelled'
          : 'booked';
      list.push({
        id: `${key}-${uid++}`,
        prac,
        start,
        dur: type.dur,
        type: type.name,
        patient: NAMES[Math.floor(random() * NAMES.length)],
        room,
        status,
      });
      t += type.dur + Math.floor(random() * 4) * 15;
      if (t > 12 * 60 && t < 13 * 60 && random() < 0.6) {
        t = 13 * 60;
      }
    }
  });
  return list;
}

export const initialWaitlist: WaitingPatient[] = [
  {
    id: 'w1',
    patient: 'Hannah Price',
    type: 'Follow-up',
    prac: 0,
    note: 'Any afternoon this week',
    since: '21 Oct',
  },
  {
    id: 'w2',
    patient: 'Oliver Byrne',
    type: 'Sports massage',
    prac: 1,
    note: 'Before 10:00 or after 16:00',
    since: '23 Oct',
  },
  {
    id: 'w3',
    patient: 'Yasmin Kaur',
    type: 'Pelvic health',
    prac: 2,
    note: 'Prefers a morning',
    since: '24 Oct',
  },
  {
    id: 'w4',
    patient: 'George Mills',
    type: 'Initial assessment',
    prac: null,
    note: 'GP referral, lower back pain 7/10',
    since: '26 Oct',
    urgent: true,
  },
];

export const PATIENTS = Array.from(
  new Set([...todays.map((a) => a.patient), ...initialWaitlist.map((w) => w.patient), ...NAMES])
).sort();

export interface Visit {
  date: Date;
  type: string;
  note: string;
}

const VISIT_NOTES = [
  'Range of movement up 15°',
  'Pain 4/10, down from 6',
  'New home exercises added',
  'Taped knee, review in two weeks',
  'Discharged from the gym plan',
];

export function visitHistory(name: string): Visit[] {
  const random = rng(name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0));
  const count = 1 + Math.floor(random() * 4);
  const out: Visit[] = [];
  let date = addDays(TODAY, -7);
  for (let i = 0; i < count; i++) {
    date = addDays(date, -(7 + Math.floor(random() * 14)));
    out.push({
      date,
      type: i === count - 1 ? 'Initial assessment' : 'Follow-up',
      note: VISIT_NOTES[Math.floor(random() * VISIT_NOTES.length)],
    });
  }
  return out;
}

export interface Clashes {
  ids: Set<string>;
  ranges: Record<string, [number, number][]>;
}

export function findClashes(list: Appointment[]): Clashes {
  const ids = new Set<string>();
  const ranges: Record<string, [number, number][]> = { 'Room 1': [], 'Room 2': [] };
  TREATMENT_ROOMS.forEach((room) => {
    const items = list
      .filter((a) => a.room === room && a.status !== 'cancelled' && a.status !== 'noshow')
      .sort((a, b) => a.start - b.start);
    for (let i = 0; i < items.length; i++) {
      for (let j = i + 1; j < items.length; j++) {
        const a = items[i];
        const b = items[j];
        if (b.start < a.start + a.dur) {
          ids.add(a.id);
          ids.add(b.id);
          ranges[room].push([b.start, Math.min(a.start + a.dur, b.start + b.dur)]);
        }
      }
    }
  });
  return { ids, ranges };
}

const overlaps = (a: Appointment, start: number, dur: number) =>
  a.start < start + dur && start < a.start + a.dur;

export function freeRoomFor(
  typeName: string,
  start: number,
  dur: number,
  list: Appointment[],
  ignoreId?: string
): RoomId | null {
  const type = typeOf(typeName);
  if (type.gym) {
    return 'Gym';
  }
  if (type.video) {
    return 'Video';
  }
  return (
    TREATMENT_ROOMS.find(
      (room) =>
        !list.some(
          (a) =>
            a.id !== ignoreId &&
            a.room === room &&
            a.status !== 'cancelled' &&
            overlaps(a, start, dur)
        )
    ) ?? null
  );
}

export function pracFree(
  prac: number,
  start: number,
  dur: number,
  list: Appointment[],
  ignoreId?: string
) {
  return !list.some(
    (a) =>
      a.id !== ignoreId &&
      a.prac === prac &&
      a.status !== 'cancelled' &&
      a.status !== 'noshow' &&
      overlaps(a, start, dur)
  );
}

export function roomTakenBy(
  room: RoomId,
  start: number,
  dur: number,
  list: Appointment[],
  ignoreId?: string
) {
  return list.find(
    (a) =>
      a.id !== ignoreId && a.room === room && a.status !== 'cancelled' && overlaps(a, start, dur)
  );
}

export function roomFits(typeName: string, room: RoomId) {
  const type = typeOf(typeName);
  return (room === 'Gym') === !!type.gym && (room === 'Video') === !!type.video;
}

export const timeOptions = (last: number) => {
  const out: { value: string; label: string }[] = [];
  for (let m = DAY_START; m <= last; m += 15) {
    out.push({ value: String(m), label: hm(m) });
  }
  return out;
};
