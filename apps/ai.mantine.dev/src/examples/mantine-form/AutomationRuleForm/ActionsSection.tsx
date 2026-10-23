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
import { ActionRow } from './ActionRow/ActionRow';
import { createAction } from './conditions';
import { FORM_NAME, MAX_ACTIONS } from './constants';
import { FormSection } from './FormSection';
import type { ActionType, RuleFormType } from './types';

export function ActionsSection({ form }: { form: RuleFormType }) {
  const actions = form.useWatchValue('actions');
  const ids = actions.map((action) => action.id);
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

  const typesUsedBesides = (index: number) =>
    actions
      .filter((_, other) => other !== index)
      .map((action) => action.type)
      .filter((type): type is ActionType => type !== null);

  return (
    <FormSection title="Then" description="Actions run in order, drag them to change it.">
      <Stack gap="md">
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={ids} strategy={verticalListSortingStrategy}>
            {actions.map((action, index) => (
              <Fragment key={action.id}>
                <ActionRow
                  form={form}
                  id={action.id}
                  index={index}
                  usedTypes={typesUsedBesides(index)}
                  onRemove={() => form.removeListItem('actions', index)}
                />
                {index < actions.length - 1 && <Divider />}
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
            disabled={actions.length >= MAX_ACTIONS}
            // The list error has no input: getInputNode finds this button and focuses it
            data-path={`${FORM_NAME}-actions`}
            onClick={() => form.insertListItem('actions', createAction())}
          >
            Add action
          </Button>
          {actions.length >= MAX_ACTIONS && (
            <Text size="sm">A rule can run up to {MAX_ACTIONS} actions</Text>
          )}
        </Group>
      </Stack>
    </FormSection>
  );
}
