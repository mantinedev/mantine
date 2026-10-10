import { CheckCircleIcon } from '@phosphor-icons/react';
import { Group, Text } from '@mantine/core';

interface SectionControlProps {
  label: string;
  valid: boolean;
}

export function SectionControl({ label, valid }: SectionControlProps) {
  return (
    <Group gap="xs">
      <Text fw={500}>{label}</Text>
      {valid && <CheckCircleIcon size={20} weight="fill" color="var(--mantine-color-success)" />}
    </Group>
  );
}
