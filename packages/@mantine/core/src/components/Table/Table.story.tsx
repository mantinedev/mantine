import { Stack } from '../Stack';
import { Text } from '../Text';
import { Title } from '../Title';
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

export function VerticalVariant() {
  return (
    <div style={{ padding: 40 }}>
      <Table variant="vertical" layout="fixed" withTableBorder>
        <Table.Tbody>
          <Table.Tr>
            <Table.Th w={160}>Epic name</Table.Th>
            <Table.Td>7.x migration</Table.Td>
          </Table.Tr>

          <Table.Tr>
            <Table.Th>Status</Table.Th>
            <Table.Td>Open</Table.Td>
          </Table.Tr>

          <Table.Tr>
            <Table.Th>Total issues</Table.Th>
            <Table.Td>135</Table.Td>
          </Table.Tr>

          <Table.Tr>
            <Table.Th>Total story points</Table.Th>
            <Table.Td>874</Table.Td>
          </Table.Tr>

          <Table.Tr>
            <Table.Th>Last updated at</Table.Th>
            <Table.Td>September 26, 2024 17:41:26</Table.Td>
          </Table.Tr>
        </Table.Tbody>
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

const nums = [2214411234, 9983812411, 1234567890, 9948811128, 9933771777];

export function TabularNums() {
  const rows = nums.map((num) => (
    <Table.Tr key={num}>
      <Table.Td>Units sold</Table.Td>
      <Table.Td>{num}</Table.Td>
    </Table.Tr>
  ));

  return (
    <div style={{ padding: 40 }}>
      <Table tabularNums>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Units sold</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </div>
  );
}

export function NestedTable() {
  return (
    <Stack gap="xl">
      <Stack gap="xs">
        <Title order={1}>Mantine sandbox</Title>
        <Text>Vite + TS + React</Text>
      </Stack>

      <Stack gap="xs">
        <Title order={2}>Nested tables w/ default style (bug)</Title>
        <Text>Nested table heading row does not have bottom border and has incorrect striping</Text>
        <Table withTableBorder striped="odd">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Position</Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>Symbol</Table.Th>
              <Table.Th>Mass</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {elements.map((element) => (
              <Table.Tr key={element.name}>
                <Table.Td>{element.position}</Table.Td>
                <Table.Td>{element.name}</Table.Td>
                <Table.Td>{element.symbol}</Table.Td>
                <Table.Td>{element.mass}</Table.Td>
              </Table.Tr>
            ))}
            <Table.Tr key="nested">
              <Table.Td colSpan={4} p="sm">
                <Table withTableBorder striped="odd">
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Position</Table.Th>
                      <Table.Th>Name</Table.Th>
                      <Table.Th>Symbol</Table.Th>
                      <Table.Th>Mass</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {elements.map((element) => (
                      <Table.Tr key={element.name}>
                        <Table.Td>{element.position}</Table.Td>
                        <Table.Td>{element.name}</Table.Td>
                        <Table.Td>{element.symbol}</Table.Td>
                        <Table.Td>{element.mass}</Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Stack>

      <Stack gap="xs">
        <Title order={2}>Nested tables w/ custom style (fix)</Title>
        <Text>Nested table heading row has bottom border and correct striping</Text>
        <Table withTableBorder className="custom-table-style" striped="odd">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Position</Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>Symbol</Table.Th>
              <Table.Th>Mass</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {elements.map((element) => (
              <Table.Tr key={element.name}>
                <Table.Td>{element.position}</Table.Td>
                <Table.Td>{element.name}</Table.Td>
                <Table.Td>{element.symbol}</Table.Td>
                <Table.Td>{element.mass}</Table.Td>
              </Table.Tr>
            ))}
            <Table.Tr key="nested">
              <Table.Td colSpan={4} p="sm">
                <Table withTableBorder striped="odd">
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Position</Table.Th>
                      <Table.Th>Name</Table.Th>
                      <Table.Th>Symbol</Table.Th>
                      <Table.Th>Mass</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {elements.map((element) => (
                      <Table.Tr key={element.name}>
                        <Table.Td>{element.position}</Table.Td>
                        <Table.Td>{element.name}</Table.Td>
                        <Table.Td>{element.symbol}</Table.Td>
                        <Table.Td>{element.mass}</Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Stack>
    </Stack>
  );
}
