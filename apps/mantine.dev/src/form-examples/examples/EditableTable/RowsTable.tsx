import { ArrowCounterClockwiseIcon } from '@phosphor-icons/react';
import { ActionIcon, NumberInput, ScrollArea, Table, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { TableRow } from './data';

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
          size="sm"
          aria-label="Name"
          {...form.getInputProps(`rows.${index}.name`)}
        />
      </Table.Td>
      <Table.Td>
        <TextInput
          variant="unstyled"
          size="sm"
          aria-label="Email"
          {...form.getInputProps(`rows.${index}.email`)}
        />
      </Table.Td>
      <Table.Td>
        <NumberInput
          variant="unstyled"
          size="sm"
          hideControls
          min={0}
          max={10000}
          w={70}
          aria-label="Quantity"
          {...form.getInputProps(`rows.${index}.quantity`)}
        />
      </Table.Td>
      <Table.Td>
        <ActionIcon
          variant="default"
          aria-label="Reset row"
          onClick={() => form.resetField(`rows.${index}`)}
        >
          <ArrowCounterClockwiseIcon size={16} />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea h={400} type="auto" offsetScrollbars>
      <Table verticalSpacing={2} stickyHeader>
        <Table.Thead>
          <Table.Tr>
            <Table.Th w={40}>#</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Qty</Table.Th>
            <Table.Th w={40} />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
