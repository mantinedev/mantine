import type { HeatmapFactory } from '@mantine/charts';
import type { StylesApiData } from '../types';

export const HeatmapStylesApi: StylesApiData<HeatmapFactory> = {
  selectors: {
    root: 'Root element',
    weekdayLabel: 'Weekday text element',
    monthLabel: 'Month text element',
    rect: 'Rect that represents date',
    legend: 'Legend group element',
    legendLabel: 'Legend text label (Less/More)',
    legendRect: 'Legend color rect',
  },

  vars: {},
  modifiers: [],
};
