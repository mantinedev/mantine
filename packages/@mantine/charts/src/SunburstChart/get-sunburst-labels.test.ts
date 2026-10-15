import { DEFAULT_THEME } from '@mantine/core';
import { getSunburstLabels } from './get-sunburst-labels';
import { resolveSunburstData } from './resolve-sunburst-data';

const base = {
  cx: 150,
  cy: 150,
  innerRadius: 50,
  thickness: 100,
  ringPadding: 0,
  startAngle: 0,
  angleSpan: 360,
  fontSize: 10,
};

describe('@mantine/charts/SunburstChart/get-sunburst-labels', () => {
  it('returns no labels for empty data', () => {
    const { root } = resolveSunburstData([], DEFAULT_THEME, 'value');
    expect(getSunburstLabels({ ...base, root })).toEqual([]);
  });

  it('places labels at the middle of the sector and formats values', () => {
    const { root } = resolveSunburstData(
      [
        { name: 'A', value: 1 },
        { name: 'B', value: 1 },
      ],
      DEFAULT_THEME,
      'value'
    );
    const labels = getSunburstLabels({ ...base, root, valueFormatter: (value) => `${value}%` });
    expect(labels.map((label) => label.text)).toEqual(['1%', '1%']);
    expect(labels[0].x).toBeCloseTo(150);
    expect(labels[0].y).toBeCloseTo(50);
    expect(labels[1].x).toBeCloseTo(150);
    expect(labels[1].y).toBeCloseTo(250);
  });

  it('respects startAngle and angleSpan', () => {
    const { root } = resolveSunburstData([{ name: 'A', value: 1 }], DEFAULT_THEME, 'value');
    const [label] = getSunburstLabels({ ...base, root, startAngle: 90, angleSpan: 180 });
    expect(label.x).toBeCloseTo(50);
    expect(label.y).toBeCloseTo(150);
  });

  it('hides labels of zero-value nodes and of arcs too small or rings too thin', () => {
    const { root } = resolveSunburstData(
      [
        { name: 'Big', value: 1000 },
        { name: 'Zero', value: 0 },
        { name: 'Tiny', value: 1 },
      ],
      DEFAULT_THEME,
      'value'
    );
    expect(getSunburstLabels({ ...base, root }).map((label) => label.text)).toEqual(['1000']);
    expect(getSunburstLabels({ ...base, root, thickness: 8 })).toEqual([]);
  });

  it('places nested labels on outer rings', () => {
    const { root } = resolveSunburstData(
      [{ name: 'A', children: [{ name: 'a', value: 5 }] }],
      DEFAULT_THEME,
      'value'
    );
    const labels = getSunburstLabels({ ...base, root, thickness: 50, ringPadding: 0 });
    expect(labels.map((label) => [label.text, Math.round(label.x), Math.round(label.y)])).toEqual([
      ['5', 75, 150],
      ['5', 25, 150],
    ]);
  });
});
