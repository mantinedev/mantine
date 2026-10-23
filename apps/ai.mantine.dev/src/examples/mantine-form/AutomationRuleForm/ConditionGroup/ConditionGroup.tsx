import { IconPlus, IconTrash } from '@tabler/icons-react';
import { ActionIcon, Button, Group, Input, SegmentedControl, Stack, Text } from '@mantine/core';
import { ConditionRow } from '../ConditionRow/ConditionRow';
import { createCondition, createGroup } from '../conditions';
import { FORM_NAME, MAX_GROUP_DEPTH } from '../constants';
import type { Condition, ConditionGroup as ConditionGroupValue, RuleFormType } from '../types';
import classes from './ConditionGroup.module.css';

const COMBINATORS = [
  { value: 'and', label: 'AND' },
  { value: 'or', label: 'OR' },
];

interface ConditionGroupProps {
  form: RuleFormType;
  path: string;
  /** 0 for the root group */
  depth: number;
  label: string;
  onRemove?: () => void;
}

export function ConditionGroup({ form, path, depth, label, onRemove }: ConditionGroupProps) {
  const conditions = form.useWatchValue(`${path}.conditions`) as Condition[];
  const groups = form.useWatchValue(`${path}.groups`) as ConditionGroupValue[];
  const error = form.errors[`${path}.conditions`];
  const nested = depth > 0;

  return (
    <div role="group" aria-label={label} className={nested ? classes.nested : undefined}>
      <Group justify="space-between" wrap="nowrap" mb="sm">
        <Group gap="xs" wrap="nowrap">
          <Text size="sm" className={nested ? classes.title : undefined}>
            {nested ? label : 'Combine conditions with'}
          </Text>
          <SegmentedControl
            size="xs"
            data={COMBINATORS}
            aria-label={nested ? `Combine ${label} with` : 'Combine conditions with'}
            {...form.getInputProps(`${path}.combinator`, { withError: false })}
          />
        </Group>
        {onRemove && (
          <ActionIcon
            variant="default"
            aria-label={`Remove ${label.toLowerCase()}`}
            onClick={onRemove}
          >
            <IconTrash size={16} color="var(--mantine-color-red-text)" />
          </ActionIcon>
        )}
      </Group>

      <Stack gap="xs">
        {conditions.map((condition, index) => (
          <ConditionRow
            key={condition.id}
            form={form}
            path={`${path}.conditions.${index}`}
            label={`Condition ${index + 1}`}
            onRemove={() => form.removeListItem(`${path}.conditions`, index)}
          />
        ))}
        {conditions.length === 0 && groups.length === 0 && (
          <Text size="sm">No conditions added</Text>
        )}

        {groups.map((group, index) => (
          <ConditionGroup
            key={group.id}
            form={form}
            path={`${path}.groups.${index}`}
            depth={depth + 1}
            label={nested ? `${label}.${index + 1}` : `Group ${index + 1}`}
            onRemove={() => form.removeListItem(`${path}.groups`, index)}
          />
        ))}

        {error && <Input.Error>{error}</Input.Error>}

        <Group gap="xs">
          <Button
            variant="default"
            leftSection={<IconPlus size={16} />}
            // The list error has no input: getInputNode finds this button and focuses it
            data-path={`${FORM_NAME}-${path}.conditions`}
            onClick={() => form.insertListItem(`${path}.conditions`, createCondition())}
          >
            Add condition
          </Button>
          {depth < MAX_GROUP_DEPTH && (
            <Button
              variant="default"
              leftSection={<IconPlus size={16} />}
              onClick={() => form.insertListItem(`${path}.groups`, createGroup())}
            >
              Add group
            </Button>
          )}
        </Group>
      </Stack>
    </div>
  );
}
