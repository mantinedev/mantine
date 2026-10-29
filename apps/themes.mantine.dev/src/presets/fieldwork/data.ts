export type Track = 'Design' | 'Engineering' | 'Policy';
export type Shape = 'circle' | 'square' | 'tri' | 'half';
export type Day = 'thu' | 'fri';

export const trackColor: Record<Track, string> = {
  Design: 'var(--mantine-color-flamingo-filled)',
  Engineering: 'var(--mantine-color-lagoon-filled)',
  Policy: 'var(--mantine-color-bright)',
};

export const tracks: Track[] = ['Design', 'Engineering', 'Policy'];

export const navLinks = [
  { label: 'Speakers', href: '#speakers' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Tickets', href: '#tickets' },
  { label: 'Venue', href: '#venue' },
  { label: 'Code of conduct', href: '#' },
];

export const audiences = [
  {
    title: 'Designers',
    track: 'Design' as Track,
    description:
      'Service and interaction designers working on things people have to use, whether they want to or not.',
  },
  {
    title: 'Engineers',
    track: 'Engineering' as Track,
    description:
      'People keeping old systems alive while building the new ones, often on the same team.',
  },
  {
    title: 'Policy people',
    track: 'Policy' as Track,
    description:
      'The ones who write the rules a service has to follow, and want to see what happens next.',
  },
];

export interface Speaker {
  id: string;
  initials: string;
  name: string;
  role: string;
  track: Track;
  shape: Shape;
  talk: string;
  slot: string;
  abstract: string;
  bio: string;
}

export const speakers: Speaker[] = [
  {
    id: 'okeke',
    initials: 'AO',
    name: 'Amara Okeke',
    role: 'Head of Design, NHS 111 online',
    track: 'Design',
    shape: 'circle',
    talk: 'Designing for the 3am symptom checker',
    slot: 'thu-1',
    abstract:
      'Most people use NHS 111 online at night, worried, on a phone with a cracked screen. Amara shows how her team rewrote every question for that moment, and what happened to call volumes when they did.',
    bio: 'Amara has led design at NHS 111 online since 2022. Before that she spent six years at Citizens Advice designing benefits guidance.',
  },
  {
    id: 'lindqvist',
    initials: 'TL',
    name: 'Tom Lindqvist',
    role: 'Principal Engineer, Department for Work and Pensions',
    track: 'Engineering',
    shape: 'square',
    talk: 'Retiring a 20-year-old benefits system without anyone noticing',
    slot: 'thu-2',
    abstract:
      'Four years, 1.2 million claims a month and a mainframe nobody wanted to touch. A practical story of strangler patterns, double running and the week the numbers did not match.',
    bio: 'Tom has worked on public sector platforms for fifteen years and still keeps a COBOL manual on his desk for emergencies.',
  },
  {
    id: 'raman',
    initials: 'PR',
    name: 'Priya Raman',
    role: 'Policy Lead, Bristol City Council',
    track: 'Policy',
    shape: 'tri',
    talk: 'Writing policy that a form can actually follow',
    slot: 'thu-3',
    abstract:
      'When the council tax reduction scheme changed, the policy fitted on two pages and the form took fourteen. Priya on what policy writers can learn from the people who build the forms.',
    bio: 'Priya writes housing and benefits policy for Bristol City Council and sits on the Local Government Association digital panel.',
  },
  {
    id: 'feld',
    initials: 'JF',
    name: 'Jonah Feld',
    role: 'Accessibility Lead, Scottish Government',
    track: 'Design',
    shape: 'half',
    talk: 'What screen reader users told us about our forms',
    slot: 'thu-4',
    abstract:
      'Forty hours of research sessions, three surprising findings and one pattern every government form should drop tomorrow.',
    bio: 'Jonah runs accessibility research across Scottish Government services and teaches inclusive design at Edinburgh Napier.',
  },
  {
    id: 'chen',
    initials: 'MC',
    name: 'Mei Chen',
    role: 'Staff Engineer, Transport for Wales',
    track: 'Engineering',
    shape: 'circle',
    talk: 'Live departure boards on a £40 budget per station',
    slot: 'fri-1',
    abstract:
      'Rural stations in Wales had no screens because screens cost thousands. Mei built one with a Raspberry Pi, an e-ink panel and a lot of weatherproofing.',
    bio: 'Mei leads the open data team at Transport for Wales and maintains two of the most used UK rail open source libraries.',
  },
  {
    id: 'price',
    initials: 'RP',
    name: 'Rhiannon Price',
    role: 'Service Owner, DVLA',
    track: 'Policy',
    shape: 'square',
    talk: 'When the law changes on a Friday',
    slot: 'fri-2',
    abstract:
      'Legislation sometimes lands with a weekend of notice. Rhiannon on how her service team plans for changes nobody can schedule.',
    bio: 'Rhiannon owns the driving licence renewal service at DVLA in Swansea, used by around 4 million people a year.',
  },
  {
    id: 'mensah',
    initials: 'KM',
    name: 'Kwame Mensah',
    role: 'Design Director, Citizens Advice',
    track: 'Design',
    shape: 'tri',
    talk: 'Debt advice that does not feel like a telling-off',
    slot: 'fri-3',
    abstract:
      'Tone, timing and the word "arrears". How Citizens Advice redesigned its debt tools so that more people finish them, and fewer people cry while using them.',
    bio: 'Kwame has led design at Citizens Advice since 2021 and previously worked on the GOV.UK design system.',
  },
  {
    id: 'marques',
    initials: 'SM',
    name: 'Sofia Marques',
    role: 'Data Engineer, Office for National Statistics',
    track: 'Engineering',
    shape: 'half',
    talk: 'Census data people can actually use',
    slot: 'fri-4',
    abstract:
      'Census 2021 produced 3,000 tables. Sofia on building an API and a set of plain-language pages that journalists and councils now use every week.',
    bio: 'Sofia builds data pipelines at the ONS in Newport and runs the Welsh R user group.',
  },
];

export interface Slot {
  time: string;
  title: string;
  room: string;
  by?: string;
  track?: Track;
  id?: string;
}

export const days: { value: Day; label: string; date: string }[] = [
  { value: 'thu', label: 'Thursday', date: '13 May' },
  { value: 'fri', label: 'Friday', date: '14 May' },
];

export const schedule: Record<Day, Slot[]> = {
  thu: [
    { time: '09:00', title: 'Doors, coffee and badge pickup', room: 'Courtyard' },
    {
      time: '09:45',
      title: 'Welcome from the organisers',
      room: 'Main hall',
      by: 'Fieldwork team',
      track: 'Policy',
      id: 'thu-0',
    },
    {
      time: '10:00',
      title: speakers[0].talk,
      room: 'Main hall',
      by: speakers[0].name,
      track: 'Design',
      id: 'thu-1',
    },
    {
      time: '11:00',
      title: speakers[1].talk,
      room: 'Studio',
      by: speakers[1].name,
      track: 'Engineering',
      id: 'thu-2',
    },
    { time: '12:30', title: 'Lunch', room: 'Café and courtyard' },
    {
      time: '13:30',
      title: speakers[2].talk,
      room: 'Main hall',
      by: speakers[2].name,
      track: 'Policy',
      id: 'thu-3',
    },
    {
      time: '14:30',
      title: speakers[3].talk,
      room: 'Studio',
      by: speakers[3].name,
      track: 'Design',
      id: 'thu-4',
    },
    { time: '18:30', title: 'Evening social', room: 'Tobacco Factory bar' },
  ],
  fri: [
    { time: '09:30', title: 'Coffee', room: 'Courtyard' },
    {
      time: '10:00',
      title: speakers[4].talk,
      room: 'Main hall',
      by: speakers[4].name,
      track: 'Engineering',
      id: 'fri-1',
    },
    {
      time: '11:00',
      title: speakers[5].talk,
      room: 'Workshop room',
      by: speakers[5].name,
      track: 'Policy',
      id: 'fri-2',
    },
    { time: '12:30', title: 'Lunch', room: 'Café and courtyard' },
    {
      time: '13:30',
      title: speakers[6].talk,
      room: 'Main hall',
      by: speakers[6].name,
      track: 'Design',
      id: 'fri-3',
    },
    {
      time: '14:30',
      title: speakers[7].talk,
      room: 'Studio',
      by: speakers[7].name,
      track: 'Engineering',
      id: 'fri-4',
    },
    {
      time: '16:00',
      title: 'Closing panel: what we would build next',
      room: 'Main hall',
      by: 'Amara Okeke, Tom Lindqvist, Priya Raman',
      track: 'Policy',
      id: 'fri-5',
    },
  ],
};

export interface Tier {
  id: string;
  name: string;
  description: string;
  price: number;
  was?: number;
  max?: number;
  soldOut?: boolean;
}

export const tiers: Tier[] = [
  {
    id: 'early',
    name: 'Early bird',
    description: 'Both days, lunch and the social',
    price: 180,
    soldOut: true,
  },
  {
    id: 'standard',
    name: 'Standard',
    description: 'Both days, lunch and the social',
    price: 320,
    max: 10,
  },
  {
    id: 'public',
    name: 'Public sector',
    description: 'For people employed by a public body. We check your work email.',
    price: 210,
    was: 320,
    max: 10,
  },
  {
    id: 'student',
    name: 'Student',
    description: 'Bring a student card on the day',
    price: 60,
    max: 4,
  },
];

export const sponsorTiers = [
  {
    name: 'Headline',
    size: 'lg' as const,
    sponsors: [
      { name: 'Civic Works', mark: 'circle' as const },
      { name: 'Openfold', mark: 'square' as const },
    ],
  },
  {
    name: 'Supporting',
    size: 'md' as const,
    sponsors: [{ name: 'Northgate Labs' }, { name: 'Harbour Digital' }, { name: 'Plainform' }],
  },
  {
    name: 'Community',
    size: 'sm' as const,
    sponsors: [
      { name: 'Bristol Service Design' },
      { name: 'Women in Gov Tech' },
      { name: 'Code for Wales' },
      { name: 'The Form Club' },
    ],
  },
];

export const footerColumns = [
  {
    title: 'Conference',
    links: [
      { label: 'Speakers', href: '#speakers' },
      { label: 'Schedule', href: '#schedule' },
      { label: 'Tickets', href: '#tickets' },
      { label: 'Free ticket fund', href: '#' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Venue and access', href: '#venue' },
      { label: 'Code of conduct', href: '#' },
      { label: 'Contact the team', href: '#' },
    ],
  },
];

export const DOORS_OPEN = Date.UTC(2027, 4, 13, 8, 0, 0);
