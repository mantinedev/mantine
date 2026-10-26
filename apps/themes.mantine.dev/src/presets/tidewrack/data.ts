export type StageId = 't' | 'l' | 'd' | 'w';
export type GenreId = 'folk' | 'indie' | 'electronic' | 'soul' | 'hiphop' | 'words';
export type DayId = 'fri' | 'sat' | 'sun';
export type View = 'all' | 'mine';

export interface Stage {
  id: StageId;
  name: string;
  sub: string;
  image: string;
  x: number;
  y: number;
  gate: number;
}

export interface FestivalSet {
  id: string;
  day: DayId;
  stage: StageId;
  start: number;
  end: number;
  name: string;
  genre: GenreId;
  head: boolean;
}

const PHOTOS = '/presets/tidewrack-festival-timetable';

export const IMAGES = {
  hero: `${PHOTOS}/hero.jpg`,
  sunset: `${PHOTOS}/oats.jpg`,
};

export const STAGES: Stage[] = [
  {
    id: 't',
    name: 'Tidewrack Stage',
    sub: 'Main field',
    image: `${PHOTOS}/hero.jpg`,
    x: 250,
    y: 150,
    gate: 6,
  },
  {
    id: 'l',
    name: 'Lighthouse Tent',
    sub: 'Electronic, till 01:00',
    image: `${PHOTOS}/beams.jpg`,
    x: 150,
    y: 230,
    gate: 4,
  },
  {
    id: 'd',
    name: 'Dune Stage',
    sub: 'Open air, on the dunes',
    image: `${PHOTOS}/dunes.jpg`,
    x: 380,
    y: 110,
    gate: 12,
  },
  {
    id: 'w',
    name: 'Driftwood',
    sub: 'Small stage by the fires',
    image: `${PHOTOS}/fire.jpg`,
    x: 400,
    y: 236,
    gate: 13,
  },
];

export const STAGE_BY_ID = Object.fromEntries(STAGES.map((stage) => [stage.id, stage])) as Record<
  StageId,
  Stage
>;

const WALK: Record<string, number> = {
  'd|t': 7,
  'l|t': 4,
  't|w': 9,
  'd|l': 6,
  'l|w': 8,
  'd|w': 3,
};

export function walkMinutes(a: StageId, b: StageId) {
  return a === b ? 0 : WALK[[a, b].sort().join('|')];
}

export const GENRES: { id: GenreId; name: string }[] = [
  { id: 'folk', name: 'Folk' },
  { id: 'indie', name: 'Indie' },
  { id: 'electronic', name: 'Electronic' },
  { id: 'soul', name: 'Soul and jazz' },
  { id: 'hiphop', name: 'Hip-hop' },
  { id: 'words', name: 'Spoken word' },
];

export const GENRE_NAMES = Object.fromEntries(
  GENRES.map((genre) => [genre.id, genre.name])
) as Record<GenreId, string>;

export const DAYS: { id: DayId; label: string; date: string; name: string }[] = [
  { id: 'fri', label: 'Fri', date: '7 Aug', name: 'Friday' },
  { id: 'sat', label: 'Sat', date: '8 Aug', name: 'Saturday' },
  { id: 'sun', label: 'Sun', date: '9 Aug', name: 'Sunday' },
];

export const DAY_NAMES: Record<DayId, string> = { fri: 'Friday', sat: 'Saturday', sun: 'Sunday' };

type RawSet = [string, string, string, GenreId, 1?];

