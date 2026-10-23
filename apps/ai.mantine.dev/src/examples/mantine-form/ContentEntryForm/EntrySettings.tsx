import { Select, SimpleGrid, TagsInput, TextInput } from '@mantine/core';
import { LANGUAGES, MAX_TAGS, SUGGESTED_TAGS } from './data';
import type { EntryFormType } from './types';

export function EntrySettings({ form }: { form: EntryFormType }) {
  return (
    <>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <TextInput
          label="Content key"
          placeholder="hello-world"
          withAsterisk
          {...form.getInputProps('key')}
        />
        <Select
          label="Language"
          placeholder="Language"
          data={LANGUAGES}
          allowDeselect={false}
          withAsterisk
          {...form.getInputProps('language')}
        />
      </SimpleGrid>
      <TagsInput
        label="Tags"
        description={`Pick a suggestion or type your own, up to ${MAX_TAGS}`}
        placeholder="Add tags"
        data={SUGGESTED_TAGS}
        maxTags={MAX_TAGS}
        clearable
        {...form.getInputProps('tags')}
      />
    </>
  );
}
