import type { FormErrors } from '@mantine/form';
import { countConditions, getValueShape, isNumber, isValidDays } from './conditions';
import { COMMENT_PLACEHOLDERS, MAX_DAYS } from './constants';
import type {
  ActionType,
  Condition,
  ConditionGroup,
  RuleAction,
  RuleValues,
  ValueShape,
} from './types';

type Errors = Record<string, string>;

const DAYS_ERROR = `Enter 1 to ${MAX_DAYS} days`;

function required(path: string, valid: boolean, message: string): Errors {
  return valid ? {} : { [path]: message };
}

function rangeRule(condition: Condition, path: string): Errors {
  const { min, max } = condition;
  return {
    ...required(`${path}.min`, isNumber(min), 'Enter a minimum'),
    ...(isNumber(max)
      ? required(`${path}.max`, !isNumber(min) || min < max, 'Must be greater than the minimum')
      : { [`${path}.max`]: 'Enter a maximum' }),
  };
}

const VALUE_RULES: Record<ValueShape, (condition: Condition, path: string) => Errors> = {
  text: (condition, path) =>
    required(`${path}.text`, condition.text.trim() !== '', 'Enter a value'),
  number: (condition, path) =>
    required(`${path}.number`, isNumber(condition.number), 'Enter a number'),
  range: rangeRule,
  date: (condition, path) => required(`${path}.date`, condition.date !== null, 'Pick a date'),
  days: (condition, path) => required(`${path}.days`, isValidDays(condition.days), DAYS_ERROR),
  options: (condition, path) =>
    required(`${path}.options`, condition.options.length > 0, 'Select at least one value'),
  none: () => ({}),
};

function validateCondition(condition: Condition, path: string): Errors {
  if (!condition.field) {
    return { [`${path}.field`]: 'Select a field' };
  }
  if (!condition.operator) {
    return { [`${path}.operator`]: 'Select an operator' };
  }
  return VALUE_RULES[getValueShape(condition.field, condition.operator)](condition, path);
}

// Errors are collected in display order, the first key is the field focused after submit
function validateGroup(group: ConditionGroup, path: string, nested: boolean): Errors {
  const emptyError = nested
    ? 'Add at least one condition to this group'
    : 'Add at least one condition';

  return {
    ...required(`${path}.conditions`, countConditions(group) > 0, emptyError),
    ...Object.assign(
      {},
      ...group.conditions.map((condition, index) =>
        validateCondition(condition, `${path}.conditions.${index}`)
      )
    ),
    ...Object.assign(
      {},
      ...group.groups.map((child, index) => validateGroup(child, `${path}.groups.${index}`, true))
    ),
  };
}

function unknownPlaceholder(text: string) {
  return (text.match(/{{[^}]*}}/g) ?? []).find(
    (placeholder) => !COMMENT_PLACEHOLDERS.includes(placeholder.replace(/\s/g, ''))
  );
}

function commentRule(action: RuleAction, path: string): Errors {
  if (action.comment.trim() === '') {
    return { [`${path}.comment`]: 'Enter a comment' };
  }
  const unknown = unknownPlaceholder(action.comment);
  return required(`${path}.comment`, !unknown, `Unknown placeholder ${unknown}`);
}

const ACTION_RULES: Record<ActionType, (action: RuleAction, path: string) => Errors> = {
  assign_member: (action, path) =>
    required(`${path}.memberId`, action.memberId !== null, 'Select a member'),
  set_priority: (action, path) =>
    required(`${path}.priority`, action.priority !== null, 'Select a priority'),
  add_labels: (action, path) =>
    required(`${path}.labels`, action.labels.length > 0, 'Select at least one label'),
  move_to_status: (action, path) =>
    required(`${path}.status`, action.status !== null, 'Select a status'),
  post_comment: commentRule,
  send_slack_message: (action, path) => ({
    ...required(`${path}.slackChannel`, action.slackChannel !== null, 'Select a channel'),
    ...required(`${path}.slackMessage`, action.slackMessage.trim() !== '', 'Enter a message'),
  }),
  set_due_date: (action, path) =>
    required(`${path}.dueInDays`, isValidDays(action.dueInDays), DAYS_ERROR),
};

function validateAction(action: RuleAction, path: string): Errors {
  return action.type
    ? ACTION_RULES[action.type](action, path)
    : { [`${path}.type`]: 'Select an action type' };
}

export function validateRule(values: RuleValues): FormErrors {
  return {
    ...required('name', values.name.trim() !== '', 'Enter a rule name'),
    ...required('trigger.event', values.trigger.event !== null, 'Select a trigger event'),
    ...validateGroup(values.root, 'root', false),
    ...required('actions', values.actions.length > 0, 'Add at least one action'),
    ...Object.assign(
      {},
      ...values.actions.map((action, index) => validateAction(action, `actions.${index}`))
    ),
  };
}
