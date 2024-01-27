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
    description: 'Area chart component with stacked, percent and split variants',
    import: "import { AreaChart } from '@mantine/charts';",
    source: '@mantine/charts/src/AreaChart/AreaChart.tsx',
    docs: 'charts/area-chart.mdx',
  },

  BarChart: {
    title: 'BarChart',
    props: ['BarChart'],
    styles: ['BarChart'],
    package: '@mantine/charts',
    slug: '/charts/bar-chart',
    description: 'Bar chart component with stacked and percent variants',
    import: "import { BarChart } from '@mantine/charts';",
    source: '@mantine/charts/src/BarChart/BarChart.tsx',
    docs: 'charts/bar-chart.mdx',
  },

  LineChart: {
    title: 'LineChart',
    props: ['LineChart'],
    styles: ['LineChart'],
    package: '@mantine/charts',
    slug: '/charts/line-chart',
    description: 'Line chart component',
    import: "import { LineChart } from '@mantine/charts';",
    source: '@mantine/charts/src/LineChart/LineChart.tsx',
    docs: 'charts/line-chart.mdx',
  },

  Sparkline: {
    title: 'Sparkline',
    props: ['Sparkline'],
    styles: ['Sparkline'],
    package: '@mantine/charts',
    slug: '/charts/sparkline',
    description: 'Simplified area chart to show trends',
    import: "import { Sparkline } from '@mantine/charts';",
    source: '@mantine/charts/src/Sparkline/Sparkline.tsx',
    docs: 'charts/sparkline.mdx',
  },

  DonutChart: {
    title: 'DonutChart',
    props: ['DonutChart'],
    styles: ['DonutChart'],
    package: '@mantine/charts',
    slug: '/charts/donut-chart',
    description: 'Donut chart component',
    import: "import { DonutChart } from '@mantine/charts';",
    source: '@mantine/charts/src/DonutChart/DonutChart.tsx',
    docs: 'charts/donut-chart.mdx',
  },

  PieChart: {
    title: 'PieChart',
    props: ['PieChart'],
    styles: ['PieChart'],
    package: '@mantine/charts',
    slug: '/charts/pie-chart',
    description: 'Pie chart component',
    import: "import { PieChart } from '@mantine/charts';",
    source: '@mantine/charts/src/PieChart/PieChart.tsx',
    docs: 'charts/pie-chart.mdx',
  },
};
