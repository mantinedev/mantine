import { useRef } from 'react';
import { Button, Code, Group, Stack, Surface, Title } from '@mantine/core';
import { formRootRule, hasLength, isNotEmpty, useForm, type FormErrors } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { FieldList } from './FieldList';
import { ModelDetails } from './ModelDetails';
import type { ContentModelValues } from './types';
import { KEY_ERROR, KEY_PATTERN, toModelJson } from './utils';

export function ContentModelForm() {
  const addFieldRef = useRef<HTMLButtonElement>(null);

  const form = useForm<ContentModelValues>({
    name: 'content-model',
    initialValues: {
      name: '',
      key: '',
      description: '',
      fields: [],
    },
    validateInputOnBlur: ['name', 'key', 'description'],
    validate: {
      name: (value) =>
        value.trim() === ''
          ? 'Model name is required'
          : hasLength({ min: 2, max: 60 }, 'Model name must be 2–60 characters')(value),
      key: (value) => {
        if (value === '') {
          return 'Model key is required';
        }
        return KEY_PATTERN.test(value) ? null : KEY_ERROR;
      },
      description: hasLength({ max: 200 }, 'Description must be 200 characters or fewer'),
      fields: {
        [formRootRule]: isNotEmpty('Add at least one field'),
      },
    },
  });

  const handleSubmit = (values: ContentModelValues) => {
    notifications.show({
      title: 'Content model created',
      message: <Code block>{JSON.stringify(toModelJson(values), null, 2)}</Code>,
      autoClose: false,
    });
  };

  const handleErrors = (errors: FormErrors) => {
    const firstPath = Object.keys(errors)[0];

    if (firstPath === 'fields') {
      addFieldRef.current?.focus();
    } else {
      form.getInputNode(firstPath)?.focus();
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit, handleErrors)} noValidate>
      <Surface withBorder p="lg">
        <Stack gap="xl">
          <Title order={2} c="var(--mantine-color-bright)">
            New content model
          </Title>

          <ModelDetails form={form} />
          <FieldList form={form} addFieldRef={addFieldRef} />

          <Group justify="flex-end">
            {/* preventDefault keeps focus in the input so its blur error does not shift the button */}
            <Button type="submit" onMouseDown={(event) => event.preventDefault()}>
              Create model
            </Button>
          </Group>
        </Stack>
      </Surface>
    </form>
  );
}
