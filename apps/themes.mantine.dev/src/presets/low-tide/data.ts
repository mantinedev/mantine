export const sections = ['Shorelines', 'Field notes', 'Species', 'Tide tables', 'Shop'];

export const contents = [
  { id: 'counting', label: 'Counting the same pools' },
  { id: 'tide', label: 'Reading the tide' },
  { id: 'numbers', label: 'What the numbers say' },
  { id: 'visit', label: 'Going to look for yourself' },
];

export const readingSizes = [
  { value: '17', label: 'Smaller text', fontSize: 14 },
  { value: '19', label: 'Default text size', fontSize: 16 },
  { value: '21', label: 'Larger text', fontSize: 19 },
];

export type Trend = 'up' | 'down' | 'flat';

export interface SpeciesCount {
  species: string;
  range: string;
  before: string;
  after: string;
  change: string;
  trend: Trend;
}

export const speciesCounts: SpeciesCount[] = [
  {
    species: 'Beadlet anemone',
    range: 'Widespread',
    before: '31',
    after: '30',
    change: '−3%',
    trend: 'flat',
  },
  {
    species: 'Snakelocks anemone',
    range: 'Southern',
    before: '9',
    after: '17',
    change: '+89%',
    trend: 'up',
  },
  {
    species: 'Shore crab',
    range: 'Widespread',
    before: '6',
    after: '6',
    change: '0%',
    trend: 'flat',
  },
  {
    species: 'Montagu’s blenny',
    range: 'Southern',
    before: '1.2',
    after: '3.4',
    change: '+183%',
    trend: 'up',
  },
  {
    species: 'Toothed topshell',
    range: 'Southern',
    before: '4',
    after: '11',
    change: '+175%',
    trend: 'up',
  },
  {
    species: 'Dog whelk',
    range: 'Northern',
    before: '7',
    after: '3',
    change: '−57%',
    trend: 'down',
  },
  {
    species: 'Common starfish',
    range: 'Northern',
    before: '2.1',
    after: '0.4',
    change: '−81%',
    trend: 'down',
  },
];

export const tags = ['Rock pools', 'Citizen science', 'Devon', 'Climate'];

export type ThumbKind = 'estuary' | 'bay' | 'cliffs';

export interface RelatedStory {
  section: string;
  title: string;
  description: string;
  readTime: string;
  thumb: ThumbKind;
}

export const relatedStories: RelatedStory[] = [
  {
    section: 'Field notes',
    title: 'A night on the Severn with the elver fishers',
    description: 'The last licensed fishers on the river wait for a tide that comes twice a month.',
    readTime: '12 min read',
    thumb: 'estuary',
  },
  {
    section: 'Species',
    title: 'The cuttlefish that came back to Studland',
    description:
      'Fifteen years after the seagrass meadows thinned out, the breeding grounds are filling again.',
    readTime: '7 min read',
    thumb: 'bay',
  },
  {
    section: 'Shorelines',
    title: 'Walking the whole Jurassic Coast in winter',
    description:
      'Ninety-five miles, nine days and one very cold night in a bus shelter at Charmouth.',
    readTime: '15 min read',
    thumb: 'cliffs',
  },
];

export interface ArticleComment {
  id: string;
  initials: string;
  name: string;
  time: string;
  body: string;
  likes: number;
  isAuthor?: boolean;
  isReply?: boolean;
}

export const initialComments: ArticleComment[] = [
  {
    id: 'rhys',
    initials: 'RP',
    name: 'Rhys Pengelly',
    time: '2 days ago',
    body: 'We saw Montagu’s blennies at Bude in August for the first time in twenty years of family holidays. Did not know they were a southern species until now.',
    likes: 14,
  },
  {
    id: 'isobel',
    initials: 'IT',
    name: 'Isobel Tremayne',
    time: '1 day ago',
    body: 'Bude is a great spot for them. The Cornwall shore surveys have recorded the same rise since about 2018.',
    likes: 6,
    isAuthor: true,
    isReply: true,
  },
  {
    id: 'helen',
    initials: 'HW',
    name: 'Helen Ward',
    time: '3 days ago',
    body: 'Is there a way to join the survey? I live in Plymstock and could do the spring tides.',
    likes: 3,
  },
];

export const footerLinks = ['About', 'Write for us', 'Advertise', 'Privacy'];
