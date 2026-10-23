import { useEffect, useRef, useState } from 'react';
import { Button, Divider, Group, Stack, Text, ThemeIcon } from '@mantine/core';
import { useForm, type FormErrors } from '@mantine/form';
import { CommonFieldOptions } from '../CommonFieldOptions';
import { FIELD_TYPES } from '../constants';
import { createField, slugify } from '../fields';
import { FieldTypePicker } from '../FieldTypePicker/FieldTypePicker';
import { FIELD_OPTIONS } from '../options/options';
import type { FieldType, ModelField } from '../types';
import { fieldRules } from '../validation';
import classes from './FieldEditor.module.css';

interface FieldEditorProps {
  /** Field to edit, `null` to create a new one starting with the type picker */
  field: ModelField | null;
  /** Keys of the other fields of the model */
  takenKeys: string[];
  onSave: (field: ModelField) => void;
  onCancel: () => void;
}

export function FieldEditor({ field, takenKeys, onSave, onCancel }: FieldEditorProps) {
  const [step, setStep] = useState<'type' | 'options'>(field ? 'options' : 'type');
  const listActionRef = useRef<HTMLButtonElement>(null);

  const form = useForm<ModelField>({
    name: 'field-editor',
    initialValues: field ?? createField('text'),
    validate: fieldRules(takenKeys),
    validateInputOnBlur: ['key', 'text.maxLength', 'text.defaultValue', 'json.defaultValue'],
  });

  // The key follows the label while it still equals the slug of the previous label,
  // so a key edited by hand (also one saved earlier) is kept
  form.watch('label', ({ value, previousValue }) => {
    if (form.getValues().key === slugify(previousValue)) {
      form.setFieldValue('key', slugify(value));
    }
  });

  const type = form.useWatchValue('type');
  const definition = FIELD_TYPES[type];
  const Options = FIELD_OPTIONS[type];

  useEffect(() => {
    if (step === 'options' && !field) {
      form.getInputNode('label')?.focus();
    }
  }, [step]);

  const pickType = (value: FieldType) => {
    form.setFieldValue('type', value);
    setStep('options');
  };

  const handleErrors = (errors: FormErrors) => {
    const path = Object.keys(errors)[0];
    path === 'select.options' ? listActionRef.current?.focus() : form.getInputNode(path)?.focus();
  };

  if (step === 'type') {
    return (
      <Stack>
        <FieldTypePicker onPick={pickType} />
        <Group justify="flex-end">
          <Button variant="default" onClick={onCancel}>
            Cancel
          </Button>
        </Group>
      </Stack>
    );
  }

  return (
    <form onSubmit={form.onSubmit(onSave, handleErrors)}>
      <Stack>
        <Group gap="sm" wrap="nowrap">
          <ThemeIcon variant="default" size="lg" aria-hidden>
            <definition.icon size={18} color={`var(--mantine-color-${definition.color}-text)`} />
          </ThemeIcon>
          <div className={classes.texts}>
            <Text size="sm" className={classes.type}>
              {definition.label}
            </Text>
            <Text size="xs">{definition.description}</Text>
          </div>
        </Group>

        <CommonFieldOptions form={form} />

        {Options && (
          <>
            <Divider />
            <Options form={form} listActionRef={listActionRef} />
          </>
        )}

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
