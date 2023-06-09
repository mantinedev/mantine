import React, { useState } from 'react';
import { Table, Checkbox, Code, Text, Box } from '@mantine/core';
import { PACKAGES_DATA } from './data';
import { PackageInstallation } from '../PackageInstallation/PackageInstallation';

interface PackagesInstallationProps {
  extraPackages?: string[];
}

export function PackagesInstallation({ extraPackages = [] }: PackagesInstallationProps) {
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
      sx={{ cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
      onClick={() => toggleSelection(item.package)}
    >
      <td>
        <Checkbox
          checked={selection.includes(item.package)}
          onChange={() => {}}
          sx={{ pointerEvents: 'none', display: 'flex' }}
        />
      </td>
      <td>
        <Code>{item.package}</Code>
      </td>
      <td data-mobile>
        <Text size="sm">{item.description}</Text>
      </td>
    </Box>
  ));

  return (
    <>
      <Box mb="sm">Choose packages that you will use in your application:</Box>
      <Table
        highlightOnHover
        sx={(theme) => ({
          [theme.fn.smallerThan('sm')]: {
            '& [data-mobile]': {
              display: 'none',
            },
          },
        })}
      >
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
            <th data-mobile>Description</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>

      <Box mb="sm" mt="xl">
        Install dependencies:
      </Box>

      <PackageInstallation packages={[...selection, ...extraPackages]} />
    </>
  );
}
