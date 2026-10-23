import { useId } from 'react';
import { Group, SimpleGrid, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import { FIELD_TYPE_ORDER, FIELD_TYPES } from '../constants';
import type { FieldType } from '../types';
import classes from './FieldTypePicker.module.css';

export function FieldTypePicker({ onPick }: { onPick: (type: FieldType) => void }) {
  const id = useId();

  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xs" role="group" aria-label="Field type">
      {FIELD_TYPE_ORDER.map((value, index) => {
        const type = FIELD_TYPES[value];
        const labelId = `${id}-${value}-label`;
        const descriptionId = `${id}-${value}-description`;
        return (
          <UnstyledButton
            key={value}
            className={classes.option}
            aria-labelledby={labelId}
            aria-describedby={descriptionId}
            data-autofocus={index === 0 || undefined}
            onClick={() => onPick(value)}
          >
            <Group gap="sm" wrap="nowrap" align="flex-start">
              <ThemeIcon variant="default" size="lg" aria-hidden>
                <type.icon size={18} color={`var(--mantine-color-${type.color}-text)`} />
              </ThemeIcon>
              <div className={classes.texts}>
                <Text size="sm" className={classes.label} id={labelId}>
                  {type.label}
                </Text>
                <Text size="xs" id={descriptionId}>
                  {type.description}
                </Text>
              </div>
            </Group>
          </UnstyledButton>
        );
      })}
    </SimpleGrid>
  );
}
