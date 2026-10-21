import { useState } from 'react';
import { Button, Group, Stack } from '@mantine/core';
import {
  formRootRule,
  isInRange,
  isJSONString,
  isNotEmpty,
  useForm,
  when,
  type FormErrors,
} from '@mantine/form';
import { FieldOptionsForm } from './FieldOptionsForm';
import { FieldTypePicker } from './FieldTypePicker';
import type { ContentField, FieldType, FieldValues, SelectOption } from './types';
import { createFieldValues, KEY_ERROR, KEY_PATTERN } from './utils';

interface FieldEditorProps {
  field?: ContentField;
  existingKeys: string[];
  onSave: (values: FieldValues) => void;
  onCancel: () => void;
}

const isType = (type: FieldType) => (values: FieldValues) => values.type === type;

function validateSelectOptions(options: SelectOption[]) {
  if (options.length < 2) {
    return 'Add at least two options';
  }
  const values = options.map((option) => option.value).filter((value) => value.trim() !== '');
  return new Set(values).size === values.length ? null : 'Option values must be unique';
}

function toFieldValues({ id: _id, ...values }: ContentField): FieldValues {
  return values;
}

export function FieldEditor({ field, existingKeys, onSave, onCancel }: FieldEditorProps) {
  const isEditing = !!field;
  const [step, setStep] = useState<'type' | 'options'>(isEditing ? 'options' : 'type');

  const form = useForm<FieldValues>({
    name: 'content-field',
    initialValues: field ? toFieldValues(field) : createFieldValues('text'),
    validateInputOnBlur: ['label', 'key', 'maxLength', 'textDefault', 'jsonDefault'],
    validate: {
      label: isNotEmpty('Label is required'),
      key: (value) => {
        if (value === '') {
          return 'Key is required';
        }
        if (!KEY_PATTERN.test(value)) {
          return KEY_ERROR;
        }
        return existingKeys.includes(value) ? 'Another field already uses this key' : null;
      },
      maxLength: when(isType('text'), (value) =>
        value === ''
          ? null
          : isInRange({ min: 1, max: 100000 }, 'Enter a number from 1 to 100000')(value)
      ),
      textDefault: when(isType('text'), (value, values) =>
        typeof values.maxLength === 'number' && value.length > values.maxLength
          ? `Default value is longer than ${values.maxLength} characters`
          : null
      ),
      jsonDefault: when(isType('json'), (value) =>
        value.trim() === '' ? null : isJSONString('Enter valid JSON')(value)
      ),
      selectOptions: {
        [formRootRule]: when(isType('select'), validateSelectOptions),
        value: when(isType('select'), isNotEmpty('Value is required')),
        label: when(isType('select'), isNotEmpty('Label is required')),
      },
      selectDefault: when(isType('select'), (value, values) =>
        value && !values.selectOptions.some((option) => option.value === value)
          ? 'Pick one of the options'
          : null
      ),
      referenceModel: when(isType('reference'), isNotEmpty('Select a target model')),
    },
  });

  // Common options typed before going back to the type picker are kept
  const handlePickType = (type: FieldType) => {
    const { label, key, description, required } = form.getValues();
    form.setValues({ ...createFieldValues(type), label, key, description, required });
    setStep('options');
  };

  const handleErrors = (errors: FormErrors) => {
    form.getInputNode(Object.keys(errors)[0])?.focus();
  };

  if (step === 'type') {
    return (
      <Stack>
        <FieldTypePicker onPick={handlePickType} />
        <Group justify="flex-end">
          <Button variant="default" onClick={onCancel}>
            Cancel
          </Button>
        </Group>
      </Stack>
    );
  }

  return (
    <form onSubmit={form.onSubmit(onSave, handleErrors)} noValidate>
      <Stack>
        <FieldOptionsForm form={form} isEditing={isEditing} />

        <Group justify={isEditing ? 'flex-end' : 'space-between'}>
          {!isEditing && (
            <Button variant="default" onClick={() => setStep('type')}>
              Back
            </Button>
          )}
          <Group gap="sm">
            <Button variant="default" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" onMouseDown={(event) => event.preventDefault()}>
              Save
            </Button>
          </Group>
        </Group>
      </Stack>
    </form>
  );
}
