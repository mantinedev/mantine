export const GOAL = 180000;
export const INITIAL_RAISED = 126340;
export const INITIAL_PEOPLE = 2184;

export const PHOTOS = '/presets/union-canal-campaign';

export const navLinks = [
  { label: 'The campaign', href: '#campaign' },
  { label: 'What we’ll fix', href: '#plan' },
  { label: 'Volunteer', href: '#volunteer' },
  { label: 'About', href: '#about' },
];

export type Frequency = 'once' | 'month';

export const amounts = [10, 25, 50, 100];

export function formatMoney(value: number) {
  return `£${Math.round(value).toLocaleString('en-GB')}`;
}

export function formatExact(value: number) {
  return `£${Number.isInteger(value) ? value.toLocaleString('en-GB') : value.toFixed(2)}`;
}

export function paysFor(amount: number) {
  if (amount >= 100) {
    return 'pays a millwright for half a day on the bridge’s lifting gear';
  }
  if (amount >= 50) {
    return 'buys two metres of new towpath edging and the stone to back it';
  }
  if (amount >= 25) {
    return 'buys a metre of new towpath edging';
  }
  if (amount >= 10) {
    return 'kits out a volunteer with gloves, a litter picker and tea for a work party';
  }
  return 'goes into the bridge fund, where every pound counts';
}

export type PhaseStatus = 'done' | 'funded' | 'need';

export interface Phase {
  title: string;
  description: string;
  status: PhaseStatus;
  statusLabel: string;
}

export const phases: Phase[] = [
  {
    title: 'Survey and clear the banks',
    description:
      'Volunteers cleared 4 tonnes of fallen trees and silt between Kingsknowe and Wester Hailes. Engineers surveyed every metre of the bank.',
    status: 'done',
    statusLabel: 'Done, March 2026',
  },
  {
    title: 'Rebuild the Wester Hailes towpath',
    description:
      'New stone edging and a 2-metre path for 1.2 miles, wide enough for a wheelchair and a bike to pass. Work starts in March.',
    status: 'funded',
    statusLabel: 'Funded, starts March 2027',
  },
  {
    title: 'Repair the Leamington lift bridge',
    description:
      'Replace the lifting gear and the timber deck, and restore the cast-iron balance beam that was cracked in the storm.',
    status: 'need',
    statusLabel: 'Needs £53,660',
  },
  {
    title: 'Reopen to boats and walkers',
    description:
      'A first boat through the bridge, a towpath walk from Wester Hailes to Fountainbridge, and a lot of cake.',
    status: 'need',
    statusLabel: 'Planned for June 2027',
  },
];

export const phaseDotColor: Record<PhaseStatus, string> = {
  done: 'var(--mantine-primary-color-filled)',
  funded: 'var(--uc-funded)',
  need: 'var(--uc-need)',
};

export const impact = [
  { value: '3,400', label: 'people walk or cycle it on a weekday' },
  { value: '41', label: 'narrowboats moored west of the bridge, unable to reach the city' },
  { value: '11', label: 'schools within ten minutes of the towpath' },
  { value: '1822', label: 'the year the canal opened, cut by hand' },
];

export interface Donor {
  id: string;
  name: string;
  initials: string;
  amount: number;
  message?: string;
  when: string;
}

export const initialDonors: Donor[] = [
  {
    id: 'ar',
    name: 'Alasdair Reid',
    initials: 'AR',
    amount: 50,
    message: 'Walked this path to school every day in the seventies.',
    when: '12 min ago',
  },
  {
    id: 'wp',
    name: 'Wester Hailes Parkrun',
    initials: 'WP',
    amount: 420,
    message: 'From everyone who runs the towpath on Saturdays.',
    when: '1 hour ago',
  },
  { id: 'a', name: 'Anonymous', initials: 'A', amount: 25, when: '2 hours ago' },
  {
    id: 'pe',
    name: 'Priya and Euan',
    initials: 'PE',
    amount: 100,
    message: 'We got engaged on the Leamington bridge. Please open it again.',
    when: '3 hours ago',
  },
  {
    id: 'hc',
    name: 'Hamish Cowie',
    initials: 'HC',
    amount: 10,
    message: 'Monthly. Small but steady, like a narrowboat.',
    when: 'Yesterday',
  },
  {
    id: 'fb',
    name: 'Fountainbridge Bakery',
    initials: 'FB',
    amount: 250,
    message: 'Free scones for the first boat through.',
    when: 'Yesterday',
  },
  {
    id: 'jm',
    name: 'Joan Murray',
    initials: 'JM',
    amount: 30,
    message: 'In memory of Bill, who fished here for fifty years.',
    when: '2 days ago',
  },
  { id: 'cr', name: 'Calum Ross', initials: 'CR', amount: 15, when: '2 days ago' },
];

export const workDays = [
  { value: 'Tuesday', hours: '10:00 to 15:00' },
  { value: 'Thursday', hours: '10:00 to 15:00' },
  { value: 'Saturday', hours: '09:30 to 13:00' },
];

export const interests = [
  'Clearing banks and hedges',
  'Path building with the contractors',
  'Litter picks from the water by canoe',
  'Running the stall at events',
];
