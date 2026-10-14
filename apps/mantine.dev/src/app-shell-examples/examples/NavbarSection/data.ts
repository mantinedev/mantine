import { GearIcon, QuestionIcon } from '@phosphor-icons/react';

const projectTemplates = [
  'Website redesign',
  'Mobile app',
  'Design system',
  'Marketing site',
  'Billing service',
  'Analytics',
  'Onboarding flow',
  'Help center',
];

export const projectNames = Array.from({ length: 40 }, (_, index) => {
  const name = projectTemplates[index % projectTemplates.length];
  const round = Math.floor(index / projectTemplates.length);
  return round === 0 ? name : `${name} ${round + 1}`;
});

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
