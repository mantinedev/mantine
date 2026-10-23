import { Switch, Textarea, TextInput } from '@mantine/core';
import { FormSection } from './FormSection';
import type { RuleFormType } from './types';

export function RuleSection({ form }: { form: RuleFormType }) {
  return (
    <FormSection title="Rule" description="Name the rule so your team can find it later.">
      <TextInput
        label="Name"
        placeholder="Triage new bugs"
        withAsterisk
        {...form.getInputProps('name')}
      />
      <Switch
        label="Enabled"
        description="Disabled rules are saved but do not run"
        {...form.getInputProps('enabled', { type: 'checkbox' })}
      />
      <Textarea
        label="Description"
        placeholder="What the rule is for"
        autosize
        minRows={2}
        maxRows={6}
        {...form.getInputProps('description')}
      />
    </FormSection>
  );
}
