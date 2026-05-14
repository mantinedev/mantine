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
