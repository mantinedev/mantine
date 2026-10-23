import { useRef, useState } from 'react';
import { Button, Code, Group, Input, Stack, Text, Title, useModal } from '@mantine/core';
import { useForm, type FormErrors } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { FieldEditor } from './FieldEditor/FieldEditor';
import { FieldList } from './FieldList/FieldList';
import { slugify } from './fields';
import { ModelDetails } from './ModelDetails';
import { toModelJson } from './serialize';
import type { ContentModelJson, ContentModelValues, ModelField } from './types';
import { MODEL_RULES } from './validation';

interface EditorSession {
  id: number;
  field: ModelField | null;
  takenKeys: string[];
}

export function ContentModelForm() {
  const addFieldRef = useRef<HTMLButtonElement>(null);
  const [session, setSession] = useState<EditorSession>({ id: 0, field: null, takenKeys: [] });
  const [submitted, setSubmitted] = useState<ContentModelJson | null>(null);

  const form = useForm<ContentModelValues>({
    name: 'content-model',
    initialValues: {
      name: '',
      key: '',
      description: '',
      fields: [],
    },
    validate: MODEL_RULES,
    validateInputOnBlur: ['name', 'key', 'description'],
  });

  // The key follows the name while it still equals the slug of the previous name
  form.watch('name', ({ value, previousValue }) => {
    if (form.getValues().key === slugify(previousValue)) {
      form.setFieldValue('key', slugify(value));
    }
  });

  const handleSave = (field: ModelField) => {
    const index = form.getValues().fields.findIndex((item) => item.id === field.id);
    if (index === -1) {
      form.insertListItem('fields', field);
    } else {
      form.replaceListItem('fields', index, field);
    }
    modal.close();
  };

  // A new session id remounts the editor, so every opening starts from the given field
  const modal = useModal({
    title: session.field ? 'Edit field' : 'Add field',
    size: 'lg',
    fullScreenBelow: 'sm',
    children: (
      <FieldEditor
        key={session.id}
        field={session.field}
        takenKeys={session.takenKeys}
        onSave={handleSave}
        onCancel={() => modal.close()}
      />
    ),
  });

  const openEditor = (index: number | null) => {
    const { fields } = form.getValues();
    setSession({
      id: session.id + 1,
      field: index === null ? null : fields[index],
      takenKeys: fields.filter((_, i) => i !== index).map((field) => field.key),
    });
    modal.open();
  };

  const handleSubmit = (values: ContentModelValues) => {
    const model = toModelJson(values);
    setSubmitted(model);
    notifications.show({
      title: 'Model created',
      message: `${model.key} · ${model.fields.length} ${model.fields.length === 1 ? 'field' : 'fields'}`,
    });
  };

  const handleErrors = (errors: FormErrors) => {
    const path = Object.keys(errors)[0];
    path === 'fields' ? addFieldRef.current?.focus() : form.getInputNode(path)?.focus();
  };

  return (
    <Stack gap="xl">
      <form onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
        <Stack gap="xl">
          <Stack>
            <div>
              <Title order={3} c="var(--mantine-color-bright)">
                Model
              </Title>
              <Text size="sm">Entries are created from this model</Text>
            </div>
            <ModelDetails form={form} />
          </Stack>

          <Stack>
            <div>
              <Title order={3} c="var(--mantine-color-bright)">
                Fields
              </Title>
              <Text size="sm">Drag fields to change the order editors see them in</Text>
            </div>
            <FieldList
              form={form}
              addButtonRef={addFieldRef}
              onAdd={() => openEditor(null)}
              onEdit={openEditor}
            />
          </Stack>

          <Group justify="flex-end">
            <Button type="submit" onMouseDown={(event) => event.preventDefault()}>
              Create model
            </Button>
          </Group>
        </Stack>
      </form>

      {submitted && (
        <Stack gap="xs">
          <Input.Label labelElement="div">Model JSON</Input.Label>
          <Code block aria-label="Model JSON">
            {JSON.stringify(submitted, null, 2)}
          </Code>
        </Stack>
      )}
    </Stack>
  );
}
