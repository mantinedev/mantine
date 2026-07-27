import type { CascaderFactory } from '@mantine/core';
import type { StylesApiData } from '../types';
import { ComboboxLikeSelectors } from './Combobox.styles-api';
import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api';

export const CascaderStylesApi: StylesApiData<CascaderFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
    ...ComboboxLikeSelectors,
    columnsList: 'Wrapper of all cascading columns in the dropdown',
    columnsOverflow: 'Control displayed to reveal levels hidden by `maxDisplayedLevels`',
    column: 'Single cascading column',
    columnScroll: 'Scrollable options area of a column',
    columnOption: 'Option control inside a column',
    columnOptionLabel: 'Label of the column option',
    columnOptionIcon: 'Expand chevron of the column option',
    columnOptionCheck: 'Check icon displayed on the selected leaf option',
    columnEmpty: 'Empty state of a column',
    flatOption: 'Option content in the flat list (search results / `withColumns={false}`)',
  },

  vars: {},

  modifiers: [
    {
      modifier: 'data-active',
      selector: 'columnOption',
      condition: 'Option is highlighted in the column that is currently being navigated',
    },
    {
      modifier: 'data-in-path',
      selector: 'columnOption',
      condition: 'Option is highlighted in one of the previous (ancestor) columns',
    },
    {
      modifier: 'data-selected',
      selector: 'columnOption',
      condition: 'Option is the selected value',
    },
    { modifier: 'data-disabled', selector: 'columnOption', condition: 'Option is disabled' },
  ],
};
