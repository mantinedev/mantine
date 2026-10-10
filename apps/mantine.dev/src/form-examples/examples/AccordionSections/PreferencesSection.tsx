import { Select, Stack, Switch } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { OnboardingValues } from './types';

interface PreferencesSectionProps {
  form: UseFormReturnType<OnboardingValues>;
}

export function PreferencesSection({ form }: PreferencesSectionProps) {
  return (
    <Stack>
      <Select
        size="md"
        label="Language"
        placeholder="Pick language"
        withAsterisk
        data={['English', 'German', 'Spanish', 'French']}
        {...form.getInputProps('preferences.language')}
      />

      <Switch
        size="md"
        label="Subscribe to newsletter"
        {...form.getInputProps('preferences.newsletter', { type: 'checkbox' })}
      />
    </Stack>
  );
}
