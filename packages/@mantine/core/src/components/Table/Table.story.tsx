import React from 'react';
import { Table } from './Table';

export default { title: 'Table' };

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

const rows = elements.map((element) => (
  <Table.Tr key={element.name}>
    <Table.Td>{element.position}</Table.Td>
    <Table.Td>{element.name}</Table.Td>
    <Table.Td>{element.symbol}</Table.Td>
    <Table.Td>{element.mass}</Table.Td>
  </Table.Tr>
));

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
        <Table.Caption>Test caption</Table.Caption>
      </Table>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Table withColumnBorders withRowBorders withTableBorder borderColor="cyan" unstyled>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
        <Table.Caption>Test caption</Table.Caption>
      </Table>
    </div>
  );
}

export function WithScrollContainer() {
  return (
    <div style={{ padding: 40 }}>
      <Table.ScrollContainer minWidth={500}>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Element position</Table.Th>
              <Table.Th>Element name</Table.Th>
              <Table.Th>Symbol</Table.Th>
              <Table.Th>Atomic mass</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
          <Table.Caption>Test caption</Table.Caption>
        </Table>
      </Table.ScrollContainer>
    </div>
  );
}

export function FixedLayout() {
  return (
    <div style={{ padding: 40 }}>
      <Table layout="fixed" verticalSpacing={20} horizontalSpacing="xl" fz="xl">
        <Table.Thead>
          <Table.Tr>
            <Table.Th w={200}>Element position</Table.Th>
            <Table.Th w={200}>Element name</Table.Th>
            <Table.Th w={100}>Symbol</Table.Th>
            <Table.Th w={200}>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
}

export function Striped() {
  return (
    <div style={{ padding: 40 }}>
      <Table striped="even">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
}

export function HighlightOnHover() {
  return (
    <div style={{ padding: 40 }}>
      <Table highlightOnHover highlightOnHoverColor="red">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
}
