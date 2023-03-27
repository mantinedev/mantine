import {
  IconLayout2,
  IconClick,
  IconForms,
  IconMenu2,
  IconNotebook,
  IconBoxMultiple,
  IconLetterCase,
  IconSpeakerphone,
  IconComponents,
} from '@tabler/icons-react';
import { Category } from './types';

export const MANTINE_CORE_ORDER = [
  'layout',
  'buttons',
  'inputs',
  'navigation',
  'data-display',
  'overlay',
  'typography',
  'feedback',
  'misc',
] as const;

export const MANTINE_CORE_CATEGORIES: Record<typeof MANTINE_CORE_ORDER[number], Category> = {
  'data-display': {
    title: 'Data display',
    icon: IconNotebook,
  },

  overlay: {
    title: 'Overlays',
    icon: IconBoxMultiple,
  },

  navigation: {
    title: 'Navigation',
    icon: IconMenu2,
  },

  inputs: {
    title: 'Inputs',
    icon: IconForms,
  },

  misc: {
    title: 'Miscellaneous',
    icon: IconComponents,
  },

  feedback: {
    title: 'Feedback',
    icon: IconSpeakerphone,
  },

  typography: {
    title: 'Typography',
    icon: IconLetterCase,
  },

  layout: {
    title: 'Layout',
    icon: IconLayout2,
  },

  buttons: {
    title: 'Buttons',
    icon: IconClick,
  },
};
