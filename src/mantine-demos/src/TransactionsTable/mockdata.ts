import OpenColor from 'open-color';

export const categories = [
  { id: 'home', name: 'Home', background: OpenColor.teal[1] },
  { id: 'pets', name: 'Pets', background: OpenColor.blue[1] },
  { id: 'subscriptions', name: 'Subscriptions', background: OpenColor.red[1] },
  {
    id: 'personal-projects',
    name: 'Personal projects',
    background: OpenColor.lime[1],
  },
  { id: 'healthcare', name: 'Healthcare', background: OpenColor.orange[1] },
  { id: 'entertainment', name: 'Entertainment', background: OpenColor.violet[1] },
  { id: 'rent', name: 'Rent', background: OpenColor.gray[1] },
  { id: 'gifts', name: 'Gifts', background: OpenColor.yellow[1] },
];

const category = (id: string) => categories.find((c) => c.id === id);

export const transactions = [
  {
    id: '0',
    amount: 112,
    title: 'Weekly grocery',
    category: category('home'),
  },
  {
    id: '1',
    amount: 499,
    title: 'iCloud',
    category: category('subscriptions'),
  },
  {
    id: '2',
    amount: 14,
    title: 'Domain name for personal project',
    category: category('personal-projects'),
  },
  {
    id: '3',
    amount: 137,
    title: 'Weekly grocery',
    category: category('home'),
  },
  {
    id: '4',
    amount: 550,
    title: 'Bill for ambulance',
    category: category('healthcare'),
  },
  {
    id: '5',
    amount: 97,
    title: 'Weekly dose of insulin',
    category: category('healthcare'),
  },
  {
    id: '6',
    amount: 1250,
    title: 'February rent',
    category: category('rent'),
  },
  {
    id: '7',
    amount: 6,
    title: 'Spotify',
    category: category('subscriptions'),
  },
  {
    id: '8',
    amount: 109,
    title: 'Weekly grocery',
    category: category('home'),
  },
  {
    id: '9',
    amount: 76,
    title: 'Food for doggo',
    category: category('pets'),
  },
  {
    id: '10',
    amount: 556,
    title: 'Engagement ring',
    category: category('gifts'),
  },
  {
    id: '11',
    amount: 16,
    title: 'Disco Elysium on Steam',
    category: category('entertainment'),
  },
  {
    id: '12',
    amount: 5,
    title: 'Hosting for blog',
    category: category('personal-projects'),
  },
  {
    id: '13',
    amount: 1337,
    title: 'Sniper riffle',
    category: category('entertainment'),
  },
  {
    id: '14',
    amount: 200,
    title: 'Fine for inappropriate gun handling',
    category: category('entertainment'),
  },
];
