import { IconPlus } from '@tabler/icons-react';
import { Button, Group, Input, Stack, Text, useModal } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { FieldEditor } from './FieldEditor';
import { FieldRow } from './FieldRow';
import { SortableList } from './Sortable';
import type { ContentField, ContentModelFormType, FieldValues } from './types';

interface FieldListProps {
  form: ContentModelFormType;
  addFieldRef: React.Ref<HTMLButtonElement>;
}

export function FieldList({ form, addFieldRef }: FieldListProps) {
  const fields = form.useWatchValue('fields');
  const modal = useModal({ size: 'lg', fullScreenBelow: 'sm' });

  const openEditor = (field?: ContentField) => {
    const otherKeys = form
      .getValues()
      .fields.filter((item) => item.id !== field?.id)
      .map((item) => item.key);

    const handleSave = (values: FieldValues) => {
      if (field) {
        const index = form.getValues().fields.findIndex((item) => item.id === field.id);
        form.replaceListItem('fields', index, { ...values, id: field.id });
      } else {
        form.insertListItem('fields', { ...values, id: randomId() });
      }
      modal.close();
    };

    modal.open({
      title: field ? 'Edit field' : 'Add field',
      children: (
        <FieldEditor
          key={field?.id ?? randomId()}
          field={field}
          existingKeys={otherKeys}
          onSave={handleSave}
          onCancel={() => modal.close()}
        />
      ),
    });
  };

  return (
    <Stack gap="xs">
      <Input.Label required>Fields</Input.Label>

      {fields.length > 0 ? (
        <SortableList
          ids={fields.map((field) => field.id)}
          onReorder={(from, to) => form.reorderListItem('fields', { from, to })}
        >
          <Stack gap="xs" role="list" aria-label="Fields">
            {fields.map((field, index) => (
              <FieldRow
                key={field.id}
                field={field}
                onEdit={() => openEditor(field)}
                onRemove={() => form.removeListItem('fields', index)}
              />
            ))}
          </Stack>
        </SortableList>
      ) : (
        <Text size="sm">No fields added</Text>
      )}

      {form.errors.fields && <Input.Error>{form.errors.fields}</Input.Error>}

      <Group>
        <Button
          ref={addFieldRef}
          variant="default"
          leftSection={<IconPlus size={18} />}
          onClick={() => openEditor()}
        >
          Add field
        </Button>
      </Group>
    </Stack>
  );
}
