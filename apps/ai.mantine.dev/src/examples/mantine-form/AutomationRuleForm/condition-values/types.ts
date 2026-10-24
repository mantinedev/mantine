import type { FieldDefinition } from '../constants';
import type { RuleFormType } from '../types';

export interface ValueInputProps {
  form: RuleFormType;
  path: string;
  label: string;
  field: FieldDefinition;
}
