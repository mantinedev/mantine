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

// One shape for every field type: options of other types are kept but left out of the payload
export interface FieldValues {
  id: string;
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
  options: SelectOption[];
  defaultOption: string | null;
  targetModel: string | null;
  allowMultiple: boolean;
}

export type FieldFormType = UseFormReturnType<FieldValues>;

export interface ContentModelValues {
  name: string;
  key: string;
  description: string;
  fields: FieldValues[];
}

interface BaseFieldPayload {
  label: string;
  key: string;
  description: string;
  required: boolean;
}

export type FieldPayload = BaseFieldPayload &
  (
    | {
        type: 'text';
        display: 'input' | 'textarea';
        maxLength: number | null;
        defaultValue: string;
      }
    | { type: 'boolean'; defaultValue: boolean }
    | { type: 'json'; defaultValue: unknown }
    | {
        type: 'select';
        options: { value: string; label: string }[];
        defaultValue: string | null;
      }
    | { type: 'reference'; targetModel: string; allowMultiple: boolean }
    | { type: 'richText' | 'image' | 'file' }
  );

export interface ContentModelPayload {
  name: string;
  key: string;
  description: string;
  fields: FieldPayload[];
}

export type ContentModelFormType = UseFormReturnType<ContentModelValues, ContentModelPayload>;
