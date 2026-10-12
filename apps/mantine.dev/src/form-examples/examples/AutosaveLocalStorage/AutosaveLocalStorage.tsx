import { useEffect } from 'react';
import { Button, Group, Stack, Text, Textarea, TextInput } from '@mantine/core';
import { FormErrors, hasLength, isNotEmpty, useForm } from '@mantine/form';
import {
  readLocalStorageValue,
  useDebouncedCallback,
  useLocalStorage,
  useWindowEvent,
} from '@mantine/hooks';
import { notifications } from '@mantine/notifications';

interface PostValues {
  title: string;
  body: string;
}

interface Draft {
  values: PostValues;
  savedAt: string;
}

const STORAGE_KEY = 'mantine-form-examples-post-draft';

const initialValues: PostValues = {
  title: '',
  body: '',
};

export function AutosaveLocalStorage() {
  const [draft, setDraft, removeDraft] = useLocalStorage<Draft | null>({
    key: STORAGE_KEY,
    defaultValue: null,
  });

  const saveDraft = useDebouncedCallback(
    (values: PostValues) => setDraft({ values, savedAt: new Date().toLocaleTimeString() }),
    { delay: 1000, flushOnUnmount: true }
  );

  const form = useForm<PostValues>({
    initialValues,
    validate: {
      title: isNotEmpty('Title is required'),
      body: hasLength({ min: 10 }, 'Body must be at least 10 characters'),
    },
    onValuesChange: saveDraft,
  });

  // Restore the draft once on mount, setValues schedules a save that is not needed
  useEffect(() => {
    const stored = readLocalStorageValue<Draft | null>({ key: STORAGE_KEY, defaultValue: null });
    if (stored) {
      form.setValues(stored.values);
      saveDraft.cancel();
    }
  }, []);

  // Reloading or closing the tab does not unmount the form, flush the pending save
  useWindowEvent('pagehide', () => saveDraft.flush());

  const discardDraft = () => {
    // reset triggers onValuesChange, cancel the save it scheduled
    form.reset();
    saveDraft.cancel();
    removeDraft();
  };

  const handleSubmit = (values: PostValues) => {
    notifications.show({ title: 'Post published', message: `"${values.title}" is now live` });
    discardDraft();
  };

  const handleErrors = (errors: FormErrors) => {
    form.getInputNode(Object.keys(errors)[0])?.focus();
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
      <Stack>
        <TextInput
          size="md"
          label="Title"
          placeholder="Post title"
          withAsterisk
          {...form.getInputProps('title')}
        />

        <Textarea
          size="md"
          label="Body"
          placeholder="Write your post, it is saved as you type"
          withAsterisk
          autosize
          minRows={4}
          maxRows={8}
          {...form.getInputProps('body')}
        />

        <Group justify="space-between">
          <Text size="sm">{draft ? `Draft saved at ${draft.savedAt}` : 'No draft saved'}</Text>

          <Group>
            <Button size="md" variant="default" onClick={discardDraft}>
              Discard draft
            </Button>

            <Button size="md" type="submit">
              Publish
            </Button>
          </Group>
        </Group>
      </Stack>
    </form>
  );
}
