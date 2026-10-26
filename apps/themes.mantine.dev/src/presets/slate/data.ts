export type Presence = 'online' | 'away' | 'dnd';

export type Tone = 'blue' | 'violet' | 'green' | 'orange' | 'gray' | 'rose' | 'bot';

export interface Person {
  name: string;
  role: string;
  tone: Tone;
  initials: string;
  presence: Presence;
  app?: boolean;
}

export const PEOPLE: Record<string, Person> = {
  ffion: { name: 'Ffion Rees', role: '2nd AD', tone: 'rose', initials: 'FR', presence: 'online' },
  rhys: { name: 'Rhys Morgan', role: 'DOP', tone: 'blue', initials: 'RM', presence: 'online' },
  sian: {
    name: 'Siân Jenkins',
    role: 'Locations',
    tone: 'green',
    initials: 'SJ',
    presence: 'online',
  },
  tomasz: {
    name: 'Tomasz Wiśniewski',
    role: 'Director',
    tone: 'orange',
    initials: 'TW',
    presence: 'dnd',
  },
  bethan: {
    name: 'Bethan Pryce',
    role: 'Catering',
    tone: 'violet',
    initials: 'BP',
    presence: 'online',
  },
  morwenna: { name: 'Morwenna Hale', role: 'Elin', tone: 'gray', initials: 'MH', presence: 'away' },
  gareth: { name: 'Gareth Lloyd', role: 'Gaffer', tone: 'blue', initials: 'GL', presence: 'away' },
  bot: {
    name: 'Call sheet',
    role: '1st AD office',
    tone: 'bot',
    initials: 'AD',
    presence: 'online',
    app: true,
  },
};

export const ME = 'ffion';

export const CREW = Object.keys(PEOPLE).filter((key) => key !== 'bot' && key !== ME);

export type SceneStatus = 'done' | 'now' | 'todo';

export interface Scene {
  number: string;
  intExt: 'INT' | 'EXT';
  time: string;
  set: string;
  cast: string;
  eighths: number;
  call: string;
  status: SceneStatus;
}

export const SCENES: Scene[] = [
  {
    number: '38',
    intExt: 'EXT',
    time: 'Day',
    set: 'Lighthouse gallery',
    cast: '1, 3',
    eighths: 10,
    call: '07:00',
    status: 'done',
  },
  {
    number: '39',
    intExt: 'INT',
    time: 'Day',
    set: 'Keeper’s kitchen',
    cast: '1, 2',
    eighths: 20,
    call: '07:30',
    status: 'done',
  },
  {
    number: '41',
    intExt: 'INT',
    time: 'Day',
    set: 'Lamp room',
    cast: '1',
    eighths: 9,
    call: '07:00',
    status: 'now',
  },
  {
    number: '42',
    intExt: 'EXT',
    time: 'Day',
    set: 'Cliff path',
    cast: '1, 4',
    eighths: 6,
    call: '11:00',
    status: 'todo',
  },
  {
    number: '44',
    intExt: 'EXT',
    time: 'Dusk',
    set: 'Newgale Sands',
    cast: '1, 2, 3',
    eighths: 11,
    call: '14:30',
    status: 'todo',
  },
  {
    number: '47',
    intExt: 'EXT',
    time: 'Night',
    set: 'Harbour wall, Porthgain',
    cast: '2, 4',
    eighths: 4,
    call: '17:30',
    status: 'todo',
  },
];

export const SCENE_STATUS_LABEL: Record<SceneStatus, string> = {
  done: 'Wrapped',
  now: 'Shooting',
  todo: 'To go',
};

export function formatPages(eighths: number) {
  const whole = Math.floor(eighths / 8);
  const rest = eighths % 8;
  return (
    (whole ? String(whole) : '') + (whole && rest ? ' ' : '') + (rest ? `${rest}/8` : '') || '0'
  );
}

export function eighthsLeft(scenes: Scene[]) {
  return scenes
    .filter((scene) => scene.status !== 'done')
    .reduce((sum, scene) => sum + scene.eighths, 0);
}

export interface Channel {
  id: string;
  name: string;
  unread: number;
}

export interface DirectMessage {
  id: string;
  who: string;
  unread: number;
}

export const CHANNELS: Channel[] = [
  { id: 'general', name: 'general', unread: 0 },
  { id: 'camera', name: 'camera', unread: 4 },
  { id: 'locations', name: 'locations', unread: 0 },
  { id: 'catering', name: 'catering', unread: 2 },
  { id: 'callsheet', name: 'day-14-callsheet', unread: 0 },
];

export const DMS: DirectMessage[] = [
  { id: 'dm-rhys', who: 'rhys', unread: 1 },
  { id: 'dm-tomasz', who: 'tomasz', unread: 0 },
  { id: 'dm-morwenna', who: 'morwenna', unread: 0 },
  { id: 'dm-bethan', who: 'bethan', unread: 0 },
];

export const TOPICS: Record<string, string> = {
  general: 'Anything for the whole unit',
  camera: 'Camera, grip and electric',
  locations: 'Access, parking, permissions',
  catering: 'Menus, dietary needs, timings',
  callsheet: 'Newgale Sands and the lighthouse at Strumble Head',
};

export interface Reaction {
  emoji: string;
  users: string[];
}

export interface Reply {
  who: string;
  time: string;
  text: string;
}

export interface PollOption {
  label: string;
  votes: string[];
}

export interface Message {
  kind: 'message';
  id: string;
  who: string;
  time: string;
  text: string;
  type?: 'sheet' | 'file' | 'boards' | 'poll';
  reactions?: Reaction[];
  replies?: Reply[];
  mention?: boolean;
  file?: { name: string; meta: string };
  poll?: { question: string; options: PollOption[] };
}

