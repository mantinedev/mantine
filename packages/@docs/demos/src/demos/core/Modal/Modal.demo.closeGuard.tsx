import { useRef } from 'react';
import { Button, Group, Textarea, TextInput, useModal, useModalCloseGuard } from '@mantine/core';
import { useForm } from '@mantine/form';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useRef } from 'react';
import { Button, Group, Textarea, TextInput, useModal, useModalCloseGuard } from '@mantine/core';
import { useForm } from '@mantine/form';

function NoteForm({ onSave }: { onSave: () => void }) {
  const form = useForm({ initialValues: { title: '', text: '' } });
  const resolveRef = useRef<((discard: boolean) => void) | null>(null);

  const settle = (discard: boolean) => {
    resolveRef.current?.(discard);
    resolveRef.current = null;
  };

  const confirm = useModal({
    title: 'Discard changes?',
    size: 'sm',
    onClose: () => settle(false),
    children: (
      <Group justify="flex-end">
        <Button variant="default" onClick={() => confirm.close()}>
          Keep editing
        </Button>
        <Button
          color="red"
          onClick={() => {
            settle(true);
            confirm.close();
          }}
        >
          Discard
        </Button>
      </Group>
    ),
  });

  // Called before the modal is closed with the close button, Escape or overlay click
  const closeModal = useModalCloseGuard(
    () =>
      !form.isDirty() ||
      new Promise<boolean>((resolve) => {
        resolveRef.current = resolve;
        confirm.open();
      })
  );

  return (
    <form onSubmit={form.onSubmit(onSave)}>
      <TextInput label="Title" placeholder="Title" data-autofocus {...form.getInputProps('title')} />
      <Textarea label="Text" placeholder="Text" mt="md" {...form.getInputProps('text')} />
      <Group justify="flex-end" mt="md">
        <Button variant="default" onClick={closeModal}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </Group>
    </form>
  );
}

function Demo() {
  const modal = useModal({
    title: 'Edit note',
    children: <NoteForm onSave={() => modal.close()} />,
  });

  return <Button onClick={() => modal.open()}>Edit note</Button>;
}
`;

function NoteForm({ onSave }: { onSave: () => void }) {
  const form = useForm({ initialValues: { title: '', text: '' } });
  const resolveRef = useRef<((discard: boolean) => void) | null>(null);

  const settle = (discard: boolean) => {
    resolveRef.current?.(discard);
    resolveRef.current = null;
  };

  const confirm = useModal({
    title: 'Discard changes?',
    size: 'sm',
    onClose: () => settle(false),
    children: (
      <Group justify="flex-end">
        <Button variant="default" onClick={() => confirm.close()}>
          Keep editing
        </Button>
        <Button
          color="red"
          onClick={() => {
            settle(true);
            confirm.close();
          }}
        >
          Discard
        </Button>
      </Group>
    ),
  });

  const closeModal = useModalCloseGuard(
    () =>
      !form.isDirty() ||
      new Promise<boolean>((resolve) => {
        resolveRef.current = resolve;
        confirm.open();
      })
  );

  return (
    <form onSubmit={form.onSubmit(onSave)}>
      <TextInput
        label="Title"
        placeholder="Title"
        data-autofocus
        {...form.getInputProps('title')}
      />
      <Textarea label="Text" placeholder="Text" mt="md" {...form.getInputProps('text')} />
      <Group justify="flex-end" mt="md">
        <Button variant="default" onClick={closeModal}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </Group>
    </form>
  );
}

function Demo() {
  const modal = useModal({
    title: 'Edit note',
    children: <NoteForm onSave={() => modal.close()} />,
  });

  return (
    <Group justify="center">
      <Button onClick={() => modal.open()}>Edit note</Button>
    </Group>
  );
}

export const closeGuard: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
  defaultExpanded: false,
};
