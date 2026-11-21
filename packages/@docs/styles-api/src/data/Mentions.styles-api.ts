import type { MentionsFactory } from '@mantine/core';
import type { StylesApiData } from '../types';
import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api';

export const MentionsStylesApi: StylesApiData<MentionsFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
    input: 'Input wrapper element (InputBase)',
    field: 'Native textarea/input element, transparent text over the highlighter',
    highlighter: 'Overlay rendered behind the transparent field that displays the styled text',
    highlight: 'Individual mention rendered in the highlighter overlay',
    dropdown: 'Suggestions dropdown root element',
    options: 'Suggestions list wrapper',
    option: 'Suggestion option',
    nothingFound: 'Empty state message, also used for the loading and error messages',
    inlineSuggestion: 'Inline ghost-text suggestion root element',
    inlineSuggestionPrefix: 'Already typed part of the inline suggestion',
    inlineSuggestionText: 'Completion part of the inline suggestion',
  },

  vars: {
    highlight: {
      '--mentions-highlight-color': 'Text `color` of mentions in the highlighter',
      '--mentions-highlight-bg': '`background-color` of mentions in the highlighter',
    },
  },

  modifiers: [
    {
      modifier: 'data-mention-selection',
      selector: 'highlight',
      condition: 'Caret or selection overlaps the mention',
      value: 'inside | boundary | partial | full',
    },
    {
      modifier: 'data-trigger',
      selector: 'highlight',
      condition: 'Always',
      value: 'Mention trigger',
    },
    {
      modifier: 'data-interactive',
      selector: 'highlighter',
      condition:
        '`renderMention` prop is set and the field is interactive (not `disabled`, `readOnly` or `mode="static"`), mentions receive pointer events',
    },
    {
      modifier: 'data-combobox-selected',
      selector: 'option',
      condition: 'Option is selected with keyboard',
    },
  ],
};
