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

function getSectionCaps(container: HTMLElement) {
  return Array.from(container.querySelectorAll('.mantine-GaugeChart-sectionCap'));
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

    expect(width).toBeCloseTo(200, 5);
    expect(height).toBeCloseTo(200, 5);
  });

  it('reserves room for the target marker only when a target is set', () => {
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

  it('does not round the caps of sections without roundCaps', () => {
    const { container } = render(
      <GaugeChart
        {...defaultProps}
        sections={[
          { value: 50, color: 'red' },
          { value: 100, color: 'blue' },
        ]}
      />
    );

    expect(getSectionCaps(container)).toHaveLength(0);
    getSections(container).forEach((section) => {
      expect(section).toHaveAttribute('stroke-linecap', 'butt');
    });
  });

  it('rounds only the outer ends of the first and last sections with roundCaps', () => {
    const sections = [
      { value: 30, color: 'red' },
      { value: 60, color: 'green' },
      { value: 100, color: 'blue' },
    ];
    const { container } = render(<GaugeChart {...defaultProps} sections={sections} roundCaps />);
    const rendered = getSections(container);
    const caps = getSectionCaps(container);

    rendered.forEach((section) => {
      expect(section).toHaveAttribute('stroke-linecap', 'butt');
    });

    expect(caps).toHaveLength(2);
    expect(caps[0]).toHaveAttribute('stroke-linecap', 'round');
    expect(caps[0]).toHaveAttribute('d', rendered[0].getAttribute('d')!);
    expect(caps[0]).toHaveAttribute('stroke', rendered[0].getAttribute('stroke')!);
    expect(caps[1]).toHaveAttribute('stroke-linecap', 'round');
    expect(caps[1]).toHaveAttribute('d', rendered[2].getAttribute('d')!);
    expect(caps[1]).toHaveAttribute('stroke', rendered[2].getAttribute('stroke')!);

    const svg = container.querySelector('svg')!;
    const order = Array.from(svg.querySelectorAll<Element>('path'));
    expect(order.indexOf(caps[1])).toBeLessThan(order.indexOf(rendered[0]));
  });

  it('renders a single round-capped copy for a single section with roundCaps', () => {
    const { container } = render(
      <GaugeChart {...defaultProps} sections={[{ value: 80, color: 'red' }]} roundCaps />
    );
    const caps = getSectionCaps(container);

    expect(caps).toHaveLength(1);
    expect(caps[0]).toHaveAttribute('d', getSections(container)[0].getAttribute('d')!);
  });

  it('ignores skipped sections when picking the sections to round', () => {
    const { container } = render(
      <GaugeChart
        {...defaultProps}
        sections={[
          { value: 0, color: 'gray' },
          { value: 50, color: 'red' },
          { value: 100, color: 'blue' },
          { value: 100, color: 'gray' },
        ]}
        roundCaps
      />
    );
    const caps = getSectionCaps(container);
    const rendered = getSections(container).filter((s) => s.getAttribute('d'));

    expect(caps).toHaveLength(2);
    expect(caps[0]).toHaveAttribute('d', rendered[0].getAttribute('d')!);
    expect(caps[1]).toHaveAttribute('d', rendered[1].getAttribute('d')!);
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

    expect(width).toBeCloseTo(188 + 15 * 2, 5);
  });

  it('does not render a zero-length value arc', () => {
    expect(getSections(render(<GaugeChart value={0} roundCaps />).container)).toHaveLength(0);
    expect(getSections(render(<GaugeChart value={-20} roundCaps />).container)).toHaveLength(0);
    expect(
      getSections(render(<GaugeChart value={50} min={50} max={50} roundCaps />).container)
    ).toHaveLength(0);
    expect(getSections(render(<GaugeChart value={1} roundCaps />).container)).toHaveLength(1);
    expect(getSections(render(<GaugeChart value={100} roundCaps />).container)).toHaveLength(1);
  });

  it('does not render zero-span sections', () => {
    const { container } = render(
      <GaugeChart
        value={0}
        roundCaps
        sections={[
          { value: 0, color: 'teal' },
          { value: 0, color: 'blue' },
        ]}
      />
    );

    expect(getSections(container)).toHaveLength(0);
    expect(getSectionCaps(container)).toHaveLength(0);
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

  it('does not use a string label as the accessible name', () => {
    const { container } = render(<GaugeChart value={72} label="72%" />);
    expect(container.querySelector('svg')).toHaveAttribute('aria-label', 'Gauge');
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

  it('treats a non-finite value as missing', () => {
    [NaN, Infinity, -Infinity].forEach((value) => {
      const { container } = render(<GaugeChart value={value} />);
      const svg = container.querySelector('svg')!;

      expect(getSections(container)).toHaveLength(0);
      expect(svg).not.toHaveAttribute('aria-valuenow');
      expect(svg).toHaveAttribute('aria-valuetext', 'No data');
      expect(container.querySelector('.mantine-GaugeChart-label')).toHaveTextContent('');
      expect(svg.innerHTML).not.toContain('NaN');
    });
  });

  it('falls back to the default range for non-finite min and max', () => {
    const { container } = render(<GaugeChart value={72} min={NaN} max={Infinity} />);
    const svg = container.querySelector('svg')!;

    expect(svg).toHaveAttribute('aria-valuemin', '0');
    expect(svg).toHaveAttribute('aria-valuemax', '100');
    expect(svg).toHaveAttribute('aria-valuenow', '72');
    expect(svg.innerHTML).not.toContain('NaN');
  });

  it('does not render the target marker for a non-finite target', () => {
    const { container } = render(<GaugeChart value={72} target={NaN} />);
    expect(container.querySelector('.mantine-GaugeChart-needle')).toBeNull();
    expect(getViewBox(container)).toStrictEqual(
      getViewBox(render(<GaugeChart value={72} />).container)
    );
  });

  it('skips sections with a non-finite value', () => {
    const { container } = render(
      <GaugeChart
        value={72}
        sections={[
          { value: 30, color: 'teal' },
          { value: NaN, color: 'yellow' },
          { value: 60, color: 'orange' },
          { value: 100, color: 'red' },
        ]}
      />
    );

    const rendered = getSections(container);
    expect(rendered).toHaveLength(3);
    expect(rendered.map((section) => section.getAttribute('stroke'))).not.toContain(
      'var(--mantine-color-yellow-filled)'
    );
    expect(container.innerHTML).not.toContain('NaN');
  });

  it('falls back to the default angles for non-finite angles', () => {
    const { container } = render(<GaugeChart value={72} startAngle={NaN} endAngle={Infinity} />);
    const reference = render(<GaugeChart value={72} />).container;

    expect(getViewBox(container)).toStrictEqual(getViewBox(reference));
    expect(getTrack(container).getAttribute('d')).toBe(getTrack(reference).getAttribute('d'));
  });

  it('swaps min and max when min is greater than max', () => {
    const { container } = render(<GaugeChart value={30} min={100} max={0} />);
    const reference = render(<GaugeChart value={30} min={0} max={100} />).container;
    const svg = container.querySelector('svg')!;

    expect(svg).toHaveAttribute('aria-valuemin', '0');
    expect(svg).toHaveAttribute('aria-valuemax', '100');
    expect(svg).toHaveAttribute('aria-valuenow', '30');
    expect(svg).toHaveAttribute('aria-valuetext', '30');
    expect(getSections(container)[0].getAttribute('d')).toBe(
      getSections(reference)[0].getAttribute('d')
    );
  });

  it('keeps the label box inside the inner area of the arc', () => {
    const { container } = render(<GaugeChart value={72} size={200} thickness={12} />);
    const box = container.querySelector('foreignObject')!;
    const inscribed = 88 * Math.SQRT2;

    expect(Number(box.getAttribute('width'))).toBeCloseTo(inscribed, 5);
    expect(Number(box.getAttribute('x')) + Number(box.getAttribute('width')) / 2).toBeCloseTo(
      100,
      5
    );
  });

  it('sizes the label box from the visible side of an asymmetric arc', () => {
    const { container } = render(
      <GaugeChart value={72} size={200} thickness={12} startAngle={0} endAngle={90} />
    );
    const box = container.querySelector('foreignObject')!;
    const [viewBoxX] = getViewBox(container);

    expect(Number(box.getAttribute('x'))).toBeGreaterThanOrEqual(viewBoxX);
    expect(Number(box.getAttribute('width'))).toBeCloseTo((100 - viewBoxX) * 2, 5);
  });

  it('sets the aspect ratio from the arc bounding box', () => {
    const { container } = render(<GaugeChart value={72} size={200} thickness={12} />);
    const svg = container.querySelector('svg')!;
    const [, , width, height] = getViewBox(container);

    expect(svg.style.aspectRatio).toBe(`${width} / ${height}`);
  });

  it('applies trackColor as an inline stroke', () => {
    const { container } = render(<GaugeChart value={72} trackColor="red.6" />);
    expect((getTrack(container) as SVGPathElement).style.stroke).toBe('var(--mantine-color-red-6)');
  });

  it('renders sane geometry for degenerate input', () => {
    const zeroSpan = render(<GaugeChart value={72} startAngle={30} endAngle={30} />).container;
    const reference = render(<GaugeChart value={72} />).container;
    expect(getViewBox(zeroSpan)).toStrictEqual(getViewBox(reference));

    const thick = render(<GaugeChart value={72} size={200} thickness={250} />).container;
    expect(getTrack(thick).getAttribute('stroke-width')).toBe('100');
    expect(getTrack(thick).getAttribute('d')).toContain('A 50 50');

    const zeroSize = render(<GaugeChart value={72} size={0} />).container;
    expect(getViewBox(zeroSize)).toStrictEqual(getViewBox(reference));
  });
});
