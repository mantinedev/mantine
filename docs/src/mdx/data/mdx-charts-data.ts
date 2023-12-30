import { Frontmatter } from '@/types';

export const MDX_CHARTS_DATA: Record<string, Frontmatter> = {
  GettingStartedCharts: {
    title: 'Getting started',
    description: 'Get started with @mantine/charts package',
    package: '@mantine/charts',
    license: 'MIT',
    slug: '/charts/getting-started',
    docs: 'charts/getting-started.mdx',
    hideInSearch: true,
  },

  AreaChart: {
    title: 'AreaChart',
    props: ['AreaChart'],
    styles: ['AreaChart'],
    package: '@mantine/charts',
    slug: '/charts/area-chart',
    description: 'Area chart component with stacked and percentage variants',
    import: "import { AreaChart } from '@mantine/charts';",
    source: '@mantine/charts/src/components/AreaChart/AreaChart.tsx',
    docs: 'charts/area-chart.mdx',
  },
};
