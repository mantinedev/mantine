import type { TableFactory } from '@mantine/core';
import type { StylesApiData } from '../types';

export const TableStylesApi: StylesApiData<TableFactory> = {
  selectors: {
    table: 'Root `table` element (`Table` component)',
    thead: '`thead` element (`Table.Thead` component)',
    tbody: '`tbody` element (`Table.Tbody` component)',
    tfoot: '`tfoot` element (`Table.Tfoot` component)',
    tr: '`tr` element (`Table.Tr` component)',
    th: '`th` element (`Table.Th` component)',
    td: '`td` element (`Table.Td` component)',
    caption: '`caption` element (`Table.Caption` component)',
  },

  vars: {
    table: {
      '--table-border-color': 'Controls `border-color` of all elements inside table',
      '--table-layout': 'Controls `table-layout` of the table element, auto by default',
      '--table-caption-side': 'Controls caption-side of the table element, `bottom` by default',
      '--table-horizontal-spacing':
        'Controls p`adding-left` and p`adding-right` of `Table.Th` and `Table.Td` elements',
      '--table-vertical-spacing':
        'Controls `padding-top` and `padding-bottom `of `Table.Td` and `Table.Th` elements',
      '--table-striped-color': 'Controls `background-color` of even/odd `Table.Tr` elements',
      '--table-highlight-on-hover-color':
        'Controls `background-color` of `Table.Tr` elements when hovered',
    },
  },

  modifiers: [
    {
      modifier: 'data-with-table-border',
      selector: 'table',
      condition: '`withTableBorder` prop is set on `Table` component',
    },
    {
      modifier: 'data-with-column-border',
      selector: ['th', 'td'],
      condition: '`withColumnsBorder` prop is set on `Table` component',
    },
    {
      modifier: 'data-with-row-border',
      selector: 'tr',
      condition: '`withRowsBorder` prop is set on `Table` component',
    },
    {
      modifier: 'data-striped',
      selector: 'tr',
      value: 'odd | even',
      condition: '`striped` prop is set on `Table` component',
    },
    {
      modifier: 'data-hover',
      selector: 'tr',
      condition: '`highlightOnHover` prop is set on `Table` component',
    },
    {
      modifier: 'data-size',
      selector: 'tr',
      value: 'value of `captionSize` prop on `Table` component',
    },
  ],
};
