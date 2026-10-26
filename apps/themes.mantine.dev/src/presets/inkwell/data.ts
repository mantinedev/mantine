export type StageId = 'new' | 'artwork' | 'proof' | 'press' | 'pickup';
export type PersonId = 'RA' | 'JK' | 'SM' | 'DP';
export type ViewId = 'board' | 'list' | 'calendar';

export interface Stage {
  id: StageId;
  name: string;
}

export const STAGES: Stage[] = [
  { id: 'new', name: 'New order' },
  { id: 'artwork', name: 'Artwork check' },
  { id: 'proof', name: 'Proof sent' },
  { id: 'press', name: 'On press' },
  { id: 'pickup', name: 'Ready for pickup' },
];

export const PEOPLE: Record<PersonId, { name: string; tone: number }> = {
  RA: { name: 'Ruth Ambrose', tone: 1 },
  JK: { name: 'Jonas Kell', tone: 2 },
  SM: { name: 'Sofia Marin', tone: 3 },
  DP: { name: 'Dev Patel', tone: 4 },
};

export const PERSON_IDS = Object.keys(PEOPLE) as PersonId[];

export const INKS: Record<string, string> = {
  'PMS 186 C': '#c8102e',
  Black: '#1d1d1f',
  'PMS 7477 C': '#244c5a',
  'PMS 9224 C': '#f2ddd3',
  'Riso Fluo Pink': '#ff48b0',
  'Riso Blue': '#0078bf',
  'PMS 1505 C': '#ff6900',
  'Gold foil': '#c9a54a',
  'PMS 805 C': '#ff7276',
  'PMS 3165 C': '#00505c',
  'PMS 2766 C': '#141b4d',
};

export const CMYK = ['#00a3e0', '#e6007e', '#ffe600', '#222'];

export const STOCKS = [
  { value: 'all', label: 'All papers' },
  { value: '400gsm uncoated', label: '400gsm uncoated' },
  { value: '350gsm silk', label: '350gsm silk' },
  { value: '170gsm silk', label: '170gsm silk' },
  { value: '120gsm recycled', label: '120gsm recycled' },
  { value: '600gsm cotton', label: '600gsm cotton' },
];

const BASE = Date.UTC(2026, 9, 27);
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const dateOf = (offset: number) => new Date(BASE + offset * 86400000);

export const weekday = (offset: number) => DAYS[dateOf(offset).getUTCDay()];

export function shortDate(offset: number) {
  const date = dateOf(offset);
  return `${date.getUTCDate()} ${MONTHS[date.getUTCMonth()]}`;
}

export function dayDate(offset: number) {
  return `${weekday(offset)} ${shortDate(offset)}`;
}

export interface Order {
  id: number;
  stage: StageId;
  customer: string;
  job: string;
  stock: string;
  size: string;
  qty: string;
  finish: string;
  price: string;
  inks: string[];
  due: number;
  who: PersonId;
  comments: number;
  files: number;
  flag?: string;
  parts?: { done: number; total: number; label: string };
  approved?: boolean;
  checklist: { label: string; done: boolean }[];
  log: { text: string; when: string }[];
}

const check = (items: [string, boolean][]) => items.map(([label, done]) => ({ label, done }));
const log = (items: [string, string][]) => items.map(([text, when]) => ({ text, when }));

