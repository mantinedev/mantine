import { Select, SimpleGrid, Stack, Text, Textarea, TextInput } from '@mantine/core';
import { BIO_MAX_LENGTH, LANGUAGES, TIMEZONES } from './constants';
import type { ProfileFormType } from './types';

export function ProfileSection({ form }: { form: ProfileFormType }) {
  const bio = form.useWatchValue('bio');

  return (
    <Stack>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <TextInput
          label="Full name"
          placeholder="Full name"
          withAsterisk
          {...form.getInputProps('fullName')}
        />
        <TextInput
          label="Display name"
          placeholder="Display name"
          {...form.getInputProps('displayName')}
        />
      </SimpleGrid>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <TextInput
          label="Email"
          placeholder="you@example.com"
          type="email"
          withAsterisk
          {...form.getInputProps('email')}
        />
        <TextInput label="Job title" placeholder="Job title" {...form.getInputProps('jobTitle')} />
      </SimpleGrid>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <Select
          label="Language"
          placeholder="Language"
          data={LANGUAGES}
          allowDeselect={false}
          {...form.getInputProps('language')}
        />
        <Select
          label="Timezone"
          placeholder="Timezone"
          data={TIMEZONES}
          allowDeselect={false}
          {...form.getInputProps('timezone')}
        />
      </SimpleGrid>
      <Textarea
        label="Bio"
        placeholder="A few words about yourself"
        autosize
        minRows={3}
        maxRows={6}
        maxLength={BIO_MAX_LENGTH}
        bottomSection={
          <Text size="xs" ta="right" c={bio.length >= BIO_MAX_LENGTH ? 'red' : undefined}>
            {bio.length}/{BIO_MAX_LENGTH}
          </Text>
        }
        {...form.getInputProps('bio')}
      />
    </Stack>
  );
}
