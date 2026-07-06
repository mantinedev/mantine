import { FileSize, Table } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { FileSize, Table } from '@mantine/core';

const values = [1450, 1_048_576, 1_500_000_000];

function Demo() {
  return (
    <Table withColumnBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Bytes</Table.Th>
          <Table.Th>Decimal (SI)</Table.Th>
          <Table.Th>Binary</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {values.map((value) => (
          <Table.Tr key={value}>
            <Table.Td>{value}</Table.Td>
            <Table.Td>
              <FileSize value={value} unitSystem="decimal" />
            </Table.Td>
            <Table.Td>
              <FileSize value={value} unitSystem="binary" />
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
`;

const values = [1450, 1_048_576, 1_500_000_000];

function Demo() {
  return (
    <Table withColumnBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Bytes</Table.Th>
          <Table.Th>Decimal (SI)</Table.Th>
          <Table.Th>Binary</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {values.map((value) => (
          <Table.Tr key={value}>
            <Table.Td>{value}</Table.Td>
            <Table.Td>
              <FileSize value={value} unitSystem="decimal" />
            </Table.Td>
            <Table.Td>
              <FileSize value={value} unitSystem="binary" />
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}

export const unitSystem: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
