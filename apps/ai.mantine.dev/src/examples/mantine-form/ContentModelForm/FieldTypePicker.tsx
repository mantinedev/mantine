import { Group, SimpleGrid, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import { FIELD_TYPES } from './fieldTypes';
import type { FieldType } from './types';
import classes from './FieldTypePicker.module.css';

export function FieldTypePicker({ onPick }: { onPick: (type: FieldType) => void }) {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm">
      {FIELD_TYPES.map((type, index) => (
        <UnstyledButton
          key={type.value}
          className={classes.option}
          onClick={() => onPick(type.value)}
          data-autofocus={index === 0 || undefined}
        >
          <Group gap="sm" wrap="nowrap" align="flex-start">
            <ThemeIcon variant="default" size="lg" aria-hidden>
              <type.icon size={18} color={`var(--mantine-color-${type.color}-text)`} />
            </ThemeIcon>
            <div className={classes.texts}>
              <Text size="sm" fw={500}>
                {type.label}
              </Text>
              <Text size="xs">{type.description}</Text>
            </div>
          </Group>
        </UnstyledButton>
      ))}
    </SimpleGrid>
  );
}
