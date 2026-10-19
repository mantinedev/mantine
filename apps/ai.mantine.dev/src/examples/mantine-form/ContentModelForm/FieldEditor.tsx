import { useRef, useState } from 'react';
import { Button, Group, Stack } from '@mantine/core';
import {
  FORM_INDEX,
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
import type { FieldType, FieldValues } from './types';
import { createField, KEY_PATTERN, slugify } from './utils';

interface FieldEditorProps {
  field: FieldValues | null;
  usedKeys: string[];
  onSave: (field: FieldValues) => void;
  onCancel: () => void;
}

const isType = (type: FieldType) => (values: FieldValues) => values.type === type;

export function FieldEditor({ field, usedKeys, onSave, onCancel }: FieldEditorProps) {
  const [step, setStep] = useState<'type' | 'options'>(field ? 'options' : 'type');
  const addOptionRef = useRef<HTMLButtonElement>(null);

  const form = useForm<FieldValues>({
    name: 'content-model-field',
    initialValues: field ?? createField('text'),
    validateInputOnBlur: [
      'label',
      'key',
      'maxLength',
      'textDefault',
      'jsonDefault',
      `options.${FORM_INDEX}.value`,
    ],
    validate: {
      label: isNotEmpty('Label is required'),
      key: (value) => {
        if (value === '') {
          return 'Key is required';
        }
        if (!KEY_PATTERN.test(value)) {
          return 'Use lowercase letters, digits and underscores';
        }
        return usedKeys.includes(value) ? 'Another field already uses this key' : null;
      },
      maxLength: when(
        (values) => values.type === 'text' && values.maxLength !== '',
        isInRange({ min: 1, max: 100_000 }, 'Max length must be between 1 and 100,000')
      ),
      textDefault: when(isType('text'), (value, values) =>
        typeof values.maxLength === 'number' && value.length > values.maxLength
          ? 'Default value is longer than the max length'
          : null
      ),
      jsonDefault: when(
        (values) => values.type === 'json' && values.jsonDefault.trim() !== '',
        isJSONString('Invalid JSON')
      ),
      options: {
        [formRootRule]: when(isType('select'), (options) =>
          options.length < 2 ? 'Add at least two options' : null
        ),
        value: when(isType('select'), (value, values, path) => {
          if (value.trim() === '') {
            return 'Value is required';
          }
          const index = Number(path.split('.')[1]);
          const duplicate = values.options.some(
            (option, optionIndex) => optionIndex !== index && option.value.trim() === value.trim()
          );
          return duplicate ? 'Values must be unique' : null;
        }),
        label: when(isType('select'), isNotEmpty('Label is required')),
      },
      targetModel: when(isType('reference'), isNotEmpty('Select a target model')),
    },
  });

  // The key follows the label while it still matches the slug of the previous label
  form.watch('label', ({ value, previousValue }) => {
    if (form.getValues().key === slugify(previousValue)) {
      form.setFieldValue('key', slugify(value), { forceUpdate: false });
    }
  });

  form.watch('options', ({ value }) => {
    const { defaultOption } = form.getValues();
    if (defaultOption !== null && !value.some((option) => option.value === defaultOption)) {
      form.setFieldValue('defaultOption', null);
    }
    if (form.errors.options) {
      form.validateField('options');
    }
  });

  const handlePickType = (type: FieldType) => {
    form.setFieldValue('type', type);
    form.clearErrors();
    setStep('options');
  };

  const handleErrors = (errors: FormErrors) => {
    const firstPath = Object.keys(errors)[0];
    if (firstPath === 'options') {
      addOptionRef.current?.focus();
    } else {
      form.getInputNode(firstPath)?.focus();
    }
  };

  if (step === 'type') {
    return <FieldTypePicker onPick={handlePickType} />;
  }

  return (
    <form onSubmit={form.onSubmit(onSave, handleErrors)}>
      <Stack>
        <FieldOptionsForm form={form} addOptionRef={addOptionRef} />
        <Group justify={field ? 'flex-end' : 'space-between'} mt="md">
          {!field && (
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
