import { useState } from 'react';
import { Button, Group, Stack } from '@mantine/core';
import { useForm, type FormErrors } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { buildEntry, buildInitialValues } from './entry';
import { EntryPreview } from './EntryPreview';
import { EntrySettings } from './EntrySettings';
import { ModelField } from './fields';
import type { ContentEntry, ContentModel, EntryValues } from './types';
import { buildBlurPaths, buildRules } from './validation';

interface ContentEntryFormProps {
  model: ContentModel;
  onSubmit?: (entry: ContentEntry) => void;
}

// Initial values are read once by useForm: a new model remounts the form
export function ContentEntryForm({ model, onSubmit }: ContentEntryFormProps) {
  return <ModelEntryForm key={model.key} model={model} onSubmit={onSubmit} />;
}

function ModelEntryForm({ model, onSubmit }: ContentEntryFormProps) {
  const [entry, setEntry] = useState<ContentEntry | null>(null);

  const form = useForm<EntryValues>({
    name: 'content-entry',
    initialValues: buildInitialValues(model),
    validate: buildRules(model),
    validateInputOnBlur: buildBlurPaths(model),
  });

  const handleSubmit = (values: EntryValues) => {
    const created = buildEntry(model, values);
    setEntry(created);
    onSubmit?.(created);
    notifications.show({ title: 'Entry created', message: `${created.key} · ${model.name}` });
  };

  const handleErrors = (errors: FormErrors) => {
    form.getInputNode(Object.keys(errors)[0])?.focus();
  };

  return (
    <Stack gap="xl">
      <form noValidate onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
        <Stack>
          <EntrySettings form={form} />
          {model.fields.map((field) => (
            <ModelField key={field.key} form={form} field={field} />
          ))}
          <Group justify="flex-end">
            <Button type="submit" onMouseDown={(event) => event.preventDefault()}>
              Create entry
            </Button>
          </Group>
        </Stack>
      </form>
      {entry && <EntryPreview entry={entry} />}
    </Stack>
  );
}
