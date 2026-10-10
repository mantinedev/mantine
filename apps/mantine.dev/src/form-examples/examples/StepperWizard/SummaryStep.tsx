import { Group, Stack, Text } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { WizardValues } from './types';

interface SummaryStepProps {
  form: UseFormReturnType<WizardValues>;
}

export function SummaryStep({ form }: SummaryStepProps) {
  const values = form.getValues();

  const rows = [
    { label: 'Username', value: values.username },
    { label: 'Password', value: '•'.repeat(values.password.length) },
    { label: 'Name', value: values.name },
    { label: 'Email', value: values.email },
  ].map((row) => (
    <Group key={row.label} justify="space-between" gap="xs">
      <Text size="sm">{row.label}</Text>

      <Text size="sm" fw={500}>
        {row.value}
      </Text>
    </Group>
  ));

  return (
    <Stack mt="md" gap="xs">
      {rows}
    </Stack>
  );
}
