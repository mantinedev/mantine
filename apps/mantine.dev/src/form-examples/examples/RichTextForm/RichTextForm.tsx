import { Button, Group, Stack, TextInput } from '@mantine/core';
import { isNotEmpty, isNotEmptyHTML, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { ContentEditor } from './ContentEditor';

interface Values {
  title: string;
  content: string;
}

export function RichTextForm() {
  const form = useForm<Values>({
    initialValues: {
      title: '',
      content: '',
    },
    validate: {
      title: isNotEmpty('Title is required'),
      content: isNotEmptyHTML('Article content is required'),
    },
  });

  const handleSubmit = (values: Values) => {
    notifications.show({
      title: 'Article published',
      message: `Article ${values.title} published`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          label="Title"
          placeholder="How to build forms with Mantine"
          withAsterisk
          {...form.getInputProps('title')}
        />

        <ContentEditor label="Content" withAsterisk {...form.getInputProps('content')} />

        <Group justify="flex-end">
          <Button variant="default" onClick={form.reset}>
            Reset
          </Button>

          <Button type="submit">Publish</Button>
        </Group>
      </Stack>
    </form>
  );
}
