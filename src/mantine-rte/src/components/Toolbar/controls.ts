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
  VideoIcon,
  QuoteIcon,
  CodeIcon,
} from '@modulz/radix-icons';
import { OrderedList, H1, H2, H3, H4, H5, H6, Sub, Sup } from './icons';

export const CONTROLS = {
  code: {
    icon: CodeIcon,
    controls: 'code',
  },

  codeBlock: {
    icon: CodeIcon,
    controls: 'code-block',
  },

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

  alignCenter: {
    icon: TextAlignCenterIcon,
    controls: 'align',
    value: 'center',
    noActive: true,
  },

  alignLeft: {
    icon: TextAlignLeftIcon,
    controls: 'align',
    value: '',
    noActive: true,
  },

  alignRight: {
    icon: TextAlignRightIcon,
    controls: 'align',
    value: 'right',
    noActive: true,
  },

  video: {
    icon: VideoIcon,
    controls: 'video',
  },

  h1: {
    icon: H1,
    controls: 'header',
    value: '1',
  },

  h2: {
    icon: H2,
    controls: 'header',
    value: '2',
  },

  h3: {
    icon: H3,
    controls: 'header',
    value: '3',
  },

  h4: {
    icon: H4,
    controls: 'header',
    value: '4',
  },

  h5: {
    icon: H5,
    controls: 'header',
    value: '5',
  },

  h6: {
    icon: H6,
    controls: 'header',
    value: '6',
  },

  sup: {
    icon: Sup,
    controls: 'script',
    value: 'super',
  },

  sub: {
    icon: Sub,
    controls: 'script',
    value: 'sub',
  },

  blockquote: {
    icon: QuoteIcon,
    controls: 'blockquote',
  },
} as const;

export type ToolbarControl = keyof typeof CONTROLS;