const RAW: Record<DayId, Record<StageId, RawSet[]>> = {
  fri: {
    t: [
      ['14:00', '14:45', 'The Coquet Ramblers', 'folk'],
      ['15:30', '16:30', 'Haar', 'indie'],
      ['17:15', '18:15', 'Velvet Tolbooth', 'soul'],
      ['19:00', '20:15', 'Sundown Lido', 'indie'],
      ['21:00', '22:30', 'Mara Kestle', 'indie', 1],
    ],
    l: [
      ['16:00', '17:00', 'Pylon Choir', 'electronic'],
      ['17:00', '18:00', 'Quayside Tapes', 'electronic'],
      ['18:30', '19:45', 'Lowland Static', 'electronic'],
      ['20:00', '21:30', 'Fathom Five', 'electronic'],
      ['22:00', '23:30', 'Brine', 'electronic'],
      ['23:30', '01:00', 'Night Ferry DJs', 'electronic'],
    ],
    d: [
      ['12:30', '13:15', 'Wren and Ash', 'folk'],
      ['14:00', '15:00', 'Holy Island Hymns', 'folk'],
      ['15:45', '16:45', 'The Low Light', 'folk'],
      ['17:30', '18:30', 'Moth Choir', 'indie'],
      ['19:30', '20:30', 'Saltgrass', 'folk'],
      ['21:00', '22:00', 'Kittiwake', 'indie'],
    ],
    w: [
      ['13:00', '13:45', 'Poems from the Tideline', 'words'],
      ['15:00', '16:00', 'Ana Ferreira Trio', 'soul'],
      ['17:00', '17:45', 'Sea shanty open mic', 'folk'],
      ['19:00', '20:00', 'Dunstan Fox', 'hiphop'],
      ['21:30', '22:30', 'Late Jazz on the Sand', 'soul'],
      ['23:00', '00:30', 'Lantern Session', 'folk'],
    ],
  },
  sat: {
    t: [
      ['13:00', '13:45', 'Seahouses Silver Band', 'folk'],
      ['14:30', '15:30', 'Glass Harbour', 'indie'],
      ['16:15', '17:15', 'Kofi Mensah-Reid', 'hiphop'],
      ['18:00', '19:15', 'The Northern Pyres', 'indie'],
      ['20:00', '21:15', 'Ivy Calder', 'soul'],
      ['22:00', '23:30', 'Spring Tide Orchestra', 'indie', 1],
    ],
    l: [
      ['15:00', '16:00', 'Coble', 'electronic'],
      ['16:30', '17:30', 'Signal Drift', 'electronic'],
      ['18:00', '19:15', 'Hartley Sound System', 'electronic'],
      ['19:45', '21:00', 'Rhea Okafor', 'electronic'],
      ['21:00', '22:30', 'Lowland Static', 'electronic'],
      ['22:30', '01:00', 'Brine and Fathom Five', 'electronic'],
    ],
    d: [
      ['12:00', '12:45', 'Morning Dip Choir', 'folk'],
      ['13:30', '14:30', 'Fern Hollow', 'folk'],
      ['15:15', '16:15', 'The Low Light', 'folk'],
      ['17:00', '18:00', 'Saltgrass', 'folk'],
      ['18:45', '19:45', 'Kittiwake', 'indie'],
      ['20:30', '21:30', 'Moth Choir', 'indie'],
      ['22:00', '23:00', 'Wren and Ash', 'folk'],
    ],
    w: [
      ['12:30', '13:15', 'Stories for small people', 'words'],
      ['14:00', '15:00', 'Poetry slam final', 'words'],
      ['16:00', '17:00', 'Ana Ferreira Trio', 'soul'],
      ['18:00', '19:00', 'Dunstan Fox', 'hiphop'],
      ['20:00', '21:00', 'Cass and the Coastguards', 'soul'],
      ['21:15', '22:15', 'Wordsmiths at Dusk', 'words'],
      ['23:00', '00:30', 'Lantern Session', 'folk'],
    ],
  },
  sun: {
    t: [
      ['13:00', '14:00', 'Bamburgh Brass', 'folk'],
      ['15:00', '16:00', 'Haar', 'indie'],
      ['17:00', '18:00', 'Velvet Tolbooth', 'soul'],
      ['19:00', '20:15', 'Kofi Mensah-Reid', 'hiphop'],
      ['21:00', '22:30', 'Sundown Lido', 'indie', 1],
    ],
    l: [
      ['14:00', '15:15', 'Quayside Tapes', 'electronic'],
      ['16:00', '17:00', 'Pylon Choir', 'electronic'],
      ['17:30', '19:00', 'Rhea Okafor', 'electronic'],
      ['19:30', '21:00', 'Coble', 'electronic'],
      ['21:30', '23:00', 'Signal Drift', 'electronic'],
    ],
    d: [
      ['12:30', '13:30', 'Holy Island Hymns', 'folk'],
      ['14:15', '15:15', 'Fern Hollow', 'folk'],
      ['16:00', '17:00', 'Mara Kestle, acoustic', 'indie'],
      ['17:45', '18:45', 'Moth Choir', 'indie'],
      ['19:30', '20:30', 'Saltgrass', 'folk'],
      ['21:00', '22:00', 'Farewell sing-along', 'folk'],
    ],
    w: [
      ['12:00', '13:00', 'Sunday papers, read aloud', 'words'],
      ['14:00', '15:00', 'Late Jazz on the Sand', 'soul'],
      ['16:00', '17:00', 'Poems from the Tideline', 'words'],
      ['18:30', '19:30', 'Cass and the Coastguards', 'soul'],
      ['20:30', '21:30', 'Dunstan Fox', 'hiphop'],
    ],
  },
};

