import type { EntryFormType, FieldInputProps, FieldType, ModelField } from '../types';
import { BooleanField } from './BooleanField';
import { FileField } from './FileField';
import { ImageField } from './ImageField';
import { JsonField } from './JsonField';
import { ReferenceField } from './ReferenceField';
import { RichTextField } from './RichTextField';
import { SelectField } from './SelectField';
import { TextField } from './TextField';

type FieldComponent<Type extends FieldType> = (
  props: FieldInputProps<Extract<ModelField, { type: Type }>>
) => React.JSX.Element;

const FIELD_INPUTS: { [Type in FieldType]: FieldComponent<Type> } = {
  text: TextField,
  richText: RichTextField,
  boolean: BooleanField,
  json: JsonField,
  select: SelectField,
  image: ImageField,
  file: FileField,
  reference: ReferenceField,
};

export function ModelFieldInput({ form, field }: { form: EntryFormType; field: ModelField }) {
  const FieldInput = FIELD_INPUTS[field.type] as FieldComponent<FieldType>;
  return <FieldInput form={form} field={field} />;
}
