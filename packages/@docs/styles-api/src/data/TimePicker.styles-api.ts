import type { TimePickerFactory } from '@mantine/dates';
import type { StylesApiData } from '../types';
import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api';

export const TimePickerStylesApi: StylesApiData<TimePickerFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
    control: 'Button in the dropdown which is used to select hours/minutes/seconds/am-pm',
    controlsList: 'List of buttons with hours/minutes/seconds/am-pm',
    controlsListGroup: 'Group of controlsLists',
    dropdown: 'Popover dropdown',
    fieldsRoot: 'A wrapper element for all fieldsGroups',
    fieldsGroup: 'A wrapper element for hours/minutes/seconds/am-pm fields',
    field: 'Hours/minutes/seconds/am-pm input field',
    presetControl: 'Time preset button',
    presetsGroup: 'Wraps preset controls and label',
    presetsGroupLabel: 'Labels of the preset group',
    presetsRoot: 'Element wrapping all presets content',
  },

  vars: {
    dropdown: {
      '--control-font-size': 'Controls `font-size` of dropdown controls',
    },
  },

  modifiers: [],
};
