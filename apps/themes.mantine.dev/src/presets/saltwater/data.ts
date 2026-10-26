export const PHOTOS = '/presets/saltwater-pass';

export type Mode = 'foot' | 'bike' | 'car';

export interface Stop {
  id: string;
  name: string;
  gd: string;
  x: number;
  y: number;
  nights: number;
  boat?: boolean;
  lx: number;
  ly: number;
  anchor: 'start' | 'middle' | 'end';
}

export interface Port {
  id: string;
  name: string;
  x: number;
  y: number;
}

export interface Leg {
  from: string;
  to: string;
  kind: 'sea' | 'road';
  control?: [number, number];
}

export const STOPS: Stop[] = [
  {
    id: 'mull',
    name: 'Mull',
    gd: 'Muile',
    x: 392,
    y: 452,
    nights: 2,
    lx: 0,
    ly: -34,
    anchor: 'middle',
  },
  { id: 'iona', name: 'Iona', gd: 'Ì', x: 318, y: 492, nights: 1, lx: -12, ly: 26, anchor: 'end' },
  {
    id: 'staffa',
    name: 'Staffa',
    gd: 'Stafa',
    x: 300,
    y: 438,
    nights: 0,
    boat: true,
    lx: -12,
    ly: 4,
    anchor: 'end',
  },
  {
    id: 'treshnish',
    name: 'Treshnish',
    gd: 'Na h-Eileanan Treiseanach',
    x: 262,
    y: 404,
    nights: 0,
    boat: true,
    lx: -12,
    ly: 4,
    anchor: 'end',
  },
  {
    id: 'coll',
    name: 'Coll',
    gd: 'Cola',
    x: 214,
    y: 452,
    nights: 1,
    lx: -12,
    ly: 4,
    anchor: 'end',
  },
  {
    id: 'tiree',
    name: 'Tiree',
    gd: 'Tiriodh',
    x: 166,
    y: 500,
    nights: 2,
    lx: -12,
    ly: 4,
    anchor: 'end',
  },
  {
    id: 'barra',
    name: 'Barra',
    gd: 'Barraigh',
    x: 132,
    y: 352,
    nights: 2,
    lx: -12,
    ly: 4,
    anchor: 'end',
  },
  {
    id: 'southuist',
    name: 'South Uist',
    gd: 'Uibhist a Deas',
    x: 156,
    y: 288,
    nights: 1,
    lx: -12,
    ly: 4,
    anchor: 'end',
  },
  {
    id: 'benbecula',
    name: 'Benbecula',
    gd: 'Beinn nam Fadhla',
    x: 178,
    y: 238,
    nights: 1,
    lx: -12,
    ly: 4,
    anchor: 'end',
  },
  {
    id: 'northuist',
    name: 'North Uist',
    gd: 'Uibhist a Tuath',
    x: 206,
    y: 188,
    nights: 1,
    lx: -12,
    ly: 4,
    anchor: 'end',
  },
  {
    id: 'harris',
    name: 'Harris',
    gd: 'Na Hearadh',
    x: 262,
    y: 122,
    nights: 2,
    lx: -12,
    ly: 4,
    anchor: 'end',
  },
  {
    id: 'lewis',
    name: 'Lewis',
    gd: 'Leòdhas',
    x: 318,
    y: 58,
    nights: 2,
    lx: 14,
    ly: 4,
    anchor: 'start',
  },
];

export const PORTS: Port[] = [
  { id: 'oban', name: 'Oban', x: 470, y: 470 },
  { id: 'uig', name: 'Uig, Skye', x: 388, y: 182 },
  { id: 'ullapool', name: 'Ullapool', x: 470, y: 96 },
];

