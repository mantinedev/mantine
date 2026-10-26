export const DURATION = 3134;

export const SPEEDS = [1, 1.25, 1.5, 2];

export function formatTime(seconds: number) {
  const total = Math.max(0, Math.round(seconds));
  const minutes = Math.floor(total / 60);
  return `${minutes}:${String(total % 60).padStart(2, '0')}`;
}

export interface Chapter {
  start: number;
  title: string;
}

export const chapters: Chapter[] = [
  { start: 0, title: 'Cold open: the 2am alarm' },
  { start: 220, title: 'Meet Ewan and Priya' },
  { start: 665, title: 'Why bread needs the night' },
  { start: 1170, title: 'The 4am rush for the cafés' },
  { start: 1695, title: 'Working while the city sleeps' },
  { start: 2270, title: 'What it does to a family' },
  { start: 2780, title: 'The first loaf of the day' },
];

export interface TranscriptParagraph {
  start: number;
  speaker: string;
  text: string;
}

export const transcript: TranscriptParagraph[] = [
  {
    start: 0,
    speaker: 'Ruth Abernethy',
    text: 'It is ten to two on a Tuesday morning and I am standing on the Shore in Leith. The pubs shut an hour ago. There is one light on in the whole street, and it is coming from a bakery.',
  },
  {
    start: 95,
    speaker: 'Ewan Morrison',
    text: 'Come in, come in, mind the step. The ovens take forty minutes to come up, so the first thing I do every night is light them. Before the kettle. Before anything.',
  },
  {
    start: 230,
    speaker: 'Ruth Abernethy',
    text: 'Ewan has been the head baker here for twenty-two years. Priya joined six years ago, straight out of college, and now runs the pastry side on her own.',
  },
  {
    start: 410,
    speaker: 'Priya Nair',
    text: 'People think pastry is delicate. It is mostly cold hands and counting. Six hundred croissants, three folds each, and the butter cannot get warmer than the room.',
  },
  {
    start: 690,
    speaker: 'Ewan Morrison',
    text: 'Bread is slow. The dough for tonight was mixed yesterday afternoon and it has been sitting in the cold room since. If you want it on a café table at seven, somebody has to be up at two.',
  },
  {
    start: 980,
    speaker: 'Ruth Abernethy',
    text: 'By three, the bakery is the warmest room I have been in all year. The windows have fogged over and the radio is playing something nobody is listening to.',
  },
  {
    start: 1190,
    speaker: 'Priya Nair',
    text: 'Four o’clock is the panic hour. Everything comes out at once and the van leaves at half four whether we are ready or not. Forty cafés. Nobody wants a sad croissant.',
  },
  {
    start: 1720,
    speaker: 'Ewan Morrison',
    text: 'You stop noticing the dark after a while. What you notice is the quiet. No phones, no emails. Just the dough and the clock and whoever is working beside you.',
  },
  {
    start: 2300,
    speaker: 'Priya Nair',
    text: 'My partner works days. We have breakfast together, his breakfast and my dinner, and then I sleep while he is at work. Weekends we try to meet in the middle.',
  },
  {
    start: 2800,
    speaker: 'Ruth Abernethy',
    text: 'At ten to six Ewan pulls the first sourdough of the day out of the oven and hands me the end of it, still too hot to hold. It is the best thing I have eaten in a long time.',
  },
  {
    start: 3020,
    speaker: 'Ewan Morrison',
    text: 'That is the bit I never get tired of. The first loaf. Twenty-two years and it still feels like you got away with something.',
  },
];

const BAR_COUNT = 140;

export const waveBars = Array.from({ length: BAR_COUNT }, (_, index) => {
  const value =
    0.35 +
    0.3 * Math.abs(Math.sin(index * 0.37)) +
    0.22 * Math.abs(Math.sin(index * 1.13 + 1)) +
    0.13 * Math.abs(Math.sin(index * 2.71 + 2));
  const chapterGap = chapters.some(
    ({ start }) => start > 0 && Math.abs((start / DURATION) * BAR_COUNT - index) < 0.8
  );
  return Math.round((chapterGap ? 0.12 : Math.min(1, value)) * 100);
});

export function findIndexAt<T extends { start: number }>(items: T[], time: number) {
  let found = 0;
  items.forEach((item, index) => {
    if (time >= item.start) {
      found = index;
    }
  });
  return found;
}

export type PersonTone = 'ember' | 'blue' | 'plum';

export interface Person {
  initials: string;
  name: string;
  tone: PersonTone;
}

export const people: Person[] = [
  { initials: 'EM', name: 'Ewan Morrison', tone: 'ember' },
  { initials: 'PN', name: 'Priya Nair', tone: 'blue' },
  { initials: 'RA', name: 'Ruth Abernethy', tone: 'plum' },
];

export const guests = [
  {
    person: people[0],
    role: 'Head baker, nights since 2004',
    link: 'Leith Bakehouse',
  },
  {
    person: people[1],
    role: 'Pastry, laminates 600 croissants a night',
    link: '@priyabakes',
  },
];

export const episodes = [
  { number: 47, title: 'Toll booth, 3am', meta: '14 Oct, 44 min' },
  { number: 46, title: 'The night nurses of ward 9', meta: '7 Oct, 58 min' },
  { number: 45, title: 'Fog over the Forth', meta: '30 Sep, 49 min' },
  { number: 44, title: 'Radio for insomniacs', meta: '23 Sep, 41 min' },
];

export const podcastApps = [
  { name: 'Apple Podcasts', letter: 'A', color: '#9b4bd9' },
  { name: 'Spotify', letter: 'S', color: '#1db954' },
  { name: 'Pocket Casts', letter: 'P', color: '#e94b3c' },
];
