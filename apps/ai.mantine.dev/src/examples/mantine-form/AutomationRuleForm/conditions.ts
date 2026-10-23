import { randomId } from '@mantine/hooks';
import { FIELDS, MAX_DAYS, OPERATOR_SHAPES } from './constants';
import type {
  Condition,
  ConditionGroup,
  ConditionValueFields,
  FieldKey,
  Operator,
  RuleAction,
  ValueShape,
} from './types';

export const EMPTY_CONDITION_VALUE: ConditionValueFields = {
  text: '',
  number: '',
  min: '',
  max: '',
  date: null,
  days: '',
  options: [],
};

export function createCondition(): Condition {
  return { id: randomId(), field: null, operator: null, ...EMPTY_CONDITION_VALUE };
}

export function createGroup(): ConditionGroup {
  return { id: randomId(), combinator: 'and', conditions: [createCondition()], groups: [] };
}

export function createAction(): RuleAction {
  return {
    id: randomId(),
    type: null,
    memberId: null,
    priority: null,
    labels: [],
    status: null,
    comment: '',
    slackChannel: null,
    slackMessage: '',
    dueInDays: '',
  };
}

export function getOperators(field: FieldKey | null): Operator[] {
  return field ? (Object.keys(OPERATOR_SHAPES[FIELDS[field].type]) as Operator[]) : [];
}

export function getValueShape(field: FieldKey | null, operator: Operator | null): ValueShape {
  if (!field || !operator) {
    return 'none';
  }
  return OPERATOR_SHAPES[FIELDS[field].type][operator] ?? 'none';
}

export function isNumber(value: number | string): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}

export function isValidDays(value: number | string) {
  return isNumber(value) && Number.isInteger(value) && value >= 1 && value <= MAX_DAYS;
}

const VALUE_COMPLETE: Record<ValueShape, (condition: Condition) => boolean> = {
  text: (condition) => condition.text.trim() !== '',
  number: (condition) => isNumber(condition.number),
  range: (condition) =>
    isNumber(condition.min) && isNumber(condition.max) && condition.min < condition.max,
  date: (condition) => condition.date !== null,
  days: (condition) => isValidDays(condition.days),
  options: (condition) => condition.options.length > 0,
  none: () => true,
};

/** A condition the summary and the test can use: field, operator and a valid value */
export function isConditionComplete(condition: Condition) {
  return (
    condition.field !== null &&
    condition.operator !== null &&
    VALUE_COMPLETE[getValueShape(condition.field, condition.operator)](condition)
  );
}

export function countConditions(group: ConditionGroup): number {
  return group.groups.reduce(
    (count, nested) => count + countConditions(nested),
    group.conditions.length
  );
}
