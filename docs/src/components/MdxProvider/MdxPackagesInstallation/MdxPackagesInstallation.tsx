import React, { useState } from 'react';
import { Checkbox, Code, Text, Table } from '@mantine/core';
import { MdxInstallScript } from '../MdxInstallScript/MdxInstallScript';
import { MdxParagraph } from '../MdxTypography/MdxTypography';
import { PACKAGES_DATA } from './data';
import classes from './MdxPackagesInstallation.module.css';

function getPackagesList(selection: string[], extraPackages: string[]) {
  const packages = selection.reduce<string[]>((acc, item) => {
    acc.push(...PACKAGES_DATA.find((i) => i.package === item)!.dependencies);
    return acc;
  }, []);

  const unique = Array.from(
    new Set(['@mantine/core', '@mantine/hooks', ...packages, ...extraPackages])
  );
  return unique.join(' ');
}

interface MdxPackagesInstallation {
  extraPackages?: string[];
}

export function MdxPackagesInstallation({ extraPackages = [] }: MdxPackagesInstallation) {
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
    <Table.Tr
      key={item.package}
      className={classes.row}
      onClick={() => toggleSelection(item.package)}
    >
      <Table.Td>
        <Checkbox
          checked={selection.includes(item.package)}
          onChange={() => {}}
          className={classes.checkbox}
        />
      </Table.Td>
      <Table.Td>
        <Code>{item.package}</Code>
      </Table.Td>
      <Table.Td className={classes.hiddenMobile}>
        <Text fz="sm">{item.description}</Text>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <MdxParagraph>Choose packages that you will use in your application:</MdxParagraph>
      <Table mb="xl">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>
              <Checkbox
                onChange={selectAll}
                checked={selection.length > 0}
                indeterminate={selection.length < PACKAGES_DATA.length && selection.length > 0}
              />
            </Table.Th>
            <Table.Th>Package</Table.Th>
            <Table.Th className={classes.hiddenMobile}>Description</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <tbody>{rows}</tbody>
      </Table>

      <MdxParagraph>Install dependencies:</MdxParagraph>

      <MdxInstallScript packages={getPackagesList(selection, extraPackages)} />
    </>
  );
}
