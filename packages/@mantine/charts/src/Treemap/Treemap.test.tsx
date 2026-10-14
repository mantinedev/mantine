import React from 'react';
import { fireEvent } from '@testing-library/react';
import { DEFAULT_THEME, parseThemeColor } from '@mantine/core';
import { render, tests } from '@mantine-tests/core';
import { Treemap } from './Treemap';

const mockTooltipProps: any[] = [];

jest.mock('recharts', () => {
  const actual = jest.requireActual('recharts');
  const { cloneElement, createElement } = jest.requireActual('react');
  return {
    ...actual,
    ResponsiveContainer: ({ children }: any) => cloneElement(children, { width: 600, height: 300 }),
    Tooltip: (props: any) => {
      mockTooltipProps.push(props);
      return createElement(actual.Tooltip, props);
    },
  };
});

const color = (value: string) => parseThemeColor({ color: value, theme: DEFAULT_THEME }).value;

function getLabels(container: HTMLElement) {
  return Array.from(container.querySelectorAll<HTMLDivElement>('foreignObject > div'));
}

function getTile(container: HTMLElement, name: string, nth = 0) {
  const label = getLabels(container).filter((node) => node.textContent === name)[nth];
  const tile = label!.closest('g')!;
  return {
    fill: tile.querySelector('rect')!.getAttribute('fill'),
    labelColor: label!.style.color,
    label,
    tile,
  };
}

const defaultProps = {
  data: [
    { name: 'A', value: 100, color: 'blue' },
    { name: 'B', value: 200, color: 'red' },
  ],
};

describe('@mantine/charts/Treemap', () => {
  tests.itSupportsSystemProps({
    component: Treemap,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/charts/Treemap',
    stylesApiSelectors: ['root'],
  });

  it('resolves colors per node when names repeat in different branches', () => {
    const data = [
      {
        name: 'G1',
        color: 'blue.9',
        children: [
          { name: 'Other', value: 100 },
          { name: 'X', value: 100 },
        ],
      },
      {
        name: 'G2',
        color: 'yellow.4',
        children: [
          { name: 'Other', value: 100 },
          { name: 'Y', value: 100 },
        ],
      },
    ];
    const { container } = render(<Treemap data={data} />);
    const fills = [getTile(container, 'Other', 0).fill, getTile(container, 'Other', 1).fill];
    expect(fills.sort()).toStrictEqual([color('blue.9'), color('yellow.4')].sort());
    expect(getTile(container, 'X').fill).toBe(color('blue.9'));
    expect(getTile(container, 'Y').fill).toBe(color('yellow.4'));
    expect(getTile(container, 'X').labelColor).toBe('var(--mantine-color-white)');
    expect(getTile(container, 'Y').labelColor).toBe('var(--mantine-color-black)');
  });

  it('assigns a fill to a node named after an Object.prototype key', () => {
    const { container } = render(<Treemap data={[{ name: 'constructor', value: 100 }]} />);
    expect(getTile(container, 'constructor').fill).toBeTruthy();
  });

  it('gives nodes without color distinct fills that children inherit', () => {
    const data = [
      { name: 'A', children: [{ name: 'A1', value: 300 }] },
      { name: 'B', children: [{ name: 'B1', value: 200 }] },
      { name: 'C', value: 100 },
    ];
    const { container } = render(<Treemap data={data} />);
    const a1 = getTile(container, 'A1').fill;
    const b1 = getTile(container, 'B1').fill;
    const c = getTile(container, 'C').fill;
    expect(new Set([a1, b1, c]).size).toBe(3);
    expect(a1).toBe(color('blue.6'));
  });

  it('applies textColor to every label', () => {
    const { container } = render(
      <Treemap
        textColor="red.5"
        data={[
          { name: 'A', value: 100 },
          { name: 'B', value: 200, color: 'teal.8' },
        ]}
      />
    );
    expect(getTile(container, 'A').labelColor).toBe('var(--mantine-color-red-5)');
    expect(getTile(container, 'B').labelColor).toBe('var(--mantine-color-red-5)');
  });

  it('picks label color from fill with autoContrast and uses white without it', () => {
    const data = [
      { name: 'Light', value: 100, color: '#fff3bf' },
      { name: 'Dark', value: 100, color: '#1c2a52' },
    ];
    const { container, rerender } = render(<Treemap data={data} />);
    expect(getTile(container, 'Light').labelColor).toBe('var(--mantine-color-black)');
    expect(getTile(container, 'Dark').labelColor).toBe('var(--mantine-color-white)');

    rerender(<Treemap data={data} autoContrast={false} />);
    expect(getTile(container, 'Light').labelColor).toBe('var(--mantine-color-white)');
  });

  it('renders full label text with CSS ellipsis sized to the tile and hides labels on tiny tiles', () => {
    const name = 'WWWWWWWWWWWW 東京都千代田区丸の内一丁目 👩‍👩‍👧‍👦🇯🇵';
    const { container } = render(
      <Treemap
        data={[
          { name: 'Big', value: 1000 },
          { name, value: 100 },
          { name: 'Tiny', value: 1 },
        ]}
      />
    );
    const texts = getLabels(container).map((node) => node.textContent);
    expect(texts).toContain('Big');
    expect(texts).toContain(name);
    expect(texts).not.toContain('Tiny');

    const { label, tile } = getTile(container, name);
    const rect = tile.querySelector('rect')!;
    const foreignObject = label.parentElement!;
    expect(Number(foreignObject.getAttribute('width'))).toBe(
      Number(rect.getAttribute('width')) - 8
    );
    expect(label.style.whiteSpace).toBe('nowrap');
    expect(label.style.overflow).toBe('hidden');
    expect(label.style.textOverflow).toBe('ellipsis');
  });

  it('uses the tile fill for the tooltip swatch', () => {
    const data = [
      { name: 'G1', color: 'blue.9', children: [{ name: 'Other', value: 100 }] },
      { name: 'G2', color: 'yellow.4', children: [{ name: 'Other', value: 300 }] },
    ];
    const { container } = render(<Treemap data={data} />);
    const tile = getTile(container, 'Other', 0);
    fireEvent.mouseEnter(tile.tile.parentElement!);
    const swatch = container.querySelector('.mantine-ChartTooltip-tooltipItemColor circle');
    expect(swatch).not.toBeNull();
    expect(swatch!.getAttribute('fill')).toBe(tile.fill);
  });

  it('animates the tooltip only when tooltipAnimationDuration is set', () => {
    render(<Treemap {...defaultProps} />);
    expect(mockTooltipProps.at(-1).isAnimationActive).toBe(false);

    render(<Treemap {...defaultProps} tooltipAnimationDuration={300} />);
    expect(mockTooltipProps.at(-1).isAnimationActive).toBe(true);
    expect(mockTooltipProps.at(-1).animationDuration).toBe(300);
  });
});
