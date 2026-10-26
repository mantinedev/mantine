export type AuthorCode = 'IV' | 'TW' | 'RM' | 'GP' | 'HK' | 'AS';

export interface Author {
  name: string;
  bg: string;
  color: string;
}

export const AUTHORS: Record<AuthorCode, Author> = {
  IV: { name: 'Inés Valcárcel', bg: '#f6dccb', color: '#6b2e0c' },
  TW: { name: 'Tomasz Wierzbicki', bg: '#d8e4ec', color: '#1f3d52' },
  RM: { name: 'Ravi Menon', bg: '#e3e0d2', color: '#4d4520' },
  GP: { name: 'Gwen Pritchard', bg: '#dbe8dc', color: '#24452a' },
  HK: { name: 'Hannah Kirsch', bg: '#e9dcec', color: '#4a2752' },
  AS: { name: 'Ana Soto', bg: '#f1e3c8', color: '#5b3d07' },
};

export type Topic = 'Mobile' | 'Rendering' | 'Data' | 'Infrastructure' | 'Culture';

export interface Post {
  title: string;
  excerpt: string;
  topic: Topic;
  author: AuthorCode;
  date: string;
  minutes: number;
  seed: number;
}

const POSTS_DATA: Omit<Post, 'seed'>[] = [
  {
    title: 'How mountain rescue teams in Snowdonia use offline maps',
    excerpt:
      'We spent three weekends with the Ogwen Valley team. Their wish list changed our roadmap more than any survey has.',
    topic: 'Culture',
    author: 'GP',
    date: '2 Oct 2026',
    minutes: 8,
  },
  {
    title: 'Shrinking the Alps: a 41 GB map in 3.2 GB',
    excerpt:
      'Vector tiles, delta encoding and one stubborn bug in our simplification step. The full story of our smallest download yet.',
    topic: 'Data',
    author: 'RM',
    date: '25 Sep 2026',
    minutes: 12,
  },
  {
    title: 'Our on-call rota for a product that works without the internet',
    excerpt:
      'If the app works offline, what exactly are we on call for? Quite a lot, it turns out, mostly on Saturday mornings.',
    topic: 'Infrastructure',
    author: 'HK',
    date: '18 Sep 2026',
    minutes: 7,
  },
  {
    title: 'Snapping GPS tracks to trails when the signal bounces off cliffs',
    excerpt:
      'Multipath errors can put you 60 metres from the path in a narrow valley. A hidden Markov model puts you back on it.',
    topic: 'Mobile',
    author: 'TW',
    date: '9 Sep 2026',
    minutes: 11,
  },
  {
    title: 'Why we rewrote our tile server in Rust, and what we kept in Go',
    excerpt:
      'Latency at the 99th percentile fell from 410 ms to 38 ms. The parts we did not rewrite are just as interesting.',
    topic: 'Infrastructure',
    author: 'RM',
    date: '28 Aug 2026',
    minutes: 14,
  },
  {
    title: 'Hill shading from elevation data, explained with one mountain',
    excerpt:
      'A step-by-step walk through our hill-shading shader, using Helvellyn as the test case from raw heights to final pixels.',
    topic: 'Rendering',
    author: 'IV',
    date: '14 Aug 2026',
    minutes: 10,
  },
  {
    title: 'Battery budgets: an hour of navigation in 4% of a charge',
    excerpt:
      'GPS sampling, screen refresh and wake locks each have a cost. We now budget them per minute, like a team budgets money.',
    topic: 'Mobile',
    author: 'AS',
    date: '31 Jul 2026',
    minutes: 9,
  },
  {
    title: 'Merging 212 trail datasets without losing a single footpath',
    excerpt:
      'National parks, councils and volunteers all publish trails differently. Conflation is mostly about saying no to the wrong match.',
    topic: 'Data',
    author: 'RM',
    date: '17 Jul 2026',
    minutes: 13,
  },
  {
    title: 'What we learned from a week of hiking with our own app',
    excerpt:
      'Every engineer spends one week a year on the hills using only Kestrel. This year’s list of complaints was refreshingly short.',
    topic: 'Culture',
    author: 'HK',
    date: '3 Jul 2026',
    minutes: 6,
  },
  {
    title: 'Labels that never collide: placing peak names on a moving map',
    excerpt:
      'Greedy placement looked fine on a desk and terrible on a bouncing phone. Stable label placement needs memory.',
    topic: 'Rendering',
    author: 'IV',
    date: '19 Jun 2026',
    minutes: 12,
  },
  {
    title: 'Testing offline sync on a train through the Highlands',
    excerpt:
      'The West Highland Line has four hours of patchy signal. It is now part of our release checklist.',
    topic: 'Mobile',
    author: 'AS',
    date: '5 Jun 2026',
    minutes: 8,
  },
  {
    title: 'Archiving 1.8 million routes drawn by our users',
    excerpt:
      'Cold storage, a schema from 2019 and the question of what a route from a deleted account should become.',
    topic: 'Data',
    author: 'GP',
    date: '22 May 2026',
    minutes: 10,
  },
];

export const POSTS: Post[] = POSTS_DATA.map((post, index) => ({
  ...post,
  seed: 11 + index * 3,
}));

export const TOPICS: ('All' | Topic)[] = [
  'All',
  'Mobile',
  'Rendering',
  'Data',
  'Infrastructure',
  'Culture',
];

export const POPULAR = [
  { title: 'Shrinking the Alps: a 41 GB map in 3.2 GB', reads: '12,400 reads' },
  {
    title: 'How mountain rescue teams in Snowdonia use offline maps',
    reads: '9,100 reads',
  },
  {
    title: 'Drawing contour lines at 60 fps on a five-year-old phone',
    reads: '7,800 reads',
  },
  {
    title: 'Why we rewrote our tile server in Rust, and what we kept in Go',
    reads: '6,200 reads',
  },
  {
    title: 'Battery budgets: an hour of navigation in 4% of a charge',
    reads: '4,900 reads',
  },
];

export const PEOPLE: { code: AuthorCode; role: string }[] = [
  { code: 'IV', role: 'Map rendering' },
  { code: 'RM', role: 'Map data' },
  { code: 'GP', role: 'Rescue partnerships' },
];

export const ARCHIVE = [
  {
    year: '2026',
    count: 24,
    periods: [
      ['October', 3],
      ['September', 3],
      ['August', 2],
      ['July', 2],
      ['June', 3],
      ['May', 2],
      ['April', 3],
      ['Earlier', 6],
    ],
  },
  {
    year: '2025',
    count: 31,
    periods: [
      ['Q4', 8],
      ['Q3', 7],
      ['Q2', 9],
      ['Q1', 7],
    ],
  },
  {
    year: '2024',
    count: 27,
    periods: [
      ['Q4', 9],
      ['Q3', 6],
      ['Q2', 7],
      ['Q1', 5],
    ],
  },
] as const;

export const NAV_LINKS = ['Blog', 'Open source', 'Careers'];

export const FOOTER_LINKS = ['kestrel.app', 'GitHub', 'Careers', 'Privacy'];
