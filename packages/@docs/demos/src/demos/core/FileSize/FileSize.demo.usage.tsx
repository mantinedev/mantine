import { FileSize, Table } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { FileSize, Table } from '@mantine/core';

const files = [
  { name: 'avatar.png', size: 15360 },
  { name: 'report.pdf', size: 1_450_000 },
  { name: 'backup.zip', size: 4_800_000_000 },
];

function Demo() {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>File</Table.Th>
          <Table.Th>Size</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {files.map((file) => (
          <Table.Tr key={file.name}>
            <Table.Td>{file.name}</Table.Td>
            <Table.Td>
              <FileSize value={file.size} />
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}
`;

const files = [
  { name: 'avatar.png', size: 15360 },
  { name: 'report.pdf', size: 1_450_000 },
  { name: 'backup.zip', size: 4_800_000_000 },
];

function Demo() {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>File</Table.Th>
          <Table.Th>Size</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {files.map((file) => (
          <Table.Tr key={file.name}>
            <Table.Td>{file.name}</Table.Td>
            <Table.Td>
              <FileSize value={file.size} />
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
