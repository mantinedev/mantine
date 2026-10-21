import { IconPlus } from '@tabler/icons-react';
import { Button, Group, Input, Select, Stack } from '@mantine/core';
import { SortableList } from '../Sortable';
import type { FieldFormType } from '../types';
import { createSelectOption } from '../utils';
import { SelectOptionRow } from './SelectOptionRow';

export function SelectOptions({ form }: { form: FieldFormType }) {
  const options = form.useWatchValue('selectOptions');
  const listError = form.errors.selectOptions;

  // Uniqueness depends on all values, revalidate the list while its error is shown
  form.watch('selectOptions', () => {
    if (form.errors.selectOptions) {
      form.validateField('selectOptions');
    }
  });

  // Select does not support duplicate values, the list error reports them instead
  const defaultData = options
    .filter(
      (option, index) =>
        option.value !== '' && options.findIndex((item) => item.value === option.value) === index
    )
    .map((option) => ({ value: option.value, label: option.label || option.value }));

  return (
    <Stack>
      <Stack gap="xs">
        <Input.Label required>Options</Input.Label>
        <SortableList
          ids={options.map((option) => option.id)}
          onReorder={(from, to) => form.reorderListItem('selectOptions', { from, to })}
        >
          <Stack gap="xs" role="list" aria-label="Options">
            {options.map((option, index) => (
              <SelectOptionRow
                key={option.id}
                form={form}
                id={option.id}
                index={index}
                onRemove={() => form.removeListItem('selectOptions', index)}
              />
            ))}
          </Stack>
        </SortableList>
        {listError && <Input.Error>{listError}</Input.Error>}
        <Group>
          <Button
            variant="default"
            leftSection={<IconPlus size={18} />}
            onClick={() => form.insertListItem('selectOptions', createSelectOption())}
          >
            Add option
          </Button>
        </Group>
      </Stack>

      <Select
        label="Default option"
        placeholder="No default"
        clearable
        data={defaultData}
        {...form.getInputProps('selectDefault')}
      />
    </Stack>
  );
}
