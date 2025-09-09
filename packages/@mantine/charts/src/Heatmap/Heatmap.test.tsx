import { render, tests } from '@mantine-tests/core';
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

  it('adds extra column between months when splitMonths is set', () => {
    const commonProps: HeatmapProps = {
      data: {},
      // Ensure full year to have 12 months -> 11 separators
      startDate: new Date(2024, 0, 1),
      endDate: new Date(2024, 11, 31),
      withOutsideDates: true,
    };

    const { container: c1 } = render(<Heatmap {...commonProps} />);
    const { container: c2 } = render(<Heatmap {...commonProps} splitMonths />);

    const svg1 = c1.querySelector('svg')!;
    const svg2 = c2.querySelector('svg')!;

    const width1 = Number(svg1.getAttribute('width'));
    const width2 = Number(svg2.getAttribute('width'));

    // With splitMonths enabled, width must increase due to separators/extra split columns
    expect(width2).toBeGreaterThan(width1);
  });
});
