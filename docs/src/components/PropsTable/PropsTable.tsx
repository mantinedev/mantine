import React from 'react';
import { Title, Table, Text } from '@mantine/core';
import { Docgen } from './docgen.types';

interface PropsTableProps {
  data: Docgen;
}

export default function PropsTable({ data }: PropsTableProps) {
  const rows = Object.keys(data.props).map((propKey) => (
    <tr key={propKey}>
      <td>{data.props[propKey].name}</td>
      <td>{(data.props[propKey].defaultValue && data.props[propKey].defaultValue.value) || '–'}</td>
      <td style={{ verticalAlign: 'middle' }}>
        <Text
          color="blue"
          size="xs"
          weight={500}
          style={{ fontFamily: 'IBM Plex Mono, monospace' }}
        >
          {data.props[propKey].type.name}
        </Text>
      </td>
      <td>{data.props[propKey].description}</td>
    </tr>
  ));

  return (
    <div>
      <Title order={4} style={{ fontFamily: 'IBM Plex Mono, monospace', marginBottom: 15 }}>
        Component props
      </Title>

      <Table style={{ tableLayout: 'fixed' }} highlighOnHover>
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
  );
}
