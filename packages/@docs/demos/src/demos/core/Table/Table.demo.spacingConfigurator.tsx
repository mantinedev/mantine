import { Table, TableProps } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { elements } from './_data';

function Wrapper(props: TableProps) {
  return (
    <Table {...props}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Position</Table.Th>
          <Table.Th>Name</Table.Th>
          <Table.Th>Symbol</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {elements.map((element) => (
          <Table.Tr key={element.name}>
            <Table.Td>{element.position}</Table.Td>
            <Table.Td>{element.name}</Table.Td>
            <Table.Td>{element.symbol}</Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
}

const code = `
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`;

export const spacingConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    { prop: 'horizontalSpacing', type: 'size', libraryValue: 'xs', initialValue: 'xs' },
    { prop: 'verticalSpacing', type: 'size', initialValue: 'xs', libraryValue: 'xs' },
  ],
};
