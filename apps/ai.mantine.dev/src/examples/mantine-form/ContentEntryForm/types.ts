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

interface FieldBase {
  key: string;
  label: string;
  description: string;
  required: boolean;
}

export interface TextFieldSchema extends FieldBase {
  type: 'text';
  display: 'input' | 'textarea';
  maxLength: number | null;
  defaultValue: string;
}

export interface RichTextFieldSchema extends FieldBase {
  type: 'richText';
}

export interface BooleanFieldSchema extends FieldBase {
  type: 'boolean';
  defaultValue: boolean;
}

export interface JsonFieldSchema extends FieldBase {
  type: 'json';
  defaultValue: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectFieldSchema extends FieldBase {
  type: 'select';
  options: SelectOption[];
  defaultValue: string | null;
}

export interface ImageFieldSchema extends FieldBase {
  type: 'image';
}

export interface FileFieldSchema extends FieldBase {
  type: 'file';
}

export interface ReferenceFieldSchema extends FieldBase {
  type: 'reference';
  targetModel: ReferenceModel | null;
  multiple: boolean;
}

export type ContentField =
  | TextFieldSchema
  | RichTextFieldSchema
  | BooleanFieldSchema
  | JsonFieldSchema
  | SelectFieldSchema
  | ImageFieldSchema
  | FileFieldSchema
  | ReferenceFieldSchema;

export type FieldOfType<T extends FieldType> = Extract<ContentField, { type: T }>;

export interface ContentModel {
  name: string;
  key: string;
  fields: ContentField[];
}

export type ReferenceModel = 'author' | 'category' | 'page' | 'product';

export interface ReferenceEntry {
  key: string;
  title: string;
  model: ReferenceModel;
}

export type FieldValue = string | boolean | string[] | File | null;

export interface EntryValues {
  key: string;
  language: string;
  tags: string[];
  values: Record<string, FieldValue>;
}

export type EntryFormType = UseFormReturnType<EntryValues>;

export interface FileSummary {
  name: string;
  size: number;
  type: string;
}

export interface ContentEntry {
  key: string;
  language: string;
  tags: string[];
  model: string;
  values: Record<string, unknown>;
}

export interface FieldInputProps<T extends FieldType> {
  form: EntryFormType;
  field: FieldOfType<T>;
}
