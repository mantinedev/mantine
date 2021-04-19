import React from 'react';
import { Table, Text, Paper } from '@mantine/core';
import { useMantineTheme } from '@mantine/theme';
import DocsSection from '../../DocsSection/DocsSection';
import PROPS_DATA from '../../../../.docgen/docgen.json';

export default function PropsTable({ component }: { component: string }) {
  const theme = useMantineTheme();

  const rows = Object.keys(PROPS_DATA[component].props).map((propKey) => {
    const prop = PROPS_DATA[component].props[propKey];
    return (
      <tr key={propKey}>
        <td style={{ whiteSpace: 'nowrap' }}>
          <Text component="span" size="sm">
            {prop.name}
          </Text>

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
            style={{ fontFamily: 'Menlo, Monaco, Courier, monospace' }}
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

  return (
    <DocsSection>
      <Paper
        padding="md"
        style={{
          width: '100%',
          border: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]
          }`,
          overflowX: 'auto',
        }}
      >
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
      </Paper>
    </DocsSection>
  );
}
