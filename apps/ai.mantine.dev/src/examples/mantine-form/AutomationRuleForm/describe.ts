import dayjs from 'dayjs';
import {
  ACTION_TYPES,
  EVENTS,
  FIELDS,
  getOperator,
  LABELS,
  MEMBERS,
  optionLabel,
  PRIORITIES,
  SLACK_CHANNELS,
  STATUSES,
} from './constants';
import type {
  ActionParams,
  ActionType,
  Condition,
  NumberRange,
  Operator,
  Option,
  RuleAction,
  Trigger,
  TriggerEvent,
} from './types';

const EVENT_PHRASES: Record<TriggerEvent, string> = {
  issue_created: 'an issue is created',
  issue_updated: 'an issue is updated',
  comment_added: 'a comment is added',
  due_date_approaching: 'a due date is approaching',
  status_changed: 'the status changes',
};

export function describeTrigger(trigger: Trigger) {
  if (!trigger.event) {
    return null;
  }
  let phrase = `When ${EVENT_PHRASES[trigger.event]}`;
  if (trigger.event === 'status_changed') {
    if (trigger.fromStatus) {
      phrase += ` from ${optionLabel(STATUSES, trigger.fromStatus)}`;
    }
    if (trigger.toStatus) {
      phrase += ` to ${optionLabel(STATUSES, trigger.toStatus)}`;
    }
  }
  return phrase;
}

export function eventLabel(event: TriggerEvent | null) {
  return EVENTS.find((item) => item.value === event)?.label ?? '';
}

export const formatDate = (value: string) => dayjs(value).format('MMM D, YYYY');

const joinOr = (items: string[]) =>
  items.length > 1 ? `${items.slice(0, -1).join(', ')} or ${items[items.length - 1]}` : items[0];

const joinAnd = (items: string[]) =>
  items.length > 1 ? `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}` : items[0];

type Describe = (subject: string, value: Condition['value'], options: Option[]) => string;

const isMulti = (subject: string) => subject === 'labels';

// Scalar operators always hold a string or a number, see OPERATORS in constants
const scalar = (value: Condition['value']) => String(value as string | number);

const OPERATOR_PHRASES: Record<Operator, Describe> = {
  contains: (subject, value) => `${subject} contains "${scalar(value)}"`,
  not_contains: (subject, value) => `${subject} does not contain "${scalar(value)}"`,
  equals: (subject, value) =>
    typeof value === 'number'
      ? `${subject} equals ${value}`
      : `${subject} equals "${scalar(value)}"`,
  not_equals: (subject, value) => `${subject} does not equal ${scalar(value)}`,
  greater_than: (subject, value) => `${subject} is greater than ${scalar(value)}`,
  less_than: (subject, value) => `${subject} is less than ${scalar(value)}`,
  between: (subject, value) => {
    const { min, max } = value as NumberRange;
    return `${subject} is between ${min} and ${max}`;
  },
  before: (subject, value) => `${subject} is before ${formatDate(value as string)}`,
  after: (subject, value) => `${subject} is after ${formatDate(value as string)}`,
  within_next_days: (subject, value) =>
    `${subject} is within the next ${scalar(value)} ${value === 1 ? 'day' : 'days'}`,
  is_empty: (subject) => `${subject} is empty`,
  any_of: (subject, value, options) => {
    const labels = joinOr((value as string[]).map((item) => optionLabel(options, item)));
    return isMulti(subject) ? `${subject} include ${labels}` : `${subject} is ${labels}`;
  },
  none_of: (subject, value, options) => {
    const labels = joinOr((value as string[]).map((item) => optionLabel(options, item)));
    return isMulti(subject) ? `${subject} do not include ${labels}` : `${subject} is not ${labels}`;
  },
  is_true: () => 'the issue is blocked',
  is_false: () => 'the issue is not blocked',
};

const hasValue = (value: Condition['value']) => {
  if (value === null || value === '') {
    return false;
  }
  if (Array.isArray(value)) {
    return value.length > 0;
  }
  if (typeof value === 'object') {
    return value.min !== '' && value.max !== '';
  }
  return true;
};

export function describeCondition({ field, operator, value }: Condition) {
  if (!field) {
    return 'Incomplete condition';
  }
  const definition = FIELDS[field];
  const subject = definition.label.toLowerCase();
  const operatorDefinition = getOperator(field, operator);
  if (!operatorDefinition) {
    return `${definition.label} …`;
  }
  if (operatorDefinition.shape !== 'none' && !hasValue(value)) {
    return `${definition.label} ${operatorDefinition.label} …`;
  }
  const phrase = OPERATOR_PHRASES[operatorDefinition.value](
    subject,
    value,
    definition.options ?? []
  );
  return phrase.charAt(0).toUpperCase() + phrase.slice(1);
}

const ACTION_PHRASES: { [T in ActionType]: (params: ActionParams[T]) => string } = {
  assign_member: ({ memberId }) =>
    memberId ? `Assign to ${optionLabel(MEMBERS, memberId)}` : 'Assign to …',
  set_priority: ({ priority }) =>
    priority ? `Set priority to ${optionLabel(PRIORITIES, priority)}` : 'Set priority to …',
  add_labels: ({ labels }) =>
    labels.length > 0
      ? `Add ${labels.length === 1 ? 'label' : 'labels'} ${joinAnd(labels.map((label) => optionLabel(LABELS, label)))}`
      : 'Add labels …',
  move_to_status: ({ status }) =>
    status ? `Move to ${optionLabel(STATUSES, status)}` : 'Move to …',
  post_comment: () => 'Post a comment',
  send_slack_message: ({ channel }) =>
    channel
      ? `Send a Slack message to ${optionLabel(SLACK_CHANNELS, channel)}`
      : 'Send a Slack message to …',
  set_due_date: ({ days }) =>
    days === ''
      ? 'Set the due date to …'
      : `Set the due date to ${days} ${days === 1 ? 'day' : 'days'} from now`,
};

export function describeAction(action: RuleAction) {
  if (action.type === null) {
    return 'Incomplete action';
  }
  return (ACTION_PHRASES[action.type] as (params: unknown) => string)(action.params);
}

export function actionTypeLabel(type: ActionType) {
  return ACTION_TYPES.find((item) => item.value === type)?.label ?? type;
}
