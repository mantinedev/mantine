import type { UseFormReturnType } from '@mantine/form';

export type FieldType =
  | 'text'
  | 'rich_text'
  | 'boolean'
  | 'json'
  | 'select'
  | 'image'
  | 'file'
  | 'reference';

export type TextDisplay = 'input' | 'textarea';

export interface SelectOption {
  id: string;
  value: string;
  label: string;
}

export interface TextSettings {
  display: TextDisplay;
  maxLength: number | string;
  defaultValue: string;
}

export interface BooleanSettings {
  defaultValue: 'true' | 'false';
}

export interface JsonSettings {
  defaultValue: string;
}

export interface SelectSettings {
  options: SelectOption[];
  defaultValue: string | null;
}

export interface ReferenceSettings {
  targetModel: string | null;
  multiple: boolean;
}

// Every field keeps the settings of all types: switching the type in the editor
// is not possible, and the JSON output picks only the settings of the field type
export interface ModelField {
  id: string;
  type: FieldType;
  label: string;
  key: string;
  description: string;
  required: boolean;
  text: TextSettings;
  boolean: BooleanSettings;
  json: JsonSettings;
  select: SelectSettings;
  reference: ReferenceSettings;
}

export type FieldEditorFormType = UseFormReturnType<ModelField>;

export interface ContentModelValues {
  name: string;
  key: string;
  description: string;
  fields: ModelField[];
}

export type ContentModelFormType = UseFormReturnType<ContentModelValues>;

export interface FieldJson {
  key: string;
  label: string;
  type: FieldType;
  description: string | null;
  required: boolean;
  options: Record<string, unknown>;
}

export interface ContentModelJson {
  name: string;
  key: string;
  description: string | null;
  fields: FieldJson[];
}
