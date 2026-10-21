import type { UseFormReturnType } from '@mantine/form';

export type ReferenceModel = 'author' | 'category' | 'page' | 'product';

interface FieldBase {
  key: string;
  label: string;
  description: string;
  required: boolean;
}

export interface TextModelField extends FieldBase {
  type: 'text';
  display: 'input' | 'textarea';
  maxLength: number | null;
  defaultValue: string;
}

export interface RichTextModelField extends FieldBase {
  type: 'richText';
}

export interface BooleanModelField extends FieldBase {
  type: 'boolean';
  defaultValue: boolean;
}

export interface JsonModelField extends FieldBase {
  type: 'json';
  defaultValue: string;
}

export interface SelectModelField extends FieldBase {
  type: 'select';
  options: { value: string; label: string }[];
  defaultValue: string | null;
}

export interface ImageModelField extends FieldBase {
  type: 'image';
}

export interface FileModelField extends FieldBase {
  type: 'file';
}

export interface ReferenceModelField extends FieldBase {
  type: 'reference';
  targetModel: ReferenceModel | null;
  allowMultiple: boolean;
}

export type ModelField =
  | TextModelField
  | RichTextModelField
  | BooleanModelField
  | JsonModelField
  | SelectModelField
  | ImageModelField
  | FileModelField
  | ReferenceModelField;

export type FieldType = ModelField['type'];

export interface ContentModel {
  name: string;
  key: string;
  description: string;
  fields: ModelField[];
}

export interface ReferenceEntry {
  key: string;
  title: string;
  model: ReferenceModel;
}

export type FieldValue = string | boolean | string[] | File | null;

export interface EntryValues {
  key: string;
  language: string | null;
  tags: string[];
  fields: Record<string, FieldValue>;
}

export type EntryFormType = UseFormReturnType<EntryValues>;

export interface FieldInputProps<Field extends ModelField> {
  form: EntryFormType;
  field: Field;
}

export interface FilePayload {
  name: string;
  size: number;
  type: string;
}

// JSON fields hold any parsed JSON value
export type EntryPayloadValue = string | boolean | string[] | FilePayload | null | object | number;

export interface EntryPayload {
  key: string;
  language: string | null;
  tags: string[];
  model: string;
  values: Record<string, EntryPayloadValue>;
}
