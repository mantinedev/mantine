import type { ComponentType } from 'react';
import type { ContentField, EntryFormType, FieldInputProps, FieldType } from '../types';
import { BooleanField } from './BooleanField';
import { FileField } from './FileField/FileField';
import { ImageField } from './ImageField/ImageField';
import { JsonField } from './JsonField';
import { ReferenceField } from './ReferenceField/ReferenceField';
import { RichTextField } from './RichTextField/RichTextField';
import { SelectField } from './SelectField';
import { TextField } from './TextField';

const FIELD_INPUTS: { [T in FieldType]: ComponentType<FieldInputProps<T>> } = {
  text: TextField,
  richText: RichTextField,
  boolean: BooleanField,
  json: JsonField,
  select: SelectField,
  image: ImageField,
  file: FileField,
  reference: ReferenceField,
};

export function ModelField({ form, field }: { form: EntryFormType; field: ContentField }) {
  const FieldInput = FIELD_INPUTS[field.type] as ComponentType<{
    form: EntryFormType;
    field: ContentField;
  }>;
  return <FieldInput form={form} field={field} />;
}
