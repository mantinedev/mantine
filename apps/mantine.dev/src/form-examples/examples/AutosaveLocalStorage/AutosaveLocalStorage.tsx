import { useEffect, useState } from 'react';
import { Button, Group, Stack, Text, Textarea, TextInput } from '@mantine/core';
import { hasLength, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

interface PostValues {
  title: string;
  body: string;
}

const STORAGE_KEY = 'mantine-form-example-post-draft';

function readDraft(): Partial<PostValues> | null {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return null;
  }

  try {
    const parsed: unknown = JSON.parse(stored);
    return typeof parsed === 'object' && parsed !== null ? (parsed as Partial<PostValues>) : null;
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

export function AutosaveLocalStorage() {
  const [savedAt, setSavedAt] = useState<string | null>(null);

  const form = useForm<PostValues>({
    mode: 'uncontrolled',
    initialValues: { title: '', body: '' },
    validate: {
      title: isNotEmpty('Title is required'),
      body: hasLength({ min: 10 }, 'Body must be at least 10 characters'),
    },
    onValuesChange: (values) => {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
      setSavedAt(new Date().toLocaleTimeString());
    },
  });

  useEffect(() => {
    const draft = readDraft();
    if (draft) {
      form.setValues(draft);
    }
  }, []);

  const clearDraft = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    setSavedAt(null);
  };

  const discardDraft = () => {
    // reset triggers onValuesChange, the draft is removed after it
    form.reset();
    clearDraft();
  };

  const handleSubmit = (values: PostValues) => {
    notifications.show({ title: 'Post published', message: `"${values.title}" is now live` });
    discardDraft();
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          label="Title"
          placeholder="Post title"
          withAsterisk
          {...form.getInputProps('title')}
        />
        <Textarea
          label="Body"
          placeholder="Write your post, it is saved as you type"
          withAsterisk
          autosize
          minRows={4}
          {...form.getInputProps('body')}
        />
        <Group justify="space-between">
          <Text size="sm" c="dimmed">
            {savedAt ? `Draft saved at ${savedAt}` : 'No draft saved'}
          </Text>
          <Group>
            <Button variant="default" onClick={discardDraft}>
              Discard draft
            </Button>
            <Button type="submit">Publish</Button>
          </Group>
        </Group>
      </Stack>
    </form>
  );
}
