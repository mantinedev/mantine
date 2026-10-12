import {
  Button,
  Chip,
  Group,
  Input,
  MultiSelect,
  Stack,
  TagsInput,
  TextInput,
} from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { useId } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { CATEGORIES, COLLABORATORS, SUGGESTED_TAGS } from './data';

interface PostValues {
  title: string;
  tags: string[];
  categories: string[];
  collaborators: string[];
}

export function TagsAndKeywords() {
  const categoriesId = useId();
  const form = useForm<PostValues>({
    initialValues: {
      title: '',
      tags: ['react'],
      categories: [],
      collaborators: [],
    },
    validate: {
      title: isNotEmpty('Title is required'),
      tags: (value) => (value.length > 5 ? 'Use at most 5 tags' : null),
      categories: isNotEmpty('Select at least one category'),
    },
  });

  const handleSubmit = (values: PostValues) => {
    notifications.show({
      title: 'Post published',
      message: `${values.title} published in ${values.categories.join(', ')} with ${values.tags.length} ${values.tags.length === 1 ? 'tag' : 'tags'}`,
    });
  };

  const categoryChips = CATEGORIES.map((category) => (
    <Chip key={category} value={category} size="md">
      {category}
    </Chip>
  ));

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          size="md"
          label="Title"
          placeholder="Building forms with Mantine"
          withAsterisk
          {...form.getInputProps('title')}
        />

        <TagsInput
          size="md"
          label="Tags"
          placeholder="Press Enter to add a tag"
          description="Up to 5 tags"
          data={SUGGESTED_TAGS}
          splitChars={[',', ' ']}
          {...form.getInputProps('tags')}
        />

        <Input.Wrapper
          id={categoriesId}
          size="md"
          label="Categories"
          labelElement="div"
          withAsterisk
          error={form.errors.categories}
        >
          <Chip.Group multiple {...form.getInputProps('categories')}>
            <Group role="group" aria-labelledby={`${categoriesId}-label`} gap="xs" mt={4} mb={4}>
              {categoryChips}
            </Group>
          </Chip.Group>
        </Input.Wrapper>

        <MultiSelect
          size="md"
          label="Collaborators"
          placeholder="Pick people"
          data={COLLABORATORS}
          clearable
          {...form.getInputProps('collaborators')}
        />

        <Group justify="flex-end">
          <Button size="md" type="submit">
            Publish post
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
