import { Select, SimpleGrid, TagsInput, TextInput } from '@mantine/core';
import type { EntryFormType } from './types';
import { LANGUAGES, MAX_TAGS, SUGGESTED_TAGS } from './validation';

export function EntryDetails({ form }: { form: EntryFormType }) {
  return (
    <>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <TextInput
          label="Content key"
          placeholder="my-entry-key"
          withAsterisk
          {...form.getInputProps('key')}
        />
        <Select
          label="Language"
          placeholder="Language"
          withAsterisk
          data={LANGUAGES}
          allowDeselect={false}
          {...form.getInputProps('language')}
        />
      </SimpleGrid>
      <TagsInput
        label="Tags"
        description={`Pick a suggestion or type your own, up to ${MAX_TAGS}`}
        placeholder="Add a tag"
        data={SUGGESTED_TAGS}
        maxTags={MAX_TAGS}
        clearable
        {...form.getInputProps('tags')}
      />
    </>
  );
}
