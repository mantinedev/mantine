import React from 'react';
import { Table, TableProps } from '@mantine/core';
import { HtmlText } from '@/components/HtmlText';
import { TableInlineCode } from '@/components/TableInlineCode';
import type { StylesApiData } from './StylesApiTable';

interface VariablesTableProps extends TableProps {
  data: StylesApiData;
}

export function VariablesTable({ data, ...others }: VariablesTableProps) {
  const rows = Object.keys(data.vars).reduce<React.ReactNode[]>((acc, selector) => {
    Object.keys(data.vars[selector]).forEach((variable, index) => {
      acc.push(
        <Table.Tr key={`${selector}-${variable}`}>
          {index === 0 && (
            <Table.Td rowSpan={Object.keys(data.vars[selector]).length}>{selector}</Table.Td>
          )}
          <Table.Td>
            <TableInlineCode>{variable}</TableInlineCode>
          </Table.Td>
          <Table.Td>
            <HtmlText>{data.vars[selector][variable]}</HtmlText>
          </Table.Td>
        </Table.Tr>
      );
    });

    return acc;
  }, []);

  return (
    <Table.ScrollContainer minWidth={600}>
      <Table layout="fixed" {...others}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th w={210}>Selector</Table.Th>
            <Table.Th w={310}>Variable</Table.Th>
            <Table.Th>Description</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
