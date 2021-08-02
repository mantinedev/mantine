import React from 'react';
import { Table, Text, Highlight, useMantineTheme } from '@mantine/core';
import DocsSection from '../../../DocsSection/DocsSection';
import PROPS_DATA from '../../../../../.docgen/docgen.json';

interface PropsTableProps {
  component: string;
  query: string;
}
export default function PropsTable({ component, query }: PropsTableProps) {
  const theme = useMantineTheme();

  if (!PROPS_DATA[component]) {
    return null;
  }

  const rows = Object.keys(PROPS_DATA[component].props)
    .filter((propKey) =>
      PROPS_DATA[component].props[propKey].name.toLowerCase().includes(query.toLowerCase().trim())
    )
    .map((propKey) => {
      const prop = PROPS_DATA[component].props[propKey];

      return (
        <tr key={propKey}>
          <td style={{ whiteSpace: 'nowrap' }}>
            <Highlight highlight={query} component="span" size="sm">
              {prop.name}
            </Highlight>

            {prop.required && (
              <Text component="sup" color="red" size="xs">
                {' '}
                *
              </Text>
            )}
          </td>
          <td>
            <Text size="sm" color={prop.defaultValue && prop.defaultValue.value ? null : 'gray'}>
              {(prop.defaultValue && prop.defaultValue.value) || ''}
            </Text>
          </td>
          <td style={{ verticalAlign: 'middle' }}>
            <Text
              color={theme.colorScheme === 'dark' ? 'red' : 'indigo'}
              size="xs"
              weight={500}
              style={{ fontFamily: 'Menlo, Monaco, Lucida Console, monospace' }}
            >
              {prop.type.name}
            </Text>
          </td>
          <td>
            <Text component="span" size="sm">
              {prop.description}
            </Text>
          </td>
        </tr>
      );
    });

  if (rows.length === 0) {
    return (
      <Text color="gray" style={{ marginBottom: 30 }}>
        Nothing found
      </Text>
    );
  }

  return (
    <DocsSection>
      <div style={{ overflowX: 'auto' }}>
        <div style={{ minWidth: 500 }}>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Default</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </div>
      </div>
    </DocsSection>
  );
}
