import type { ContentModelJson, ContentModelValues, FieldType, ModelField } from './types';

const noOptions = () => ({});

const FIELD_OPTIONS_JSON: { [T in FieldType]: (field: ModelField) => Record<string, unknown> } = {
  text: ({ text }) => ({
    display: text.display,
    maxLength: text.maxLength === '' ? null : Number(text.maxLength),
    defaultValue: text.defaultValue === '' ? null : text.defaultValue,
  }),
  rich_text: noOptions,
  boolean: (field) => ({ defaultValue: field.boolean.defaultValue === 'true' }),
  json: ({ json }) => ({
    defaultValue: json.defaultValue.trim() === '' ? null : JSON.parse(json.defaultValue),
  }),
  select: ({ select }) => ({
    options: select.options.map(({ value, label }) => ({
      value: value.trim(),
      label: label.trim(),
    })),
    defaultValue: select.defaultValue,
  }),
  image: noOptions,
  file: noOptions,
  reference: ({ reference }) => ({
    targetModel: reference.targetModel,
    allowMultiple: reference.multiple,
  }),
};

export function toModelJson(values: ContentModelValues): ContentModelJson {
  return {
    name: values.name.trim(),
    key: values.key,
    description: values.description.trim() || null,
    fields: values.fields.map((field) => ({
      key: field.key,
      label: field.label.trim(),
      type: field.type,
      description: field.description.trim() || null,
      required: field.required,
      options: FIELD_OPTIONS_JSON[field.type](field),
    })),
  };
}
