import type { FormErrors } from '@mantine/form';
import { COMMENT_PLACEHOLDERS, getShape, MAX_DAYS } from './constants';
import type {
  ActionParams,
  ActionType,
  Condition,
  ConditionGroup,
  NumberRange,
  RuleAction,
  RuleValues,
  ValueShape,
} from './types';

type Errors = Record<string, string>;

const isBlank = (value: unknown) =>
  value === null ||
  value === undefined ||
  value === '' ||
  (Array.isArray(value) && value.length === 0);

type ValueRule = (value: unknown, path: string, errors: Errors) => void;

const required =
  (message: string): ValueRule =>
  (value, path, errors) => {
    if (isBlank(value)) {
      errors[path] = message;
    }
  };

const VALUE_RULES: Record<ValueShape, ValueRule> = {
  none: () => {},
  text: (value, path, errors) => {
    if (typeof value !== 'string' || value.trim() === '') {
      errors[path] = 'Enter a value';
    }
  },
  number: required('Enter a number'),
  date: required('Pick a date'),
  options: required('Pick at least one option'),
  days: (value, path, errors) => {
    const error = validateDays(value as number | '');
    if (error) {
      errors[path] = error;
    }
  },
  range: (value, path, errors) => {
    const { min, max } = (value ?? { min: '', max: '' }) as NumberRange;
    if (min === '') {
      errors[`${path}.min`] = 'Enter a minimum';
    }
    if (max === '') {
      errors[`${path}.max`] = 'Enter a maximum';
    } else if (min !== '' && min >= max) {
      errors[`${path}.max`] = 'Must be greater than the minimum';
    }
  },
};

function validateCondition(condition: Condition, path: string, errors: Errors) {
  if (!condition.field) {
    errors[`${path}.field`] = 'Pick a field';
    return;
  }
  const shape = getShape(condition.field, condition.operator);
  if (!shape) {
    errors[`${path}.operator`] = 'Pick an operator';
    return;
  }
  VALUE_RULES[shape](condition.value, `${path}.value`, errors);
}

export function countConditions(group: ConditionGroup): number {
  return (
    group.conditions.length + group.groups.reduce((sum, child) => sum + countConditions(child), 0)
  );
}

function validateGroup(group: ConditionGroup, path: string, isRoot: boolean, errors: Errors) {
  if (countConditions(group) === 0) {
    errors[path] = isRoot
      ? 'Add at least one condition'
      : 'Add a condition to this group or remove it';
  }
  group.conditions.forEach((condition, index) => {
    validateCondition(condition, `${path}.conditions.${index}`, errors);
  });
  group.groups.forEach((child, index) => {
    validateGroup(child, `${path}.groups.${index}`, false, errors);
  });
}

const PLACEHOLDER = /\{\{[^}]*\}\}/g;

function validateComment(body: string) {
  if (body.trim() === '') {
    return 'Enter a comment';
  }
  const unknown = [...body.matchAll(PLACEHOLDER)]
    .map((match) => match[0])
    .find((placeholder) => !COMMENT_PLACEHOLDERS.includes(placeholder));
  return unknown ? `Unknown placeholder ${unknown}` : null;
}

function validateDays(days: number | '') {
  if (days === '') {
    return 'Enter a number of days';
  }
  return days < 1 || days > MAX_DAYS ? `Enter 1 to ${MAX_DAYS} days` : null;
}

type ParamErrors = Record<string, string | null>;

const PARAM_RULES: { [T in ActionType]: (params: ActionParams[T]) => ParamErrors } = {
  assign_member: ({ memberId }) => ({ memberId: memberId ? null : 'Pick a member' }),
  set_priority: ({ priority }) => ({ priority: priority ? null : 'Pick a priority' }),
  add_labels: ({ labels }) => ({ labels: labels.length > 0 ? null : 'Pick at least one label' }),
  move_to_status: ({ status }) => ({ status: status ? null : 'Pick a status' }),
  post_comment: ({ body }) => ({ body: validateComment(body) }),
  send_slack_message: ({ channel, message }) => ({
    channel: channel ? null : 'Pick a channel',
    message: message.trim() ? null : 'Enter a message',
  }),
  set_due_date: ({ days }) => ({ days: validateDays(days) }),
};

function validateAction(action: RuleAction, path: string, errors: Errors) {
  if (action.type === null) {
    errors[`${path}.type`] = 'Pick an action';
    return;
  }
  const paramErrors = (PARAM_RULES[action.type] as (params: unknown) => ParamErrors)(action.params);
  Object.entries(paramErrors).forEach(([key, message]) => {
    if (message) {
      errors[`${path}.params.${key}`] = message;
    }
  });
}

// Errors are collected in the order fields appear on screen, so the first key is the field to focus
export function validateRule(values: RuleValues): FormErrors {
  const errors: Errors = {};

  if (values.name.trim() === '') {
    errors.name = 'Name is required';
  }
  if (!values.trigger.event) {
    errors['trigger.event'] = 'Pick an event';
  }

  validateGroup(values.conditions, 'conditions', true, errors);

  if (values.actions.length === 0) {
    errors.actions = 'Add at least one action';
  }
  values.actions.forEach((action, index) => validateAction(action, `actions.${index}`, errors));

  return errors;
}
