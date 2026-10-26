export type Channel = 'mail' | 'chat' | 'phone';
export type Status = 'open' | 'pending' | 'solved';
export type AgentId = 'EW' | 'NB' | 'PK';
export type AvatarTone = 'amber' | 'sky' | 'rose' | 'sage' | 'lilac';
export type ViewId = 'inbox' | 'mine' | 'pending' | 'solved';

export interface Message {
  who: 'customer' | 'agent' | 'note';
  agent?: AgentId;
  time: string;
  via?: Channel;
  body: string[];
  attach?: string;
  reading?: { label: string; value: string; target: string };
}

export interface Device {
  name: string;
  meta: string;
  state: string;
  off?: boolean;
}

export interface Ticket {
  id: number;
  customer: string;
  initials: string;
  tone: AvatarTone;
  channel: Channel;
  subject: string;
  preview: string;
  priority: 1 | 2 | 3;
  deadlineIn: number | null;
  status: Status;
  assignee: AgentId | null;
  unread: boolean;
  tags: string[];
  email: string;
  location: string;
  plan: string;
  since: string;
  lifetime: string;
  devices: Device[];
  warranty: { until: string; used: number } | null;
  history: { subject: string; date: string; status: string }[];
  messages: Message[];
}

export const AGENTS: Record<AgentId, { name: string; tone: AvatarTone }> = {
  EW: { name: 'Elif Ward', tone: 'amber' },
  NB: { name: 'Noah Bright', tone: 'sky' },
  PK: { name: 'Priya Kaur', tone: 'lilac' },
};

export const ME: AgentId = 'EW';

export const STATUS_LABEL: Record<Status, string> = {
  open: 'Open',
  pending: 'Waiting on customer',
  solved: 'Solved',
};

export const CHANNEL_LABEL: Record<Channel, string> = {
  mail: 'Email',
  chat: 'Chat',
  phone: 'Phone',
};

export const PRIORITY_LABEL = ['', 'Normal', 'High', 'Urgent'];

export const VIEWS: {
  id: ViewId;
  label: string;
  test: (ticket: Ticket) => boolean;
}[] = [
  { id: 'inbox', label: 'Inbox', test: (t) => t.status !== 'solved' },
  {
    id: 'mine',
    label: 'Assigned to me',
    test: (t) => t.assignee === ME && t.status !== 'solved',
  },
  {
    id: 'pending',
    label: 'Waiting on customer',
    test: (t) => t.status === 'pending',
  },
  { id: 'solved', label: 'Solved', test: (t) => t.status === 'solved' },
];

export const TAG_OPTIONS = ['wifi', 'warranty claim', 'replacement', 'boiler wiring', 'heat pump'];

export const SAVED_REPLIES = [
  {
    title: 'Reset and update firmware',
    text: 'Please hold the reset button on the back of the T3 for 10 seconds until the ring flashes amber. It will reconnect and update to firmware 4.12.3 on its own, which takes about 5 minutes.',
  },
  {
    title: 'Manual heating while we look',
    text: 'You can run the heating without the app: hold the dial for 3 seconds and the T3 switches to manual at 20°C.',
  },
  {
    title: 'Replacement under warranty',
    text: 'Your T3 is under warranty, so we will send a replacement by next-day delivery. You will get a tracking link by email today.',
  },
];

