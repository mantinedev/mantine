import Fuse from 'fuse.js';
import { Highlight, Table, Text } from '@mantine/core';
import docgenData from '@/.docgen/docgen.json';
import { HtmlText } from '@/components/HtmlText';
import { TableError } from '@/components/TableError';
import { TableInlineCode } from '@/components/TableInlineCode';
import classes from './PropsTable.module.css';
import { prepareType } from './replace-types';

export interface DocgenProp {
  defaultValue: string | null;
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

  const props = PROPS_DATA[component].props;
  const propsArray = Object.keys(props).map((propKey) => ({
    key: propKey,
    ...props[propKey],
  }));

  let filteredPropKeys = Object.keys(props);

  if (query.trim()) {
    const fuse = new Fuse(propsArray, {
      keys: ['name', 'description', 'type.name'],
      threshold: 0.3,
      minMatchCharLength: 1,
    });

    const results = fuse.search(query);
    filteredPropKeys = results.map((result) => result.item.key);
  }

  const rows = filteredPropKeys.map((propKey) => {
    const prop = PROPS_DATA[component].props[propKey];

    return (
      <Table.Tr key={propKey} data-props-table-row>
        <Table.Td style={{ whiteSpace: 'nowrap' }}>
          <Highlight
            className={classes.propName}
            highlight={query}
            component="span"
            data-deprecated={prop.description.includes('@deprecated') || undefined}
            title={prop.name}
          >
            {prop.name}
          </Highlight>
          {prop.required && (
            <Text component="sup" c="red">
              {' '}
              *
            </Text>
          )}
        </Table.Td>

        <Table.Td>
          <TableInlineCode>{prepareType(prop.type.name)}</TableInlineCode>
        </Table.Td>
        <Table.Td>
          <HtmlText fz="sm">{prop.description}</HtmlText>
          {prop.defaultValue && (
            <HtmlText fz="sm" display="block">{`Default value: ${prop.defaultValue}`}</HtmlText>
          )}
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table.ScrollContainer minWidth={800} data-visible={rows.length > 0 || undefined}>
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
  );
}
