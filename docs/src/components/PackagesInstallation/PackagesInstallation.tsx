import React, { useState } from 'react';
import { Table, Checkbox, Code, Text, Box } from '@mantine/core';
import { PACKAGES_DATA } from './data';

export function PackagesInstallation() {
  const [selection, setSelection] = useState(['@mantine/core', '@mantine/hooks']);
  const toggleSelection = (item: string) =>
    setSelection((current) =>
      current.includes(item) ? current.filter((i) => i !== item) : [...current, item]
    );
  const selectAll = () =>
    setSelection((current) =>
      current.length === PACKAGES_DATA.length ? [] : PACKAGES_DATA.map((item) => item.package)
    );

  const rows = PACKAGES_DATA.map((item) => (
    <Box
      component="tr"
      key={item.package}
      sx={{ cursor: 'pointer' }}
      onClick={() => toggleSelection(item.package)}
    >
      <td>
        <Checkbox checked={selection.includes(item.package)} sx={{ pointerEvents: 'none' }} />
      </td>
      <td>
        <Code>{item.package}</Code>
      </td>
      <td>
        <Text size="sm">{item.description}</Text>
      </td>
    </Box>
  ));

  return (
    <Table highlightOnHover>
      <thead>
        <tr>
          <th>
            <Checkbox
              onChange={selectAll}
              checked={selection.length > 0}
              indeterminate={selection.length < PACKAGES_DATA.length && selection.length > 0}
            />
          </th>
          <th>Package</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