export const TICKETS: Ticket[] = [
  {
    id: 4821,
    customer: 'Sofia Marchetti',
    initials: 'SM',
    tone: 'rose',
    channel: 'mail',
    subject: 'Thermostat offline since this morning',
    preview: 'House was 14°C when we woke up. The app says the T3 is offline.',
    priority: 3,
    deadlineIn: 42,
    status: 'open',
    assignee: 'EW',
    unread: true,
    tags: ['offline', 'firmware 4.12'],
    email: 'sofia.marchetti@fastmail.co.uk',
    location: 'Leeds',
    plan: 'Hearth Care Plus',
    since: 'March 2025',
    lifetime: '£318',
    devices: [
      {
        name: 'Hearth T3',
        meta: 'Firmware 4.12.1, living room',
        state: 'Offline since 06:14',
        off: true,
      },
      {
        name: 'Radiator valve ×4',
        meta: 'Firmware 2.3.0, bedrooms and hall',
        state: 'Online',
      },
    ],
    warranty: { until: '12 March 2028', used: 33 },
    history: [
      {
        subject: 'Schedule skipped Sunday',
        date: '2 Aug 2026',
        status: 'Solved',
      },
      { subject: 'Valve pairing help', date: '18 Mar 2025', status: 'Solved' },
    ],
    messages: [
      {
        who: 'customer',
        time: '06:41',
        via: 'mail',
        body: [
          'Hi, our T3 went offline overnight and the heating never came on. The house was 14°C when we woke up and we have a 6 month old, so this is quite urgent.',
          'I have already restarted the router. The thermostat screen shows the Wi-Fi icon with a line through it.',
        ],
        attach: 'thermostat-screen.jpg',
      },
      {
        who: 'agent',
        agent: 'EW',
        time: '07:02',
        via: 'mail',
        body: [
          'Morning Sofia, sorry about the cold start. While I look into it, you can turn the heating on from the thermostat itself: hold the dial for 3 seconds and it switches to manual at 20°C.',
          'Could you tell me if the screen shows a code under the Wi-Fi icon?',
        ],
      },
      {
        who: 'customer',
        time: '07:15',
        via: 'mail',
        body: ['Manual mode works, thank you. The code is E-212.'],
        reading: { label: 'Room now', value: '17.5°C', target: 'set to 20°C' },
      },
      {
        who: 'note',
        agent: 'NB',
        time: '07:21',
        body: [
          'E-212 on 4.12.1 is the known reconnect bug. A long press on reset plus a forced update to 4.12.3 fixes it in most cases. If that fails, send a replacement under warranty, no need to ask for photos.',
        ],
      },
    ],
  },
  {
    id: 4819,
    customer: 'Daniel Osei',
    initials: 'DO',
    tone: 'sky',
    channel: 'phone',
    subject: 'Heating will not switch off in schedule mode',
    preview: 'Callback requested. Schedule says 16°C after 22:00 but boiler keeps firing.',
    priority: 2,
    deadlineIn: 75,
    status: 'open',
    assignee: null,
    unread: true,
    tags: ['schedule'],
    email: 'd.osei@outlook.com',
    location: 'Bristol',
    plan: 'Standard',
    since: 'January 2026',
    lifetime: '£189',
    devices: [{ name: 'Hearth T3', meta: 'Firmware 4.12.3, hallway', state: 'Online' }],
    warranty: { until: '8 January 2029', used: 12 },
    history: [],
    messages: [
      {
        who: 'customer',
        time: '08:05',
        via: 'phone',
        body: [
          'Voicemail transcript: Hi, my heating will not turn off at night even though the schedule says 16 degrees after ten. Please call me back on the number on my account.',
        ],
      },
    ],
  },
  {
    id: 4817,
    customer: 'Clara Mendes',
    initials: 'CM',
    tone: 'sage',
    channel: 'mail',
    subject: 'App shows 4°C higher than the room',
    preview: 'Thermometer on the wall says 18, app says 22. Which one is right?',
    priority: 2,
    deadlineIn: -12,
    status: 'open',
    assignee: 'PK',
    unread: false,
    tags: ['sensor'],
    email: 'clara.mendes@gmail.com',
    location: 'Glasgow',
    plan: 'Standard',
    since: 'October 2024',
    lifetime: '£149',
    devices: [{ name: 'Hearth T3', meta: 'Firmware 4.12.3, kitchen', state: 'Online' }],
    warranty: { until: '2 October 2027', used: 50 },
    history: [{ subject: 'Delivery delayed', date: '4 Oct 2024', status: 'Solved' }],
    messages: [
      {
        who: 'customer',
        time: 'Yesterday 21:10',
        via: 'mail',
        body: [
          'The thermometer on my wall says 18 but the app says 22. The thermostat is in the kitchen next to the oven, could that be it?',
        ],
      },
    ],
  },
  {
    id: 4815,
    customer: 'Greta Lindahl',
    initials: 'GL',
    tone: 'lilac',
    channel: 'chat',
    subject: 'Can I use the T3 with a heat pump?',
    preview: 'We are getting a Vaillant aroTHERM fitted in November.',
    priority: 1,
    deadlineIn: 185,
    status: 'open',
    assignee: null,
    unread: false,
    tags: ['pre-sale'],
    email: 'greta@lindahl.se',
    location: 'York',
    plan: 'No plan',
    since: 'Not a customer yet',
    lifetime: '£0',
    devices: [],
    warranty: null,
    history: [],
    messages: [
      {
        who: 'customer',
        time: '08:30',
        via: 'chat',
        body: [
          'Hi! We are getting a Vaillant aroTHERM fitted in November. Will the T3 work with it, and do I need an extra module?',
        ],
      },
    ],
  },
  {
    id: 4812,
    customer: 'Lewis Park',
    initials: 'LP',
    tone: 'amber',
    channel: 'mail',
    subject: 'Install fee on my invoice',
    preview: 'I fitted it myself, why was I charged £89 for installation?',
    priority: 1,
    deadlineIn: 372,
    status: 'open',
    assignee: 'EW',
    unread: false,
    tags: ['billing'],
    email: 'lewis.park@icloud.com',
    location: 'Cardiff',
    plan: 'Standard',
    since: 'September 2026',
    lifetime: '£238',
    devices: [{ name: 'Hearth T3', meta: 'Firmware 4.12.3, landing', state: 'Online' }],
    warranty: { until: '21 September 2029', used: 2 },
    history: [],
    messages: [
      {
        who: 'customer',
        time: 'Yesterday 17:44',
        via: 'mail',
        body: [
          'I fitted the thermostat myself, so why does my invoice include £89 for installation? Please refund it.',
        ],
      },
    ],
  },
  {
    id: 4806,
    customer: 'Mohammed Rahim',
    initials: 'MR',
    tone: 'sky',
    channel: 'mail',
    subject: 'Refund for the second valve pack',
    preview: 'Sent the return label on Monday. Waiting for the parcel to arrive.',
    priority: 1,
    deadlineIn: null,
    status: 'pending',
    assignee: 'EW',
    unread: false,
    tags: ['returns'],
    email: 'm.rahim@proton.me',
    location: 'Manchester',
    plan: 'Hearth Care Plus',
    since: 'June 2025',
    lifetime: '£402',
    devices: [{ name: 'Radiator valve ×6', meta: 'Firmware 2.3.0', state: 'Online' }],
    warranty: { until: '3 June 2028', used: 25 },
    history: [],
    messages: [
      {
        who: 'agent',
        agent: 'EW',
        time: 'Mon 14:02',
        via: 'mail',
        body: [
          'Hi Mohammed, the return label is attached. The refund goes out as soon as the parcel reaches us.',
        ],
      },
    ],
  },
  {
    id: 4798,
    customer: 'Aiko Tanaka',
    initials: 'AT',
    tone: 'rose',
    channel: 'chat',
    subject: 'Pairing code not accepted',
    preview: 'Worked after updating the app. Thanks!',
    priority: 1,
    deadlineIn: null,
    status: 'solved',
    assignee: 'NB',
    unread: false,
    tags: ['pairing'],
    email: 'aiko.tanaka@gmail.com',
    location: 'London',
    plan: 'Standard',
    since: 'October 2026',
    lifetime: '£149',
    devices: [{ name: 'Hearth T3', meta: 'Firmware 4.12.3, lounge', state: 'Online' }],
    warranty: { until: '20 October 2029', used: 1 },
    history: [],
    messages: [
      {
        who: 'customer',
        time: 'Sat 10:12',
        via: 'chat',
        body: ['Worked after updating the app. Thanks!'],
      },
    ],
  },
];
