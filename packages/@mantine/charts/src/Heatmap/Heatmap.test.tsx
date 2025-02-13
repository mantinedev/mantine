import { tests } from '@mantine-tests/core';
import { Heatmap, HeatmapProps, HeatmapStylesNames } from './Heatmap';

const defaultProps: HeatmapProps = {
  data: {},
  withMonthLabels: true,
  withWeekdayLabels: true,
};

describe('@mantine/core/Heatmap', () => {
  tests.itSupportsSystemProps<HeatmapProps, HeatmapStylesNames>({
    component: Heatmap,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: SVGSVGElement,
    displayName: '@mantine/charts/Heatmap',
    stylesApiSelectors: ['root', 'monthLabel', 'weekdayLabel', 'rect'],
  });
});
