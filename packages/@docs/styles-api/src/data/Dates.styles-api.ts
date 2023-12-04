import type {
  MonthFactory,
  CalendarHeaderFactory,
  DecadeLevelGroupFactory,
  YearLevelGroupFactory,
  MonthLevelGroupFactory,
  CalendarFactory,
  YearPickerFactory,
  MonthPickerFactory,
  DatePickerFactory,
  YearPickerInputFactory,
  MonthPickerInputFactory,
  DatePickerInputFactory,
  DateInputFactory,
  DateTimePickerFactory,
  TimeInputFactory,
} from '@mantine/dates';
import { InputBaseStylesApi } from './InputBase.styles-api';
import type { StylesApiData } from '../types';

export const MonthStylesApi: StylesApiData<MonthFactory> = {
  selectors: {
    monthThead: 'thead element of month table',
    monthRow: 'tr element of month table',
    monthTbody: 'tbody element of month table',
    monthCell: 'td element of month table',
    month: 'Month table element',
    weekdaysRow: 'Weekdays tr element',
    weekday: 'Weekday th element',
    day: 'Month day control',
  },

  vars: {},

  modifiers: [
    {
      modifier: 'data-with-spacing',
      selector: 'monthCell',
      condition: '`withCellSpacing` prop is set',
    },

    { modifier: 'data-today', selector: 'day', condition: 'Date is the same as new Date()' },
    {
      modifier: 'data-hidden',
      selector: 'day',
      condition: 'Day is outside of current month and `hideOutsideDates` is set',
    },
    {
      modifier: 'data-disabled',
      selector: 'day',
      condition: 'Day disabled by one of the props (`excludeDate`, `getDayProps`, etc.)',
    },
    { modifier: 'data-weekend', selector: 'day', condition: 'Day is weekend' },
    { modifier: 'data-outside', selector: 'day', condition: 'Day is outside of the current month' },
    { modifier: 'data-selected', selector: 'day', condition: 'Day is selected' },
    { modifier: 'data-in-range', selector: 'day', condition: 'Day is in range selection' },
    {
      modifier: 'data-first-in-range',
      selector: 'day',
      condition: 'Day is first in range selection',
    },
    {
      modifier: 'data-last-in-range',
      selector: 'day',
      condition: 'Day is last in range selection',
    },
  ],
};

// export const UnstyledButtonStylesApi: StylesApiData<UnstyledButtonFactory> = {
//   selectors: {
//     root: 'Root element',
//   },

//   vars: {},
// };

export const CalendarHeaderStylesApi: StylesApiData<CalendarHeaderFactory> = {
  selectors: {
    calendarHeader: 'Calendar header root element',
    calendarHeaderControl: 'Previous/next calendar header controls',
    calendarHeaderControlIcon: 'Icon of previous/next calendar header controls',
    calendarHeaderLevel: 'Level control (changes levels when clicked, month -> year -> decade)',
  },

  vars: {
    calendarHeader: {
      '--dch-control-size': 'Controls size of the previous/next and level controls',
      '--dch-fz': 'Controls font-size of the previous/next and level controls',
    },
  },

  modifiers: [
    {
      modifier: 'data-direction',
      selector: 'calendarHeaderControl',
      value: '`"previous"` or `"next"` depending on the control type',
    },
    {
      modifier: 'data-disabled',
      selector: 'calendarHeaderControl',
      condition: 'Control is disabled for any reason',
    },
  ],
};

export const DecadeLevelGroupStylesApi: StylesApiData<DecadeLevelGroupFactory> = {
  selectors: {
    ...CalendarHeaderStylesApi.selectors,
    levelsGroup: 'Group of decades levels',
    yearsList: 'Years list table element',
    yearsListRow: 'Years list row element',
    yearsListCell: 'Years list cell element',
    yearsListControl: 'Button used to pick months and years',
  },

  vars: {},
};

