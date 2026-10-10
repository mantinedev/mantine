export interface TableRow {
  id: number;
  name: string;
  email: string;
  quantity: number;
}

const FIRST_NAMES = [
  'Emma',
  'Liam',
  'Olivia',
  'Noah',
  'Ava',
  'Ethan',
  'Mia',
  'Lucas',
  'Zoe',
  'Leo',
];
const LAST_NAMES = ['Smith', 'Jones', 'Brown', 'Taylor', 'Wilson'];

export function generateRows(count: number): TableRow[] {
  return Array.from({ length: count }, (_, index) => {
    const firstName = FIRST_NAMES[index % FIRST_NAMES.length];
    const lastName = LAST_NAMES[Math.floor(index / FIRST_NAMES.length) % LAST_NAMES.length];

    return {
      id: index + 1,
      name: `${firstName} ${lastName}`,
      email: `${firstName}.${lastName}${index + 1}@example.com`.toLowerCase(),
      quantity: (index * 7) % 20,
    };
  });
}

export const ROWS = generateRows(50);
