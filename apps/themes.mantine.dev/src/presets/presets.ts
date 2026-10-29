export type PresetCategory =
  | 'Generic'
  | 'Tools'
  | 'Content'
  | 'Marketing'
  | 'Scheduling'
  | 'Chat'
  | 'AI';

export interface Preset {
  id: string;
  label: string;
  description: string;
  category: PresetCategory;
}

export const presets: Preset[] = [
  {
    id: 'generic',
    label: 'Generic',
    description: 'Common components with the default theme',
    category: 'Generic',
  },
  {
    id: 'riverline',
    label: 'Riverline',
    description: 'Bike-share operations dashboard',
    category: 'Tools',
  },
  {
    id: 'benchbook',
    label: 'Benchbook',
    description: 'CRM for a joinery workshop',
    category: 'Tools',
  },
  { id: 'larder', label: 'Larder', description: 'CMS for a food magazine', category: 'Tools' },
  {
    id: 'hearth',
    label: 'Hearth',
    description: 'Helpdesk for smart thermostats',
    category: 'Tools',
  },
  {
    id: 'inkwell',
    label: 'Inkwell',
    description: 'Order board for a print shop',
    category: 'Tools',
  },
  {
    id: 'low-tide',
    label: 'Low Tide',
    description: 'Long-read magazine article',
    category: 'Content',
  },
  { id: 'tern', label: 'Tern', description: 'Weather API documentation', category: 'Content' },
  { id: 'kestrel', label: 'Kestrel', description: 'Engineering blog index', category: 'Content' },
  {
    id: 'clay-and-wheel',
    label: 'Clay & Wheel',
    description: 'Online pottery lesson',
    category: 'Content',
  },
  {
    id: 'night-shift',
    label: 'Night Shift',
    description: 'Podcast episode page',
    category: 'Content',
  },
  {
    id: 'shelfwise',
    label: 'Shelfwise',
    description: 'Software for bookshops',
    category: 'Marketing',
  },
  {
    id: 'union-canal',
    label: 'Union Canal',
    description: 'Canal charity campaign',
    category: 'Marketing',
  },
  {
    id: 'fieldwork',
    label: 'Fieldwork 2027',
    description: 'Design conference',
    category: 'Marketing',
  },
  { id: 'halcyon', label: 'Halcyon', description: 'Sunrise lamp launch', category: 'Marketing' },
  {
    id: 'saltwater',
    label: 'Saltwater Pass',
    description: 'Island ferry pass',
    category: 'Marketing',
  },
  {
    id: 'tidewrack',
    label: 'Tidewrack',
    description: 'Festival timetable',
    category: 'Scheduling',
  },
  {
    id: 'fernhill',
    label: 'Fernhill Physio',
    description: 'Clinic day view',
    category: 'Scheduling',
  },
  {
    id: 'piano-lessons',
    label: 'Anouk Verbeek',
    description: 'Piano lesson booking',
    category: 'Scheduling',
  },
  { id: 'slate', label: 'Slate', description: 'Film crew chat', category: 'Chat' },
  { id: 'second-home', label: 'Second Home', description: 'Marketplace inbox', category: 'Chat' },
  { id: 'roundabout', label: 'Roundabout', description: 'Group trip chat', category: 'Chat' },
  { id: 'clerk', label: 'Clerk', description: 'Legal review assistant', category: 'AI' },
  { id: 'quarry', label: 'Quarry', description: 'AI data analyst', category: 'AI' },
  { id: 'understory', label: 'Understory', description: 'AI garden planner', category: 'AI' },
];
