import type { GetInputPropsReturnType } from '@mantine/form';
import { fieldPath } from '../entry';
import type { ContentField, EntryFormType } from '../types';

export const labelProps = (field: ContentField) => ({
  label: field.label,
  description: field.description || undefined,
  withAsterisk: field.required,
});

// getInputProps returns data-path at runtime, its type does not declare it
export const customInputProps = (form: EntryFormType, field: ContentField) =>
  form.getInputProps(fieldPath(field)) as GetInputPropsReturnType & { 'data-path': string };
