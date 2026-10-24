import { closestCenter, DndContext, type DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { IconPlus } from '@tabler/icons-react';
import { Button, Group, Input, Select, Stack } from '@mantine/core';
import { getMove, useSortableSensors } from '../dnd';
import { createSelectOption } from '../fields';
import type { SelectOption } from '../types';
import type { OptionsProps } from './options';
import { SelectOptionRow } from './SelectOptionRow/SelectOptionRow';

function getDefaultOptions(options: SelectOption[]) {
  const seen = new Set<string>();
  return options.flatMap(({ value, label }) => {
    const trimmed = value.trim();
    if (trimmed === '' || seen.has(trimmed)) {
      return [];
    }
    seen.add(trimmed);
    return [{ value: trimmed, label: label.trim() || trimmed }];
  });
}

export function SelectOptions({ form, listActionRef }: OptionsProps) {
  const options = form.useWatchValue('select.options');
  const sensors = useSortableSensors();
  const ids = options.map((option) => option.id);

  // Uniqueness depends on every value: revalidate the list while its error is shown
  form.watch('select.options', ({ value }) => {
    if (form.errors['select.options']) {
      form.validateField('select.options');
    }
    const { defaultValue } = form.getValues().select;
    if (defaultValue && !value.some((option) => option.value.trim() === defaultValue)) {
      form.setFieldValue('select.defaultValue', null);
    }
  });

  const handleDragEnd = (event: DragEndEvent) => {
    const move = getMove(ids, event);
    move && form.reorderListItem('select.options', move);
  };

  return (
    <Stack>
      <Stack gap="xs">
        <Input.Label required labelElement="div">
          Options
        </Input.Label>
        <DndContext
          id="select-options"
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={ids} strategy={verticalListSortingStrategy}>
            {options.map((option, index) => (
              <SelectOptionRow
                key={option.id}
                form={form}
                id={option.id}
                index={index}
                onRemove={() => form.removeListItem('select.options', index)}
              />
            ))}
          </SortableContext>
        </DndContext>
        {form.errors['select.options'] && (
          <Input.Error>{form.errors['select.options']}</Input.Error>
        )}
        <Group>
          <Button
            ref={listActionRef}
            variant="default"
            leftSection={<IconPlus size={18} />}
            onClick={() => form.insertListItem('select.options', createSelectOption())}
          >
            Add option
          </Button>
        </Group>
      </Stack>
      <Select
        label="Default option"
        placeholder="No default"
        data={getDefaultOptions(options)}
        clearable
        {...form.getInputProps('select.defaultValue')}
      />
    </Stack>
  );
}
