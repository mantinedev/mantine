import React from 'react';
import { Title, Table, Text, Paper } from '@mantine/core';
import { Docgen } from './docgen.types';

interface PropsTableProps {
  data: Docgen;
}

export default function PropsTable({ data }: PropsTableProps) {
  const rows = Object.keys(data.props).map((propKey) => {
    const prop = data.props[propKey];
    return (
      <tr key={propKey}>
        <td>
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
            {(prop.defaultValue && prop.defaultValue.value) || '–'}
          </Text>
        </td>
        <td style={{ verticalAlign: 'middle' }}>
          <Text
            color="indigo"
            size="xs"
            weight={500}
            style={{ fontFamily: 'IBM Plex Mono, monospace' }}
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
    <div>
      <Title order={3} style={{ fontFamily: 'IBM Plex Mono, monospace', marginBottom: 15 }}>
        Component props
      </Title>

      <Paper padding="md" style={{ width: '100%' }} shadow="xs">
        <div style={{ minWidth: 500 }}>
          <Table style={{ tableLayout: 'fixed' }}>
            <thead>
              <tr>
                <th style={{ width: 100 }}>Name</th>
                <th style={{ width: 100 }}>Default</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </div>
      </Paper>
    </div>
  );
}
