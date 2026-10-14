import {
  ChartLineUpIcon,
  ChatCircleIcon,
  GearIcon,
  HouseIcon,
  PackageIcon,
  QuestionIcon,
  ReceiptIcon,
  UsersIcon,
} from '@phosphor-icons/react';

export const mainLinks = [
  { label: 'Dashboard', icon: HouseIcon },
  { label: 'Orders', icon: ReceiptIcon, badge: 12 },
  { label: 'Products', icon: PackageIcon },
  { label: 'Customers', icon: UsersIcon },
  { label: 'Analytics', icon: ChartLineUpIcon },
  { label: 'Messages', icon: ChatCircleIcon, badge: 3 },
];

export const footerLinks = [
  { label: 'Settings', icon: GearIcon },
  { label: 'Help center', icon: QuestionIcon },
];

export const stats = [
  { label: 'Revenue', value: '$48,210', diff: 12.4 },
  { label: 'Orders', value: '1,284', diff: 3.1 },
  { label: 'New customers', value: '846', diff: -1.8 },
  { label: 'Refunds', value: '12', diff: -0.4 },
];

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

export const orders: Order[] = Array.from({ length: 30 }, (_, index) => ({
  id: `#${4821 - index}`,
  customer: customers[index % customers.length],
  date: formatDate(Math.floor(index / 3)),
  amount: amounts[index % amounts.length],
  status: statuses[index % statuses.length],
}));
