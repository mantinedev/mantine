import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/theme';
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

const ths = (
  <tr>
    <th>Element position</th>
    <th>Element name</th>
    <th>Symbol</th>
    <th>Atomic mass</th>
  </tr>
);

const table = (
  <>
    <caption>Some elements from periodic table</caption>
    <thead>{ths}</thead>
    <tbody>{rows}</tbody>
    <tfoot>{ths}</tfoot>
  </>
);

storiesOf('@mantine/core/Table', module)
  .add('General usage', () => (
    <div style={{ maxWidth: 600, padding: 20 }}>
      <Table>{table}</Table>
    </div>
  ))
  .add('Striped', () => (
    <div style={{ maxWidth: 600, padding: 20 }}>
      <Table striped>{table}</Table>
    </div>
  ))
  .add('Highlight on hover', () => (
    <div style={{ maxWidth: 600, padding: 20 }}>
      <Table highlightOnHover>{table}</Table>
    </div>
  ))
  .add('Dark theme', () => (
    <div style={{ backgroundColor: DEFAULT_THEME.colors.dark[7], padding: 40, minHeight: '100vh' }}>
      <Table themeOverride={{ colorScheme: 'dark' }}>{table}</Table>
      <Table style={{ marginTop: 50 }} themeOverride={{ colorScheme: 'dark' }} striped>
        {table}
      </Table>
      <Table style={{ marginTop: 50 }} themeOverride={{ colorScheme: 'dark' }} highlightOnHover>
        {table}
      </Table>
    </div>
  ));
