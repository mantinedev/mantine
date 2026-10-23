import { SimpleGrid, Stack, Text, Textarea, TextInput } from '@mantine/core';
import { MODEL_DESCRIPTION_MAX_LENGTH, MODEL_NAME_MAX_LENGTH } from './constants';
import type { ContentModelFormType } from './types';

export function ModelDetails({ form }: { form: ContentModelFormType }) {
  const description = form.useWatchValue('description');

  return (
    <Stack>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <TextInput
          label="Model name"
          placeholder="Blog post"
          withAsterisk
          maxLength={MODEL_NAME_MAX_LENGTH}
          data-autofocus
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Model key"
          placeholder="blog_post"
          withAsterisk
          {...form.getInputProps('key')}
        />
      </SimpleGrid>
      <Textarea
        label="Description"
        placeholder="What entries of this model are used for"
        autosize
        minRows={2}
        maxRows={6}
        maxLength={MODEL_DESCRIPTION_MAX_LENGTH}
        bottomSection={
          <Text
            size="xs"
            ta="right"
            c={description.length >= MODEL_DESCRIPTION_MAX_LENGTH ? 'red' : undefined}
          >
            {description.length}/{MODEL_DESCRIPTION_MAX_LENGTH}
          </Text>
        }
        {...form.getInputProps('description')}
      />
    </Stack>
  );
}
