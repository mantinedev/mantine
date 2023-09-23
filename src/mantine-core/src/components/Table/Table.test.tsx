import React from 'react';
import { render, tests, screen } from '@mantine/tests';
import { Table, TableProps, TableStylesNames } from './Table';
import {
  TableCaption,
  TableTbody,
  TableTd,
  TableTfoot,
  TableTh,
  TableTr,
  TableThead,
} from './Table.components';

const defaultProps: TableProps = {
  children: (
    <>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>test-th-1</Table.Th>
          <Table.Th>test-th-2</Table.Th>
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>
        <Table.Tr>
          <Table.Td>test-td-1</Table.Td>
          <Table.Td>test-td-2</Table.Td>
        </Table.Tr>
      </Table.Tbody>

      <Table.Tfoot>
        <Table.Tr>
          <Table.Td>test-td-1</Table.Td>
          <Table.Td>test-td-2</Table.Td>
        </Table.Tr>
      </Table.Tfoot>

      <Table.Caption>test-caption</Table.Caption>
    </>
  ),
};

describe('@mantine/core/Table', () => {
  tests.itSupportsSystemProps<TableProps, TableStylesNames>({
    component: Table,
    props: defaultProps,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    id: true,
    refType: HTMLTableElement,
    displayName: '@mantine/core/Table',
    stylesApiSelectors: ['table', 'caption', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td'],
  });

  it('renders children', () => {
    render(
      <Table>
        <tbody data-test="tbody" />
      </Table>
    );
    expect(document.querySelector('[data-test="tbody"]')).toBeInTheDocument();
  });

  it('sets data-with-table-border attribute when withTableBorder prop is set', () => {
    render(<Table withTableBorder />);
    expect(screen.getByRole('table')).toHaveAttribute('data-with-table-border');
  });

  it('exposes Table.Caption, Table.Tbody, Table.Td, Table.Tfoot, Table.Th, Table.Tr, Table.Thead components', () => {
    expect(Table.Caption).toBe(TableCaption);
    expect(Table.Tbody).toBe(TableTbody);
    expect(Table.Td).toBe(TableTd);
    expect(Table.Tfoot).toBe(TableTfoot);
    expect(Table.Th).toBe(TableTh);
    expect(Table.Tr).toBe(TableTr);
    expect(Table.Thead).toBe(TableThead);
  });
});
