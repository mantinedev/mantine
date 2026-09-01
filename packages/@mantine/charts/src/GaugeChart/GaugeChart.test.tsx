import { render, tests } from '@mantine-tests/core';
import { GaugeChart, GaugeChartProps, GaugeChartStylesNames } from './GaugeChart';

const defaultProps: GaugeChartProps = {
  value: 50,
};

function getTrack(container: HTMLElement) {
  return container.querySelector('.mantine-GaugeChart-track')!;
}

function getSections(container: HTMLElement) {
  return Array.from(container.querySelectorAll('.mantine-GaugeChart-section'));
}

function getViewBox(container: HTMLElement) {
  return container.querySelector('svg')!.getAttribute('viewBox')!.split(' ').map(Number);
}

describe('@mantine/charts/GaugeChart', () => {
  tests.itSupportsSystemProps<GaugeChartProps, GaugeChartStylesNames>({
    component: GaugeChart,
    props: defaultProps,
    refType: SVGSVGElement,
    displayName: '@mantine/charts/GaugeChart',
    stylesApiSelectors: ['root', 'track', 'section', 'label'],
    // `size` is the numeric chart dimension, not a Mantine size token
    size: false,
  });

  it('renders a single arc command for the default angle range', () => {
    const { container } = render(<GaugeChart {...defaultProps} />);
    const d = getTrack(container).getAttribute('d')!;

    // Long way round (240deg) drawn clockwise
    expect(d).toMatch(/^M [\d.-]+ [\d.-]+ A [\d.]+ [\d.]+ 0 1 1 [\d.-]+ [\d.-]+$/);
  });

  it('renders a full circle as two arc commands', () => {
    const { container } = render(<GaugeChart {...defaultProps} startAngle={0} endAngle={360} />);
    const d = getTrack(container).getAttribute('d')!;

    expect(d.match(/A /g)).toHaveLength(2);

    // The two arcs must not collapse onto a single point
    const points = d.match(/[\d.-]+ [\d.-]+/g)!;
    expect(points[0]).not.toBe(points[1]);
  });

  it('renders a full circle for -180/180 as well', () => {
    const { container } = render(<GaugeChart {...defaultProps} startAngle={-180} endAngle={180} />);
    expect(getTrack(container).getAttribute('d')!.match(/A /g)).toHaveLength(2);
  });

  it('gives a full circle a square viewBox covering the whole gauge', () => {
    const { container } = render(
      <GaugeChart {...defaultProps} size={200} thickness={12} startAngle={0} endAngle={360} />
    );
    const [, , width, height] = getViewBox(container);

    // Arc diameter (188) plus half the stroke (6) on both sides - with no `target` there is
    // no needle to reserve room for, so the gauge fills exactly the requested size
    expect(width).toBeCloseTo(200, 5);
    expect(height).toBeCloseTo(200, 5);
  });

  it('reserves room for the target needle only when a target is set', () => {
    const withoutTarget = render(
      <GaugeChart {...defaultProps} size={200} thickness={12} startAngle={0} endAngle={360} />
    );
    const withTarget = render(
      <GaugeChart
        {...defaultProps}
        target={80}
        size={200}
        thickness={12}
        startAngle={0}
        endAngle={360}
      />
    );

    expect(getViewBox(withoutTarget.container)[2]).toBeCloseTo(200, 5);
    // The needle sticks out past the arc, so the viewBox has to grow to contain it
    expect(getViewBox(withTarget.container)[2]).toBeCloseTo(206, 5);
  });

  it('excludes cardinal points that are outside the arc from the viewBox', () => {
    const { container } = render(<GaugeChart {...defaultProps} size={200} thickness={12} />);
    const [, , width, height] = getViewBox(container);

    expect(width).toBeCloseTo(200, 5);
    // Default -120/120 arc does not reach the bottom of the circle
    expect(height).toBeCloseTo(153, 5);
    expect(height).toBeLessThan(width);
  });

  it('renders a descending angle range counter-clockwise', () => {
    const { container } = render(<GaugeChart {...defaultProps} startAngle={120} endAngle={-120} />);
    const d = getTrack(container).getAttribute('d')!;

    expect(d).toMatch(/A [\d.]+ [\d.]+ 0 1 0 /);
  });

  it('produces the same viewBox for a range and its reverse', () => {
    const { container: ascending } = render(
      <GaugeChart {...defaultProps} startAngle={-120} endAngle={120} />
    );
    const { container: descending } = render(
      <GaugeChart {...defaultProps} startAngle={120} endAngle={-120} />
    );

    expect(getViewBox(descending)).toStrictEqual(getViewBox(ascending));
  });

  it('renders sections for a descending angle range', () => {
    const sections = [
      { value: 40, color: 'green.6' },
      { value: 70, color: 'yellow.6' },
      { value: 100, color: 'red.6' },
    ];

    const { container } = render(
      <GaugeChart {...defaultProps} sections={sections} startAngle={120} endAngle={-120} />
    );

    expect(getSections(container)).toHaveLength(3);
    getSections(container).forEach((section) => {
      expect(section.getAttribute('d')).toBeTruthy();
    });
  });

  it('renders sections for an ascending angle range', () => {
    const sections = [
      { value: 40, color: 'green.6' },
      { value: 100, color: 'red.6' },
    ];

    const { container } = render(<GaugeChart {...defaultProps} sections={sections} />);
    expect(getSections(container)).toHaveLength(2);
  });

  it('skips sections that do not advance the arc', () => {
    const sections = [
      { value: 40, color: 'green.6' },
      { value: 40, color: 'yellow.6' },
      { value: 100, color: 'red.6' },
    ];

    const { container } = render(<GaugeChart {...defaultProps} sections={sections} />);
    expect(getSections(container).filter((s) => s.getAttribute('d'))).toHaveLength(2);
  });

  it('renders a full circle of sections', () => {
    const sections = [
      { value: 50, color: 'green.6' },
      { value: 100, color: 'red.6' },
    ];

    const { container } = render(
      <GaugeChart {...defaultProps} sections={sections} startAngle={0} endAngle={360} />
    );

    const rendered = getSections(container);
    expect(rendered).toHaveLength(2);
    // The second section spans 180deg -> 360deg and must still be a single arc
    expect(rendered[1].getAttribute('d')!.match(/A /g)).toHaveLength(1);
  });

  it('clamps a span larger than a full turn to a single circle', () => {
    const { container: full } = render(
      <GaugeChart {...defaultProps} startAngle={0} endAngle={360} />
    );
    const { container: over } = render(
      <GaugeChart {...defaultProps} startAngle={0} endAngle={720} />
    );

    expect(getTrack(over).getAttribute('d')).toBe(getTrack(full).getAttribute('d'));
    expect(getViewBox(over)).toStrictEqual(getViewBox(full));
  });

  it('does not let a clamped span collapse sections onto each other', () => {
    const sections = [
      { value: 50, color: 'green.6' },
      { value: 100, color: 'red.6' },
    ];

    const { container: full } = render(
      <GaugeChart {...defaultProps} sections={sections} startAngle={0} endAngle={360} />
    );
    const { container: over } = render(
      <GaugeChart {...defaultProps} sections={sections} startAngle={0} endAngle={720} />
    );

    expect(getSections(over).map((s) => s.getAttribute('d'))).toStrictEqual(
      getSections(full).map((s) => s.getAttribute('d'))
    );
  });

  it('reserves room for a round-capped target marker in the viewBox', () => {
    const { container } = render(
      <GaugeChart
        {...defaultProps}
        target={50}
        targetSize={12}
        roundCaps
        size={200}
        thickness={12}
      />
    );
    const [, , width] = getViewBox(container);

    // needleLength / 2 (9) + targetSize / 2 (6) of padding on each side
    expect(width).toBeCloseTo(188 + 15 * 2, 5);
  });

  it('sets meter role and value attributes', () => {
    const { container } = render(<GaugeChart value={150} min={0} max={100} />);
    const svg = container.querySelector('svg')!;

    expect(svg).toHaveAttribute('role', 'meter');
    expect(svg).toHaveAttribute('aria-valuenow', '100');
    expect(svg).toHaveAttribute('aria-valuemin', '0');
    expect(svg).toHaveAttribute('aria-valuemax', '100');
  });

  it('reports the clamped value in aria-valuetext and the default label', () => {
    const { container } = render(<GaugeChart value={150} min={0} max={100} />);
    const svg = container.querySelector('svg')!;

    // aria-valuetext is the readable equivalent of aria-valuenow, and the default label
    // shows what the arc draws – all three have to agree on the clamped value
    expect(svg).toHaveAttribute('aria-valuenow', '100');
    expect(svg).toHaveAttribute('aria-valuetext', '100');
    expect(svg).toHaveTextContent('100');
    expect(svg).not.toHaveTextContent('150');
  });

  it('passes the clamped value to valueFormatter', () => {
    const valueFormatter = jest.fn((v: number) => `${v}%`);
    const { container } = render(
      <GaugeChart value={150} min={0} max={100} valueFormatter={valueFormatter} />
    );

    expect(valueFormatter).toHaveBeenCalledWith(100);
    expect(container.querySelector('svg')).toHaveAttribute('aria-valuetext', '100%');
  });

  it('names the meter from a string label', () => {
    const { container } = render(<GaugeChart value={72} label="CPU usage" />);
    expect(container.querySelector('svg')).toHaveAttribute('aria-label', 'CPU usage');
  });

  it('falls back to a generic name rather than leaving the meter unnamed', () => {
    // `role="meter"` requires an accessible name - without one it is announced as just
    // "meter". The formatted value is not used, it would only repeat `aria-valuetext`.
    const { container } = render(<GaugeChart value={72} />);
    expect(container.querySelector('svg')).toHaveAttribute('aria-label', 'Gauge');
  });

  it('does not use a non-string label as the accessible name', () => {
    const { container } = render(<GaugeChart value={72} label={<span>72%</span>} />);
    expect(container.querySelector('svg')).toHaveAttribute('aria-label', 'Gauge');
  });

  it('defers to aria-labelledby instead of adding a generic name', () => {
    const { container } = render(<GaugeChart value={72} aria-labelledby="gauge-title" />);
    const svg = container.querySelector('svg')!;

    expect(svg).toHaveAttribute('aria-labelledby', 'gauge-title');
    expect(svg).not.toHaveAttribute('aria-label');
  });

  it('prefers an explicit aria-label', () => {
    const { container } = render(
      <GaugeChart value={72} label="CPU usage" aria-label="Processor utilisation" />
    );
    expect(container.querySelector('svg')).toHaveAttribute('aria-label', 'Processor utilisation');
  });
});
