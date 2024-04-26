import { Code, Table, Text } from '@mantine/core';
import classes from './CssVariablesGroup.module.css';

interface CssVariableData {
  variable: string;
  description?: React.ReactNode;
  defaultValue: React.ReactNode;
}

export interface CssVariablesGroupProps {
  data: (CssVariableData | { group: string })[];
}

export function CssVariablesGroup({ data }: CssVariablesGroupProps) {
  const rows = data.map((item, index) => {
    if ('group' in item) {
      return (
        <Table.Tr key={item.group}>
          <Table.Td colSpan={2} className={classes.groupCell}>
            <Text fz="sm" lh={1} fw={500}>
              {item.group}
            </Text>
          </Table.Td>
        </Table.Tr>
      );
    }

    return (
      <Table.Tr key={item.variable}>
        <Table.Td
          pb={data[index + 1] && 'group' in data[index + 1] ? 'xl' : undefined}
          pt={data[index - 1] && 'group' in data[index - 1] ? 'md' : undefined}
        >
          <Code>{item.variable}</Code>
          {item.description && (
            <Text fz="xs" mt={3}>
              {item.description}
            </Text>
          )}
        </Table.Td>
        <Table.Td
          pb={data[index + 1] && 'group' in data[index + 1] ? 'xl' : undefined}
          pt={data[index - 1] && 'group' in data[index - 1] ? 'md' : undefined}
        >
          {item.defaultValue}
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table.ScrollContainer minWidth={500}>
      <Table layout="fixed">
        <Table.Thead>
          <Table.Tr>
            <Table.Th w={400}>Variable</Table.Th>
            <Table.Th>Default value</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
