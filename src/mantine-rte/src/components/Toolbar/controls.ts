import {
  IconBold,
  IconItalic,
  IconUnderline,
  IconStrikethrough,
  IconList,
  IconListNumbers,
  IconLink,
  IconCode,
  IconBlockquote,
  IconBrandYoutube,
  IconAlignRight,
  IconAlignLeft,
  IconAlignCenter,
  IconClearFormatting,
  IconH1,
  IconH2,
  IconH3,
  IconH4,
  IconH5,
  IconH6,
  IconSuperscript,
  IconSubscript,
  IconPhoto,
} from '@tabler/icons';

export const CONTROLS = {
  code: {
    icon: IconCode,
    controls: 'code',
  },

  codeBlock: {
    icon: IconCode,
    controls: 'code-block',
  },

  bold: {
    icon: IconBold,
    controls: 'bold',
  },

  italic: {
    icon: IconItalic,
    controls: 'italic',
  },

  underline: {
    icon: IconUnderline,
    controls: 'underline',
  },

  strike: {
    icon: IconStrikethrough,
    controls: 'strike',
  },

  unorderedList: {
    icon: IconList,
    controls: 'list',
    value: 'bullet',
  },

  orderedList: {
    icon: IconListNumbers,
    controls: 'list',
    value: 'ordered',
  },

  link: {
    icon: IconLink,
    controls: 'link',
  },

  image: {
    icon: IconPhoto,
    controls: 'image',
  },

  clean: {
    icon: IconClearFormatting,
    controls: 'clean',
  },

  alignCenter: {
    icon: IconAlignCenter,
    controls: 'align',
    value: 'center',
    noActive: true,
  },

  alignLeft: {
    icon: IconAlignLeft,
    controls: 'align',
    value: '',
    noActive: true,
  },

  alignRight: {
    icon: IconAlignRight,
    controls: 'align',
    value: 'right',
    noActive: true,
  },

  video: {
    icon: IconBrandYoutube,
    controls: 'video',
  },

  h1: {
    icon: IconH1,
    controls: 'header',
    value: '1',
  },

  h2: {
    icon: IconH2,
    controls: 'header',
    value: '2',
  },

  h3: {
    icon: IconH3,
    controls: 'header',
    value: '3',
  },

  h4: {
    icon: IconH4,
    controls: 'header',
    value: '4',
  },

  h5: {
    icon: IconH5,
    controls: 'header',
    value: '5',
  },

  h6: {
    icon: IconH6,
    controls: 'header',
    value: '6',
  },

  sup: {
    icon: IconSuperscript,
    controls: 'script',
    value: 'super',
  },

  sub: {
    icon: IconSubscript,
    controls: 'script',
    value: 'sub',
  },

  blockquote: {
    icon: IconBlockquote,
    controls: 'blockquote',
  },
} as const;

export type ToolbarControl = keyof typeof CONTROLS;
