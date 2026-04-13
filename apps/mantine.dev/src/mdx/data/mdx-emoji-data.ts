import { Frontmatter } from '@/types';

export const MDX_EMOJI_DATA: Record<string, Frontmatter> = {
  GettingStartedEmoji: {
    title: 'Getting started',
    description: 'Get started with @mantine/emoji package',
    package: '@mantine/emoji',
    license: 'MIT',
    slug: '/emoji/getting-started',
    docs: 'emoji/getting-started.mdx',
    hideInSearch: true,
  },

  EmojiPicker: {
    title: 'EmojiPicker',
    package: '@mantine/emoji',
    slug: '/emoji/emoji-picker',
    props: ['EmojiPicker'],
    styles: ['EmojiPicker'],
    description: 'Search and pick emojis with categories, skin tone selector, and virtualized grid',
    source: '@mantine/emoji/src/components/EmojiPicker/EmojiPicker.tsx',
    license: 'MIT',
    docs: 'emoji/emoji-picker.mdx',
  },

  EmojiPickerPopover: {
    title: 'EmojiPickerPopover',
    package: '@mantine/emoji',
    slug: '/emoji/emoji-picker-popover',
    props: ['EmojiPickerPopover'],
    description: 'EmojiPicker in a popover dropdown',
    source: '@mantine/emoji/src/components/EmojiPickerPopover/EmojiPickerPopover.tsx',
    license: 'MIT',
    docs: 'emoji/emoji-picker-popover.mdx',
  },

  EmojiPickerInput: {
    title: 'EmojiPickerInput',
    package: '@mantine/emoji',
    slug: '/emoji/emoji-picker-input',
    props: ['EmojiPickerInput'],
    styles: ['EmojiPickerInput'],
    description: 'Input with emoji picker dropdown',
    source: '@mantine/emoji/src/components/EmojiPickerInput/EmojiPickerInput.tsx',
    license: 'MIT',
    docs: 'emoji/emoji-picker-input.mdx',
  },

};
