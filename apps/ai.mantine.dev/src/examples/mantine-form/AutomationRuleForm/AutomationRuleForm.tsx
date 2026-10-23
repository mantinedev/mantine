import { useState } from 'react';
import { Button, Group, Stack, Title, useModal } from '@mantine/core';
import { useForm, type FormErrors } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { ActionsSection } from './ActionsSection';
import { createAction, createCondition } from './conditions';
import { ConditionsSection } from './ConditionsSection';
import { FORM_NAME, getOptionLabel, TRIGGER_EVENTS } from './constants';
import { toRulePayload } from './payload';
import { RuleSection } from './RuleSection';
import { RuleSummary } from './RuleSummary';
import { SubmittedRule } from './SubmittedRule';
import { TestRuleResults } from './TestRuleResults';
import { TriggerSection } from './TriggerSection';
import type { RulePayload, RuleValues } from './types';
import { validateRule } from './validation';

function createInitialValues(): RuleValues {
  return {
    name: '',
    description: '',
    enabled: true,
    trigger: { event: null, fromStatus: null, toStatus: null },
    root: { id: 'root', combinator: 'and', conditions: [createCondition()], groups: [] },
    actions: [createAction()],
  };
}

// Select, MultiSelect and the masked date input put data-path on a wrapper or a hidden input
function focusNode(node: HTMLElement | null) {
  const target = node?.matches('input:not([type="hidden"]), textarea, button')
    ? node
    : node?.querySelector<HTMLElement>('input:not([type="hidden"]), textarea, button');
  target?.focus();
}

interface AutomationRuleFormProps {
  onSubmit?: (rule: RulePayload) => void;
}

export function AutomationRuleForm({ onSubmit }: AutomationRuleFormProps) {
  const [submitted, setSubmitted] = useState<RulePayload | null>(null);
  const form = useForm<RuleValues>({
    name: FORM_NAME,
    initialValues: createInitialValues(),
    validateInputOnBlur: ['name'],
    validate: validateRule,
  });

  const testModal = useModal({ title: 'Test rule', size: 'lg' });

  const handleSubmit = (values: RuleValues) => {
    const rule = toRulePayload(values);
    notifications.show({
      title: 'Rule created',
      message: `${rule.name} · ${getOptionLabel(TRIGGER_EVENTS, rule.trigger.event)}`,
    });
    setSubmitted(rule);
    onSubmit?.(rule);
  };

  const handleErrors = (errors: FormErrors) => {
    focusNode(form.getInputNode(Object.keys(errors)[0]));
  };

  return (
    <Stack gap="xl">
      <form onSubmit={form.onSubmit(handleSubmit, handleErrors)} noValidate>
        <Stack gap="xl">
          <Title order={2} c="var(--mantine-color-bright)">
            New automation rule
          </Title>
          <RuleSection form={form} />
          <TriggerSection form={form} />
          <ConditionsSection form={form} />
          <ActionsSection form={form} />
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
            {/* preventDefault keeps focus in the name input so its blur error does not move the button */}
            <Button type="submit" onMouseDown={(event) => event.preventDefault()}>
              Create rule
            </Button>
          </Group>
        </Stack>
      </form>
      {submitted && <SubmittedRule rule={submitted} />}
    </Stack>
  );
}
