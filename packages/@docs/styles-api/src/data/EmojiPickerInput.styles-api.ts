import type { EmojiPickerInputFactory } from '@mantine/emoji';
import type { StylesApiData } from '../types';
import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api';

export const EmojiPickerInputStylesApi: StylesApiData<EmojiPickerInputFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
    dropdown: 'Popover dropdown',
    inputValue: 'Wrapper of the selected emoji and its name',
    inputEmoji: 'Selected emoji character displayed in the input',
    inputEmojiName: 'Selected emoji name displayed next to the emoji',
  },

  vars: {
    root: {},
  },
};