export const LEGS: Leg[] = [
  { from: 'oban', to: 'mull', kind: 'sea' },
  { from: 'mull', to: 'iona', kind: 'road' },
  { from: 'iona', to: 'staffa', kind: 'sea' },
  { from: 'staffa', to: 'treshnish', kind: 'sea' },
  { from: 'oban', to: 'coll', kind: 'sea' },
  { from: 'coll', to: 'tiree', kind: 'sea' },
  { from: 'oban', to: 'barra', kind: 'sea', control: [330, 300] },
  { from: 'barra', to: 'southuist', kind: 'sea' },
  { from: 'southuist', to: 'benbecula', kind: 'road' },
  { from: 'benbecula', to: 'northuist', kind: 'road' },
  { from: 'northuist', to: 'harris', kind: 'sea' },
  { from: 'harris', to: 'lewis', kind: 'road' },
  { from: 'uig', to: 'harris', kind: 'sea' },
  { from: 'uig', to: 'northuist', kind: 'sea' },
  { from: 'ullapool', to: 'lewis', kind: 'sea' },
];

export const ISLAND_SHAPES: [number, number, number, number, number][] = [
  [300, 78, 44, 26, -38],
  [256, 128, 30, 16, -30],
  [208, 192, 26, 14, -24],
  [180, 240, 16, 11, -10],
  [158, 292, 13, 26, 12],
  [132, 354, 11, 9, 0],
  [404, 448, 46, 28, -14],
  [318, 492, 6, 4, 0],
  [300, 438, 4, 3, 0],
  [262, 404, 8, 3, -30],
  [214, 452, 18, 6, -32],
  [166, 500, 20, 7, -18],
  [400, 172, 40, 30, 20],
];

export interface StampData {
  id: string;
  photo: string | null;
  value: string;
  caption: string;
}

export const STAMPS: StampData[] = [
  { id: 'harris', photo: 'hero.jpg', value: '2 nights', caption: 'Luskentyre beach' },
  { id: 'barra', photo: 'barra.jpg', value: '2 nights', caption: 'Beach runway' },
  { id: 'mull', photo: 'tobermory.jpg', value: '2 nights', caption: 'Tobermory' },
  { id: 'iona', photo: 'iona.jpg', value: '1 night', caption: 'The abbey' },
  { id: 'lewis', photo: 'callanish.jpg', value: '2 nights', caption: 'Callanish stones' },
  { id: 'staffa', photo: 'staffa.jpg', value: 'Boat trip', caption: 'Fingal’s Cave' },
  { id: 'treshnish', photo: 'puffin.jpg', value: 'Boat trip', caption: 'Puffins on Lunga' },
  { id: 'tiree', photo: null, value: '2 nights', caption: 'Surf and machair' },
];

export const PRICES: Record<Mode, [number, number, number]> = {
  foot: [89, 139, 199],
  bike: [99, 154, 219],
  car: [290, 420, 590],
};

export const PASSES = [
  {
    days: 8,
    title: 'Weekender plus',
    desc: 'Two or three islands close together. Mull, Iona and Staffa fit nicely.',
  },
  {
    days: 15,
    title: 'The long way north',
    desc: 'Oban to Stornoway with time on each island. Our most popular pass.',
  },
  {
    days: 30,
    title: 'All of it, slowly',
    desc: 'Every island on the map, with spare days for the weather.',
  },
];

export const BOAT_PRICE = 45;

export const MODE_LABELS: Record<Mode, string> = {
  foot: 'on foot',
  bike: 'with a bike',
  car: 'with a car',
};

export const INITIAL_TRIP = ['mull', 'iona', 'staffa', 'barra', 'harris', 'lewis'];

export const NAV_LINKS = [
  { href: '#route', label: 'Plan a trip' },
  { href: '#islands', label: 'Islands' },
  { href: '#passes', label: 'Passes' },
  { href: '#weather', label: 'Weather days' },
];

export interface PostcardData {
  place: string;
  photo: string;
  alt: string;
  message: string;
  to: [string, string];
  who: string;
  pass: string;
  stamp: 'wave' | 'columns' | 'cross';
}

