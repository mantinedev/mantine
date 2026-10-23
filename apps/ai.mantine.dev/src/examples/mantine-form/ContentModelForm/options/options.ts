import type { ComponentType, RefObject } from 'react';
import type { FieldEditorFormType, FieldType } from '../types';
import { BooleanOptions } from './BooleanOptions';
import { JsonOptions } from './JsonOptions';
import { ReferenceOptions } from './ReferenceOptions';
import { SelectOptions } from './SelectOptions';
import { TextOptions } from './TextOptions';

export interface OptionsProps {
  form: FieldEditorFormType;
  // Receives the "Add option" button, focused when the options list itself is invalid
  listActionRef: RefObject<HTMLButtonElement | null>;
}

export const FIELD_OPTIONS: { [T in FieldType]: ComponentType<OptionsProps> | null } = {
  text: TextOptions,
  rich_text: null,
  boolean: BooleanOptions,
  json: JsonOptions,
  select: SelectOptions,
  image: null,
  file: null,
  reference: ReferenceOptions,
};
