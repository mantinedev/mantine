import {
  DashboardIcon,
  StackIcon,
  InputIcon,
  MixIcon,
  ExclamationTriangleIcon,
  LetterCaseCapitalizeIcon,
  ContainerIcon,
  TextAlignJustifyIcon,
} from '@modulz/radix-icons';
import { Category } from './types';

export const MANTINE_CORE_ORDER = [
  'layout',
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
    icon: DashboardIcon,
    color: 'red',
  },

  overlay: {
    title: 'Overlay',
    icon: StackIcon,
    color: 'indigo',
  },

  navigation: {
    title: 'Navigation',
    icon: TextAlignJustifyIcon,
    color: 'indigo',
  },

  inputs: {
    title: 'Inputs & buttons',
    icon: InputIcon,
    color: 'orange',
  },

  misc: {
    title: 'Miscellaneous',
    icon: MixIcon,
    color: 'teal',
  },

  feedback: {
    title: 'Feedback',
    icon: ExclamationTriangleIcon,
    color: 'yellow',
  },

  typography: {
    title: 'Typography',
    icon: LetterCaseCapitalizeIcon,
    color: 'blue',
  },

  layout: {
    title: 'Layout',
    icon: ContainerIcon,
    color: 'grape',
  },
};
