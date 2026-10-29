import dayjs, { Dayjs } from 'dayjs';
import type { ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

export type TrackId = 'frontend' | 'backend' | 'ai' | 'design';
export type Level = 'Beginner' | 'Intermediate' | 'Advanced';
export type StageId = 'main' | 'workshop' | 'room-a' | 'room-b';

export interface Speaker {
  name: string;
  company: string;
  initials: string;
}

export interface Talk {
  id: string;
  day: number;
  stageId: StageId;
  start: string;
  end: string;
  title: string;
  speakers: Speaker[];
  track: TrackId;
  level: Level;
  abstract: string;
}

export const TRACKS: Record<TrackId, { label: string; color: string }> = {
  frontend: { label: 'Frontend', color: 'blue' },
  backend: { label: 'Backend', color: 'teal' },
  ai: { label: 'AI', color: 'grape' },
  design: { label: 'Design', color: 'pink' },
};

export const TRACK_IDS = Object.keys(TRACKS) as TrackId[];

export const STAGES: ScheduleResourceData[] = [
  { id: 'main', label: 'Main hall' },
  { id: 'workshop', label: 'Workshop room' },
  { id: 'room-a', label: 'Room A' },
  { id: 'room-b', label: 'Room B' },
];

export const PROGRAM_START = '09:00:00';
export const PROGRAM_END = '18:00:00';

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

function speaker(name: string, company: string): Speaker {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  return { name, company, initials };
}

const SPEAKERS = {
  amara: speaker('Amara Okafor', 'Vercel'),
  lukas: speaker('Lukas Brandt', 'Zalando'),
  sofia: speaker('Sofia Marquez', 'Shopify'),
  kenji: speaker('Kenji Tanaka', 'Mercari'),
  elena: speaker('Elena Petrova', 'JetBrains'),
  marcus: speaker('Marcus Hale', 'Stripe'),
  priya: speaker('Priya Raman', 'Datadog'),
  jonas: speaker('Jonas Lindqvist', 'Spotify'),
  chloe: speaker('Chloé Martin', 'Doctolib'),
  david: speaker('David Cohen', 'Wix'),
  aisha: speaker('Aisha Bello', 'Figma'),
  tomasz: speaker('Tomasz Nowak', 'Allegro'),
  mei: speaker('Mei Lin', 'Canva'),
  oliver: speaker('Oliver Grant', 'GitHub'),
  nadia: speaker('Nadia Haddad', 'Hugging Face'),
  rafael: speaker('Rafael Souza', 'Nubank'),
  hannah: speaker('Hannah Weber', 'SAP'),
  samuel: speaker('Samuel Adeyemi', 'Paystack'),
  ines: speaker('Inês Costa', 'Miro'),
  yuki: speaker('Yuki Sato', 'LINE'),
  grace: speaker('Grace Kim', 'Notion'),
  pavel: speaker('Pavel Novak', 'Kiwi.com'),
  laura: speaker('Laura Rossi', 'Booking.com'),
  ethan: speaker('Ethan Brooks', 'Cloudflare'),
} satisfies Record<string, Speaker>;

type SpeakerKey = keyof typeof SPEAKERS;

// day, stage, start, minutes, track, level, title, speakers, abstract
type TalkRow = [number, StageId, string, number, TrackId, Level, string, SpeakerKey[], string];

const TALK_ROWS: TalkRow[] = [
  // Day 1, Main hall
  [
    0,
    'main',
    '09:00',
    45,
    'frontend',
    'Beginner',
    'Opening keynote: The web in 2027',
    ['amara'],
    'Where the platform is heading next year: view transitions everywhere, a smaller JavaScript footprint and what that means for the apps we ship today.',
  ],
  [
    0,
    'main',
    '10:00',
    30,
    'backend',
    'Intermediate',
    'Postgres is all you need, mostly',
    ['marcus'],
    'Queues, search and caching inside one database: how far a single Postgres instance takes a growing product, and the signals that tell you it is time to split.',
  ],
  [
    0,
    'main',
    '11:30',
    45,
    'ai',
    'Intermediate',
    'Shipping LLM features without regret',
    ['nadia', 'oliver'],
    'Evaluation sets, guardrails and cost budgets for features built on language models, drawn from two years of production incidents.',
  ],
  [
    0,
    'main',
    '14:00',
    45,
    'design',
    'Beginner',
    'Design systems that people actually use',
    ['aisha'],
    'Adoption beats completeness. How a small team grew a design system from five components to the default choice of forty product teams.',
  ],
  [
    0,
    'main',
    '15:00',
    30,
    'frontend',
    'Advanced',
    'React Server Components in the real world',
    ['lukas'],
    'A year of server components in a large e-commerce codebase: the wins, the waterfalls, and the patterns that survived.',
  ],
  [
    0,
    'main',
    '16:30',
    45,
    'ai',
    'Beginner',
    'AI pair programming: a field report',
    ['grace'],
    'What changed in a team that pairs with AI assistants daily: review habits, onboarding, and the tasks that are still faster by hand.',
  ],
  [
    0,
    'main',
    '17:30',
    30,
    'backend',
    'Beginner',
    'Lightning round: lessons from on-call',
    ['priya', 'ethan'],
    'Six short stories from on-call rotations, each with one practical change that made the next night quieter.',
  ],
  // Day 1, Workshop room
  [
    0,
    'workshop',
    '09:00',
    120,
    'frontend',
    'Intermediate',
    'Workshop: Accessible components from scratch',
    ['sofia', 'ines'],
    'Build a combobox, a dialog and a tabs component that work with a keyboard and a screen reader. Bring a laptop with Node 22.',
  ],
  [
    0,
    'workshop',
    '14:00',
    120,
    'ai',
    'Advanced',
    'Workshop: Build a retrieval pipeline',
    ['nadia'],
    'Chunking, embeddings, hybrid search and evaluation. You leave with a working retrieval pipeline over your own documents.',
  ],
  // Day 1, Room A
  [
    0,
    'room-a',
    '09:30',
    45,
    'backend',
    'Advanced',
    'Event sourcing without the hype',
    ['tomasz'],
    'When an append-only log pays off, when it does not, and how to migrate a CRUD service to events one aggregate at a time.',
  ],
  [
    0,
    'room-a',
    '10:30',
    30,
    'design',
    'Intermediate',
    'Motion with meaning',
    ['mei'],
    'Animation guidelines that explain state changes instead of decorating them, with examples from a product used by millions.',
  ],
  [
    0,
    'room-a',
    '11:30',
    30,
    'frontend',
    'Beginner',
    'CSS you no longer need JavaScript for',
    ['chloe'],
    'Container queries, :has(), anchor positioning and scroll-driven animations replace a surprising amount of client code.',
  ],
  [
    0,
    'room-a',
    '12:15',
    45,
    'ai',
    'Intermediate',
    'Prompt engineering is software engineering',
    ['david'],
    'Version control, tests and code review for prompts, and the tooling that makes them part of the normal release process.',
  ],
  [
    0,
    'room-a',
    '14:00',
    30,
    'backend',
    'Intermediate',
    'Rate limiting at the edge',
    ['ethan'],
    'Token buckets, sliding windows and the trade-offs of enforcing limits close to the user.',
  ],
  [
    0,
    'room-a',
    '15:00',
    45,
    'design',
    'Advanced',
    'Dark mode is a design problem',
    ['aisha', 'mei'],
    'Contrast, elevation and color tokens that hold up in both schemes, and why inverting colors is never enough.',
  ],
  [
    0,
    'room-a',
    '16:30',
    30,
    'frontend',
    'Intermediate',
    'Forms that do not fight the user',
    ['sofia'],
    'Validation timing, error summaries and input choice for long forms, tested with real users.',
  ],
  // Day 1, Room B
  [
    0,
    'room-b',
    '09:00',
    30,
    'design',
    'Beginner',
    'Typography for developers',
    ['ines'],
    'Scale, rhythm and line length: a practical introduction for engineers who ship UI without a designer at hand.',
  ],
  [
    0,
    'room-b',
    '10:00',
    45,
    'ai',
    'Advanced',
    'Fine-tuning small models for big wins',
    ['yuki'],
    'Distilling a large model into a small one for a narrow task, with the numbers on latency, cost and accuracy.',
  ],
  [
    0,
    'room-b',
    '11:30',
    45,
    'backend',
    'Intermediate',
    'Observability on a budget',
    ['priya'],
    'Sampling, structured logs and a handful of SLOs that cover most incidents without a five-figure monitoring bill.',
  ],
  [
    0,
    'room-b',
    '12:30',
    30,
    'frontend',
    'Advanced',
    'Bundle size archaeology',
    ['kenji'],
    'Tracking down 400 kB of forgotten dependencies, and the CI checks that keep them from coming back.',
  ],
  [
    0,
    'room-b',
    '14:30',
    45,
    'design',
    'Intermediate',
    'Research on a deadline',
    ['grace'],
    'Five-day user research loops that fit into a sprint and still change product decisions.',
  ],
  [
    0,
    'room-b',
    '16:30',
    45,
    'backend',
    'Advanced',
    'Zero-downtime schema migrations',
    ['rafael'],
    'Expand and contract, backfills and feature flags: moving a busy payments database without a maintenance window.',
  ],
  // Day 2, Main hall
  [
    1,
    'main',
    '09:00',
    45,
    'ai',
    'Beginner',
    'Keynote: Building with AI responsibly',
    ['hannah'],
    'Privacy, consent and transparency for AI features, and how to make them part of the definition of done.',
  ],
  [
    1,
    'main',
    '10:00',
    45,
    'frontend',
    'Intermediate',
    'The state of state management',
    ['elena'],
    'Signals, stores and server caches compared on one app, with a decision guide for new projects.',
  ],
  [
    1,
    'main',
    '11:30',
    30,
    'design',
    'Beginner',
    'From Figma to production in a day',
    ['aisha', 'lukas'],
    'A designer and an engineer rebuild a screen live, sharing the tokens and conventions that keep both sides in sync.',
  ],
  [
    1,
    'main',
    '14:00',
    45,
    'backend',
    'Intermediate',
    'APIs that age well',
    ['samuel'],
    'Versioning, pagination and error formats that a payments API has kept stable through seven years of growth.',
  ],
  [
    1,
    'main',
    '15:00',
    30,
    'ai',
    'Advanced',
    'Agents in production: what breaks',
    ['oliver'],
    'Loops, tool errors and runaway costs: the failure modes of autonomous agents and the guardrails that contain them.',
  ],
  [
    1,
    'main',
    '16:30',
    45,
    'frontend',
    'Beginner',
    'Closing keynote: Craft and care',
    ['amara', 'jonas'],
    'A look back at the two days and forward at what makes software people enjoy using.',
  ],
  // Day 2, Workshop room
  [
    1,
    'workshop',
    '09:00',
    120,
    'design',
    'Beginner',
    'Workshop: Prototyping with real data',
    ['mei', 'grace'],
    'Turn spreadsheets and APIs into clickable prototypes that survive the first user test.',
  ],
  [
    1,
    'workshop',
    '14:00',
    120,
    'backend',
    'Intermediate',
    'Workshop: Kubernetes for app developers',
    ['pavel'],
    'Deployments, services and health checks for people who write the app, not the cluster. A free cloud account is provided.',
  ],
  // Day 2, Room A
  [
    1,
    'room-a',
    '09:00',
    30,
    'frontend',
    'Intermediate',
    'Testing UI the way users use it',
    ['chloe'],
    'Queries by role and label, user events and the tests that keep passing through a redesign.',
  ],
  [
    1,
    'room-a',
    '10:00',
    45,
    'backend',
    'Advanced',
    'Distributed tracing deep dive',
    ['jonas'],
    'Context propagation, sampling strategies and reading a flame graph across forty services.',
  ],
  [
    1,
    'room-a',
    '11:30',
    45,
    'ai',
    'Intermediate',
    'Vector databases, demystified',
    ['nadia'],
    'Indexes, recall and filtering explained without math overload, plus when a plain database is enough.',
  ],
  [
    1,
    'room-a',
    '14:00',
    30,
    'design',
    'Advanced',
    'Designing for 200 languages',
    ['laura'],
    'Right-to-left layouts, text expansion and date formats in a product translated into every language its users speak.',
  ],
  [
    1,
    'room-a',
    '15:00',
    45,
    'frontend',
    'Advanced',
    'Performance budgets that stick',
    ['kenji', 'laura'],
    'Core Web Vitals targets per page type, enforced in CI and reviewed every sprint.',
  ],
  [
    1,
    'room-a',
    '16:30',
    30,
    'backend',
    'Beginner',
    'Your first open source contribution',
    ['marcus'],
    'Finding an issue, reading an unfamiliar codebase and getting a pull request merged.',
  ],
  // Day 2, Room B
  [
    1,
    'room-b',
    '09:30',
    45,
    'design',
    'Intermediate',
    'Accessible color palettes',
    ['ines'],
    'Building a palette that passes contrast checks in both color schemes without losing its personality.',
  ],
  [
    1,
    'room-b',
    '11:30',
    30,
    'frontend',
    'Beginner',
    'TypeScript tips for everyday code',
    ['david'],
    'Narrowing, satisfies and template literal types that make daily code safer without type gymnastics.',
  ],
  [
    1,
    'room-b',
    '12:15',
    45,
    'ai',
    'Advanced',
    'Speech interfaces beyond the demo',
    ['yuki', 'rafael'],
    'Latency, interruptions and accents: building a voice interface that holds up outside the conference room.',
  ],
  [
    1,
    'room-b',
    '14:30',
    45,
    'backend',
    'Intermediate',
    'Caching strategies that scale',
    ['tomasz', 'ethan'],
    'Read-through, write-behind and invalidation patterns, with the bugs each of them invites.',
  ],
  [
    1,
    'room-b',
    '16:30',
    45,
    'ai',
    'Beginner',
    'Machine learning for product managers',
    ['hannah'],
    'What models can and cannot do, how to scope an ML feature, and the questions to ask your data team.',
  ],
];

const BREAKS = [
  { id: 'coffee-morning', title: 'Coffee break', start: '11:00', minutes: 30 },
  { id: 'lunch', title: 'Lunch', start: '13:00', minutes: 60 },
  { id: 'coffee-afternoon', title: 'Coffee break', start: '16:00', minutes: 30 },
];

export function getProgramDays(today: Dayjs): string[] {
  const firstDay = today.add(1, 'day').startOf('day');
  return [firstDay.format('YYYY-MM-DD'), firstDay.add(1, 'day').format('YYYY-MM-DD')];
}

function toDateTime(date: string, time: string, minutes = 0) {
  return dayjs(`${date} ${time}`).add(minutes, 'minute').format(DATE_TIME_FORMAT);
}

export function createTalks(days: string[]): Talk[] {
  return TALK_ROWS.map(
    ([day, stageId, start, minutes, track, level, title, speakers, abstract]) => ({
      id: `day${day + 1}-${stageId}-${start.replace(':', '')}`,
      day,
      stageId,
      start: toDateTime(days[day], start),
      end: toDateTime(days[day], start, minutes),
      title,
      speakers: speakers.map((key) => SPEAKERS[key]),
      track,
      level,
      abstract,
    })
  );
}

export function createBreaks(days: string[]): ScheduleEventData[] {
  return days.flatMap((date, dayIndex) =>
    BREAKS.flatMap((item) =>
      STAGES.map((stage) => ({
        id: `day${dayIndex + 1}-${item.id}-${stage.id}`,
        title: item.title,
        start: toDateTime(date, item.start),
        end: toDateTime(date, item.start, item.minutes),
        color: 'gray',
        display: 'background' as const,
        resourceId: stage.id,
      }))
    )
  );
}

export function getStageLabel(stageId: StageId) {
  return STAGES.find((stage) => stage.id === stageId)?.label as string;
}

export function formatTimeRange(talk: Pick<Talk, 'start' | 'end'>) {
  return `${dayjs(talk.start).format('HH:mm')}–${dayjs(talk.end).format('HH:mm')}`;
}

export function formatDay(date: string) {
  return dayjs(date).format('ddd, MMM D');
}

export function talksOverlap(a: Talk, b: Talk) {
  return a.id !== b.id && dayjs(a.start).isBefore(b.end) && dayjs(b.start).isBefore(a.end);
}
