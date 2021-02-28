import React from 'react';
import { storiesOf } from '@storybook/react';
import { Table } from './Table';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

const rows = elements.map((element) => (
  <tr key={element.name}>
    <td>{element.position}</td>
    <td>{element.name}</td>
    <td>{element.symbol}</td>
    <td>{element.mass}</td>
  </tr>
));

const table = (
  <>
    <thead>
      <tr>
        <th>Element position</th>
        <th>Element name</th>
        <th>Symbol</th>
        <th>Atomic mass</th>
      </tr>
    </thead>
    <tbody>{rows}</tbody>
  </>
);

storiesOf('@mantine/core', module).add('Table', () => (
  <>
    <div style={{ maxWidth: 600 }}>
      <Table>{table}</Table>
      <div style={{ marginTop: 30 }}>
        <Table striped>{table}</Table>
      </div>
      <div style={{ marginTop: 30 }}>
        <Table highlighOnHover striped>
          {table}
        </Table>
      </div>
    </div>
  </>
));
