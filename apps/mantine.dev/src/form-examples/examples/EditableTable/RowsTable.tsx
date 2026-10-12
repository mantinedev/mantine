import { NumberInput, Table, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { TableRow } from './data';
import { RowResetButton } from './RowResetButton';

interface RowsTableProps {
  form: UseFormReturnType<{ rows: TableRow[] }>;
}

export function RowsTable({ form }: RowsTableProps) {
  const rows = form.getValues().rows.map((row, index) => (
    <Table.Tr key={row.id}>
      <Table.Td>{row.id}</Table.Td>
      <Table.Td>
        <TextInput
          variant="unstyled"
          size="md"
          aria-label="Name"
          {...form.getInputProps(`rows.${index}.name`)}
        />
      </Table.Td>
      <Table.Td>
        <TextInput
          variant="unstyled"
          size="md"
          aria-label="Email"
          {...form.getInputProps(`rows.${index}.email`)}
        />
      </Table.Td>
      <Table.Td>
        <NumberInput
          variant="unstyled"
          size="md"
          hideControls
          min={0}
          max={10000}
          w={70}
          aria-label="Quantity"
          {...form.getInputProps(`rows.${index}.quantity`)}
        />
      </Table.Td>
      <Table.Td>
        <RowResetButton form={form} index={index} />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500} maxHeight={400}>
      <Table layout="fixed" verticalSpacing={2} stickyHeader>
        <Table.Thead>
          <Table.Tr>
            <Table.Th w={40} py="sm">
              #
            </Table.Th>
            <Table.Th w={140} py="sm">
              Name
            </Table.Th>
            <Table.Th py="sm">Email</Table.Th>
            <Table.Th w={90} py="sm">
              Qty
            </Table.Th>
            <Table.Th w={50} py="sm" />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
