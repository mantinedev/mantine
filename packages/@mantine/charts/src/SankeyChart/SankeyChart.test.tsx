import React from 'react';
import { fireEvent } from '@testing-library/react';
import { DEFAULT_THEME, getThemeColor } from '@mantine/core';
import { render, tests } from '@mantine-tests/core';
import { SankeyChart } from './SankeyChart';

jest.mock('recharts', () => {
  const actual = jest.requireActual('recharts');
  const { cloneElement } = jest.requireActual('react');
  return {
    ...actual,
    ResponsiveContainer: ({ children }: any) => cloneElement(children, { width: 600, height: 300 }),
  };
});

const color = (value: string) => getThemeColor(value, DEFAULT_THEME);

const data = {
  nodes: [
    { name: 'Visit' },
    { name: 'Direct-Favourite' },
    { name: 'Page-Click' },
    { name: 'Detail-Favourite' },
    { name: 'Lost' },
  ],
  links: [
    { source: 0, target: 1, value: 3728.3 },
    { source: 0, target: 2, value: 354170 },
    { source: 2, target: 3, value: 62429 },
    { source: 2, target: 4, value: 291741 },
  ],
};

const defaultProps = {
  data,
};

function getNodes(container: HTMLElement) {
  return Array.from(container.querySelectorAll<SVGRectElement>('.recharts-sankey-nodes rect'));
}

function getNode(container: HTMLElement, name: string, nth = 0) {
  const node = getNodes(container).filter((rect) =>
    rect.parentElement!.querySelector('text')!.textContent!.startsWith(name)
  )[nth];
  return node!;
}

function getLinks(container: HTMLElement) {
  return Array.from(container.querySelectorAll<SVGPathElement>('.recharts-sankey-links path'));
}

function getSwatch(container: HTMLElement) {
  return container.querySelector('.mantine-ChartTooltip-tooltipItemColor circle')!;
}

function hasNaNAttribute(container: HTMLElement) {
  return Array.from(container.querySelectorAll('svg *')).some((element) =>
    Array.from(element.attributes).some((attribute) => attribute.value.includes('NaN'))
  );
}

