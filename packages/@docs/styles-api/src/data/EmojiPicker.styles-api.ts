import type { EmojiPickerFactory } from '@mantine/emoji';
import type { StylesApiData } from '../types';

export const EmojiPickerStylesApi: StylesApiData<EmojiPickerFactory> = {
  selectors: {
    root: 'Root element',
    search: 'Search input wrapper',
    searchInput: 'Search text input',
    categoryNav: 'Category navigation bar',
    categoryNavButton: 'Category navigation button',
    content: 'Scrollable emoji grid area',
    empty: 'Content displayed when search yields no results',
    categoryLabel: 'Category label row',
    grid: 'Row of emoji buttons',
    emoji: 'Individual emoji button',
    preview: 'Footer preview area',
    previewEmoji: 'Emoji displayed in preview',
    previewName: 'Emoji name displayed in preview',
    skinToneDropdown: 'Skin tone popover dropdown',
    skinToneSelector: 'Skin tone selector wrapper',
    skinToneButton: 'Individual skin tone button',
  },

  vars: {
    root: {
      '--ep-columns': 'Number of columns in the emoji grid',
      '--ep-emoji-size': 'Controls `width` and `height` of emoji buttons',
      '--ep-emoji-fz': 'Controls `font-size` of emoji characters',
      '--ep-preview-py': 'Controls vertical `padding` of the preview area',
      '--ep-skin-tone-size': 'Controls `width` and `height` of skin tone buttons',
      '--ep-skin-tone-fz': 'Controls `font-size` of skin tone characters',
    },
  },

  modifiers: [
    {
      modifier: 'data-focused',
      selector: 'emoji',
      condition: 'Emoji is active during keyboard navigation',
    },
    {
      modifier: 'data-active',
      selector: 'skinToneButton',
      condition: 'Skin tone button is currently selected',
    },
  ],
};
