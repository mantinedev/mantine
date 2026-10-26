export const PRICE = 119;

export const MAX_QUANTITY = 4;

export const navLinks = [
  { label: 'How it wakes you', href: '#morning' },
  { label: 'Design', href: '#features' },
  { label: 'Specs', href: '#specs' },
  { label: 'Reviews', href: '#reviews' },
];

export interface Finish {
  name: string;
  color: string;
}

export const finishes: Finish[] = [
  { name: 'Oat', color: '#d8cfc0' },
  { name: 'Slate', color: '#5d6266' },
  { name: 'Moss', color: '#6f7a5e' },
];

export const morningSteps = [
  {
    minute: 0,
    time: '06:30',
    title: 'A faint red glow',
    body: 'About as bright as a candle across the room. You won’t notice it yet.',
  },
  {
    minute: 10,
    time: '06:40',
    title: 'Warm amber',
    body: 'Enough to see the outline of the room through closed eyelids.',
  },
  {
    minute: 20,
    time: '06:50',
    title: 'Soft white',
    body: 'Most people start to stir somewhere around here.',
  },
  {
    minute: 30,
    time: '07:00',
    title: 'Morning white',
    body: 'Full brightness, and your chosen sound starts quietly.',
  },
  {
    minute: 30,
    time: '07:09',
    title: 'Snooze, if you must',
    body: 'A tap on the globe gives you nine more minutes. The light stays on.',
  },
];

export const comparison = [
  {
    label: 'How it wakes you',
    ours: { yes: true, text: 'Light first, over 30 minutes' },
    phone: { yes: false, text: 'Sound, all at once' },
  },
  {
    label: 'Screen by the bed',
    ours: { yes: true, text: 'None' },
    phone: { yes: false, text: 'Yes, and it lights up' },
  },
  {
    label: 'Night-time notifications',
    ours: { yes: true, text: 'None' },
    phone: { yes: false, text: 'Whatever arrives' },
  },
  {
    label: 'Keeps your alarm in a power cut',
    ours: { yes: true, text: 'Yes, backup battery for 48 hours' },
    phone: { yes: true, text: 'Yes, if it’s charged' },
  },
];

export const specs = [
  {
    term: 'Size',
    value: '20 cm wide, 19 cm tall',
    note: 'About the size of a grapefruit on a saucer',
  },
  { term: 'Weight', value: '1.1 kg' },
  {
    term: 'Brightness',
    value: 'Up to 300 lux at 50 cm',
    note: 'Dims down to 1 lux for night light',
  },
  { term: 'Colour of light', value: '1,800 K to 3,500 K', note: 'Candle red to morning white' },
  {
    term: 'Sounds',
    value: '6 sounds, or silent',
    note: 'Blackbird, rain, wind chime, bowl, radio static, a soft bell',
  },
  {
    term: 'Power',
    value: 'USB-C, 12 W plug included',
    note: 'Backup battery keeps time for 48 hours',
  },
  {
    term: 'Materials',
    value: 'Hand-blown frosted glass, anodised aluminium base, wool felt underside',
  },
  { term: 'Guarantee', value: '3 years' },
];

export const ratingBreakdown = [
  { label: '5 stars', value: 84 },
  { label: '4 stars', value: 12 },
  { label: '3 stars', value: 3 },
  { label: '2 stars', value: 1 },
  { label: '1 star', value: 0 },
];

export const reviews = [
  {
    rating: 5,
    title: 'I stopped dreading January',
    body: 'I work early shifts and it is pitch dark at 05:45 for half the year. With Halcyon I’m awake before the chime most days. Genuinely changed my winters.',
    who: 'Morag, Inverness',
    since: 'January 2026',
    wide: true,
  },
  {
    rating: 5,
    title: 'The dials are the best part',
    body: 'I set it up in thirty seconds without reading anything. My partner has never opened the app either.',
    who: 'Daniel, Bristol',
    since: 'November 2025',
  },
  {
    rating: 4,
    title: 'Lovely, but the bell is loud',
    body: 'The light is beautiful. I switched from the bell to blackbird because the bell made me jump on the lowest volume.',
    who: 'Priya, Leeds',
    since: 'December 2025',
  },
];

export const faqs = [
  {
    value: 'sound',
    question: 'Will it actually wake me without the sound?',
    answer:
      'Most owners find they wake during the last ten minutes of the sunrise. The sound plays at your alarm time anyway, unless you turn it off, so you’re never relying on light alone.',
  },
  {
    value: 'partner',
    question: 'Does it work if I share the bed with a late sleeper?',
    answer:
      'Turn the globe to face you. The light is brightest on one side, and at 50 cm away it’s about a third as bright as at the front.',
  },
  {
    value: 'schedule',
    question: 'What if I need different times on different days?',
    answer:
      'The dials set one alarm. For a weekday and weekend schedule, use the optional app once over Bluetooth. Halcyon keeps the schedule after you close it.',
  },
  {
    value: 'shipping',
    question: 'When will my pre-order ship?',
    answer:
      'The second edition ships from 9 March 2027, in the order pre-orders were placed. We email you a tracking link the day it leaves.',
  },
  {
    value: 'cancel',
    question: 'Can I cancel a pre-order?',
    answer:
      'Yes, at any time before it ships, from the link in your confirmation email. Nothing is charged until then.',
  },
];

export const footerLinks = ['Support', 'Delivery and returns', 'Journal', 'Privacy'];
