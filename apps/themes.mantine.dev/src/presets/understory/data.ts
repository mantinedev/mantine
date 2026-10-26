export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export type PlantKey =
  | 'fern'
  | 'hydrangea'
  | 'guelder'
  | 'brunnera'
  | 'hosta'
  | 'hellebore'
  | 'cyclamen'
  | 'foxglove'
  | 'anemone';

export interface Plant {
  name: string;
  latin: string;
  height: string;
  spread: number;
  leaf: string;
  flower: string | null;
  months: number[];
  price: number;
  pot: string;
  toxic: boolean;
  note: string;
  photo?: string;
  autumn?: string;
  winter?: string;
  bare?: boolean;
  dormant?: Season[];
  swaps: [string, string][];
}

export interface PlantInstance {
  id: string;
  plant: PlantKey;
  x: number;
  y: number;
  versions: number[];
}

export const PHOTO_PATH = '/presets/understory-garden-planner';

export const PLANTS: Record<PlantKey, Plant> = {
  fern: {
    name: 'Wood fern',
    latin: 'Dryopteris ludoviciana',
    height: '90 cm',
    spread: 90,
    leaf: '#4f7a2f',
    flower: null,
    months: [],
    price: 12,
    pot: '2 L pot',
    toxic: false,
    photo: 'fern.jpg',
    note: 'Takes the darkest corner. Fronds stay green into winter, then brown off in a hard frost.',
    winter: '#8a7a4a',
    swaps: [
      ['Hart’s-tongue fern', 'Asplenium scolopendrium, glossy and evergreen'],
      ['Soft shield fern', 'Polystichum setiferum, evergreen lace'],
    ],
  },
  hydrangea: {
    name: 'Lacecap hydrangea',
    latin: 'Hydrangea macrophylla',
    height: '1.2 m',
    spread: 120,
    leaf: '#4e7d3a',
    flower: '#c86fb8',
    months: [7, 8, 9],
    price: 24,
    pot: '5 L pot',
    toxic: true,
    photo: 'hydrangea.jpg',
    note: 'Flowers turn bluer in acid soil. On your clay they’ll stay pink to violet.',
    bare: true,
    swaps: [
      ['Guelder rose', 'Viburnum opulus, native, berries for birds'],
      ['Christmas box', 'Sarcococca confusa, scented in January'],
    ],
  },
  guelder: {
    name: 'Guelder rose',
    latin: 'Viburnum opulus',
    height: '2 m',
    spread: 100,
    leaf: '#55803e',
    flower: '#f4f1e6',
    months: [5, 6],
    price: 18,
    pot: '3 L pot',
    toxic: false,
    note: 'Native shrub. White lacecap flowers in May, red berries for birds in autumn.',
    autumn: '#c0392b',
    bare: true,
    swaps: [],
  },
  brunnera: {
    name: 'Brunnera ‘Jack Frost’',
    latin: 'Brunnera macrophylla',
    height: '40 cm',
    spread: 50,
    leaf: '#b5c6b0',
    flower: '#4f8fe0',
    months: [4, 5],
    price: 9.99,
    pot: '2 L pot',
    toxic: false,
    photo: 'brunnera.jpg',
    note: 'Silver leaves light up the shade, with forget-me-not flowers in April.',
    dormant: ['winter'],
    swaps: [
      ['Lungwort', 'Pulmonaria ‘Opal’, early for bees'],
      ['Bugle', 'Ajuga reptans, ground cover'],
    ],
  },
  hosta: {
    name: 'Hosta ‘Francee’',
    latin: 'Hosta fortunei',
    height: '50 cm',
    spread: 60,
    leaf: '#5f8f3a',
    flower: '#b9a6e0',
    months: [7, 8],
    price: 8.5,
    pot: '2 L pot',
    toxic: true,
    photo: 'hosta.jpg',
    note: 'Leaves turn butter yellow in October. Slugs love them, so mulch with grit.',
    autumn: '#d9b84a',
    dormant: ['winter'],
    swaps: [
      ['Heuchera ‘Obsidian’', 'Heuchera, dark leaves, slug resistant'],
      ['Lady’s mantle', 'Alchemilla mollis, tough and safe for pets'],
    ],
  },
  hellebore: {
    name: 'Christmas rose',
    latin: 'Helleborus niger',
    height: '30 cm',
    spread: 45,
    leaf: '#2f5a32',
    flower: '#f6f4ec',
    months: [12, 1, 2, 3],
    price: 11,
    pot: '2 L pot',
    toxic: true,
    photo: 'hellebore.jpg',
    note: 'White flowers by the back door from Christmas, when nothing else is out.',
    swaps: [
      ['Barrenwort', 'Epimedium × versicolor, spring flowers'],
      ['Elephant’s ears', 'Bergenia cordifolia, winter leaves'],
    ],
  },
  cyclamen: {
    name: 'Ivy-leaved cyclamen',
    latin: 'Cyclamen hederifolium',
    height: '10 cm',
    spread: 20,
    leaf: '#6a7f5a',
    flower: '#e07ab4',
    months: [8, 9, 10],
    price: 3.5,
    pot: '9 cm pot',
    toxic: true,
    photo: 'cyclamen.jpg',
    note: 'Pink flowers in autumn, then marbled leaves all winter. Asleep in summer.',
    dormant: ['summer'],
    swaps: [
      ['Wood anemone', 'Anemone nemorosa, native, spring'],
      ['Snowdrop', 'Galanthus nivalis, February'],
    ],
  },
  foxglove: {
    name: 'Common foxglove',
    latin: 'Digitalis purpurea',
    height: '1.5 m',
    spread: 45,
    leaf: '#6f8f4a',
    flower: '#9b3fb3',
    months: [6, 7],
    price: 5,
    pot: '1 L pot',
    toxic: true,
    photo: 'foxglove.jpg',
    note: 'Bumblebees climb right inside the flowers. Seeds itself around, so you’ll keep it for free.',
    swaps: [
      ['Giant bellflower', 'Campanula latifolia, bees, safe for dogs'],
      ['Columbine', 'Aquilegia vulgaris, May flowers'],
    ],
  },
  anemone: {
    name: 'Japanese anemone',
    latin: 'Anemone × hybrida ‘Honorine Jobert’',
    height: '1.2 m',
    spread: 80,
    leaf: '#5a8040',
    flower: '#ffffff',
    months: [8, 9, 10],
    price: 10.5,
    pot: '2 L pot',
    toxic: false,
    photo: 'anemone.jpg',
    note: 'White flowers from August to October, when bees are short of food.',
    dormant: ['winter'],
    swaps: [
      ['Toad lily', 'Tricyrtis formosana, late flowers'],
      ['Japanese wax bell', 'Kirengeshoma palmata, yellow bells'],
    ],
  },
};

