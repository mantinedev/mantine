import { Button, Group, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

interface PageValues {
  name: string;
  slug: string;
}

function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function GeneratedSlug() {
  const form = useForm<PageValues>({
    // Only focus marks the slug as touched, setFieldValue does not
    touchTrigger: 'focus',
    initialValues: {
      name: '',
      slug: '',
    },
    validate: {
      name: (value) => (value.trim().length === 0 ? 'Name is required' : null),
      slug: (value) =>
        /^[a-z0-9]+(-[a-z0-9]+)*$/.test(value)
          ? null
          : 'Slug can contain only a-z, 0-9 and single hyphens between words',
    },
  });

  // setFieldValue rerenders the component that calls useForm,
  // forceUpdate: false updates only the input subscribed to the slug field
  form.watch('name', ({ value }) => {
    if (!form.isTouched('slug')) {
      form.setFieldValue('slug', slugify(value), { forceUpdate: false });
    }
  });

  const slugProps = form.getInputProps('slug');

  const handleSlugBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    form.setFieldValue('slug', slugify(event.currentTarget.value), { forceUpdate: false });
    slugProps.onBlur?.(event);
  };

  const handleSubmit = (values: PageValues) => {
    notifications.show({
      title: 'Page created',
      message: `Page ${values.slug} created`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack maw={420} mx="auto">
        <TextInput
          size="md"
          label="Name"
          placeholder="My first post"
          withAsterisk
          {...form.getInputProps('name')}
        />

        <TextInput
          size="md"
          label="Slug"
          placeholder="my-first-post"
          description="Generated from name until you edit it"
          withAsterisk
          {...slugProps}
          onBlur={handleSlugBlur}
        />

        <Group justify="flex-end">
          <Button size="md" variant="default" onClick={form.reset}>
            Reset
          </Button>

          <Button size="md" type="submit">
            Create page
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
