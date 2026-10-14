export type OrderStatus = 'Paid' | 'Pending' | 'Refunded';

export interface Order {
  id: string;
  customer: string;
  date: string;
  amount: string;
  status: OrderStatus;
}

const customers = [
  'Olivia Martin',
  'Jackson Lee',
  'Isabella Nguyen',
  'William Kim',
  'Sofia Davis',
  'Liam Brown',
  'Emma Wilson',
  'Noah Garcia',
];

const amounts = ['$1,250.00', '$320.00', '$89.90', '$2,400.00', '$145.50', '$560.00', '$780.00'];

const statuses: OrderStatus[] = ['Paid', 'Pending', 'Paid', 'Paid', 'Refunded', 'Pending'];

const formatDate = (daysAgo: number) =>
  new Date(2026, 9, 14 - daysAgo).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

export const orders: Order[] = Array.from({ length: 40 }, (_, index) => ({
  id: `#${4821 - index}`,
  customer: customers[index % customers.length],
  date: formatDate(Math.floor(index / 3)),
  amount: amounts[index % amounts.length],
  status: statuses[index % statuses.length],
}));
