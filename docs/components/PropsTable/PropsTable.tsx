import React from 'react';
import { Table, Text, Highlight, rem } from '@mantine/core';
import { DocsSection } from '@/components/DocsSection';
import { HtmlText } from '@/components/HtmlText';
import { TableInlineCode } from '@/components/TableInlineCode';
import { TableError } from '@/components/TableError';
import docgenData from '@/.docgen/docgen.json';

export interface DocgenProp {
  defaultValue: {
    value: string;
  };
  description: string;
  name: string;
  required: boolean;
  type: {
    name: string;
  };
}

export interface Docgen {
  description: string;
  displayName: string;
  props: Record<string, DocgenProp>;
}

const PROPS_DATA: Record<string, Docgen> = docgenData as any;

interface PropsTableProps {
  component: string;
  query: string;
}

export function PropsTable({ component, query }: PropsTableProps) {
  if (!PROPS_DATA[component]) {
    return <TableError errorOf="props" />;
  }

  const rows = Object.keys(PROPS_DATA[component].props)
    .filter((propKey) =>
      PROPS_DATA[component].props[propKey].name.toLowerCase().includes(query.toLowerCase().trim())
    )
    .map((propKey) => {
      const prop = PROPS_DATA[component].props[propKey];

      return (
        <Table.Tr key={propKey}>
          <Table.Td style={{ whiteSpace: 'nowrap' }}>
            <Highlight highlight={query} component="span" fz="sm">
              {prop.name}
            </Highlight>

            {prop.required && (
              <Text component="sup" c="red" fz="xs">
                {' '}
                *
              </Text>
            )}
          </Table.Td>

          <Table.Td>
            <TableInlineCode>{prop.type.name}</TableInlineCode>
          </Table.Td>
          <Table.Td>
            <HtmlText fz="sm">{prop.description}</HtmlText>
          </Table.Td>
        </Table.Tr>
      );
    });

  if (rows.length === 0) {
    return (
      <Text c="dimmed" mb="xl" fz="sm">
        Nothing found
      </Text>
    );
  }

  return (
    <DocsSection>
      <div style={{ overflowX: 'auto' }}>
        <div style={{ minWidth: rem(500) }}>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Name</Table.Th>
                <Table.Th>Type</Table.Th>
                <Table.Th>Description</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </div>
      </div>
    </DocsSection>
  );
}