export const BLURBS: Record<string, string> = {
  'The Coquet Ramblers':
    'Fiddle and pipes from the Coquet valley, the kind of set that ends with strangers dancing in pairs.',
  Haar: 'Slow-building guitar songs named after the sea fog that rolls in off the North Sea.',
  'Velvet Tolbooth':
    'A seven-piece soul band from Newcastle with a horn section that can be heard from the car park.',
  'Sundown Lido': 'Sunny indie pop with harmonies, written in a lido changing room in Tynemouth.',
  'Mara Kestle':
    'Friday’s headliner. Big, bruised songs about leaving small towns, and a choir of fifty for the encore.',
  'Pylon Choir':
    'Modular synths and field recordings from the pylons that march across the Cheviots.',
  'Quayside Tapes':
    'Warm house music built from old reel-to-reel tapes found in a Quayside basement.',
  'Lowland Static': 'Dense, joyful techno. Bring earplugs and a spare T-shirt.',
  'Fathom Five': 'Deep, slow electronica that sounds like it was recorded underwater.',
  Brine: 'A duo playing peak-time club records with a lot of cowbell.',
  'Night Ferry DJs': 'Three DJs, one record box each, taking it in turns until the power goes off.',
  'Wren and Ash': 'Two voices and a harmonium. Quiet enough that the gulls join in.',
  'Holy Island Hymns': 'Old Northumbrian hymns rearranged for a brass quartet and a choir.',
  'The Low Light': 'Folk songs about lighthouse keepers, played by two of their grandchildren.',
  'Moth Choir':
    'Fragile indie rock that gets very loud without warning. Playing all three days on different stages.',
  Saltgrass: 'Bluegrass from Berwick, fast and funny.',
  Kittiwake: 'Bright guitar pop named after the seabirds that nest on the cliffs up the coast.',
  'Poems from the Tideline': 'Poets reading new work written on the beach that morning.',
  'Ana Ferreira Trio': 'Piano trio playing bossa nova and jazz standards in the shade.',
  'Sea shanty open mic': 'Sign up at the bar. Lyrics sheets provided, confidence not included.',
  'Dunstan Fox': 'Hip-hop from Gateshead with a live band and very good jokes between songs.',
  'Late Jazz on the Sand': 'A rotating jazz band by the fires, until the last person goes to bed.',
  'Lantern Session': 'Unplugged folk session around the fire pits. Bring an instrument.',
  'Seahouses Silver Band': 'The village brass band, playing everything from marches to Kate Bush.',
  'Glass Harbour': 'Shimmering guitar band from Edinburgh with a habit of playing new songs first.',
  'Kofi Mensah-Reid': 'Sharp, warm rap about growing up between Accra and Sunderland.',
  'The Northern Pyres':
    'Anthemic indie rock made for singing along with your arms round your friends.',
  'Ivy Calder': 'A soul voice that stops conversations, backed by a twelve-piece band.',
  'Spring Tide Orchestra':
    'Saturday’s headliner. A forty-piece orchestra and a rock band playing one long piece about the sea, timed to finish with the fireworks.',
  Coble: 'Minimal techno named after the flat-bottomed fishing boats on this coast.',
  'Signal Drift': 'Broken beats and radio static, the soundtrack to a long drive home.',
  'Hartley Sound System': 'Dub and reggae on a hand-built sound system with eleven speakers.',
  'Rhea Okafor': 'A DJ who moves from Afrobeats to garage without anyone noticing the join.',
  'Brine and Fathom Five':
    'The two Lighthouse residents back to back, two and a half hours to close Saturday.',
  'Morning Dip Choir': 'Sing first, swim after. The choir walks down to the sea at the end.',
  'Fern Hollow': 'Folk trio with a cello, writing songs about the woods behind Rothbury.',
  'Stories for small people':
    'Picture-book readings for under-sevens, with puppets and a lot of noises.',
  'Poetry slam final': 'Eight poets, three minutes each, the audience picks the winner.',
  'Cass and the Coastguards': 'Rhythm and blues with a washboard and a very loud trumpet.',
  'Wordsmiths at Dusk': 'Storytellers and poets as the sun goes down over the dunes.',
  'Bamburgh Brass': 'Brass band from the castle village, opening Sunday on the main stage.',
  'Mara Kestle, acoustic': 'Friday’s headliner again, this time just a guitar and the dunes.',
  'Farewell sing-along':
    'Everyone, everything, one last time. Song sheets handed out at the front.',
  'Sunday papers, read aloud':
    'Two broadcasters read the papers and argue about them, with coffee.',
};

