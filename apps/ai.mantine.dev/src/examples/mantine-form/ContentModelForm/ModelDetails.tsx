import { SimpleGrid, Stack, Text, Textarea, TextInput } from '@mantine/core';
import type { ContentModelFormType } from './types';
import { useGeneratedKey } from './useGeneratedKey';

const DESCRIPTION_LIMIT = 200;

export function ModelDetails({ form }: { form: ContentModelFormType }) {
  const keyProps = useGeneratedKey(form, 'name', 'key');
  const description = form.useWatchValue('description');

  return (
    <Stack>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <TextInput
          label="Model name"
          placeholder="Blog post"
          withAsterisk
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Model key"
          placeholder="blog_post"
          withAsterisk
          description="Lowercase letters, digits and underscores"
          {...keyProps}
        />
      </SimpleGrid>

      <Textarea
        label="Description"
        placeholder="What entries of this model contain"
        autosize
        minRows={2}
        maxRows={6}
        maxLength={DESCRIPTION_LIMIT}
        bottomSection={
          <Text
            size="xs"
            ta="right"
            c={description.length >= DESCRIPTION_LIMIT ? 'red' : undefined}
          >
            {description.length}/{DESCRIPTION_LIMIT}
          </Text>
        }
        {...form.getInputProps('description')}
      />
    </Stack>
  );
}
