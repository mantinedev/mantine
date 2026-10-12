import { useState } from 'react';
import { Badge, Button, Code, Group, MaskInput, PinInput, Stack, Text } from '@mantine/core';
import { MaskedDateInput, TimePicker } from '@mantine/dates';
import { randomId } from '@mantine/hooks';
import { UseFormReturnType } from '../types';
import { useForm } from '../use-form';

export default { title: 'Form' };

interface Row {
  key: string;
  time: string;
  date: string | null;
  phone: string;
  pin: string;
}

interface Values {
  rows: Row[];
}

const createRow = (index: number): Row => ({
  key: randomId(),
  time: `1${index}:30`,
  date: `2024-05-0${index + 1}`,
  phone: '',
  pin: '',
});

interface RowFieldsProps {
  form: UseFormReturnType<Values>;
  index: number;
  onPinComplete: () => void;
}

function RowFields({ form, index, onPinComplete }: RowFieldsProps) {
  const dirty = form.useDirty(`rows.${index}`);

  return (
    <Group align="flex-end" wrap="nowrap">
      <Badge variant="light" color={dirty ? 'orange' : 'gray'} w={90}>
        {dirty ? 'dirty' : 'clean'}
      </Badge>
      <TimePicker label="Time" {...form.getInputProps(`rows.${index}.time`)} />
      <MaskedDateInput label="Date" {...form.getInputProps(`rows.${index}.date`)} />
      <MaskInput
        label="Phone"
        mask="(999) 999-9999"
        {...form.getInputProps(`rows.${index}.phone`)}
      />
      <PinInput
        aria-label={`Pin ${index}`}
        length={4}
        onComplete={onPinComplete}
        {...form.getInputProps(`rows.${index}.pin`)}
      />
    </Group>
  );
}

function ValuesPreview({ form }: { form: UseFormReturnType<Values> }) {
  const rows = form.useWatchValue('rows');
  return <Code block>{JSON.stringify(rows, null, 2)}</Code>;
}

export function FieldProtocolListReindex() {
  const [completed, setCompleted] = useState(0);
  const form = useForm<Values>({
    initialValues: { rows: [createRow(0), createRow(1), createRow(2)] },
  });

  return (
    <Stack p={40}>
      <Text size="sm">
        Rows use stable keys. Type partial values into TimePicker, MaskedDateInput, MaskInput and
        PinInput, then remove, reorder, insert or reset rows: each input must show the value of its
        row and drop partial entries on form writes.
      </Text>

      <Text>{`PinInput completed: ${completed}`}</Text>

      {form.getValues().rows.map((row, index) => (
        <RowFields
          key={row.key}
          form={form}
          index={index}
          onPinComplete={() => setCompleted((current) => current + 1)}
        />
      ))}

      <Group>
        <Button variant="default" onClick={() => form.removeListItem('rows', 0)}>
          Remove first
        </Button>
        <Button
          variant="default"
          disabled={form.getValues().rows.length < 2}
          onClick={() => form.reorderListItem('rows', { from: 0, to: 1 })}
        >
          Reorder
        </Button>
        <Button
          variant="default"
          onClick={() =>
            form.insertListItem('rows', createRow(form.getValues().rows.length % 9), 0)
          }
        >
          Insert first
        </Button>
        <Button variant="default" onClick={form.reset}>
          Reset
        </Button>
        <Button
          variant="default"
          onClick={() => form.setFieldValue('rows.0.phone', '5551234567', { forceUpdate: false })}
        >
          Set phone
        </Button>
      </Group>

      <ValuesPreview form={form} />
    </Stack>
  );
}
