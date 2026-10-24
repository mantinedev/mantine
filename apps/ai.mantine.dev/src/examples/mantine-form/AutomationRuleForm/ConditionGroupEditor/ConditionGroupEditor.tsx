import { IconPlus } from '@tabler/icons-react';
import { Button, Group, Input, Select, Stack, Text } from '@mantine/core';
import { ConditionCaptions, ConditionRow } from '../ConditionRow/ConditionRow';
import { createCondition, createGroup, MAX_GROUP_DEPTH } from '../constants';
import { getDataPath } from '../form-utils';
import type { ConditionGroup, RuleFormType } from '../types';
import classes from './ConditionGroupEditor.module.css';

const COMBINATORS = [
  { value: 'and', label: 'all' },
  { value: 'or', label: 'any' },
];

interface ConditionGroupEditorProps {
  form: RuleFormType;
  path: string;
  depth: number;
  label?: string;
  onRemove?: () => void;
}

export function ConditionGroupEditor({
  form,
  path,
  depth,
  label,
  onRemove,
}: ConditionGroupEditorProps) {
  const group = form.useWatchValue(path) as ConditionGroup;
  const error = form.errors[path];
  const matchLabel = label ? `${label} match` : 'Match';

  const header = (
    <Group gap="xs" wrap="nowrap">
      <Text size="sm">{label ? `${label} · match` : 'Match'}</Text>
      <Select
        aria-label={matchLabel}
        data={COMBINATORS}
        allowDeselect={false}
        className={classes.match}
        {...form.getInputProps(`${path}.combinator`)}
      />
      <Text size="sm">of the following conditions</Text>
    </Group>
  );

  const body = (
    <Stack gap="sm">
      {label ? (
        <Group justify="space-between" wrap="nowrap">
          {header}
          <Button variant="default" aria-label={`Remove ${label.toLowerCase()}`} onClick={onRemove}>
            Remove group
          </Button>
        </Group>
      ) : (
        header
      )}

      {group.conditions.length > 0 && (
        <Stack gap="xs">
          <ConditionCaptions />
          {group.conditions.map((condition, index) => (
            <ConditionRow
              key={condition.id}
              form={form}
              path={`${path}.conditions.${index}`}
              index={index}
              onRemove={() => form.removeListItem(`${path}.conditions`, index)}
            />
          ))}
        </Stack>
      )}

      {group.groups.map((child, index) => {
        const childLabel = label ? `${label}.${index + 1}` : `Group ${index + 1}`;
        return (
          <ConditionGroupEditor
            key={child.id}
            form={form}
            path={`${path}.groups.${index}`}
            depth={depth + 1}
            label={childLabel}
            onRemove={() => form.removeListItem(`${path}.groups`, index)}
          />
        );
      })}

      {error && <Input.Error>{error}</Input.Error>}

      <Group gap="xs">
        <Button
          variant="default"
          leftSection={<IconPlus size={16} />}
          data-path={getDataPath(path)}
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
  );

  if (!label) {
    return body;
  }

  return (
    <div role="group" aria-label={label} className={classes.nested}>
      {body}
    </div>
  );
}
