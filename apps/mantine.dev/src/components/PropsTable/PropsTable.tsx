import { Highlight, Table, Text } from '@mantine/core';
import docgenData from '@/.docgen/docgen.json';
import { DocsSection } from '@/components/DocsSection';
import { HtmlText } from '@/components/HtmlText';
import { TableError } from '@/components/TableError';
import { TableInlineCode } from '@/components/TableInlineCode';
import { REPLACE_TYPES } from './replace-types';

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
            <TableInlineCode>
              {prop.type.name in REPLACE_TYPES ? REPLACE_TYPES[prop.type.name] : prop.type.name}
            </TableInlineCode>
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
      <Table.ScrollContainer minWidth={800}>
        <Table layout="fixed">
          <Table.Thead>
            <Table.Tr>
              <Table.Th w={210}>Name</Table.Th>
              <Table.Th w={310}>Type</Table.Th>
              <Table.Th>Description</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </DocsSection>
  );
}