export const ORDER: PlantKey[] = [
  'fern',
  'hydrangea',
  'guelder',
  'brunnera',
  'hosta',
  'hellebore',
  'cyclamen',
  'foxglove',
  'anemone',
];

export const INSTANCES: PlantInstance[] = [
  { id: 'f1', plant: 'fern', x: 182, y: 58, versions: [1, 2, 3] },
  { id: 'f2', plant: 'fern', x: 50, y: 168, versions: [1, 2, 3] },
  { id: 'f3', plant: 'fern', x: 48, y: 302, versions: [1, 2, 3] },
  { id: 'h1', plant: 'hydrangea', x: 322, y: 60, versions: [1, 2] },
  { id: 'h2', plant: 'hydrangea', x: 498, y: 60, versions: [1] },
  { id: 'g1', plant: 'guelder', x: 322, y: 52, versions: [3] },
  { id: 'b1', plant: 'brunnera', x: 106, y: 88, versions: [1, 2, 3] },
  { id: 'b2', plant: 'brunnera', x: 250, y: 92, versions: [1, 2, 3] },
  { id: 'b3', plant: 'brunnera', x: 58, y: 236, versions: [1, 2, 3] },
  { id: 'b4', plant: 'brunnera', x: 404, y: 96, versions: [1, 2, 3] },
  { id: 'o1', plant: 'hosta', x: 566, y: 84, versions: [1] },
  { id: 'o2', plant: 'hosta', x: 52, y: 368, versions: [1, 2, 3] },
  { id: 'o3', plant: 'hosta', x: 410, y: 32, versions: [1, 2, 3] },
  { id: 'e1', plant: 'hellebore', x: 472, y: 344, versions: [1, 2, 3] },
  { id: 'e2', plant: 'hellebore', x: 530, y: 330, versions: [1, 2, 3] },
  { id: 'e3', plant: 'hellebore', x: 574, y: 372, versions: [1, 2, 3] },
  { id: 'c1', plant: 'cyclamen', x: 30, y: 108, versions: [1, 2, 3] },
  { id: 'c2', plant: 'cyclamen', x: 150, y: 108, versions: [1, 2, 3] },
  { id: 'c3', plant: 'cyclamen', x: 214, y: 106, versions: [1, 2, 3] },
  { id: 'c4', plant: 'cyclamen', x: 360, y: 108, versions: [1, 2, 3] },
  { id: 'c5', plant: 'cyclamen', x: 455, y: 108, versions: [1, 2, 3] },
  { id: 'x1', plant: 'foxglove', x: 140, y: 36, versions: [2, 3] },
  { id: 'x2', plant: 'foxglove', x: 268, y: 30, versions: [2, 3] },
  { id: 'x3', plant: 'foxglove', x: 26, y: 40, versions: [2, 3] },
  { id: 'a1', plant: 'anemone', x: 486, y: 56, versions: [2, 3] },
  { id: 'a2', plant: 'anemone', x: 560, y: 70, versions: [2, 3] },
];

