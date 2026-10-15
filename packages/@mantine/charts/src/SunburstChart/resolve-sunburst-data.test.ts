import { DEFAULT_THEME, parseThemeColor } from '@mantine/core';
import {
  getSunburstRechartsDataKey,
  resolveSunburstData,
  SUNBURST_VALUE_KEY,
} from './resolve-sunburst-data';

const color = (value: string) => parseThemeColor({ color: value, theme: DEFAULT_THEME }).value;

function values(nodes: any[]): any[] {
  return nodes.map((node) =>
    node.children
      ? [node.name, node[SUNBURST_VALUE_KEY], values(node.children)]
      : [node.name, node[SUNBURST_VALUE_KEY]]
  );
}

describe('@mantine/charts/SunburstChart/resolve-sunburst-data', () => {
  it('returns an empty root for empty data', () => {
    expect(resolveSunburstData([], DEFAULT_THEME, 'value')).toEqual({
      root: { name: 'root', value: 0, [SUNBURST_VALUE_KEY]: 0, children: [] },
      depth: 0,
    });
  });

  it('treats missing, NaN, negative, infinite and non-numeric values as 0 and coerces numeric strings', () => {
    const { root } = resolveSunburstData(
      [
        { name: 'missing' },
        { name: 'nan', value: NaN },
        { name: 'negative', value: -5 },
        { name: 'infinite', value: Infinity },
        { name: 'string', value: '5' as any },
        { name: 'padded string', value: ' 2.5 ' as any },
        { name: 'non-numeric string', value: 'abc' as any },
        { name: 'blank string', value: '  ' as any },
        { name: 'valid', value: 4 },
      ],
      DEFAULT_THEME,
      'value'
    );
    expect(values(root.children)).toEqual([
      ['missing', 0],
      ['nan', 0],
      ['negative', 0],
      ['infinite', 0],
      ['string', 5],
      ['padded string', 2.5],
      ['non-numeric string', 0],
      ['blank string', 0],
      ['valid', 4],
    ]);
    expect(root[SUNBURST_VALUE_KEY]).toBe(11.5);
  });

  it('uses the sum of children when a parent has no valid value', () => {
    const { root, depth } = resolveSunburstData(
      [
        {
          name: 'P',
          children: [
            { name: 'a', value: 2 },
            { name: 'b', children: [{ name: 'b1', value: 3 }] },
          ],
        },
        { name: 'Q', value: -1, children: [{ name: 'q', value: 1 }] },
      ],
      DEFAULT_THEME,
      'value'
    );
    expect(values(root.children)).toEqual([
      [
        'P',
        5,
        [
          ['a', 2],
          ['b', 3, [['b1', 3]]],
        ],
      ],
      ['Q', 1, [['q', 1]]],
    ]);
    expect(root[SUNBURST_VALUE_KEY]).toBe(6);
    expect(depth).toBe(3);
  });

  it('uses the explicit parent value when it is larger than the sum of children', () => {
    const { root } = resolveSunburstData(
      [
        { name: 'A', value: 100, children: [{ name: 'a1', value: 10 }] },
        { name: 'B', value: 100 },
      ],
      DEFAULT_THEME,
      'value'
    );
    expect(values(root.children)).toEqual([
      ['A', 100, [['a1', 10]]],
      ['B', 100],
    ]);
    expect(root[SUNBURST_VALUE_KEY]).toBe(200);
  });

  it('never makes a parent smaller than the sum of its children', () => {
    const { root } = resolveSunburstData(
      [
        {
          name: 'P',
          value: 10,
          children: [
            { name: 'a', value: 30 },
            { name: 'b', value: 30 },
          ],
        },
      ],
      DEFAULT_THEME,
      'value'
    );
    expect(root.children[0][SUNBURST_VALUE_KEY]).toBe(60);
  });

  it('returns no children when every value is 0', () => {
    const { root, depth } = resolveSunburstData(
      [
        { name: 'A', value: 0 },
        { name: 'B', children: [{ name: 'b', value: 0 }] },
      ],
      DEFAULT_THEME,
      'value'
    );
    expect(root.children).toEqual([]);
    expect(depth).toBe(0);
  });

  it('assigns the fallback palette to top-level nodes, children inherit and color overrides', () => {
    const { root } = resolveSunburstData(
      [
        { name: 'A', value: 1 },
        {
          name: 'B',
          children: [
            { name: 'b1', value: 1 },
            { name: 'b2', value: 1, color: 'rgb(1, 2, 3)' },
          ],
        },
        { name: 'C', value: 1, color: 'red.9' },
      ],
      DEFAULT_THEME,
      'value'
    );
    expect(root.children.map((node) => node.fill)).toEqual([
      color('blue.6'),
      color('teal.6'),
      color('red.9'),
    ]);
    expect(root.children[1].children!.map((node) => node.fill)).toEqual([
      color('teal.6'),
      'rgb(1, 2, 3)',
    ]);
  });

  it('writes the resolved value back under dataKey', () => {
    const { root } = resolveSunburstData(
      [
        { name: 'P', children: [{ name: 'a', amount: '2' }] },
        { name: 'Q', amount: 1, children: [{ name: 'q', amount: 3 }] },
      ],
      DEFAULT_THEME,
      'amount'
    );
    expect(root.amount).toBe(5);
    expect(root.children.map((node) => node.amount)).toEqual([2, 3]);
    expect(root.children[0].children![0].amount).toBe(2);
  });

  it('keeps the resolved color in fill when dataKey is fill', () => {
    const { root } = resolveSunburstData(
      [{ name: 'A', fill: 75, color: 'red.9' }],
      DEFAULT_THEME,
      'fill'
    );
    expect(root.children[0].fill).toBe(color('red.9'));
    expect(root.children[0][SUNBURST_VALUE_KEY]).toBe(75);
    expect(getSunburstRechartsDataKey('fill')).toBe(SUNBURST_VALUE_KEY);
    expect(getSunburstRechartsDataKey('value')).toBe('value');
  });

  it('reads values from a custom dataKey and keeps user fields', () => {
    const data = [{ name: 'A', fill: 75, extra: 'x' }];
    const { root } = resolveSunburstData(data, DEFAULT_THEME, 'fill');
    expect(root.children[0][SUNBURST_VALUE_KEY]).toBe(75);
    expect(root.children[0].extra).toBe('x');
    expect(data[0].fill).toBe(75);
  });
});
