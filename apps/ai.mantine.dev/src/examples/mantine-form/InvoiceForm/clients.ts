import type { Client } from './types';

export const SAVED_CLIENTS: Client[] = [
  {
    id: 'acme',
    name: 'Acme Corporation',
    address: [
      'Attn: Accounts Payable',
      '1200 Market Street, Suite 400',
      'San Francisco, CA 94103',
      'United States',
    ],
  },
  {
    id: 'globex',
    name: 'Globex GmbH',
    address: ['Friedrichstraße 68', '10117 Berlin', 'Germany'],
  },
  {
    id: 'initech',
    name: 'Initech Ltd',
    address: ['14 Clerkenwell Road', 'London EC1M 5PQ', 'United Kingdom'],
  },
  {
    id: 'umbrella',
    name: 'Umbrella KK',
    address: ['3-1-1 Marunouchi, Chiyoda-ku', 'Tokyo 100-0005', 'Japan'],
  },
];