export const POSTCARDS: PostcardData[] = [
  {
    place: 'Barra',
    photo: 'barra.jpg',
    alt: 'A small plane landing on the beach runway at Barra',
    message:
      'We landed on the beach! Then took the ferry north and cycled the causeways all the way to Lewis. 11 days, never once used the car.',
    to: ['The Nowak family', 'Leeds'],
    who: 'Ola and Marek Nowak',
    pass: '15-day pass with bikes',
    stamp: 'wave',
  },
  {
    place: 'Staffa',
    photo: 'staffa.jpg',
    alt: 'Fingal’s Cave on Staffa, with tall basalt columns rising from the sea',
    message:
      'Fingal’s Cave is louder than you’d think. The boat waited an extra half hour because the puffins wouldn’t leave us alone.',
    to: ['Priya Desai', 'Bristol'],
    who: 'Priya Desai',
    pass: '8-day pass on foot',
    stamp: 'columns',
  },
  {
    place: 'Iona',
    photo: 'iona.jpg',
    alt: 'Iona Abbey and the island hill seen across the water',
    message:
      'Third time on Iona and the first time without driving. The bus across Mull is the best seat on the whole trip.',
    to: ['Hamish Ross', 'Perth'],
    who: 'Hamish Ross',
    pass: '30-day pass on foot',
    stamp: 'cross',
  },
];

export const FAQ = [
  {
    question: 'Do I need to book each ferry?',
    answer:
      'On foot or with a bike, no. Just show the pass on your phone. With a car, book a deck space for each sailing in the app, free, up to the day before.',
  },
  {
    question: 'Do the days need to be in a row?',
    answer:
      'No. An 8-day pass is any 8 travel days within a month. Days you spend on one island without sailing don’t count.',
  },
  {
    question: 'Is Staffa really included?',
    answer:
      'The pass gets you to Fionnphort. The boat to Staffa and the Treshnish Isles is a £45 add-on that you can buy with the pass or on the day.',
  },
  {
    question: 'Can I get a refund?',
    answer:
      'Yes, in full until your first sailing. After that, unused days can be moved to next season once.',
  },
];

export const STOPS_BY_ID: Record<string, Stop> = Object.fromEntries(STOPS.map((s) => [s.id, s]));

export const PLACES_BY_ID: Record<string, { x: number; y: number }> = Object.fromEntries(
  [...STOPS, ...PORTS].map((p) => [p.id, p])
);

export interface Trip {
  list: Stop[];
  nights: number;
  boats: number;
  passIndex: number;
  price: number;
  total: number;
  end: string;
}

export function getTrip(selected: string[], mode: Mode): Trip {
  const list = STOPS.filter((stop) => selected.includes(stop.id));
  const nights = list.reduce((sum, stop) => sum + stop.nights, 0);
  const boats = list.some((stop) => stop.boat) ? BOAT_PRICE : 0;
  const days = nights + 1;
  const passIndex = days <= 8 ? 0 : days <= 15 ? 1 : 2;
  const price = PRICES[mode][passIndex];
  const last = list.filter((stop) => !stop.boat).at(-1);
  return {
    list,
    nights,
    boats,
    passIndex,
    price,
    total: list.length ? price + boats : 0,
    end: last ? (last.id === 'lewis' ? 'Stornoway' : last.name) : 'Anywhere',
  };
}

export function isPortUsed(id: string, selected: string[]) {
  if (id === 'oban') {
    return true;
  }
  if (id === 'uig') {
    return (
      selected.includes('harris') &&
      !selected.includes('northuist') &&
      !selected.includes('barra') &&
      !selected.includes('southuist')
    );
  }
  if (id === 'ullapool') {
    return selected.includes('lewis') && !selected.includes('harris');
  }
  return false;
}

export function pluralize(count: number, one: string, many: string) {
  return `${count} ${count === 1 ? one : many}`;
}
