import type { FieldKey, RuleFormType } from '../types';

export interface ValueInputProps {
  form: RuleFormType;
  /** Path of the condition, `root.groups.0.conditions.1` */
  path: string;
  field: FieldKey;
}
