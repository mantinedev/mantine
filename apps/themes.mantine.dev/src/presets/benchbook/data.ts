export const STAGES = ['Enquiry', 'Site visit', 'Quote', 'Deposit', 'In workshop', 'Delivered'];

export const OWNERS: Record<string, string> = {
  TR: 'Tom Rowe',
  IH: 'Isla Hollis',
};

export interface Task {
  text: string;
  due: string;
  late?: boolean;
  done: boolean;
}

export interface ActivityEntry {
  id: string;
  title: string;
  meta: string;
  body?: string;
  note?: boolean;
}

export interface Deal {
  id: string;
  client: string;
  project: string;
  value: number;
  stage: number;
  owner: 'TR' | 'IH';
  mine: boolean;
  due: string;
  late: boolean;
  place: string;
  closed?: boolean;
  fields: [string, string, string][];
  tasks: Task[];
  activity: ActivityEntry[];
  files: [string, string, string][];
  emails: [string, string][];
}

export const initialDeals: Deal[] = [
  {
    id: 'lindqvist',
    client: 'Hannah & Theo Lindqvist',
    project: 'Walnut kitchen island',
    value: 14800,
    stage: 2,
    owner: 'TR',
    mine: true,
    due: 'Reply due today',
    late: true,
    place: 'Clifton, Bristol',
    fields: [
      ['Quoted', '£14,800', 'Includes fitting'],
      ['Deposit', '40%, £5,920', 'Due on acceptance'],
      ['Lead time', '9 weeks', 'From deposit'],
      ['Timber', 'American black walnut', 'Hardwax oil finish'],
      ['Size', '2400 × 1100 mm', '300 mm overhang'],
      ['Quote expires', '4 November', 'Sent 21 October'],
    ],
    tasks: [
      {
        text: 'Call Hannah about the quote',
        due: 'Today',
        late: true,
        done: false,
      },
      {
        text: 'Post two walnut offcut samples',
        due: 'Done 23 Oct',
        done: true,
      },
      {
        text: 'Confirm hob cut-out with their kitchen fitter',
        due: '30 Oct',
        done: false,
      },
    ],
    activity: [
      {
        id: 'l1',
        title: 'Quote sent',
        meta: '21 Oct, Tom Rowe',
        body: 'Option B with drawers on both sides, £14,800 fitted.',
      },
      {
        id: 'l2',
        title: 'Site visit',
        meta: '16 Oct, Tom Rowe',
        body: 'Floor is 12 mm out of level along the window wall. Measurements and photos in Files.',
      },
      {
        id: 'l3',
        title: 'Enquiry from website',
        meta: '9 Oct',
        body: 'Saw the oak island we made for the Ashton Gate house.',
      },
    ],
    files: [
      ['PDF', 'Quote B, walnut island.pdf', '21 Oct, 2 pages'],
      ['JPG', 'Kitchen, window wall.jpg', '16 Oct, 3.1 MB'],
      ['DWG', 'Island plan rev 2.dwg', '18 Oct, 640 KB'],
    ],
    emails: [
      ['Re: Walnut samples', 'Hannah Lindqvist, 24 Oct'],
      ['Your quote from Hollis & Rowe', 'Tom Rowe, 21 Oct'],
      ['Site visit on Thursday', 'Tom Rowe, 12 Oct'],
    ],
  },
  {
    id: 'okonjo',
    client: 'Okonjo Dental',
    project: 'White oak reception desk',
    value: 22400,
    stage: 1,
    owner: 'IH',
    mine: false,
    due: 'Visit on 29 Oct',
    late: false,
    place: 'Gloucester Road, Bristol',
    fields: [
      ['Budget', 'About £22,000', 'From the enquiry'],
      ['Deposit', '40%', 'Standard terms'],
      ['Lead time', '11 weeks', 'Estimate'],
      ['Timber', 'Rift-sawn white oak', 'Matt lacquer'],
      ['Size', 'To measure', 'Curved front'],
      ['Decision by', 'Mid December', 'Opens in March'],
    ],
    tasks: [
      {
        text: 'Bring laminate and oak samples to the visit',
        due: '29 Oct',
        done: false,
      },
    ],
    activity: [
      {
        id: 'o1',
        title: 'Site visit booked',
        meta: '22 Oct, Isla Hollis',
        body: 'Practice manager Ada will meet us at 8:00 before patients arrive.',
      },
      { id: 'o2', title: 'Enquiry by phone', meta: '20 Oct' },
    ],
    files: [],
    emails: [['Visit confirmed', 'Isla Hollis, 22 Oct']],
  },
  {
    id: 'bell',
    client: 'Marguerite Bell',
    project: 'Built-in library shelving',
    value: 9650,
    stage: 3,
    owner: 'TR',
    mine: true,
    due: 'Cutting from 3 Nov',
    late: false,
    place: 'Redland, Bristol',
    fields: [
      ['Quoted', '£9,650', 'Painted MDF and oak'],
      ['Deposit', 'Paid, £3,860', 'Received 19 Oct'],
      ['Lead time', '6 weeks', 'Fit week of 7 Dec'],
      ['Timber', 'Oak shelf edges', 'Farrow & Ball Railings'],
      ['Size', '4 alcoves', 'Floor to ceiling'],
      ['Fitting', 'Week of 7 Dec', 'Two days on site'],
    ],
    tasks: [
      { text: 'Order Railings paint, 5 litres', due: '30 Oct', done: false },
      { text: 'Send deposit receipt', due: 'Done 19 Oct', done: true },
    ],
    activity: [
      {
        id: 'b1',
        title: 'Deposit received',
        meta: '19 Oct',
        body: '£3,860 by bank transfer.',
      },
      { id: 'b2', title: 'Quote accepted', meta: '17 Oct, Marguerite Bell' },
    ],
    files: [['PDF', 'Shelving quote.pdf', '12 Oct, 1 page']],
    emails: [['Paint colour', 'Marguerite Bell, 18 Oct']],
  },
  {
    id: 'fern',
    client: 'The Fern Café',
    project: 'Twelve ash dining tables',
    value: 18000,
    stage: 4,
    owner: 'IH',
    mine: false,
    due: '7 of 12 finished',
    late: false,
    place: 'Stokes Croft, Bristol',
    fields: [
      ['Quoted', '£18,000', '£1,500 per table'],
      ['Deposit', 'Paid, £7,200', 'Received 2 Sep'],
      ['Lead time', '10 weeks', 'Delivery 18 Nov'],
      ['Timber', 'English ash', 'Osmo top oil'],
      ['Size', '1200 × 750 mm', 'Steel hairpin legs'],
      ['Delivery', '18 November', 'Before 9:00'],
    ],
    tasks: [{ text: 'Oil tables 8 to 12', due: '4 Nov', done: false }],
    activity: [
      { id: 'f1', title: 'Seven tables finished', meta: '26 Oct, Isla Hollis' },
      { id: 'f2', title: 'Legs delivered', meta: '14 Oct' },
    ],
    files: [],
    emails: [],
  },
  {
    id: 'duarte',
    client: 'Rafael Duarte',
    project: 'Cherry bed frame',
    value: 3900,
    stage: 0,
    owner: 'TR',
    mine: true,
    due: 'Reply overdue 2 days',
    late: true,
    place: 'Bath',
    fields: [
      ['Budget', 'About £4,000', 'From the enquiry'],
      ['Deposit', '40%', 'Standard terms'],
      ['Lead time', '5 weeks', 'Estimate'],
      ['Timber', 'American cherry', 'Oil finish'],
      ['Size', 'UK super king', 'Low headboard'],
      ['Wants it by', 'Christmas', ''],
    ],
    tasks: [
      {
        text: 'Reply with a rough price and sketch',
        due: '25 Oct',
        late: true,
        done: false,
      },
    ],
    activity: [
      {
        id: 'd1',
        title: 'Enquiry from website',
        meta: '23 Oct',
        body: 'Likes the Shaker bed on our Instagram but lower and wider.',
      },
    ],
    files: [],
    emails: [['Bed frame enquiry', 'Rafael Duarte, 23 Oct']],
  },
  {
    id: 'raman',
    client: 'Priya Raman',
    project: 'Oak staircase handrail',
    value: 4750,
    stage: 0,
    owner: 'TR',
    mine: true,
    due: 'New today',
    late: false,
    place: 'Clevedon',
    fields: [
      ['Budget', 'Not given', ''],
      ['Deposit', '40%', 'Standard terms'],
      ['Lead time', '4 weeks', 'Estimate'],
      ['Timber', 'European oak', 'To match floor'],
      ['Size', '14 treads', 'Wall-fixed'],
      ['Wants it by', 'January', ''],
    ],
    tasks: [{ text: 'Book a site visit', due: '31 Oct', done: false }],
    activity: [{ id: 'r1', title: 'Enquiry by email', meta: 'Today, 09:12' }],
    files: [],
    emails: [['Handrail for our stairs', 'Priya Raman, today']],
  },
  {
    id: 'harbour',
    client: 'Harbour Yoga Studio',
    project: 'Cedar changing benches',
    value: 6200,
    stage: 5,
    owner: 'IH',
    mine: false,
    due: 'Delivered 20 Oct',
    late: false,
    place: 'Harbourside, Bristol',
    closed: true,
    fields: [
      ['Invoiced', '£6,200', 'Paid in full'],
      ['Deposit', 'Paid', ''],
      ['Lead time', '5 weeks', 'On time'],
      ['Timber', 'Western red cedar', 'Unfinished'],
      ['Size', '3 benches', 'With shoe racks'],
      ['Delivered', '20 October', ''],
    ],
    tasks: [],
    activity: [{ id: 'h1', title: 'Delivered and fitted', meta: '20 Oct, Isla Hollis' }],
    files: [],
    emails: [],
  },
];

export type DealFilter = 'open' | 'mine' | 'late';

export const dealFilters: {
  value: DealFilter;
  label: string;
  count: number;
}[] = [
  { value: 'open', label: 'Open', count: 6 },
  { value: 'mine', label: 'Mine', count: 4 },
  { value: 'late', label: 'Needs reply', count: 2 },
];

export function formatMoney(value: number) {
  return `£${value.toLocaleString('en-GB')}`;
}
