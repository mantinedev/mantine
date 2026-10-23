import { useId } from 'react';
import { Input, Surface, Text } from '@mantine/core';
import { describeRule } from './describe';
import type { RuleFormType } from './types';

export function RuleSummary({ form }: { form: RuleFormType }) {
  const trigger = form.useWatchValue('trigger');
  const root = form.useWatchValue('root');
  const actions = form.useWatchValue('actions');
  const summary = describeRule({ trigger, root, actions });
  const titleId = useId();

  return (
    <Surface component="section" aria-labelledby={titleId} withBorder p="md">
      <Input.Label id={titleId} labelElement="div">
        Summary
      </Input.Label>
      <Text size="sm" c={summary ? 'var(--mantine-color-bright)' : undefined}>
        {summary ?? 'Pick an event to see what the rule does'}
      </Text>
    </Surface>
  );
}