export const WILDLIFE_VERSIONS = [2, 3];

export const SEASONS: { value: Season; label: string; color: string; months: number[] }[] = [
  { value: 'spring', label: 'Spring', color: '#8fbf4a', months: [3, 4, 5] },
  { value: 'summer', label: 'Summer', color: '#c86fb8', months: [6, 7, 8] },
  { value: 'autumn', label: 'Autumn', color: '#d98a2b', months: [9, 10, 11] },
  { value: 'winter', label: 'Winter', color: '#9fb3bd', months: [12, 1, 2] },
];

export const MONTH_LETTERS = 'JFMAMJJASOND'.split('');

export interface ShopExtra {
  qty: string;
  name: string;
  detail: string;
  price: number;
}

export const BIRD_BATH: ShopExtra = {
  qty: '1×',
  name: 'Shallow bird bath',
  detail: 'Stone effect, 40 cm',
  price: 24,
};

export const SHOP_EXTRAS: ShopExtra[] = [
  { qty: '3×', name: 'Peat-free compost', detail: '50 L bags', price: 21 },
  { qty: '1×', name: 'Delivery to BS7', detail: 'Thursday morning', price: 6.95 },
];

export interface Reply {
  match: RegExp | null;
  text: string;
  newVersion?: boolean;
}

export const REPLIES: Reply[] = [
  {
    match: /native|hydrangea/i,
    text: 'Good idea. A guelder rose takes the hydrangea’s place by the back fence. It’s native, flowers in May, and its red berries feed blackbirds through the winter. It grows to about two metres, so it also screens the neighbours’ window. That’s plan v3.',
    newVersion: true,
  },
  {
    match: /£|budget|cheap|under/i,
    text: 'Plan v2 comes to about £410 with compost and delivery. To get under £300, buy the ferns and hydrangea in 1 litre pots and grow the foxgloves from seed. They flower in their second year, so they’d start next June.',
  },
  {
    match: /trampoline/i,
    text: 'The lawn between the path and the left bed is about 3 metres across, enough for a 2.4 metre trampoline. Put it near the bench side so it doesn’t shade the hellebores, and move it every few weeks so the grass recovers.',
  },
];

export const FALLBACK_REPLY: Reply = {
  match: null,
  text: 'I can do that. I’ll keep the shady planting as it is and adjust the edges. Tell me which part of the garden matters most and I’ll start there.',
};

export const SUGGESTIONS = [
  'Swap the hydrangea for a native shrub',
  'Keep it under £300',
  'Where do we put a trampoline?',
];

export const SOILS = ['Clay', 'Loam', 'Sandy', 'Chalky'];

export const CARE_OPTIONS = ['An hour a month', 'Weekends', 'Every day'];

export function formatPrice(value: number) {
  return `£${value.toFixed(2)}`;
}

export function sunLabel(hours: number) {
  if (hours === 0) {
    return 'None';
  }

  if (hours <= 3) {
    return `About ${hours} ${hours === 1 ? 'hour' : 'hours'}, morning`;
  }

  return `${hours} hours, part sun`;
}
