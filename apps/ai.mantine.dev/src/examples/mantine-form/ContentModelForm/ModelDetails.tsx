import { Text, Textarea, TextInput } from '@mantine/core';
import type { ContentModelFormType } from './types';
import classes from './ContentModelForm.module.css';

export const DESCRIPTION_MAX_LENGTH = 200;

export function ModelDetails({ form }: { form: ContentModelFormType }) {
  const description = form.useWatchValue('description');

  return (
    <>
      <TextInput
        label="Model name"
        placeholder="Blog post"
        withAsterisk
        {...form.getInputProps('name')}
      />
      <TextInput
        label="Model key"
        placeholder="blog_post"
        description="Lowercase letters, digits and underscores"
        withAsterisk
        classNames={{ input: classes.monospace }}
        {...form.getInputProps('key')}
      />
      <Textarea
        label="Description"
        placeholder="What entries of this model contain"
        autosize
        minRows={2}
        maxRows={6}
        maxLength={DESCRIPTION_MAX_LENGTH}
        bottomSection={
          <Text
            size="xs"
            ta="right"
            c={description.length >= DESCRIPTION_MAX_LENGTH ? 'red' : undefined}
          >
            {description.length}/{DESCRIPTION_MAX_LENGTH}
          </Text>
        }
        {...form.getInputProps('description')}
      />
    </>
  );
}
