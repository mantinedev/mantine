import dayjs from 'dayjs';
import type { Ref } from 'react';
import { Button, CloseButton, Group, Input, Stack, Surface, Text, TextInput } from '@mantine/core';
import { YearPickerInput } from '@mantine/dates';
import type { JobApplicationFormType } from './types';
import { createPosition } from './values';

interface PositionsListProps {
  form: JobApplicationFormType;
  addPositionRef: Ref<HTMLButtonElement>;
}

export function PositionsList({ form, addPositionRef }: PositionsListProps) {
  const positions = form.useWatchValue('positions');
  const currentYear = dayjs().format('YYYY-MM-DD');

  return (
    <Stack gap="xs">
      <Input.Label required>Previous positions</Input.Label>

      {positions.length === 0 && <Text size="sm">No positions added</Text>}

      {positions.map((position, index) => (
        <Surface key={position.id} level={0} withBorder p="md" radius="md">
          <Group justify="space-between" mb="xs">
            <Text size="sm" fw={500}>
              Position {index + 1}
            </Text>
            <CloseButton
              aria-label={`Remove position ${index + 1}`}
              onClick={() => form.removeListItem('positions', index)}
            />
          </Group>
          <Group grow align="flex-start">
            <TextInput
              label="Company"
              placeholder="Company"
              withAsterisk
              {...form.getInputProps(`positions.${index}.company`)}
            />
            <TextInput
              label="Title"
              placeholder="Title"
              withAsterisk
              {...form.getInputProps(`positions.${index}.title`)}
            />
            <YearPickerInput
              type="range"
              label="Years"
              placeholder="Start year – end year"
              withAsterisk
              allowSingleDateInRange
              maxDate={currentYear}
              {...form.getInputProps(`positions.${index}.years`)}
            />
          </Group>
        </Surface>
      ))}

      {form.errors.positions && <Input.Error>{form.errors.positions}</Input.Error>}

      <Group>
        <Button
          ref={addPositionRef}
          variant="default"
          onClick={() => form.insertListItem('positions', createPosition())}
        >
          Add position
        </Button>
      </Group>
    </Stack>
  );
}
