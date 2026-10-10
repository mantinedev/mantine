import { Button, Group, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

interface PageValues {
  name: string;
  slug: string;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export function GeneratedSlug() {
  const form = useForm<PageValues>({
    mode: 'uncontrolled',
    // Only focus marks the slug as touched, setFieldValue does not
    touchTrigger: 'focus',
    initialValues: { name: '', slug: '' },
    validate: {
      name: (value) => (value.trim().length === 0 ? 'Name is required' : null),
      slug: (value) => (/^[a-z0-9-]+$/.test(value) ? null : 'Slug can contain only a-z, 0-9 and -'),
    },
  });

  form.watch('name', ({ value }) => {
    if (!form.isTouched('slug')) {
      // forceUpdate: false updates the slug input without rerendering the form
      form.setFieldValue('slug', slugify(value), { forceUpdate: false });
    }
  });

  const handleSubmit = (values: PageValues) => {
    notifications.show({ title: 'Page created', message: `Page ${values.slug} created` });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          label="Name"
          placeholder="My first post"
          withAsterisk
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Slug"
          placeholder="my-first-post"
          description="Generated from name until you edit it"
          withAsterisk
          {...form.getInputProps('slug')}
        />
        <Group justify="flex-end">
          <Button variant="default" onClick={form.reset}>
            Reset
          </Button>
          <Button type="submit">Create page</Button>
        </Group>
      </Stack>
    </form>
  );
}
