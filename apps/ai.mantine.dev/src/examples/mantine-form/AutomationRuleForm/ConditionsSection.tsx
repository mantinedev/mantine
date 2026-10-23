import { ConditionGroup } from './ConditionGroup/ConditionGroup';
import { FormSection } from './FormSection';
import type { RuleFormType } from './types';

export function ConditionsSection({ form }: { form: RuleFormType }) {
  return (
    <FormSection title="If" description="The rule runs only for issues that match the conditions.">
      <ConditionGroup form={form} path="root" depth={0} label="Conditions" />
    </FormSection>
  );
}
