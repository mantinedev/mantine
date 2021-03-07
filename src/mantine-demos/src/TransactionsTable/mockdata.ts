import OpenColor from 'open-color';

export const categories = [
  { id: 'home', name: 'Home', background: OpenColor.teal[0] },
  { id: 'pets', name: 'Pets', background: OpenColor.blue[0] },
  { id: 'subscriptions', name: 'Subscriptions', background: OpenColor.red[0] },
  { id: 'personal-projects', name: 'Personal projects', background: OpenColor.lime[0] },
  { id: 'healthcare', name: 'Healthcare', background: OpenColor.orange[0] },
  { id: 'entertainment', name: 'Entertainment', background: OpenColor.violet[0] },
  { id: 'rent', name: 'Rent', background: OpenColor.gray[0] },
  { id: 'gifts', name: 'Gifts', background: OpenColor.yellow[0] },
];

const category = (id: string) => categories.find((c) => c.id === id);

export const transactions = [
  {
    id: '0',
    amount: 112,
    title: 'Weekly grocery',
    category: category('home'),
    date: new Date(2021, 1, 1),
  },
  {
    id: '1',
    amount: 499,
    title: 'iCloud',
    category: category('subscriptions'),
    date: new Date(2021, 1, 5),
  },
  {
    id: '2',
    amount: 14,
    title: 'Domain name for personal project',
    category: category('personal-projects'),
    date: new Date(2021, 1, 6),
  },
  {
    id: '3',
    amount: 137,
    title: 'Weekly grocery',
    category: category('home'),
    date: new Date(2021, 1, 7),
  },
  {
    id: '4',
    amount: 550,
    title: 'Bill for ambulance',
    category: category('healthcare'),
    date: new Date(2021, 1, 7),
  },
  {
    id: '5',
    amount: 97,
    title: 'Weekly dose of insulin',
    category: category('healthcare'),
    date: new Date(2021, 1, 7),
  },
  {
    id: '6',
    amount: 1250,
    title: 'February rent',
    category: category('rent'),
    date: new Date(2021, 1, 7),
  },
  {
    id: '7',
    amount: 6,
    title: 'Spotify',
    category: category('subscriptions'),
    date: new Date(2021, 1, 11),
  },
  {
    id: '8',
    amount: 109,
    title: 'Weekly grocery',
    category: category('home'),
    date: new Date(2021, 1, 12),
  },
  {
    id: '9',
    amount: 76,
    title: 'Food for doggo',
    category: category('pets'),
    date: new Date(2021, 1, 13),
  },
  {
    id: '10',
    amount: 556,
    title: 'Engagement ring',
    category: category('gifts'),
    date: new Date(2021, 1, 13),
  },
  {
    id: '11',
    amount: 16,
    title: 'Disco Elysium on Steam',
    category: category('entertainment'),
    date: new Date(2021, 1, 13),
  },
  {
    id: '12',
    amount: 5,
    title: 'Hosting for blog',
    category: category('personal-projects'),
    date: new Date(2021, 1, 14),
  },
  {
    id: '13',
    amount: 1337,
    title: 'Sniper riffle from Wallmart',
    category: category('entertainment'),
    date: new Date(2021, 1, 18),
  },
  {
    id: '14',
    amount: 200,
    title: 'Fine for inappropriate gun handling',
    category: category('entertainment'),
    date: new Date(2021, 1, 18),
  },
];
