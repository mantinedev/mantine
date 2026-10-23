import { Code, Input } from '@mantine/core';
import type { RulePayload } from './types';

export function SubmittedRule({ rule }: { rule: RulePayload }) {
  return (
    <section aria-label="Submitted rule">
      <Input.Label labelElement="div" mb="xs">
        Submitted rule
      </Input.Label>
      <Code block>{JSON.stringify(rule, null, 2)}</Code>
    </section>
  );
}
