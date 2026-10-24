import { IconTrash } from '@tabler/icons-react';
import { ActionIcon, Select, Text } from '@mantine/core';
import { VALUE_INPUTS } from '../condition-values';
import { emptyValue, FIELD_OPTIONS, FIELDS, getShape, OPERATORS } from '../constants';
import type { FieldKey, Operator, RuleFormType } from '../types';
import classes from './ConditionRow.module.css';

interface ConditionRowProps {
  form: RuleFormType;
  path: string;
  index: number;
  onRemove: () => void;
}

export function ConditionCaptions() {
  return (
    <div className={classes.captions} aria-hidden>
      <Text size="xs">Field</Text>
      <Text size="xs">Operator</Text>
      <Text size="xs">Value</Text>
    </div>
  );
}

export function ConditionRow({ form, path, index, onRemove }: ConditionRowProps) {
  const field = form.useWatchValue(`${path}.field`) as FieldKey | null;
  const operator = form.useWatchValue(`${path}.operator`) as Operator | null;
  const fieldProps = form.getInputProps(`${path}.field`);
  const operatorProps = form.getInputProps(`${path}.operator`);

  const label = `Condition ${index + 1}`;
  const definition = field ? FIELDS[field] : null;
  const shape = getShape(field, operator);
  const ValueInput = shape && shape !== 'none' ? VALUE_INPUTS[shape] : null;

  const handleFieldChange = (next: string | null) => {
    if (next === field) {
      return;
    }
    fieldProps.onChange(next);
    form.setFieldValue(`${path}.operator`, null);
    form.setFieldValue(`${path}.value`, null);
  };

  const handleOperatorChange = (next: string | null) => {
    operatorProps.onChange(next);
    const nextShape = getShape(field, next as Operator | null);
    if (nextShape !== shape) {
      form.setFieldValue(`${path}.value`, emptyValue(nextShape));
    }
  };

  return (
    <div className={classes.row}>
      <Select
        aria-label={`${label} field`}
        placeholder="Field"
        data={FIELD_OPTIONS}
        allowDeselect={false}
        {...fieldProps}
        onChange={handleFieldChange}
      />
      <Select
        aria-label={`${label} operator`}
        placeholder={definition ? 'Operator' : 'Pick a field first'}
        data={definition ? OPERATORS[definition.type] : []}
        disabled={!definition}
        allowDeselect={false}
        {...operatorProps}
        onChange={handleOperatorChange}
      />
      <div>
        {ValueInput && definition && (
          <ValueInput
            form={form}
            path={`${path}.value`}
            label={`${label} value`}
            field={definition}
          />
        )}
      </div>
      <ActionIcon
        variant="default"
        size="input-sm"
        aria-label={`Remove condition ${index + 1}`}
        onClick={onRemove}
      >
        <IconTrash size={16} color="var(--mantine-color-red-text)" />
      </ActionIcon>
    </div>
  );
}
