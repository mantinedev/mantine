import { useEffect } from 'react';
import { Button, Group, Stack, Textarea, TextInput } from '@mantine/core';
import { FormErrors, hasLength, isNotEmpty, useForm } from '@mantine/form';
import {
  readLocalStorageValue,
  removeLocalStorageValue,
  useDebouncedCallback,
  useWindowEvent,
  writeLocalStorageValue,
} from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { Draft, PostValues, STORAGE_KEY } from './draft';
import { DraftStatus } from './DraftStatus';

const initialValues: PostValues = {
  title: '',
  body: '',
};

export function AutosaveLocalStorage() {
  // writeLocalStorageValue does not rerender the form, only DraftStatus updates
  const saveDraft = useDebouncedCallback(
    (values: PostValues) =>
      writeLocalStorageValue<Draft>({
        key: STORAGE_KEY,
        value: { values, savedAt: new Date().toLocaleTimeString() },
      }),
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
    removeLocalStorageValue({ key: STORAGE_KEY });
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
          <DraftStatus />

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
