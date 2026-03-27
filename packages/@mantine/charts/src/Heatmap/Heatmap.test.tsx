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

  it('renders cells with a fill color when all data values are equal', () => {
    const { container } = render(
      <Heatmap
        data={{ '2024-06-01': 5, '2024-06-02': 5, '2024-06-03': 5 }}
        startDate="2024-06-01"
        endDate="2024-06-03"
      />
    );

    const filledRects = Array.from(container.querySelectorAll<SVGRectElement>('rect')).filter(
      (rect) => rect.getAttribute('fill') && rect.getAttribute('fill') !== 'transparent'
    );

    expect(filledRects.length).toBeGreaterThan(0);
    filledRects.forEach((rect) => expect(rect.getAttribute('fill')).toBeTruthy());
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
