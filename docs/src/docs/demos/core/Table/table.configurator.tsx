import React from 'react';
import { Table } from '@mantine/core';
import Configurator from '../../../../components/Configurator/Configurator';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function TableWrapper(props: React.ComponentPropsWithoutRef<typeof Table>) {
  return (
    <Table {...props}>
      <thead>
        <tr>
          <th>Element position</th>
          <th>Element name</th>
          <th>Symbol</th>
          <th>Atomic mass</th>
        </tr>
      </thead>
      <tbody>
        {elements.map((element) => (
          <tr key={element.name}>
            <td>{element.position}</td>
            <td>{element.name}</td>
            <td>{element.symbol}</td>
            <td>{element.mass}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

const codeTemplate = (props: string) => `<Table${props}>
  <thead>
    <tr>
      <th>Element position</th>
      <th>Element name</th>
      <th>Symbol</th>
      <th>Atomic mass</th>
    </tr>
  </thead>
  <tbody>
    {elements.map((element) => (
      <tr key={element.name}>
        <td>{element.position}</td>
        <td>{element.name}</td>
        <td>{element.symbol}</td>
        <td>{element.mass}</td>
      </tr>
    ))}
  </tbody>
</Table>`;

export function TableStrippedConfigurator() {
  return (
    <Configurator
      component={TableWrapper}
      codeTemplate={codeTemplate}
      props={[
        { name: 'striped', type: 'boolean', defaultValue: false },
        { name: 'highlightOnHover', type: 'boolean', defaultValue: false },
      ]}
    />
  );
}