export type FeedItem = Message | { kind: 'day'; text: string } | { kind: 'unread' };

const DM_TEXT: Record<string, string> = {
  rhys: 'Can you check the lamp room is clear of crew before we turn over on 41?',
  tomasz: 'Let’s talk about 47 at lunch.',
  morwenna: 'In make-up, ready from 10:30.',
  bethan: 'Two vegetarian, one coeliac on the extras list today.',
};

export const FEEDS: Record<string, FeedItem[]> = {
  callsheet: [
    { kind: 'day', text: 'Today' },
    {
      kind: 'message',
      id: 'm1',
      who: 'bot',
      time: '05:40',
      type: 'sheet',
      text: 'Call sheet for day 14 is out. Unit call is 06:30 at the Newgale car park base.',
      reactions: [{ emoji: '👀', users: ['rhys', 'sian', 'gareth'] }],
    },
    {
      kind: 'message',
      id: 'm2',
      who: 'rhys',
      time: '06:52',
      text: 'Morning all. B-cam is on the 35 for the gallery, and we’ll go handheld in the lamp room for 41. It’s tight up there, two people max with the camera.',
      reactions: [{ emoji: '👍', users: ['tomasz', 'gareth'] }],
      replies: [
        {
          who: 'gareth',
          time: '06:58',
          text: 'I’ll rig a 1x1 on the landing so the stairs stay clear.',
        },
        {
          who: 'tomasz',
          time: '07:04',
          text: 'Good. Keep the lamp itself practical, I want the flare.',
        },
        {
          who: 'rhys',
          time: '09:12',
          text: 'Lamp is practical, we’re at 1/48 to avoid the flicker. Looks lovely.',
        },
      ],
    },
    {
      kind: 'message',
      id: 'm3',
      who: 'sian',
      time: '07:15',
      type: 'file',
      text: 'Updated shot list with the swap for 42 and 44 if the wind doesn’t drop.',
      file: { name: 'Shot list day 14 v4.pdf', meta: '12 pages, 340 KB' },
    },
    {
      kind: 'message',
      id: 'm4',
      who: 'tomasz',
      time: '08:31',
      type: 'boards',
      text: 'Boards for 42 so we can move fast when the hold lifts. Four set-ups, the last one is the lighthouse reveal.',
    },
    {
      kind: 'message',
      id: 'm5',
      who: 'bethan',
      time: '09:40',
      type: 'poll',
      text: 'Kitchen question so I can plate up on time:',
      poll: {
        question: 'Lunch at 13:00 or 13:30?',
        options: [
          { label: '13:00, before the hold decision', votes: ['rhys', 'gareth', 'sian'] },
          { label: '13:30, after 42 if we get it', votes: ['tomasz'] },
        ],
      },
    },
    { kind: 'unread' },
    {
      kind: 'message',
      id: 'm6',
      who: 'rhys',
      time: '10:05',
      text: 'Scene 39 wrapped. Moving up to the lamp room now.',
      reactions: [{ emoji: '🎬', users: ['tomasz', 'ffion'] }],
    },
    {
      kind: 'message',
      id: 'm7',
      who: 'tomasz',
      time: '10:21',
      text: '@Ffion Rees can you warn Morwenna we might pull 44 forward? She’ll want the wet-hair look done early.',
      mention: true,
    },
  ],
  camera: [
    { kind: 'day', text: 'Today' },
    {
      kind: 'message',
      id: 'c1',
      who: 'gareth',
      time: '06:12',
      text: 'Genny is up at base. Second genny stays on the truck for the harbour tonight.',
    },
    {
      kind: 'message',
      id: 'c2',
      who: 'rhys',
      time: '06:40',
      text: 'Can someone grab the 10:1 from the van before we head up the tower?',
    },
  ],
  general: [
    { kind: 'day', text: 'Today' },
    {
      kind: 'message',
      id: 'g1',
      who: 'sian',
      time: '05:58',
      text: 'Road to Strumble Head is single track. Please park at the lower lay-by and walk the last 300 m.',
    },
  ],
  locations: [
    { kind: 'day', text: 'Yesterday' },
    {
      kind: 'message',
      id: 'l1',
      who: 'sian',
      time: '18:20',
      text: 'National Trust have confirmed Newgale from 14:00. We must be off the sand by 19:30.',
    },
  ],
  catering: [
    { kind: 'day', text: 'Today' },
    {
      kind: 'message',
      id: 'k1',
      who: 'bethan',
      time: '06:15',
      text: 'Bacon rolls and a vegan option at base until 07:15. Cawl for lunch.',
    },
  ],
  ...Object.fromEntries(
    DMS.map((dm) => [
      dm.id,
      [
        { kind: 'day', text: 'Today' },
        { kind: 'message', id: `${dm.id}-1`, who: dm.who, time: '08:10', text: DM_TEXT[dm.who] },
      ] satisfies FeedItem[],
    ])
  ),
};

export const BETHAN_FOLLOW_UP =
  'Cawl is on. If the hold lifts I can do a hot box up to the cliff for the camera team.';

export const EMOJIS = ['👍', '🎬', '🙌', '👀', '🌬️', '☕', '✅', '😂', '🔦', '🌊', '❤️', '🙏'];

export const SEND_LATER = [
  { label: 'At lunch', time: '13:00', when: '13:00, lunch' },
  { label: 'Before the dusk set-up', time: '16:30', when: '16:30, before dusk' },
  { label: 'Tomorrow at unit call', time: '06:30', when: '06:30 tomorrow, unit call' },
];

export const CAST_LINE =
  'Cast 1 Morwenna Hale (Elin), 2 Idris Vaughan (Huw), 3 Nia Bowen (Mair), 4 Dafydd Price (Coastguard)';
