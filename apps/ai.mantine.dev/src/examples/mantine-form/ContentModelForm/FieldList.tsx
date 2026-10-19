import { useState } from 'react';
import { IconPlus } from '@tabler/icons-react';
import { Button, Group, Input, Stack, Text, useModal } from '@mantine/core';
import { FieldEditor } from './FieldEditor';
import { FieldRow } from './FieldRow';
import { SortableList } from './Sortable';
import type { ContentModelFormType, FieldValues } from './types';

interface FieldListProps {
  form: ContentModelFormType;
  addButtonRef: React.Ref<HTMLButtonElement>;
}

export function FieldList({ form, addButtonRef }: FieldListProps) {
  const fields = form.useWatchValue('fields');
  const [editing, setEditing] = useState<FieldValues | null>(null);
  // Remounts the editor on every open so it starts from the edited field or from scratch
  const [editorKey, setEditorKey] = useState(0);

  const handleSave = (field: FieldValues) => {
    const index = form.getValues().fields.findIndex((item) => item.id === field.id);
    if (index === -1) {
      form.insertListItem('fields', field);
    } else {
      form.replaceListItem('fields', index, field);
    }
    modal.close();
  };

  const modal = useModal({
    title: editing ? 'Edit field' : 'Add field',
    size: 'lg',
    fullScreenBelow: 'sm',
    children: (
      <FieldEditor
        key={editorKey}
        field={editing}
        usedKeys={fields.filter((item) => item.id !== editing?.id).map((item) => item.key)}
        onSave={handleSave}
        onCancel={() => modal.close()}
      />
    ),
  });

  const openEditor = (field: FieldValues | null) => {
    setEditing(field);
    setEditorKey((key) => key + 1);
    modal.open();
  };

  return (
    <Stack gap="xs">
      <Input.Label required>Fields</Input.Label>
      {fields.length > 0 ? (
        <SortableList
          ids={fields.map((field) => field.id)}
          onReorder={(move) => form.reorderListItem('fields', move)}
        >
          <Stack gap="xs">
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
          ref={addButtonRef}
          variant="default"
          leftSection={<IconPlus size={18} />}
          onClick={() => openEditor(null)}
        >
          Add field
        </Button>
      </Group>
    </Stack>
  );
}
