import { FileDropzoneInput } from '../inputs/FileDropzoneInput';
import type { FieldInputProps, FileModelField } from '../types';

export function FileField({ form, field }: FieldInputProps<FileModelField>) {
  return (
    <FileDropzoneInput
      kind="file"
      label={field.label}
      description={field.description || undefined}
      withAsterisk={field.required}
      title="Drag a file here or click to select"
      hint="One file of any type"
      rejectMessage="This file cannot be attached"
      {...form.getInputProps(`fields.${field.key}`, { withFocus: false })}
    />
  );
}
