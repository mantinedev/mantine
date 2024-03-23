import React from 'react';
import { Code, Table, Text } from '@mantine/core';

interface CssVariableData {
  variable: string;
  description: React.ReactNode;
  defaultValue: React.ReactNode;
}

export interface CssVariablesGroupProps {
  data: CssVariableData[];
}

export function CssVariablesGroup({ data }: CssVariablesGroupProps) {
  const rows = data.map((item) => (
    <Table.Tr key={item.variable}>
      <Table.Td>
        <Code>{item.variable}</Code>
        {item.description && (
          <Text fz="xs" mt={3}>
            {item.description}
          </Text>
        )}
      </Table.Td>
      <Table.Td>{item.defaultValue}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500}>
      <Table layout="fixed">
        <Table.Thead>
          <Table.Tr>
            <Table.Th w={400}>Variable</Table.Th>
            <Table.Th>Default value</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
