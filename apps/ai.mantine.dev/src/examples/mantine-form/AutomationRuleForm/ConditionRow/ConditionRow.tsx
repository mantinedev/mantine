import { IconTrash } from '@tabler/icons-react';
import { ActionIcon, Select } from '@mantine/core';
import { VALUE_INPUTS } from '../condition-values';
import { EMPTY_CONDITION_VALUE, getOperators, getValueShape } from '../conditions';
import { FIELD_OPTIONS, OPERATOR_LABELS } from '../constants';
import type { Condition, FieldKey, Operator, RuleFormType } from '../types';
import classes from './ConditionRow.module.css';

interface ConditionRowProps {
  form: RuleFormType;
  path: string;
  label: string;
  onRemove: () => void;
}

export function ConditionRow({ form, path, label, onRemove }: ConditionRowProps) {
  const field = form.useWatchValue(`${path}.field`) as FieldKey | null;
  const operator = form.useWatchValue(`${path}.operator`) as Operator | null;
  const shape = getValueShape(field, operator);
  const ValueInput = shape === 'none' ? null : VALUE_INPUTS[shape];
  const operators = getOperators(field).map((value) => ({
    value,
    label: OPERATOR_LABELS[value],
  }));

  const updateCondition = (update: (condition: Condition) => Condition) =>
    form.setFieldValue(path, update as never);

  const handleFieldChange = (value: string | null) =>
    updateCondition((condition) => ({
      ...condition,
      ...EMPTY_CONDITION_VALUE,
      field: value as FieldKey | null,
      operator: null,
    }));

  const handleOperatorChange = (value: string | null) =>
    updateCondition((condition) => {
      const next = value as Operator | null;
      const sameShape =
        getValueShape(condition.field, next) === getValueShape(condition.field, condition.operator);
      return sameShape
        ? { ...condition, operator: next }
        : { ...condition, ...EMPTY_CONDITION_VALUE, operator: next };
    });

  return (
    <div role="group" aria-label={label} className={classes.row}>
      <Select
        aria-label="Field"
        placeholder="Field"
        data={FIELD_OPTIONS}
        allowDeselect={false}
        {...form.getInputProps(`${path}.field`)}
        onChange={handleFieldChange}
      />
      <Select
        aria-label="Operator"
        placeholder="Operator"
        data={operators}
        disabled={!field}
        allowDeselect={false}
        {...form.getInputProps(`${path}.operator`)}
        onChange={handleOperatorChange}
      />
      <div>{ValueInput && field && <ValueInput form={form} path={path} field={field} />}</div>
      <ActionIcon
        variant="default"
        size="input-sm"
        aria-label={`Remove ${label.toLowerCase()}`}
        onClick={onRemove}
      >
        <IconTrash size={16} color="var(--mantine-color-red-text)" />
      </ActionIcon>
    </div>
  );
}
