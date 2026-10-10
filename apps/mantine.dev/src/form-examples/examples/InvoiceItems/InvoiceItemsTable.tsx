import { TrashIcon } from '@phosphor-icons/react';
import { ActionIcon, NumberInput, Table, Text, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';

export interface InvoiceItem {
  key: string;
  description: string;
  quantity: number;
  price: number;
}

const moneyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const numericCellStyle = {
  fontVariantNumeric: 'tabular-nums',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
} as const;

export function getSubtotal(item: InvoiceItem) {
  return (Number(item.quantity) || 0) * (Number(item.price) || 0);
}

export function getTotal(items: InvoiceItem[]) {
  return items.reduce((acc, item) => acc + getSubtotal(item), 0);
}

export function formatMoney(value: number) {
  return moneyFormatter.format(value);
}

interface InvoiceItemsTableProps {
  form: UseFormReturnType<{ items: InvoiceItem[] }>;
}

export function InvoiceItemsTable({ form }: InvoiceItemsTableProps) {
  const items = form.useWatchValue('items');

  const rows = items.map((item, index) => (
    <Table.Tr key={item.key}>
      <Table.Td>
        <TextInput
          placeholder="Item description"
          aria-label="Description"
          {...form.getInputProps(`items.${index}.description`)}
        />
      </Table.Td>
      <Table.Td>
        <NumberInput
          min={1}
          max={1000}
          clampBehavior="strict"
          aria-label="Quantity"
          {...form.getInputProps(`items.${index}.quantity`)}
        />
      </Table.Td>
      <Table.Td>
        <NumberInput
          min={0}
          max={1_000_000}
          clampBehavior="strict"
          prefix="$"
          decimalScale={2}
          thousandSeparator=","
          aria-label="Price"
          {...form.getInputProps(`items.${index}.price`)}
        />
      </Table.Td>
      <Table.Td ta="right" style={numericCellStyle}>
        <Text size="sm" span>
          {formatMoney(getSubtotal(item))}
        </Text>
      </Table.Td>
      <Table.Td>
        <ActionIcon
          variant="default"
          size="input-sm"
          aria-label="Remove item"
          onClick={() => form.removeListItem('items', index)}
        >
          <TrashIcon size={18} color="var(--mantine-color-red-6)" />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      <Table.ScrollContainer minWidth={500}>
        <Table layout="fixed" verticalSpacing="xs">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Description</Table.Th>
              <Table.Th w={90}>Qty</Table.Th>
              <Table.Th w={120}>Price</Table.Th>
              <Table.Th w={110} ta="right">
                Subtotal
              </Table.Th>
              <Table.Th w={56} />
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {rows.length > 0 ? (
              rows
            ) : (
              <Table.Tr>
                <Table.Td colSpan={5}>
                  <Text size="xs" ta="center">
                    No items yet
                  </Text>
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
          <Table.Tfoot>
            <Table.Tr>
              <Table.Th colSpan={3}>Total</Table.Th>
              <Table.Th ta="right" style={numericCellStyle}>
                {formatMoney(getTotal(items))}
              </Table.Th>
              <Table.Th />
            </Table.Tr>
          </Table.Tfoot>
        </Table>
      </Table.ScrollContainer>

      {form.errors.items && (
        <Text size="sm" c="red" mt="xs">
          {form.errors.items}
        </Text>
      )}
    </div>
  );
}
