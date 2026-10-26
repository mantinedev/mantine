import type { Tone } from './theme';

const PHOTOS_DIR = '/presets/roundabout-trip-chat';

export const PHOTOS = {
  aurora: `${PHOTOS_DIR}/aurora.jpg`,
  reine: `${PHOTOS_DIR}/reine.jpg`,
  sakrisoy: `${PHOTOS_DIR}/sakrisoy.jpg`,
  cabin: `${PHOTOS_DIR}/cabin.jpg`,
  above: `${PHOTOS_DIR}/above.jpg`,
};

export type PersonId = 'sam' | 'ingrid' | 'tomas' | 'mira' | 'lars' | 'aino';

export interface Person {
  id: PersonId;
  name: string;
  short: string;
  tone: Tone;
}

export const PEOPLE: Person[] = [
  { id: 'sam', name: 'You', short: 'SA', tone: 'sky' },
  { id: 'ingrid', name: 'Ingrid', short: 'IN', tone: 'coral' },
  { id: 'tomas', name: 'Tomas', short: 'TO', tone: 'green' },
  { id: 'mira', name: 'Mira', short: 'MI', tone: 'violet' },
  { id: 'lars', name: 'Lars', short: 'LA', tone: 'yellow' },
  { id: 'aino', name: 'Aino', short: 'AI', tone: 'cyan' },
];

export function getPerson(id: PersonId) {
  return PEOPLE.find((person) => person.id === id)!;
}

export interface Group {
  name: string;
  last: string;
  time: string;
  unread?: number;
  tone?: Tone;
  initial?: string;
  current?: boolean;
}

export const GROUPS: Group[] = [
  {
    name: 'Lofoten, March',
    last: 'You: Adding it to the list. I’ll drive…',
    time: '10:20',
    current: true,
  },
  {
    name: 'Kitchen crew',
    last: 'Mo: Who took the big pan home',
    time: '09:58',
    unread: 3,
    tone: 'coral',
    initial: 'K',
  },
  {
    name: 'Mum’s 60th',
    last: 'Aunt Liv: Cake is ordered, 30 people',
    time: 'Yesterday',
    unread: 1,
    tone: 'yellow',
    initial: 'M',
  },
  {
    name: 'Climbing Sundays',
    last: 'Ana: Wall is closed, try outside?',
    time: 'Yesterday',
    tone: 'green',
    initial: 'C',
  },
  { name: 'Flatmates', last: 'Joel: Bin day tomorrow', time: 'Tue', tone: 'violet', initial: 'F' },
  {
    name: 'Book club',
    last: 'Priya: Chapter 9 was something',
    time: 'Mon',
    tone: 'cyan',
    initial: 'B',
  },
];

export interface PollOption {
  id: string;
  label: string;
  short: string;
  voters: PersonId[];
}

export const POLL: PollOption[] = [
  {
    id: 'svolvaer',
    label: 'Rorbu on the harbour, Svolvær',
    short: 'Rorbu, Svolvær',
    voters: ['tomas', 'mira', 'aino'],
  },
  {
    id: 'hamnoy',
    label: 'Red cabins, Hamnøy',
    short: 'Red cabins, Hamnøy',
    voters: ['lars', 'ingrid'],
  },
  { id: 'reine', label: 'Sea house, Reine', short: 'Sea house, Reine', voters: [] },
];

export const DATES_START = new Date(2027, 2, 6);
export const DATES_COUNT = 14;
export const TODAY = new Date(2027, 1, 22);

export type Availability = Record<PersonId, number[]>;

export const AVAILABILITY: Availability = {
  sam: [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1],
  ingrid: [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  tomas: [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  mira: [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  lars: [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  aino: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
};

export interface PackItem {
  id: number;
  label: string;
  who: PersonId;
  done: boolean;
}

export const PACKING: PackItem[] = [
  { id: 1, label: 'Crampons for everyone', who: 'lars', done: true },
  { id: 2, label: 'Headtorches', who: 'mira', done: false },
  { id: 3, label: 'Groceries for the first night', who: 'ingrid', done: false },
  { id: 4, label: 'Rental car from Leknes', who: 'sam', done: true },
  { id: 5, label: 'Tripod and spare batteries', who: 'tomas', done: false },
  { id: 6, label: 'Sauna towels', who: 'aino', done: false },
];

export interface Expense {
  what: string;
  by: PersonId;
  amount: number;
}

export const EXPENSES: Expense[] = [
  { what: 'Ferry', by: 'ingrid', amount: 4800 },
  { what: 'Cabin deposit', by: 'tomas', amount: 3000 },
  { what: 'Car, 4 days', by: 'sam', amount: 2100 },
];

export const CREDITS =
  'Photos from Wikimedia Commons: Reine at dawn by Christoph Strässler from Oberdorf BL, Schweiz (CC BY-SA 2.0); Svinøya rorbuer by Christoph Strässler (CC BY-SA 2.0); Aurora by Russo Francesco F R P I X C O M (CC BY 3.0); Sakrisøy by Svein Magne Tunli (CC BY-SA 4.0); Reine from above by Arnas Goldberg (CC BY 3.0). Roundabout is a fictional app.';
