import { useState } from 'react';
import { Button, Group, Stack, TextInput } from '@mantine/core';
import { formRootRule, isNotEmpty, useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { TasksList } from './TasksList';
import { TasksValues } from './types';

export function ReorderListItems() {
  const [draft, setDraft] = useState('');

  const form = useForm<TasksValues>({
    initialValues: {
      items: [
        { key: randomId(), title: 'Write release notes' },
        { key: randomId(), title: 'Review pull requests' },
        { key: randomId(), title: 'Update dependencies' },
        { key: randomId(), title: 'Publish the release' },
      ],
    },
    validate: {
      items: {
        [formRootRule]: isNotEmpty('Add at least one task'),
        title: isNotEmpty('Task title is required'),
      },
    },
  });

  const addItem = () => {
    const title = draft.trim();
    if (title.length > 0) {
      form.insertListItem('items', { key: randomId(), title });
      setDraft('');
    }
  };

  const handleSubmit = (values: TasksValues) => {
    notifications.show({
      title: 'Tasks saved',
      message: `${values.items.length} tasks saved`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <Group gap="xs" wrap="nowrap" align="flex-end">
          <TextInput
            label="New task"
            placeholder="Buy milk"
            style={{ flex: 1 }}
            value={draft}
            onChange={(event) => setDraft(event.currentTarget.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                addItem();
              }
            }}
          />

          <Button variant="default" onClick={addItem}>
            Add
          </Button>
        </Group>

        <TasksList form={form} />

        <Group justify="flex-end">
          <Button type="submit">Save order</Button>
        </Group>
      </Stack>
    </form>
  );
}
