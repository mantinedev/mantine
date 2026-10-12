import { Button, Group, Stack, TextInput } from '@mantine/core';
import { FormErrors, isNotEmpty, isNotEmptyHTML, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { ContentEditor } from './ContentEditor';

interface ArticleValues {
  title: string;
  content: string;
}

export function RichTextForm() {
  const form = useForm<ArticleValues>({
    initialValues: {
      title: '',
      content: '',
    },
    validate: {
      title: isNotEmpty('Title is required'),
      content: isNotEmptyHTML('Article content is required'),
    },
  });

  const handleSubmit = (values: ArticleValues) => {
    notifications.show({
      title: 'Article published',
      message: `Article ${values.title} published`,
    });
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
          placeholder="How to build forms with Mantine"
          withAsterisk
          {...form.getInputProps('title')}
        />

        <ContentEditor
          label="Content"
          placeholder="Write your article"
          withAsterisk
          {...form.getInputProps('content')}
        />

        <Group justify="flex-end">
          <Button size="md" variant="default" onClick={form.reset}>
            Reset
          </Button>

          <Button size="md" type="submit">
            Publish
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
