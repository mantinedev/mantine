import { useState } from 'react';
import { Button, Group, Stack, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDebouncedCallback } from '@mantine/hooks';
import { SaveStatus } from './SaveStatus';

interface NoteValues {
  title: string;
  content: string;
}

function saveNote(values: NoteValues) {
  return new Promise<NoteValues>((resolve) => {
    setTimeout(() => resolve(values), 600);
  });
}

export function AutosaveServer() {
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [savedAt, setSavedAt] = useState<string | null>(null);

  const form = useForm<NoteValues>({
    initialValues: {
      title: 'Meeting notes',
      content: '',
    },
    onValuesChange: (values) => save(values),
  });

  const dirty = form.useDirty();

  const save = useDebouncedCallback(async (values: NoteValues) => {
    setStatus('saving');
    await saveNote(values);
    // Saved values become the new baseline, the form is no longer dirty
    form.setInitialValues(values);
    form.resetDirty(values);
    setStatus('saved');
    setSavedAt(new Date().toLocaleTimeString());
  }, 800);

  const saveNow = () => {
    save(form.getValues());
    save.flush();
  };

  return (
    <Stack>
      <Group justify="space-between">
        <SaveStatus status={status} savedAt={savedAt} dirty={dirty} />

        <Button variant="default" size="xs" onClick={saveNow} disabled={!dirty}>
          Save now
        </Button>
      </Group>

      <TextInput label="Title" placeholder="Note title" {...form.getInputProps('title')} />

      <Textarea
        label="Content"
        placeholder="Start typing, the note is saved automatically"
        autosize
        minRows={5}
        {...form.getInputProps('content')}
      />
    </Stack>
  );
}
