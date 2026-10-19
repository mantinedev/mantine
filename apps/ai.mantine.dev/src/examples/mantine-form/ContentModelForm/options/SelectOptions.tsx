import { IconPlus } from '@tabler/icons-react';
import { Button, Group, Input, Select, Stack, Text } from '@mantine/core';
import { SortableList } from '../Sortable';
import type { FieldFormType } from '../types';
import { createOption } from '../utils';
import { SelectOptionRow } from './SelectOptionRow';

interface SelectOptionsProps {
  form: FieldFormType;
  addOptionRef: React.Ref<HTMLButtonElement>;
}

export function SelectOptions({ form, addOptionRef }: SelectOptionsProps) {
  const options = form.useWatchValue('options');
  const defaultOptionData = options
    .filter(
      (option, index) =>
        option.value !== '' && options.findIndex((item) => item.value === option.value) === index
    )
    .map((option) => ({ value: option.value, label: option.label || option.value }));

  return (
    <>
      <Stack gap="xs">
        <Input.Label required>Options</Input.Label>
        {options.length > 0 ? (
          <SortableList
            ids={options.map((option) => option.id)}
            onReorder={(move) => form.reorderListItem('options', move)}
          >
            <Stack gap="xs">
              {options.map((option, index) => (
                <SelectOptionRow key={option.id} form={form} id={option.id} index={index} />
              ))}
            </Stack>
          </SortableList>
        ) : (
          <Text size="sm">No options added</Text>
        )}
        {form.errors.options && <Input.Error>{form.errors.options}</Input.Error>}
        <Group>
          <Button
            ref={addOptionRef}
            variant="default"
            leftSection={<IconPlus size={18} />}
            onClick={() => form.insertListItem('options', createOption())}
          >
            Add option
          </Button>
        </Group>
      </Stack>
      <Select
        label="Default option"
        placeholder="No default"
        data={defaultOptionData}
        clearable
        {...form.getInputProps('defaultOption')}
      />
    </>
  );
}
