import { IconRefresh, IconBulb, IconForms, IconBox } from '@tabler/icons-react';
import { Category } from './types';

export const MANTINE_HOOKS_ORDER = ['state', 'dom', 'utils', 'lifecycle'] as const;

export const MANTINE_HOOKS_CATEGORIES: Record<typeof MANTINE_HOOKS_ORDER[number], Category> = {
  state: {
    title: 'State management',
    icon: IconBox,
  },

  dom: {
    title: 'UI and Dom',
    icon: IconForms,
  },

  utils: {
    title: 'Utilities',
    icon: IconBulb,
  },

  lifecycle: {
    title: 'Lifecycle',
    icon: IconRefresh,
  },
};
