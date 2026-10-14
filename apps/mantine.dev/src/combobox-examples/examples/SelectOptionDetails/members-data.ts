export interface Member {
  value: string;
  name: string;
  role: string;
  email: string;
  location: string;
}

export const membersData: Member[] = [
  {
    value: 'emily',
    name: 'Emily Johnson',
    role: 'Product designer',
    email: 'emily@example.com',
    location: 'Berlin, GMT+1',
  },
  {
    value: 'liam',
    name: 'Liam Chen',
    role: 'Frontend engineer',
    email: 'liam@example.com',
    location: 'Singapore, GMT+8',
  },
  {
    value: 'sofia',
    name: 'Sofia Rossi',
    role: 'Engineering manager',
    email: 'sofia@example.com',
    location: 'Milan, GMT+1',
  },
  {
    value: 'noah',
    name: 'Noah Williams',
    role: 'Backend engineer',
    email: 'noah@example.com',
    location: 'Toronto, GMT-5',
  },
  {
    value: 'amara',
    name: 'Amara Okafor',
    role: 'QA engineer',
    email: 'amara@example.com',
    location: 'Lagos, GMT+1',
  },
  {
    value: 'kenji',
    name: 'Kenji Tanaka',
    role: 'DevOps engineer',
    email: 'kenji@example.com',
    location: 'Tokyo, GMT+9',
  },
];
