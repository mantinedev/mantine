import { Frontmatter } from '@/types';

export const MDX_DATA_GRID_DATA: Record<string, Frontmatter> = {
  GettingStartedDataGrid: {
    title: 'Getting started',
    description: 'Get started with @mantine/data-grid package',
    package: '@mantine/data-grid',
    license: 'MIT',
    slug: '/data-grid/getting-started',
    docs: 'data-grid/getting-started.mdx',
    hideInSearch: true,
  },

  DataGrid: {
    title: 'DataGrid',
    package: '@mantine/data-grid',
    slug: '/data-grid/data-grid',
    description: 'Fully-featured data grid with sorting, filtering, pagination, and more',
    props: ['DataGrid'],
    styles: ['DataGrid'],
    source: '@mantine/data-grid/src/DataGrid.tsx',
    docs: 'data-grid/data-grid.mdx',
  },

  DataGridSorting: {
    title: 'Sorting',
    package: '@mantine/data-grid',
    slug: '/data-grid/sorting',
    description: 'DataGrid sorting features',
    docs: 'data-grid/sorting.mdx',
  },

  DataGridFiltering: {
    title: 'Filtering',
    package: '@mantine/data-grid',
    slug: '/data-grid/filtering',
    description: 'DataGrid column and global filtering',
    docs: 'data-grid/filtering.mdx',
  },

  DataGridPagination: {
    title: 'Pagination',
    package: '@mantine/data-grid',
    slug: '/data-grid/pagination',
    description: 'DataGrid pagination features',
    docs: 'data-grid/pagination.mdx',
  },

  DataGridColumnFeatures: {
    title: 'Column features',
    package: '@mantine/data-grid',
    slug: '/data-grid/column-features',
    description: 'DataGrid column resize, pin, visibility, reorder',
    docs: 'data-grid/column-features.mdx',
  },

  DataGridRowFeatures: {
    title: 'Row features',
    package: '@mantine/data-grid',
    slug: '/data-grid/row-features',
    description: 'DataGrid row selection, expansion, tree data',
    docs: 'data-grid/row-features.mdx',
  },

  DataGridVirtualization: {
    title: 'Virtualization',
    package: '@mantine/data-grid',
    slug: '/data-grid/virtualization',
    description: 'DataGrid row virtualization for large datasets',
    docs: 'data-grid/virtualization.mdx',
  },

  DataGridEditing: {
    title: 'Editing',
    package: '@mantine/data-grid',
    slug: '/data-grid/editing',
    description: 'DataGrid inline cell and row editing',
    docs: 'data-grid/editing.mdx',
  },

  DataGridGrouping: {
    title: 'Grouping',
    package: '@mantine/data-grid',
    slug: '/data-grid/grouping',
    description: 'DataGrid grouping and aggregation',
    docs: 'data-grid/grouping.mdx',
  },

  DataGridServerSide: {
    title: 'Server-side',
    package: '@mantine/data-grid',
    slug: '/data-grid/server-side',
    description: 'DataGrid server-side sorting, filtering, pagination',
    docs: 'data-grid/server-side.mdx',
  },

  DataGridCustomization: {
    title: 'Customization',
    package: '@mantine/data-grid',
    slug: '/data-grid/customization',
    description: 'DataGrid Styles API, CSS variables, compound components',
    docs: 'data-grid/customization.mdx',
  },
};
