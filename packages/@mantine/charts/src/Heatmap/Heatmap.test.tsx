import { render, tests } from '@mantine-tests/core';
import { Heatmap, HeatmapProps, HeatmapStylesNames } from './Heatmap';

const defaultProps: HeatmapProps = {
  data: {},
  withMonthLabels: true,
  withWeekdayLabels: true,
  withLegend: true,
};

describe('@mantine/core/Heatmap', () => {
  tests.itSupportsSystemProps<HeatmapProps, HeatmapStylesNames>({
    component: Heatmap,
    props: defaultProps,
    refType: SVGSVGElement,
    displayName: '@mantine/charts/Heatmap',
    stylesApiSelectors: [
      'root',
      'monthLabel',
      'weekdayLabel',
      'rect',
      'legend',
      'legendLabel',
      'legendRect',
    ],
  });

  it('adds extra column between months when splitMonths is set', () => {
    const commonProps: HeatmapProps = {
      data: {},
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

    expect(width2).toBeGreaterThan(width1);
  });

  it('does not render legend by default', () => {
    const { container } = render(<Heatmap data={{}} />);
    expect(container.querySelector('[data-id="legend"]')).toBeNull();
  });

  it('renders legend when withLegend is set', () => {
    const { container } = render(<Heatmap data={{}} withLegend />);
    expect(container.querySelector('[data-id="legend"]')).not.toBeNull();
  });

  it('renders correct number of legend rects (colors.length + 1 for empty)', () => {
    const colors = ['#a', '#b', '#c', '#d'];
    const { container } = render(<Heatmap data={{}} withLegend colors={colors} />);
    const legendGroup = container.querySelector('[data-id="legend"]')!;
    const rects = legendGroup.querySelectorAll('rect');
    expect(rects).toHaveLength(colors.length + 1);
  });

  it('renders default legend labels', () => {
    const { container } = render(<Heatmap data={{}} withLegend />);
    const legendGroup = container.querySelector('[data-id="legend"]')!;
    const texts = legendGroup.querySelectorAll('text');
    expect(texts).toHaveLength(2);
    expect(texts[0].textContent).toBe('Less');
    expect(texts[1].textContent).toBe('More');
  });

  it('renders custom legend labels', () => {
    const { container } = render(
      <Heatmap data={{}} withLegend legendLabels={['Weniger', 'Mehr']} />
    );
    const legendGroup = container.querySelector('[data-id="legend"]')!;
    const texts = legendGroup.querySelectorAll('text');
    expect(texts[0].textContent).toBe('Weniger');
    expect(texts[1].textContent).toBe('Mehr');
  });

  it('increases SVG height when legend is enabled', () => {
    const commonProps: HeatmapProps = {
      data: {},
      startDate: new Date(2024, 0, 1),
      endDate: new Date(2024, 11, 31),
    };

    const { container: c1 } = render(<Heatmap {...commonProps} />);
    const { container: c2 } = render(<Heatmap {...commonProps} withLegend />);

    const height1 = Number(c1.querySelector('svg')!.getAttribute('height'));
    const height2 = Number(c2.querySelector('svg')!.getAttribute('height'));

    expect(height2).toBeGreaterThan(height1);
  });

  it('marks first legend rect as empty', () => {
    const { container } = render(<Heatmap data={{}} withLegend />);
    const legendGroup = container.querySelector('[data-id="legend"]')!;
    const rects = legendGroup.querySelectorAll('rect');
    expect(rects[0].getAttribute('data-empty')).not.toBeNull();
    expect(rects[1].getAttribute('data-empty')).toBeNull();
  });
});
