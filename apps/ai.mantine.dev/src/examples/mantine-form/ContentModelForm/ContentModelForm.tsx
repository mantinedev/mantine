import { useRef } from 'react';
import { Button, Code, Group, Stack, Surface, Title } from '@mantine/core';
import {
  formRootRule,
  hasLength,
  isNotEmpty,
  matches,
  useForm,
  type FormErrors,
} from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { FieldList } from './FieldList';
import { DESCRIPTION_MAX_LENGTH, ModelDetails } from './ModelDetails';
import type { ContentModelPayload, ContentModelValues } from './types';
import { KEY_PATTERN, slugify, toModelPayload } from './utils';
import classes from './ContentModelForm.module.css';

export function ContentModelForm() {
  const addFieldRef = useRef<HTMLButtonElement>(null);

  const form = useForm<ContentModelValues, ContentModelPayload>({
    name: 'content-model',
    initialValues: {
      name: '',
      key: '',
      description: '',
      fields: [],
    },
    validateInputOnBlur: ['name', 'key'],
    validate: {
      name: (value) =>
        value.trim() === ''
          ? 'Model name is required'
          : hasLength({ min: 2, max: 60 }, 'Model name must be 2–60 characters')(value),
      key: (value) =>
        value === ''
          ? 'Model key is required'
          : matches(KEY_PATTERN, 'Use lowercase letters, digits and underscores')(value),
      description: hasLength(
        { max: DESCRIPTION_MAX_LENGTH },
        `Description must be ${DESCRIPTION_MAX_LENGTH} characters or less`
      ),
      fields: {
        [formRootRule]: isNotEmpty('Add at least one field'),
      },
    },
    transformValues: toModelPayload,
  });

  // The key follows the name while it still matches the slug of the previous name
  form.watch('name', ({ value, previousValue }) => {
    if (form.getValues().key === slugify(previousValue)) {
      form.setFieldValue('key', slugify(value), { forceUpdate: false });
    }
  });

  const handleSubmit = (payload: ContentModelPayload) => {
    notifications.show({
      title: 'Content model saved',
      message: (
        <Code block className={classes.json}>
          {JSON.stringify(payload, null, 2)}
        </Code>
      ),
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
    <Surface withBorder p="lg" className={classes.root}>
      <form onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
        <Stack>
          <Title order={2} c="var(--mantine-color-bright)">
            New content model
          </Title>
          <ModelDetails form={form} />
          <FieldList form={form} addButtonRef={addFieldRef} />
          <Group justify="flex-end">
            <Button type="submit" onMouseDown={(event) => event.preventDefault()}>
              Create model
            </Button>
          </Group>
        </Stack>
      </form>
    </Surface>
  );
}
