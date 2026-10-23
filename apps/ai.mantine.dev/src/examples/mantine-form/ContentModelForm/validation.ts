import { formRootRule, hasLength, isNotEmpty, when, type FormRulesRecord } from '@mantine/form';
import {
  MODEL_DESCRIPTION_MAX_LENGTH,
  MODEL_NAME_MAX_LENGTH,
  TEXT_MAX_LENGTH_LIMIT,
} from './constants';
import type { ContentModelValues, FieldType, ModelField, SelectOption } from './types';

const KEY_PATTERN = /^[a-z0-9_]+$/;

// JsonInput shows its own blur error in place of the form error: both use this message
export const JSON_ERROR = 'Default value must be valid JSON';

function keyRule(subject: string) {
  return (value: string) => {
    if (value.trim() === '') {
      return `${subject} is required`;
    }
    return KEY_PATTERN.test(value) ? null : 'Use lowercase letters, digits and underscores';
  };
}

function modelNameRule(value: string) {
  if (value.trim() === '') {
    return 'Model name is required';
  }
  return hasLength(
    { min: 2, max: MODEL_NAME_MAX_LENGTH },
    `Model name must be 2–${MODEL_NAME_MAX_LENGTH} characters`
  )(value);
}

export const MODEL_RULES: FormRulesRecord<ContentModelValues> = {
  name: modelNameRule,
  key: keyRule('Model key'),
  description: hasLength(
    { max: MODEL_DESCRIPTION_MAX_LENGTH },
    `Description must be ${MODEL_DESCRIPTION_MAX_LENGTH} characters or fewer`
  ),
  fields: {
    [formRootRule]: isNotEmpty('Add at least one field'),
  },
};

function textMaxLengthRule(value: number | string) {
  if (value === '') {
    return null;
  }
  const length = Number(value);
  return Number.isInteger(length) && length >= 1 && length <= TEXT_MAX_LENGTH_LIMIT
    ? null
    : 'Max length must be between 1 and 100,000';
}

function textDefaultValueRule(value: string, values: ModelField) {
  const { maxLength } = values.text;
  return typeof maxLength === 'number' && value.length > maxLength
    ? `Default value must be ${maxLength} characters or fewer`
    : null;
}

function jsonDefaultValueRule(value: string) {
  if (value.trim() === '') {
    return null;
  }
  try {
    JSON.parse(value);
    return null;
  } catch {
    return JSON_ERROR;
  }
}

function selectOptionsRule(options: SelectOption[]) {
  if (options.length < 2) {
    return 'Add at least two options';
  }
  const values = options.map((option) => option.value.trim()).filter(Boolean);
  return new Set(values).size === values.length ? null : 'Option values must be unique';
}

const isType = (type: FieldType) => (values: ModelField) => values.type === type;

export function fieldRules(takenKeys: string[]): FormRulesRecord<ModelField> {
  const fieldKeyRule = keyRule('Key');

  return {
    label: isNotEmpty('Label is required'),
    key: (value: string) =>
      fieldKeyRule(value) ??
      (takenKeys.includes(value) ? 'Another field already uses this key' : null),
    text: {
      maxLength: when(isType('text'), textMaxLengthRule),
      defaultValue: when(isType('text'), textDefaultValueRule),
    },
    json: {
      defaultValue: when(isType('json'), jsonDefaultValueRule),
    },
    select: {
      options: {
        value: when(isType('select'), isNotEmpty('Value is required')),
        label: when(isType('select'), isNotEmpty('Label is required')),
        [formRootRule]: when(isType('select'), selectOptionsRule),
      },
    },
    reference: {
      targetModel: when(isType('reference'), isNotEmpty('Target model is required')),
    },
  };
}
