export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Bookshop stories', href: '#stories' },
  { label: 'Help', href: '#faq' },
];

export interface Spine {
  title: string;
  color: number;
  width: number;
  height: number;
  ink: number;
  out?: boolean;
}

export const spines: Spine[] = [
  { title: 'Middlemarch', color: 1, width: 30, height: 230, ink: 6 },
  { title: 'Small Things Like These', color: 2, width: 22, height: 196, ink: 6 },
  { title: 'The Overstory', color: 4, width: 36, height: 238, ink: 6 },
  { title: 'Piranesi', color: 3, width: 26, height: 206, ink: 1 },
  { title: 'The Salt Path', color: 7, width: 28, height: 214, ink: 1, out: true },
  { title: 'Wolf Hall', color: 5, width: 40, height: 244, ink: 6 },
  { title: 'Circe', color: 6, width: 24, height: 200, ink: 1 },
  { title: 'Lessons in Chemistry', color: 2, width: 30, height: 222, ink: 6 },
  { title: 'The Wild Silence', color: 4, width: 25, height: 208, ink: 6 },
  { title: 'Shuggie Bain', color: 3, width: 32, height: 226, ink: 1 },
  { title: 'Hamnet', color: 1, width: 26, height: 210, ink: 6 },
  { title: 'Prophet Song', color: 7, width: 28, height: 218, ink: 1 },
];

export const stockRows = [
  { label: 'On the shelf', value: '3' },
  { label: 'On order', value: '6, due Thu' },
  { label: 'Sold this month', value: '14' },
];

export const shops = [
  { name: 'The Hoxton Reader', town: 'London' },
  { name: 'Wrack Line Books', town: 'St Ives' },
  { name: 'Paper Lantern', town: 'Leeds' },
  { name: 'Bound & Found', town: 'Galway' },
];

export type FeatureIcon = 'scan' | 'bell' | 'cart' | 'ticket';

export interface FeatureRow {
  title: string;
  sub: string;
  right: string;
  ok?: boolean;
}

export interface Feature {
  value: string;
  icon: FeatureIcon;
  label: string;
  description: string;
  head: string;
  pill: string;
  rows: FeatureRow[];
  foot: [string, string];
}

export const features: Feature[] = [
  {
    value: 'scan',
    icon: 'scan',
    label: 'Scan in deliveries',
    description:
      'Point a phone at the box. ISBNs, prices and covers fill in from the wholesaler’s invoice.',
    head: 'Delivery from Gardners',
    pill: 'Scanning',
    rows: [
      { title: 'The Salt Path', sub: 'ISBN 9781405937184', right: '+6' },
      { title: 'Prophet Song', sub: 'ISBN 9781472861474', right: '+4' },
      { title: 'Orbital', sub: 'ISBN 9781529922936', right: '+5' },
      { title: 'James', sub: 'ISBN 9781035032402', right: '+3' },
    ],
    foot: ['18 of 24 books scanned', 'Matches invoice 88213'],
  },
  {
    value: 'orders',
    icon: 'bell',
    label: 'Special orders',
    description: 'Take the customer’s name at the till. They get a text the day the book lands.',
    head: 'Special orders',
    pill: '7 waiting',
    rows: [
      { title: 'Mrs Patel', sub: 'The Salt Path, arrives Thu', right: 'Text sent', ok: true },
      { title: 'Tom Hughes', sub: 'Birds of the Western Palearctic', right: 'Ordered' },
      { title: 'Rosa Lima', sub: 'Intermezzo, signed copy', right: 'Ready', ok: true },
      { title: 'Dev Anand', sub: 'The Book of Clouds', right: 'Ordered' },
    ],
    foot: ['Customers are texted automatically', 'Average wait 3 days'],
  },
  {
    value: 'web',
    icon: 'cart',
    label: 'Your own web shop',
    description:
      'Your shelves, online, with your staff picks. Stock updates the moment a book is sold.',
    head: 'hoxtonreader.co.uk',
    pill: 'Live',
    rows: [
      { title: 'Staff pick: Orbital', sub: '£10.99, 5 in stock', right: 'Sold 2 today', ok: true },
      { title: 'Small Things Like These', sub: '£8.99, 12 in stock', right: 'Sold 1 today' },
      { title: 'The Overstory', sub: '£10.99, 2 in stock', right: 'Low stock' },
      { title: 'Gift card', sub: 'From £10', right: 'Sold 4 this week' },
    ],
    foot: ['Stock synced 12 seconds ago', 'Click and collect on'],
  },
  {
    value: 'events',
    icon: 'ticket',
    label: 'Events and signings',
    description: 'Sell tickets with a copy of the book included and pre-order signed editions.',
    head: 'Evening with Raynor Winn',
    pill: 'Thu 19:00',
    rows: [
      { title: 'Ticket and paperback', sub: '£15, 58 of 80 sold', right: '£870', ok: true },
      { title: 'Ticket only', sub: '£6, 14 of 20 sold', right: '£84' },
      { title: 'Signed pre-orders', sub: 'Posted after the event', right: '23' },
      { title: 'Wine and soft drinks', sub: 'Pay on the night', right: 'Bar' },
    ],
    foot: ['72 guests so far', 'Doors 18:30'],
  },
];

export interface Plan {
  name: string;
  for: string;
  month: number;
  featured?: boolean;
  perks: string[];
}

export const plans: Plan[] = [
  {
    name: 'Shop',
    for: 'One shop, one till',
    month: 29,
    perks: [
      'Till app on up to 2 devices',
      'Stock and special orders',
      'Wholesaler imports',
      'Email support',
    ],
  },
  {
    name: 'Shop and web',
    for: 'Sell online from your own shelves',
    month: 49,
    featured: true,
    perks: [
      'Everything in Shop',
      'Web shop on your own domain',
      'Click and collect',
      'Events and ticketing',
      'Phone support',
    ],
  },
  {
    name: 'Group',
    for: 'Up to four branches',
    month: 119,
    perks: [
      'Everything in Shop and web',
      'Stock transfers between branches',
      'Reports per branch',
      'A named account manager',
    ],
  },
];

export const faqs = [
  {
    value: 'import',
    question: 'Can I bring my stock over from another system?',
    answer:
      'Yes. We import from Batch, Gardners Hive and any spreadsheet with ISBNs. Most shops are moved over in an afternoon, and we check the counts with you before you switch the old system off.',
  },
  {
    value: 'reader',
    question: 'Does it work with my card reader?',
    answer:
      'Shelfwise works with SumUp, Zettle and Square readers. If you’re on a contract with your bank, we’ll help you check whether it’s supported.',
  },
  {
    value: 'offline',
    question: 'What happens if the internet goes down?',
    answer:
      'The till keeps working offline and syncs sales when the connection comes back. Card payments depend on your reader, and most of them can store a few offline payments.',
  },
  {
    value: 'cut',
    question: 'Do you take a cut of online sales?',
    answer:
      'No. You pay the plan price and your payment provider’s fee. We never take a percentage of what you sell.',
  },
  {
    value: 'cancel',
    question: 'Can I cancel at any time?',
    answer:
      'Yes, monthly plans end at the close of the month. Yearly plans are refunded for the full months left. You can export all your data whenever you like.',
  },
];

export const footerColumns = [
  { title: 'Product', links: ['Till', 'Stock', 'Web shop', 'Events'] },
  { title: 'Company', links: ['About', 'Bookshop stories', 'Jobs'] },
  { title: 'Help', links: ['Help centre', 'Moving from Batch', 'System status'] },
];

export const titleRanges = ['Under 2,000', '2,000 to 10,000', 'More than 10,000'];
