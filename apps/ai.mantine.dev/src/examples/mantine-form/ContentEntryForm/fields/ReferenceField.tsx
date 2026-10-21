import { ReferenceInput } from '../inputs/ReferenceInput';
import type { FieldInputProps, ReferenceModelField } from '../types';

export function ReferenceField({ form, field }: FieldInputProps<ReferenceModelField>) {
  return (
    <ReferenceInput
      label={field.label}
      description={field.description || undefined}
      withAsterisk={field.required}
      targetModel={field.targetModel}
      multiple={field.allowMultiple}
      {...form.getInputProps(`fields.${field.key}`, { withFocus: false })}
    />
  );
}
