import type { MentionsFactory } from '@mantine/core';
import type { StylesApiData } from '../types';
import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api';

export const MentionsStylesApi: StylesApiData<MentionsFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
    highlighter: 'Overlay rendered behind the transparent input that displays the styled text',
    highlight: 'Individual mention rendered in the highlighter overlay',
    dropdown: 'Suggestions dropdown root element',
    options: 'Suggestions list wrapper',
    option: 'Suggestion option',
    nothingFound: 'Empty, loading and error state message',
    inlineSuggestion: 'Inline ghost-text suggestion root element',
    inlineSuggestionPrefix: 'Already typed part of the inline suggestion',
    inlineSuggestionText: 'Completion part of the inline suggestion',
    inlineSuggestionSuffix: 'Trailing part of the inline suggestion',
  },

  vars: {},

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
      modifier: 'data-combobox-selected',
      selector: 'option',
      condition: 'Option is selected with keyboard',
    },
  ],
};