export function toMinutes(value: string) {
  const [hours, minutes] = value.split(':').map(Number);
  return (hours < 12 ? hours + 24 : hours) * 60 + minutes - 720;
}

export function formatMinutes(value: number) {
  const time = (value + 720) % 1440;
  return `${String(Math.floor(time / 60)).padStart(2, '0')}:${String(time % 60).padStart(2, '0')}`;
}

export const SETS: FestivalSet[] = (Object.keys(RAW) as DayId[]).flatMap((day) =>
  (Object.keys(RAW[day]) as StageId[]).flatMap((stage) =>
    RAW[day][stage].map(([start, end, name, genre, head], index) => ({
      id: `${day}-${stage}-${index}`,
      day,
      stage,
      start: toMinutes(start),
      end: toMinutes(end),
      name,
      genre,
      head: head === 1,
    }))
  )
);

export const SET_BY_ID = Object.fromEntries(SETS.map((set) => [set.id, set])) as Record<
  string,
  FestivalSet
>;

function findSet(day: DayId, name: string) {
  return SETS.find((set) => set.day === day && set.name === name)!.id;
}

export const INITIAL_STARRED = [
  findSet('sat', 'Kofi Mensah-Reid'),
  findSet('sat', 'The Northern Pyres'),
  findSet('sat', 'Ivy Calder'),
  findSet('sat', 'Moth Choir'),
  findSet('sat', 'Spring Tide Orchestra'),
];

export const NOW = { day: 'sat' as DayId, minute: toMinutes('21:40') };
export const PX_PER_MINUTE = 1.1;
export const HOURS = 13;

export function actName(set: FestivalSet) {
  return set.name.split(',')[0];
}

export function overlaps(a: FestivalSet, b: FestivalSet) {
  return a.start < b.end && b.start < a.end;
}

export function starredForDay(starred: Set<string>, day: DayId) {
  return SETS.filter((set) => set.day === day && starred.has(set.id)).sort(
    (a, b) => a.start - b.start
  );
}

export function clashPairs(starred: Set<string>, day: DayId) {
  const list = starredForDay(starred, day);
  const pairs: [FestivalSet, FestivalSet][] = [];
  list.forEach((a, i) =>
    list.slice(i + 1).forEach((b) => {
      if (overlaps(a, b)) {
        pairs.push([a, b]);
      }
    })
  );
  return pairs;
}

export function clashesWith(starred: Set<string>, set: FestivalSet) {
  return SETS.some(
    (other) =>
      other.id !== set.id && other.day === set.day && starred.has(other.id) && overlaps(other, set)
  );
}

export function alternativeFor(starred: Set<string>, set: FestivalSet) {
  return SETS.find(
    (other) =>
      actName(other) === actName(set) && other.id !== set.id && !clashesWith(starred, other)
  );
}
