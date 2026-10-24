import { Fragment } from 'react';
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { IconPlus } from '@tabler/icons-react';
import { Button, Divider, Group, Input, Stack, Text } from '@mantine/core';
import { ActionRow } from '../ActionRow/ActionRow';
import { createAction, MAX_ACTIONS } from '../constants';
import { getDataPath } from '../form-utils';
import type { ActionType, RuleFormType } from '../types';

export function ActionList({ form }: { form: RuleFormType }) {
  const actions = form.useWatchValue('actions');
  const ids = actions.map((action) => action.id);
  const usedTypes = actions
    .map((action) => action.type)
    .filter((type): type is ActionType => type !== null);
  const full = actions.length >= MAX_ACTIONS;

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (over && active.id !== over.id) {
      form.reorderListItem('actions', {
        from: ids.indexOf(String(active.id)),
        to: ids.indexOf(String(over.id)),
      });
    }
  };

  return (
    <Stack gap="sm">
      <DndContext
        id="automation-rule-actions"
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={ids} strategy={verticalListSortingStrategy}>
          {actions.map((action, index) => (
            <Fragment key={action.id}>
              {index > 0 && <Divider />}
              <ActionRow
                form={form}
                action={action}
                index={index}
                usedTypes={usedTypes}
                onRemove={() => form.removeListItem('actions', index)}
              />
            </Fragment>
          ))}
        </SortableContext>
      </DndContext>

      {actions.length === 0 && <Text size="sm">No actions added</Text>}
      {form.errors.actions && <Input.Error>{form.errors.actions}</Input.Error>}

      <Group gap="sm">
        <Button
          variant="default"
          leftSection={<IconPlus size={16} />}
          disabled={full}
          data-path={getDataPath('actions')}
          onClick={() => form.insertListItem('actions', createAction())}
        >
          Add action
        </Button>
        {full && <Text size="xs">A rule can have up to {MAX_ACTIONS} actions</Text>}
      </Group>
    </Stack>
  );
}
