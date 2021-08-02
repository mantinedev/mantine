import { CubeIcon, LayersIcon, LightningBoltIcon, UpdateIcon } from '@modulz/radix-icons';
import { Category } from './types';

export const MANTINE_HOOKS_ORDER = ['state', 'dom', 'utils', 'lifecycle'] as const;

export const MANTINE_HOOKS_CATEGORIES: Record<typeof MANTINE_HOOKS_ORDER[number], Category> = {
  state: {
    title: 'State management',
    icon: CubeIcon,
    color: 'blue',
  },

  dom: {
    title: 'UI and Dom',
    icon: LayersIcon,
    color: 'red',
  },

  utils: {
    title: 'Utilities',
    icon: LightningBoltIcon,
    color: 'yellow',
  },

  lifecycle: {
    title: 'Lifecycle',
    icon: UpdateIcon,
    color: 'teal',
  },
};
