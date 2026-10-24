import { useState } from 'react';
import { Button, Code, Fieldset, Group, Stack, Text, useModal } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { ActionList } from './ActionList/ActionList';
import { ConditionGroupEditor } from './ConditionGroupEditor/ConditionGroupEditor';
import { createInitialValues, FORM_NAME } from './constants';
import { eventLabel } from './describe';
import { focusFirstError } from './form-utils';
import { RuleFields } from './RuleFields';
import { RuleSummary } from './RuleSummary/RuleSummary';
import { TestRuleResults } from './TestRuleResults/TestRuleResults';
import type { RuleValues } from './types';
import { validateRule } from './validation';
import classes from './AutomationRuleForm.module.css';

export type RulePayload = RuleValues & { enabled: true };

interface AutomationRuleFormProps {
  onSubmit?: (rule: RulePayload) => void;
}

export function AutomationRuleForm({ onSubmit }: AutomationRuleFormProps) {
  const [submitted, setSubmitted] = useState<RulePayload | null>(null);
  const form = useForm<RuleValues>({
    name: FORM_NAME,
    initialValues: createInitialValues(),
    validate: validateRule,
  });

  form.watch('trigger.event', ({ value }) => {
    if (value !== 'status_changed') {
      form.setFieldValue('trigger.fromStatus', null);
      form.setFieldValue('trigger.toStatus', null);
    }
  });

  const testModal = useModal({ title: 'Test rule', size: 'lg' });

  const handleSubmit = (values: RuleValues) => {
    const rule: RulePayload = { ...values, enabled: true };
    notifications.show({
      title: 'Rule created',
      message: `${values.name} · ${eventLabel(values.trigger.event)}`,
    });
    setSubmitted(rule);
    onSubmit?.(rule);
  };

  return (
    <Stack gap="xl">
      <form onSubmit={form.onSubmit(handleSubmit, focusFirstError)} noValidate>
        <Stack gap="lg">
          <RuleFields form={form} />

          <Fieldset legend="Conditions" classNames={{ legend: classes.legend }}>
            <ConditionGroupEditor form={form} path="conditions" depth={0} />
          </Fieldset>

          <Fieldset legend="Actions" classNames={{ legend: classes.legend }}>
            <ActionList form={form} />
          </Fieldset>

          <RuleSummary form={form} />

          <Group justify="flex-end">
            <Button
              variant="default"
              onClick={() =>
                testModal.open({ children: <TestRuleResults values={form.getValues()} /> })
              }
            >
              Test rule
            </Button>
            <Button type="submit">Create rule</Button>
          </Group>
        </Stack>
      </form>

      {submitted && (
        <Stack gap="xs">
          <Text size="sm" className={classes.caption}>
            Submitted rule
          </Text>
          <Code block>{JSON.stringify(submitted, null, 2)}</Code>
        </Stack>
      )}
    </Stack>
  );
}
