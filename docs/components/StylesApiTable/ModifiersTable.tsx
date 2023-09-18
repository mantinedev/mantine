import React from 'react';
import { Table, TableProps } from '@mantine/core';
import { HtmlText } from '@/components/HtmlText';
import { TableInlineCode } from '@/components/TableInlineCode';
import type { StylesApiData } from './StylesApiTable';

interface ModifiersTableProps extends TableProps {
  data: StylesApiData;
}

export function ModifiersTable({ data, ...others }: ModifiersTableProps) {
  const hasConditions = data.modifiers?.some((modifier) => !!modifier.condition);
  const hasValues = data.modifiers?.some((modifier) => !!modifier.value);

  const rows =
    data.modifiers?.map((modifier, index) => (
      <Table.Tr key={index}>
        <Table.Td>
          {Array.isArray(modifier.selector) ? modifier.selector.join(', ') : modifier.selector}
        </Table.Td>
        <Table.Td>
          <TableInlineCode>{modifier.modifier}</TableInlineCode>
        </Table.Td>
        {hasConditions && (
          <Table.Td>
            <HtmlText>{modifier.condition || '–'}</HtmlText>
          </Table.Td>
        )}
        {hasValues && (
          <Table.Td>
            <HtmlText>{modifier.value || '–'}</HtmlText>
          </Table.Td>
        )}
      </Table.Tr>
    )) || [];

  return (
    <Table.ScrollContainer minWidth={600}>
      <Table {...others}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Selector</Table.Th>
            <Table.Th>Attribute</Table.Th>
            {hasConditions && <Table.Th>Condition</Table.Th>}
            {hasValues && <Table.Th>Value</Table.Th>}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