describe('@mantine/charts/SankeyChart', () => {
  tests.itSupportsSystemProps({
    component: SankeyChart,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/charts/SankeyChart',
    stylesApiSelectors: ['root'],
  });

  it('resolves node colors as node.color > nodeColor > colors palette', () => {
    const { container } = render(
      <SankeyChart
        data={{
          nodes: [{ name: 'A', color: 'red.6' }, { name: 'B' }, { name: 'C' }],
          links: [
            { source: 0, target: 1, value: 10 },
            { source: 1, target: 2, value: 10 },
          ],
        }}
        colors={['teal.6', 'grape.6']}
        nodeColor="orange.6"
      />
    );

    expect(getNode(container, 'A').getAttribute('fill')).toBe(color('red.6'));
    expect(getNode(container, 'B').getAttribute('fill')).toBe(
      `var(--chart-node-color, ${color('grape.6')})`
    );
    expect(getNode(container, 'C').getAttribute('fill')).toBe(
      `var(--chart-node-color, ${color('teal.6')})`
    );
    expect(
      container
        .querySelector<HTMLElement>('.mantine-SankeyChart-root')!
        .style.getPropertyValue('--chart-node-color')
    ).toBe(color('orange.6'));
  });

  it('fills links with the source node color unless linkColor is set', () => {
    const chartData = {
      nodes: [{ name: 'A' }, { name: 'B', color: 'red.6' }, { name: 'C' }],
      links: [
        { source: 0, target: 1, value: 10 },
        { source: 1, target: 2, value: 10 },
      ],
    };
    const { container, rerender } = render(<SankeyChart data={chartData} />);
    const fills = getLinks(container).map((link) => link.getAttribute('fill'));
    expect(fills).toStrictEqual([
      `var(--chart-link-color, ${getNode(container, 'A').getAttribute('fill')})`,
      `var(--chart-link-color, ${color('red.6')})`,
    ]);

    rerender(<SankeyChart data={chartData} linkColor="blue.6" />);
    expect(
      container
        .querySelector<HTMLElement>('.mantine-SankeyChart-root')!
        .style.getPropertyValue('--chart-link-color')
    ).toBe(color('blue.6'));
  });

  it('uses the drawn node fill for the tooltip swatch when names repeat', () => {
    const { container } = render(
      <SankeyChart
        data={{
          nodes: [{ name: 'Other' }, { name: 'Mid' }, { name: 'Other', color: 'red.6' }],
          links: [
            { source: 0, target: 1, value: 10 },
            { source: 1, target: 2, value: 10 },
          ],
        }}
        nodeColor="orange.6"
      />
    );

    const second = getNode(container, 'Other', 1);
    expect(second.getAttribute('fill')).toBe(color('red.6'));
    fireEvent.mouseEnter(second.closest('.recharts-layer')!);
    expect(getSwatch(container).getAttribute('fill')).toBe(color('red.6'));

    const first = getNode(container, 'Other', 0);
    fireEvent.mouseEnter(first.closest('.recharts-layer')!);
    expect(getSwatch(container).getAttribute('fill')).toBe(first.getAttribute('fill'));
  });

  it('uses the drawn link fill for the link tooltip swatch', () => {
    const { container } = render(<SankeyChart data={data} />);
    const link = getLinks(container)[1];
    fireEvent.mouseEnter(link.closest('.recharts-layer')!);
    expect(getSwatch(container).getAttribute('fill')).toBe(link.getAttribute('fill'));
  });

  it('drops links that close a cycle and warns once', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const getData = () => ({
      nodes: [{ name: 'a' }, { name: 'b' }, { name: 'c' }],
      links: [
        { source: 0, target: 1, value: 10 },
        { source: 1, target: 2, value: 10 },
        { source: 2, target: 1, value: 5 },
        { source: 2, target: 2, value: 5 },
      ],
    });
    const { container, rerender } = render(<SankeyChart data={getData()} />);

    expect(getLinks(container)).toHaveLength(2);
    expect(hasNaNAttribute(container)).toBe(false);
    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn.mock.calls[0][0]).toContain('2 -> 1, 2 -> 2');

    rerender(<SankeyChart data={getData()} />);
    expect(warn).toHaveBeenCalledTimes(1);
    warn.mockRestore();
  });

  it('ignores links with invalid node indices and keeps isolated nodes finite', () => {
    const warn = jest.spyOn(console, 'warn');
    const error = jest.spyOn(console, 'error');
    const { container } = render(
      <SankeyChart
        data={{
          nodes: [{ name: 'A' }, { name: 'B' }, { name: 'C' }],
          links: [
            { source: 0, target: 1, value: 10 },
            { source: 1, target: 5, value: 10 },
          ],
        }}
      />
    );
    expect(getLinks(container)).toHaveLength(1);
    expect(getNodes(container)).toHaveLength(3);
    expect(hasNaNAttribute(container)).toBe(false);
    expect(warn).not.toHaveBeenCalled();
    expect(error).not.toHaveBeenCalled();
    warn.mockRestore();
    error.mockRestore();
  });

  it('renders two-node cycles without NaN coordinates', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const { container } = render(
      <SankeyChart
        data={{
          nodes: [{ name: 'A' }, { name: 'B' }],
          links: [
            { source: 0, target: 1, value: 5 },
            { source: 1, target: 0, value: 3 },
          ],
        }}
      />
    );
    expect(getLinks(container)).toHaveLength(1);
    expect(hasNaNAttribute(container)).toBe(false);
    warn.mockRestore();
  });

  it('renders nothing for nodes without links', () => {
    const error = jest.spyOn(console, 'error');
    const { container } = render(
      <SankeyChart data={{ nodes: [{ name: 'A' }, { name: 'B' }], links: [] }} />
    );
    expect(getNodes(container)).toHaveLength(0);
    expect(hasNaNAttribute(container)).toBe(false);
    expect(error).not.toHaveBeenCalled();
    error.mockRestore();
  });

  it('formats node label values with valueFormatter', () => {
    const { container } = render(
      <SankeyChart data={data} valueFormatter={(value) => `$${value.toFixed(1)}`} />
    );
    const labels = Array.from(container.querySelectorAll('.recharts-sankey-nodes text')).map(
      (text) => text.textContent
    );
    expect(labels).toContain('$357898.3');
    expect(labels).not.toContain('357898.3');
  });

  it('keeps label placement independent of the text direction', () => {
    const { container } = render(<SankeyChart data={data} />);
    const texts = Array.from(container.querySelectorAll('.recharts-sankey-nodes text'));
    expect(texts.length).toBeGreaterThan(0);
    texts.forEach((text) => expect(text.getAttribute('direction')).toBe('ltr'));
  });

  it('does not make the chart a tab stop by default', () => {
    const { container } = render(<SankeyChart data={data} />);
    const surface = container.querySelector('svg.recharts-surface')!;
    expect(surface.getAttribute('role')).toBeNull();
    expect(surface.getAttribute('tabindex')).toBeNull();
  });

  it('exposes aria-label with img role on the root', () => {
    const { container, rerender } = render(<SankeyChart data={data} />);
    const root = () => container.querySelector('.mantine-SankeyChart-root')!;
    expect(root().getAttribute('role')).toBeNull();

    rerender(<SankeyChart data={data} aria-label="Visitors flow" />);
    expect(root().getAttribute('role')).toBe('img');
    expect(root().getAttribute('aria-label')).toBe('Visitors flow');
  });
});
