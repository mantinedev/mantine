import { IconTrash } from '@tabler/icons-react';
import { ActionIcon, Group, SimpleGrid, Surface, Text, TextInput } from '@mantine/core';
import { YearPickerInput } from '@mantine/dates';
import type { JobApplicationFormType } from '../types';

interface PositionFieldsProps {
  form: JobApplicationFormType;
  index: number;
}

export function PositionFields({ form, index }: PositionFieldsProps) {
  const number = index + 1;

  return (
    <Surface withBorder p="md" radius="md">
      <Group justify="space-between" mb="sm">
        <Text size="sm" fw={500}>
          Position {number}
        </Text>
        <ActionIcon
          variant="default"
          size="input-sm"
          aria-label={`Remove position ${number}`}
          onClick={() => form.removeListItem('positions', index)}
        >
          <IconTrash size={16} color="var(--mantine-color-red-text)" />
        </ActionIcon>
      </Group>
      <SimpleGrid cols={{ base: 1, sm: 3 }}>
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
          allowSingleDateInRange
          label="Years"
          placeholder="Start year – end year"
          withAsterisk
          maxDate={new Date()}
          {...form.getInputProps(`positions.${index}.years`)}
        />
      </SimpleGrid>
    </Surface>
  );
}
