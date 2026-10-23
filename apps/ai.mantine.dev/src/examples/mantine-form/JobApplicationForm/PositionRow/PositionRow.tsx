import { IconTrash } from '@tabler/icons-react';
import { ActionIcon, Group, SimpleGrid, Stack, Surface, Text, TextInput } from '@mantine/core';
import { YearPickerInput } from '@mantine/dates';
import type { JobApplicationFormType } from '../types';
import classes from './PositionRow.module.css';

interface PositionRowProps {
  form: JobApplicationFormType;
  index: number;
}

export function PositionRow({ form, index }: PositionRowProps) {
  const number = index + 1;

  return (
    <Surface withBorder p="md">
      <Group justify="space-between" mb="sm">
        <Text size="sm" className={classes.title}>
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
      <Stack>
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
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
        </SimpleGrid>
        <YearPickerInput
          type="range"
          label="Years"
          placeholder="Start year – end year"
          maxDate={new Date()}
          withAsterisk
          {...form.getInputProps(`positions.${index}.years`)}
        />
      </Stack>
    </Surface>
  );
}
