import { useState } from 'react';
import { Button, Code, Group, Input, Stack } from '@mantine/core';
import { useForm, type FormErrors } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { buildEntryPayload, buildInitialValues } from './entry';
import { EntryDetails } from './EntryDetails';
import { ModelFieldInput } from './fields/ModelFieldInput';
import type { ContentModel, EntryPayload, EntryValues } from './types';
import { buildValidate, getBlurValidatedPaths } from './validation';

interface ContentEntryFormProps {
  model: ContentModel;
  onSubmit?: (entry: EntryPayload) => void;
}

export function ContentEntryForm({ model, onSubmit }: ContentEntryFormProps) {
  const form = useForm<EntryValues>({
    name: 'content-entry',
    initialValues: buildInitialValues(model),
    validate: buildValidate(model),
    validateInputOnBlur: getBlurValidatedPaths(model),
  });

  const [submitted, setSubmitted] = useState<EntryPayload | null>(null);

  const handleSubmit = (values: EntryValues) => {
    const entry = buildEntryPayload(model, values);
    onSubmit?.(entry);
    setSubmitted(entry);
    notifications.show({ title: 'Entry created', message: `${entry.key} · ${model.name}` });
  };

  const handleErrors = (errors: FormErrors) => {
    const firstPath = Object.keys(errors)[0];
    if (firstPath) {
      form.getInputNode(firstPath)?.focus();
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit, handleErrors)} noValidate>
      <Stack>
        <EntryDetails form={form} />
        {model.fields.map((field) => (
          <ModelFieldInput key={field.key} form={form} field={field} />
        ))}
        <Group justify="flex-end">
          <Button type="submit" onMouseDown={(event) => event.preventDefault()}>
            Create entry
          </Button>
        </Group>
        {submitted && (
          <div>
            <Input.Label labelElement="div">Submitted entry</Input.Label>
            <Code block>{JSON.stringify(submitted, null, 2)}</Code>
          </div>
        )}
      </Stack>
    </form>
  );
}
