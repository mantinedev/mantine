export interface LessonType {
  id: string;
  name: string;
  length: number;
  price: number;
  meta: string;
  where: string;
}

export const LESSON_TYPES: LessonType[] = [
  {
    id: 'trial',
    name: 'Trial lesson',
    length: 30,
    price: 0,
    meta: '30 minutes in the studio. Meet the piano and me.',
    where: 'Studio, Oudegracht 211',
  },
  {
    id: 'single',
    name: 'Single lesson',
    length: 45,
    price: 48,
    meta: '45 minutes, one-to-one in the studio.',
    where: 'Studio, Oudegracht 211',
  },
  {
    id: 'pack',
    name: 'Pack of 10',
    length: 45,
    price: 430,
    meta: 'Ten 45-minute lessons, €43 each. Book the first one now.',
    where: 'Studio, Oudegracht 211',
  },
  {
    id: 'online',
    name: 'Online lesson',
    length: 45,
    price: 44,
    meta: '45 minutes on video. Evenings available.',
    where: 'Online, link sent by email',
  },
];

export const NOTES = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
export const FREQUENCIES = [261.63, 293.66, 329.63, 349.23, 392.0, 440.0, 493.88];
export const DOW = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
export const BLACK_KEYS = [1, 2, 4, 5, 6];
const DOW_LONG = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const MONTHS = [
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

export const DAY = 86400000;
export const TODAY = Date.UTC(2026, 9, 26);
export const FIRST_MONDAY = Date.UTC(2026, 9, 26);
export const LAST_DAY = Date.UTC(2026, 11, 20);
export const INITIAL_DAY = Date.UTC(2026, 9, 29);

export const TIME_ZONES = [
  { value: '0', label: 'Amsterdam' },
  { value: '-1', label: 'London' },
  { value: '-6', label: 'New York' },
];

export const AGE_GROUPS = ['Child, 6 to 11', 'Teenager, 12 to 17', 'Adult', 'Adult, 65 and over'];
export const LEVELS = ['Never played', 'Played years ago', 'Playing now'];

export type DayStatus = 'past' | 'off' | 'open' | 'full';

export interface Slot {
  time: string;
  taken: boolean;
}

export interface DayInfo {
  status: DayStatus;
  slots: Slot[];
  free: number;
}

export const dowIndex = (t: number) => (new Date(t).getUTCDay() + 6) % 7;

function hash(n: number) {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

export function formatDate(t: number) {
  const d = new Date(t);
  return `${DOW_LONG[dowIndex(t)]} ${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]}`;
}

export function formatWeekRange(weekStart: number) {
  const first = new Date(weekStart);
  const last = new Date(weekStart + 6 * DAY);
  const short = (d: Date) => `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()].slice(0, 3)}`;
  return `${short(first)} to ${short(last)}`;
}

export function toDateString(t: number) {
  return new Date(t).toISOString().slice(0, 10);
}

export function fromDateString(value: string) {
  const [y, m, d] = value.split('-').map(Number);
  return Date.UTC(y, m - 1, d);
}

function baseTimes(t: number, type: string) {
  const i = dowIndex(t);
  if (i === 2 || i === 6) {
    return null;
  }
  if (i === 5) {
    return ['09:30', '10:30', '11:30'];
  }
  const list = ['13:30', '14:30', '15:30', '16:30'];
  if (i === 0 || i === 3) {
    list.unshift('09:30', '10:30', '11:30');
  }
  if (i === 1 || i === 3) {
    list.push('18:00', '19:00');
  }
  if (type === 'online') {
    list.push('20:00');
  }
  return list;
}

export function getDayInfo(t: number, type: string): DayInfo {
  if (t < TODAY || t > LAST_DAY) {
    return { status: 'past', slots: [], free: 0 };
  }
  const times = baseTimes(t, type);
  if (!times) {
    return { status: 'off', slots: [], free: 0 };
  }
  const fullDay = hash(t / DAY) > 0.82;
  const slots = times.map((time, k) => ({
    time,
    taken: fullDay || hash((t / DAY) * 7 + k) > 0.62,
  }));
  const free = slots.filter((slot) => !slot.taken).length;
  return { status: free ? 'open' : 'full', slots, free };
}

export function getDayLabel(info: DayInfo) {
  if (info.status === 'open') {
    return `${info.free} ${info.free === 1 ? 'time' : 'times'}`;
  }
  if (info.status === 'full') {
    return 'Full';
  }
  return info.status === 'off' ? 'No lessons' : 'Not open';
}

export function shiftTime(time: string, tz: number) {
  const [h, m] = time.split(':').map(Number);
  let hours = h + tz;
  const previousDay = hours < 0;
  if (previousDay) {
    hours += 24;
  }
  return `${String(hours).padStart(2, '0')}:${String(m).padStart(2, '0')}${previousDay ? ' (day before)' : ''}`;
}

export function getTimeZoneName(tz: number) {
  return TIME_ZONES.find((zone) => Number(zone.value) === tz)?.label ?? 'Amsterdam';
}

export function formatPrice(price: number) {
  return price ? `€${price}` : 'Free';
}

export const FACTS = [
  { value: '14 years', label: 'teaching in Utrecht' },
  { value: '38', label: 'students this year' },
  { value: '30 min', label: 'free trial lesson' },
];

export const NAV_LINKS = [
  { href: '#book', label: 'Book' },
  { href: '#about', label: 'About' },
  { href: '#first', label: 'First lesson' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'Questions' },
];

export const ABOUT_POINTS = [
  'Classical, film music, pop and early jazz',
  'Preparation for ABRSM grades 1 to 6',
  'Lessons in Dutch, English or French',
];

export const FIRST_LESSON = [
  {
    time: '0:00',
    title: 'Hello and a cup of tea',
    text: 'We talk about what you’d like to play and why now.',
  },
  {
    time: '0:05',
    title: 'Hands on the keys',
    text: 'A short piece you can play by the end, even if you’ve never touched a piano.',
  },
  {
    time: '0:20',
    title: 'A plan that fits your week',
    text: 'How often, how long to practise, and the first piece to take home.',
  },
  {
    time: '0:30',
    title: 'Decide later',
    text: 'No sign-up at the door. Book more lessons when you’re ready.',
  },
];

export const REVIEWS = [
  {
    quote:
      '“I stopped at fourteen and thought that was it. Two years with Anouk and I played Clair de lune at my sister’s wedding. Badly in places, but all the way through.”',
    name: 'Maarten',
    detail: 'Lombok',
    chip: 'Adult, came back after 30 years',
  },
  {
    quote:
      '“Sem practises without being asked. I don’t know what she did, but please keep doing it.”',
    name: 'Fatima',
    detail: 'mother of Sem, 8',
  },
  {
    quote:
      '“Online lessons from New York work better than I expected. She notices my wrists through a webcam.”',
    name: 'Claire',
    detail: 'online student since 2024',
  },
];

export const FAQS = [
  {
    value: 'piano',
    question: 'Do I need my own piano?',
    answer:
      'A keyboard with 61 weighted keys is enough for the first year. I can help you choose one, or tell you which shops in Utrecht rent them by the month.',
  },
  {
    value: 'pack',
    question: 'How does the pack of 10 work?',
    answer:
      'Book the first lesson here and we agree the other nine dates together. The pack is valid for six months and saves €50.',
  },
  {
    value: 'cancel',
    question: 'What if I need to cancel?',
    answer:
      'Cancel or move a lesson for free up to 24 hours before it starts, using the link in your confirmation email. Later than that, I charge half the lesson.',
  },
  {
    value: 'studio',
    question: 'Where is the studio?',
    answer:
      'On the first floor at Oudegracht 211, a five-minute walk from the Domplein. There is a bike rack outside and a lift.',
  },
];