export const YearLevelGroupStylesApi: StylesApiData<YearLevelGroupFactory> = {
  selectors: {
    ...CalendarHeaderStylesApi.selectors,
    levelsGroup: 'Group of decades levels',
    monthsList: 'Years list table element',
    monthsListRow: 'Years list row element',
    monthsListCell: 'Years list cell element',
    monthsListControl: 'Button used to pick months and years',
  },

  vars: {},
};

export const MonthLevelGroupStylesApi: StylesApiData<MonthLevelGroupFactory> = {
  selectors: {
    ...CalendarHeaderStylesApi.selectors,
    levelsGroup: 'Group of decades levels',
    ...MonthStylesApi.selectors,
  },

  vars: {},
};

export const CalendarStylesApi: StylesApiData<CalendarFactory> = {
  selectors: {
    ...CalendarHeaderStylesApi.selectors,
    ...DecadeLevelGroupStylesApi.selectors,
    ...YearLevelGroupStylesApi.selectors,
    ...MonthLevelGroupStylesApi.selectors,
  },

  vars: {},

  modifiers: [...CalendarHeaderStylesApi.modifiers!, ...MonthStylesApi.modifiers!],
};

export const YearPickerStylesApi: StylesApiData<YearPickerFactory> = {
  selectors: {
    ...CalendarHeaderStylesApi.selectors,
    ...DecadeLevelGroupStylesApi.selectors,
  },

  vars: {},

  modifiers: CalendarHeaderStylesApi.modifiers,
};

export const MonthPickerStylesApi: StylesApiData<MonthPickerFactory> = {
  selectors: {
    ...CalendarHeaderStylesApi.selectors,
    ...DecadeLevelGroupStylesApi.selectors,
    ...YearLevelGroupStylesApi.selectors,
  },

  vars: {},

  modifiers: CalendarHeaderStylesApi.modifiers,
};

export const DatePickerStylesApi: StylesApiData<DatePickerFactory> = {
  selectors: {
    ...CalendarHeaderStylesApi.selectors,
    ...DecadeLevelGroupStylesApi.selectors,
    ...YearLevelGroupStylesApi.selectors,
    ...MonthLevelGroupStylesApi.selectors,
  },

  vars: {},

  modifiers: [...CalendarHeaderStylesApi.modifiers!, ...MonthStylesApi.modifiers!],
};

export const YearPickerInputStylesApi: StylesApiData<YearPickerInputFactory> = {
  selectors: {
    ...InputBaseStylesApi.selectors,
    ...YearPickerStylesApi.selectors,
  },

  vars: {},

  modifiers: YearPickerStylesApi.modifiers,
};

export const MonthPickerInputStylesApi: StylesApiData<MonthPickerInputFactory> = {
  selectors: {
    ...InputBaseStylesApi.selectors,
    ...MonthPickerStylesApi.selectors,
  },

  vars: {},

  modifiers: MonthPickerStylesApi.modifiers,
};

export const DatePickerInputStylesApi: StylesApiData<DatePickerInputFactory> = {
  selectors: {
    ...InputBaseStylesApi.selectors,
    ...DatePickerStylesApi.selectors,
  },

  vars: {},

  modifiers: DatePickerStylesApi.modifiers,
};

export const DateInputStylesApi: StylesApiData<DateInputFactory> = {
  selectors: {
    ...InputBaseStylesApi.selectors,
    ...DatePickerStylesApi.selectors,
  },

  vars: {},

  modifiers: DatePickerStylesApi.modifiers,
};

export const DateTimePickerStylesApi: StylesApiData<DateTimePickerFactory> = {
  selectors: {
    ...InputBaseStylesApi.selectors,
    ...DatePickerStylesApi.selectors,
    timeWrapper: 'Wrapper around time input and submit button',
    timeInput: 'TimeInput',
    submitButton: 'Submit button',
  },

  vars: {},

  modifiers: DatePickerStylesApi.modifiers,
};

export const TimeInputStylesApi: StylesApiData<TimeInputFactory> = InputBaseStylesApi;
