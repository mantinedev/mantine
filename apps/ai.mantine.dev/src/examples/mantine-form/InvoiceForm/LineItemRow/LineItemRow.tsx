import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { IconCopy, IconGripVertical, IconTrash } from '@tabler/icons-react';
import {
  ActionIcon,
  Group,
  NativeSelect,
  NumberInput,
  Select,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { formatMoney, getMoneyInputProps } from '../money';
import type { Currency, InvoiceFormType } from '../types';
import { TAX_RATES, UNITS } from '../validation';
import classes from './LineItemRow.module.css';

interface LineItemRowProps {
  form: InvoiceFormType;
  id: string;
  index: number;
  currency: Currency;
  amount: number;
  canRemove: boolean;
  canDuplicate: boolean;
  onDuplicate: () => void;
  onRemove: () => void;
}

export function LineItemRow({
  form,
  id,
  index,
  currency,
  amount,
  canRemove,
  canDuplicate,
  onDuplicate,
  onRemove,
}: LineItemRowProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });
  const taxRate = form.useWatchValue(`items.${index}.taxRate`);
  const labelProps = { classNames: { label: classes.rowLabel } };
  const name = `Item ${index + 1}`;
  const path = `items.${index}` as const;

  return (
    <div
      ref={setNodeRef}
      role="group"
      aria-label={name}
      className={classes.row}
      data-dragging={isDragging || undefined}
      style={{ transform: CSS.Translate.toString(transform), transition }}
    >
      <TextInput
        label="Description"
        className={classes.description}
        {...labelProps}
        aria-label={`${name} description`}
        placeholder="Description"
        withAsterisk
        {...form.getInputProps(`${path}.description`)}
      />

      <NumberInput
        label="Quantity"
        {...labelProps}
        aria-label={`${name} quantity`}
        placeholder="Quantity"
        decimalScale={3}
        allowNegative={false}
        hideControls
        withAsterisk
        rightSection={
          <NativeSelect
            aria-label={`${name} unit`}
            data={UNITS}
            variant="unstyled"
            rightSectionWidth={28}
            {...form.getInputProps(`${path}.unit`, { withError: false })}
          />
        }
        rightSectionWidth={88}
        {...form.getInputProps(`${path}.quantity`)}
      />

      <NumberInput
        label="Unit price"
        {...labelProps}
        aria-label={`${name} unit price`}
        placeholder="Unit price"
        withAsterisk
        {...getMoneyInputProps(currency)}
        {...form.getInputProps(`${path}.unitPrice`)}
      />

      <Stack gap="xs">
        <Select
          label="Tax rate"
          {...labelProps}
          aria-label={`${name} tax rate`}
          placeholder="Tax rate"
          data={TAX_RATES}
          allowDeselect={false}
          {...form.getInputProps(`${path}.taxRate`)}
        />
        {taxRate === 'custom' && (
          <NumberInput
            label="Custom rate"
            {...labelProps}
            aria-label={`${name} custom tax rate`}
            placeholder="0.0%"
            suffix="%"
            decimalScale={1}
            allowNegative={false}
            hideControls
            {...form.getInputProps(`${path}.customTaxRate`)}
          />
        )}
      </Stack>

      <Text size="sm" className={classes.amount}>
        <span className={classes.amountLabel}>Amount</span>
        {formatMoney(amount, currency)}
      </Text>

      <Group gap={6} wrap="nowrap" className={classes.actions}>
        <ActionIcon
          ref={setActivatorNodeRef}
          variant="default"
          size="input-sm"
          className={classes.handle}
          {...attributes}
          {...listeners}
          aria-label={`Reorder ${name.toLowerCase()}`}
        >
          <IconGripVertical size={16} />
        </ActionIcon>
        <ActionIcon
          variant="default"
          size="input-sm"
          aria-label={`Duplicate ${name.toLowerCase()}`}
          disabled={!canDuplicate}
          onClick={onDuplicate}
        >
          <IconCopy size={16} />
        </ActionIcon>
        <ActionIcon
          variant="default"
          size="input-sm"
          aria-label={`Remove ${name.toLowerCase()}`}
          disabled={!canRemove}
          onClick={onRemove}
        >
          <IconTrash size={16} color={canRemove ? 'var(--mantine-color-red-text)' : undefined} />
        </ActionIcon>
      </Group>
    </div>
  );
}
