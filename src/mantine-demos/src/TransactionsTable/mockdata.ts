export const categories = [
  { id: 'home', name: 'Home', color: 'teal' },
  { id: 'pets', name: 'Pets', color: 'blue' },
  { id: 'subscriptions', name: 'Subscriptions', color: 'red' },
  {
    id: 'personal-projects',
    name: 'Personal projects',
    color: 'lime',
  },
  { id: 'healthcare', name: 'Healthcare', color: 'orange' },
  { id: 'entertainment', name: 'Entertainment', color: 'violet' },
  { id: 'rent', name: 'Rent', color: 'gray' },
  { id: 'gifts', name: 'Gifts', color: 'yellow' },
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
