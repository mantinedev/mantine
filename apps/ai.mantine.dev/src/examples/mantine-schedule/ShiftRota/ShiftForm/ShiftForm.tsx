import dayjs from 'dayjs';
import { useState } from 'react';
import {
  Alert,
  Button,
  FocusTrap,
  Group,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  useModalCloseGuard,
} from '@mantine/core';
import { MaskedDateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { findTemplate, getTemplateRange, Shift, SHIFT_TEMPLATES } from '../data';
import { formatShiftRange } from '../rules';

export interface ShiftFormValues {
  start: string | null;
  end: string | null;
  note: string;
}

interface ShiftFormProps {
  shift: Shift;
  employeeLabel: string;
  getViolation: (values: { start: string; end: string }) => string | null;
  onSave: (values: { start: string; end: string; note: string }) => void;
  onDelete: () => void;
}

const templateOptions = SHIFT_TEMPLATES.map((template) => ({
  value: template.id,
  label: `${template.label} · ${formatShiftRange(getTemplateRange(template, '2000-01-01'))}`,
}));

export function ShiftForm({
  shift,
  employeeLabel,
  getViolation,
  onSave,
  onDelete,
}: ShiftFormProps) {
  const [violation, setViolation] = useState<string | null>(null);
  const closeModal = useModalCloseGuard();

  const form = useForm<ShiftFormValues>({
    initialValues: { start: shift.start, end: shift.end, note: shift.note },
    validate: {
      start: (value) => (value ? null : 'Enter the start'),
      end: (value, values) => {
        if (!value) {
          return 'Enter the end';
        }
        return values.start && !dayjs(value).isAfter(values.start)
          ? 'End must be after start'
          : null;
      },
    },
  });

  const { start, end } = form.values;
  const template = start && end ? findTemplate(start, end) : undefined;

  const applyTemplate = (templateId: string | null) => {
    const next = SHIFT_TEMPLATES.find((item) => item.id === templateId);
    if (next) {
      const range = getTemplateRange(next, start ?? shift.start);
      form.setValues(range);
    }
  };

  const handleSubmit = (values: ShiftFormValues) => {
    const range = { start: values.start!, end: values.end! };
    const reason = getViolation(range);
    setViolation(reason);
    if (!reason) {
      onSave({ ...range, note: values.note.trim() });
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <FocusTrap.InitialFocus />
      <Stack>
        <Text size="sm">{employeeLabel}</Text>

        {violation && (
          <Alert color="red" title="The shift breaks a rule">
            {violation}
          </Alert>
        )}

        <Select
          label="Template"
          placeholder="Custom times"
          data={templateOptions}
          value={template?.id ?? null}
          onChange={applyTemplate}
          allowDeselect={false}
        />

        <SimpleGrid cols={{ base: 1, xs: 2 }}>
          <MaskedDateInput label="Start" withTime withAsterisk {...form.getInputProps('start')} />
          <MaskedDateInput label="End" withTime withAsterisk {...form.getInputProps('end')} />
        </SimpleGrid>

        <Textarea
          label="Note"
          placeholder="Note"
          autosize
          minRows={2}
          {...form.getInputProps('note')}
        />

        <Group justify="flex-end">
          <Button variant="default" c="var(--mantine-color-red-text)" mie="auto" onClick={onDelete}>
            Delete
          </Button>
          <Button variant="default" onClick={closeModal}>
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </Group>
      </Stack>
    </form>
  );
}