export const initialOrders: Order[] = [
  {
    id: 1,
    stage: 'new',
    customer: 'Halden Coffee Roasters',
    job: '500 business cards',
    stock: '400gsm uncoated',
    size: '85 × 55 mm',
    qty: '500',
    finish: 'Square corners',
    price: '£145',
    inks: ['PMS 186 C', 'Black'],
    due: 7,
    who: 'RA',
    comments: 2,
    files: 1,
    checklist: check([
      ['Logo received as vector', true],
      ['Check bleed on back', false],
      ['Send proof', false],
    ]),
    log: log([['Order placed online', 'Yesterday, 16:40']]),
  },
  {
    id: 2,
    stage: 'new',
    customer: 'Juniper & Ash',
    job: 'Wedding invitation suite, 120 sets',
    stock: '600gsm cotton',
    size: 'A6 and A7',
    qty: '120 sets',
    finish: 'Letterpress, deckled edge',
    price: '£1,280',
    inks: ['PMS 7477 C', 'PMS 9224 C'],
    due: 24,
    who: 'SM',
    comments: 5,
    files: 3,
    parts: { done: 0, total: 3, label: 'proofs approved' },
    checklist: check([
      ['Confirm guest names list', false],
      ['Choose envelope liner', false],
      ['Book letterpress time', false],
    ]),
    log: log([
      ['Deposit paid, £640', 'Today, 09:05'],
      ['Consultation in the shop', '23 Oct'],
    ]),
  },
  {
    id: 3,
    stage: 'new',
    customer: 'Leeds Zine Fair',
    job: '200 risograph zines, 24 pages A5',
    stock: '120gsm recycled',
    size: 'A5, saddle stitched',
    qty: '200',
    finish: 'Two staples',
    price: '£390',
    inks: ['Riso Fluo Pink', 'Riso Blue'],
    due: 10,
    who: 'DP',
    comments: 0,
    files: 2,
    checklist: check([
      ['Split artwork into colour layers', false],
      ['Imposition for 24 pages', false],
    ]),
    log: log([['Files uploaded', 'Today, 08:12']]),
  },
  {
    id: 4,
    stage: 'artwork',
    customer: 'Northern Line Climbing',
    job: '40 A2 event posters',
    stock: '170gsm silk',
    size: 'A2',
    qty: '40',
    finish: 'None',
    price: '£220',
    inks: ['CMYK'],
    due: 0,
    who: 'JK',
    comments: 3,
    files: 2,
    flag: 'Photos are 150 dpi, need 300',
    checklist: check([
      ['Ask for higher resolution photos', true],
      ['Fix text too close to trim', false],
    ]),
    log: log([
      ['Asked for new photos', 'Today, 10:20'],
      ['Order placed', '24 Oct'],
    ]),
  },
  {
    id: 5,
    stage: 'artwork',
    customer: 'Okafor Dental',
    job: '1,000 appointment cards',
    stock: '350gsm silk',
    size: '85 × 55 mm',
    qty: '1,000',
    finish: 'Writable matt back',
    price: '£96',
    inks: ['CMYK'],
    due: -1,
    who: 'RA',
    comments: 1,
    files: 1,
    checklist: check([
      ['Check phone number', true],
      ['Convert RGB to CMYK', false],
    ]),
    log: log([
      ['Customer chased the order', 'Today, 09:40'],
      ['Order placed', '21 Oct'],
    ]),
  },
  {
    id: 6,
    stage: 'proof',
    customer: 'Mira & Daniel',
    job: 'Place cards, menus and order of service',
    stock: '400gsm uncoated',
    size: 'Mixed',
    qty: '90 guests',
    finish: 'Gold foil names',
    price: '£760',
    inks: ['PMS 7477 C', 'Gold foil'],
    due: 9,
    who: 'SM',
    comments: 8,
    files: 4,
    parts: { done: 2, total: 3, label: 'proofs approved' },
    approved: false,
    checklist: check([
      ['Place cards proof', true],
      ['Menu proof', true],
      ['Order of service proof', false],
    ]),
    log: log([
      ['Menu proof approved', 'Yesterday, 18:02'],
      ['Place cards proof approved', '24 Oct'],
    ]),
  },
  {
    id: 7,
    stage: 'proof',
    customer: 'Bramble Bakery',
    job: '2,000 paper bag stickers, 60 mm round',
    stock: '120gsm recycled',
    size: '60 mm round',
    qty: '2,000',
    finish: 'Kiss cut on sheets',
    price: '£180',
    inks: ['PMS 1505 C', 'Black'],
    due: 3,
    who: 'DP',
    comments: 1,
    files: 1,
    approved: false,
    checklist: check([
      ['Proof sent by email', true],
      ['Customer approval', false],
    ]),
    log: log([['Proof sent', 'Yesterday, 11:30']]),
  },
  {
    id: 8,
    stage: 'press',
    customer: 'Hyde Park Picture House',
    job: '300 A3 film season posters',
    stock: '170gsm silk',
    size: 'A3',
    qty: '300',
    finish: 'None',
    price: '£410',
    inks: ['CMYK', 'PMS 805 C'],
    due: 0,
    who: 'JK',
    comments: 2,
    files: 2,
    parts: { done: 1, total: 2, label: 'runs printed' },
    checklist: check([
      ['Run 1, CMYK', true],
      ['Run 2, fluorescent', false],
      ['Trim and pack', false],
    ]),
    log: log([['Run 1 off the press', 'Today, 11:15']]),
  },
  {
    id: 9,
    stage: 'press',
    customer: 'Saltaire Books',
    job: '250 bookmarks',
    stock: '400gsm uncoated',
    size: '50 × 180 mm',
    qty: '250',
    finish: 'Round corners, tassel hole',
    price: '£120',
    inks: ['PMS 3165 C'],
    due: 2,
    who: 'RA',
    comments: 0,
    files: 1,
    checklist: check([
      ['Print', false],
      ['Corner round and drill', false],
    ]),
    log: log([['Plate made', 'Today, 08:50']]),
  },
  {
    id: 10,
    stage: 'pickup',
    customer: 'Tilly Osei',
    job: '100 letterpress business cards',
    stock: '600gsm cotton',
    size: '85 × 55 mm',
    qty: '100',
    finish: 'Edge painted navy',
    price: '£175',
    inks: ['PMS 2766 C'],
    due: -3,
    who: 'SM',
    comments: 1,
    files: 0,
    checklist: check([
      ['Packed and labelled', true],
      ['Customer emailed', true],
    ]),
    log: log([['Customer told it is ready', '24 Oct']]),
  },
  {
    id: 11,
    stage: 'pickup',
    customer: 'Kirkgate Market',
    job: '500 A5 flyers',
    stock: '170gsm silk',
    size: 'A5',
    qty: '500',
    finish: 'None',
    price: '£85',
    inks: ['CMYK'],
    due: 0,
    who: 'DP',
    comments: 0,
    files: 1,
    checklist: check([
      ['Packed and labelled', true],
      ['Customer emailed', false],
    ]),
    log: log([['Trimmed and packed', 'Today, 10:02']]),
  },
];

export const stageName = (id: StageId) => STAGES.find((stage) => stage.id === id)?.name ?? '';
