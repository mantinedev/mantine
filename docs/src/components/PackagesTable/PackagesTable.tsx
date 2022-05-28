import { Code, Table } from '@mantine/core';
import React from 'react';
import { PACKAGES_DATA } from './data';

export function PackagesTable() {
  const rows = PACKAGES_DATA.map((item) => (
    <tr key={item.package}>
      <td>
        <Code>{item.package}</Code>
      </td>
      <td>{item.description}</td>
    </tr>
  ));

  return (
    <Table>
      <tbody>{rows}</tbody>
    </Table>
  );
}
