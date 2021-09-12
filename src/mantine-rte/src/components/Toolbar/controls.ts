import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
  StrikethroughIcon,
  ListBulletIcon,
  Link1Icon,
  ImageIcon,
  TextNoneIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TextAlignCenterIcon,
} from '@modulz/radix-icons';
import { OrderedList } from './icons/OrderedList';

export const CONTROLS = {
  bold: {
    icon: FontBoldIcon,
    controls: 'bold',
  },

  italic: {
    icon: FontItalicIcon,
    controls: 'italic',
  },

  underline: {
    icon: UnderlineIcon,
    controls: 'underline',
  },

  strike: {
    icon: StrikethroughIcon,
    controls: 'strike',
  },

  unorderedList: {
    icon: ListBulletIcon,
    controls: 'list',
    value: 'bullet',
  },

  orderedList: {
    icon: OrderedList,
    controls: 'list',
    value: 'ordered',
  },

  link: {
    icon: Link1Icon,
    controls: 'link',
  },

  image: {
    icon: ImageIcon,
    controls: 'image',
  },

  clean: {
    icon: TextNoneIcon,
    controls: 'clean',
  },

  'align-center': {
    icon: TextAlignCenterIcon,
    controls: 'align',
    value: 'center',
    noActive: true,
  },

  'align-left': {
    icon: TextAlignLeftIcon,
    controls: 'align',
    value: '',
    noActive: true,
  },

  'align-right': {
    icon: TextAlignRightIcon,
    controls: 'align',
    value: 'right',
    noActive: true,
  },
} as const;

export type ToolbarControl = keyof typeof CONTROLS;
