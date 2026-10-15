import { SankeyChart, SankeyChartData } from './SankeyChart';

export default { title: 'SankeyChart' };

const data: SankeyChartData = {
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

const colorData: SankeyChartData = {
  nodes: [
    { name: 'Visit', color: 'indigo.6' },
    { name: 'Direct-Favourite', color: 'teal.6' },
    { name: 'Page-Click', color: 'blue.6' },
    { name: 'Detail-Favourite', color: 'cyan.6' },
    { name: 'Lost', color: 'red.6' },
  ],
  links: [
    { source: 0, target: 1, value: 3728.3 },
    { source: 0, target: 2, value: 354170 },
    { source: 2, target: 3, value: 62429 },
    { source: 2, target: 4, value: 291741 },
  ],
};

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <SankeyChart data={data} />
    </div>
  );
}

export function WithNodeColors() {
  return (
    <div style={{ padding: 40 }}>
      <SankeyChart data={colorData} />
    </div>
  );
}

export function CustomNodeWidth() {
  return (
    <div style={{ padding: 40 }}>
      <SankeyChart data={colorData} nodeWidth={20} nodePadding={20} />
    </div>
  );
}

export function CustomLinkOpacity() {
  return (
    <div style={{ padding: 40 }}>
      <SankeyChart data={colorData} linkOpacity={0.7} />
    </div>
  );
}

export function NoTooltip() {
  return (
    <div style={{ padding: 40 }}>
      <SankeyChart data={data} withTooltip={false} />
    </div>
  );
}

export function CustomHeight() {
  return (
    <div style={{ padding: 40 }}>
      <SankeyChart data={colorData} height={500} />
    </div>
  );
}

export function PaletteColors() {
  return (
    <div style={{ padding: 40 }}>
      <SankeyChart data={data} colors={['teal.6', 'grape.6', 'orange.6']} />
    </div>
  );
}

export function NodeAndLinkColor() {
  return (
    <div style={{ padding: 40 }}>
      <SankeyChart data={data} nodeColor="orange.6" linkColor="gray.5" />
    </div>
  );
}

export function DuplicateNames() {
  return (
    <div style={{ padding: 40 }}>
      <SankeyChart
        data={{
          nodes: [{ name: 'Other' }, { name: 'Mid' }, { name: 'Other', color: 'red.6' }],
          links: [
            { source: 0, target: 1, value: 10 },
            { source: 1, target: 2, value: 10 },
          ],
        }}
      />
    </div>
  );
}

export function CyclicData() {
  return (
    <div style={{ padding: 40 }}>
      <SankeyChart
        data={{
          nodes: [{ name: 'A' }, { name: 'B' }, { name: 'C' }],
          links: [
            { source: 0, target: 1, value: 10 },
            { source: 1, target: 2, value: 8 },
            { source: 2, target: 1, value: 3 },
          ],
        }}
      />
    </div>
  );
}

export function NodesWithoutLinks() {
  return (
    <div style={{ padding: 40 }}>
      <SankeyChart data={{ nodes: [{ name: 'A' }, { name: 'B' }], links: [] }} />
    </div>
  );
}

export function ValueFormatter() {
  return (
    <div style={{ padding: 40 }}>
      <SankeyChart
        data={data}
        valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
      />
    </div>
  );
}
