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

export const orders: Order[] = [
  {
    id: '#4821',
    customer: 'Olivia Martin',
    date: 'Oct 14, 2026',
    amount: '$1,250.00',
    status: 'Paid',
  },
  {
    id: '#4820',
    customer: 'Jackson Lee',
    date: 'Oct 14, 2026',
    amount: '$320.00',
    status: 'Pending',
  },
  {
    id: '#4819',
    customer: 'Isabella Nguyen',
    date: 'Oct 13, 2026',
    amount: '$89.90',
    status: 'Paid',
  },
  {
    id: '#4818',
    customer: 'William Kim',
    date: 'Oct 13, 2026',
    amount: '$2,400.00',
    status: 'Paid',
  },
  {
    id: '#4817',
    customer: 'Sofia Davis',
    date: 'Oct 12, 2026',
    amount: '$145.50',
    status: 'Refunded',
  },
  {
    id: '#4816',
    customer: 'Liam Brown',
    date: 'Oct 12, 2026',
    amount: '$560.00',
    status: 'Pending',
  },
];
