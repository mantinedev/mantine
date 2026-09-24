import type { MaskedDateInputFactory } from '@mantine/dates';
import type { StylesApiData } from '../types';
import { CalendarStylesApi, MonthStylesApi } from './Dates.styles-api';
import { InputStylesApi, InputWrapperStylesApi } from './Input.styles-api';

export const MaskedDateInputStylesApi: StylesApiData<MaskedDateInputFactory> = {
  selectors: {
    ...InputStylesApi.selectors,
    ...InputWrapperStylesApi.selectors,
    ...CalendarStylesApi.selectors,
    fieldsRoot: 'A wrapper element for all field groups',
    fieldsGroup: 'A wrapper element for date/time fields',
    field: 'Day/month/year/hours/minutes/seconds input field',
    dateSeparator: 'Separator between date fields',
    timeSeparator: 'Separator between time fields',
    dropdown: 'Popover dropdown containing calendar',
  },
  vars: {},
  modifiers: [...(MonthStylesApi.modifiers as any)],
};
