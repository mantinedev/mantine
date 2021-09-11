import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
  StrikethroughIcon,
  ListBulletIcon,
} from '@modulz/radix-icons';
import { OrderedList } from './icons/OrderedList';

export const controls = {
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
};
