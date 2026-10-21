import { RichTextInput } from '../inputs/RichTextInput';
import type { FieldInputProps, RichTextModelField } from '../types';

export function RichTextField({ form, field }: FieldInputProps<RichTextModelField>) {
  return (
    <RichTextInput
      label={field.label}
      description={field.description || undefined}
      placeholder={field.label}
      withAsterisk={field.required}
      {...form.getInputProps(`fields.${field.key}`)}
    />
  );
}
