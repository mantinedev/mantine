import type { HeatmapFactory } from '@mantine/charts';
import type { StylesApiData } from '../types';

export const HeatmapStylesApi: StylesApiData<HeatmapFactory> = {
  selectors: {
    root: 'Root element',
    weekdayLabel: 'Weekday text element',
    monthLabel: 'Month text element',
    rect: 'Rect that represents date',
  },

  vars: {},
  modifiers: [],
};
