import type { UseFormReturnType } from '@mantine/form';

export type FieldType =
  | 'text'
  | 'richText'
  | 'boolean'
  | 'json'
  | 'select'
  | 'image'
  | 'file'
  | 'reference';

export interface SelectOption {
  id: string;
  value: string;
  label: string;
}

export interface FieldValues {
  type: FieldType;
  label: string;
  key: string;
  description: string;
  required: boolean;
  textDisplay: 'input' | 'textarea';
  maxLength: number | string;
  textDefault: string;
  booleanDefault: 'true' | 'false';
  jsonDefault: string;
  selectOptions: SelectOption[];
  selectDefault: string | null;
  referenceModel: string | null;
  allowMultiple: boolean;
}

export interface ContentField extends FieldValues {
  id: string;
}

export interface ContentModelValues {
  name: string;
  key: string;
  description: string;
  fields: ContentField[];
}

export type ContentModelFormType = UseFormReturnType<ContentModelValues>;
export type FieldFormType = UseFormReturnType<FieldValues>;
