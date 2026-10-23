import dayjs from 'dayjs';
import { isConditionComplete, isValidDays } from './conditions';
import {
  FIELDS,
  getOptionLabel,
  LABELS,
  MEMBERS,
  PRIORITIES,
  SLACK_CHANNELS,
  STATUSES,
} from './constants';
import type {
  ActionType,
  Condition,
  ConditionGroup,
  FieldKey,
  FieldType,
  Operator,
  RuleAction,
  RuleTrigger,
  TriggerEvent,
} from './types';

export function joinList(items: string[], conjunction = 'and') {
  if (items.length <= 1) {
    return items.join('');
  }
  return `${items.slice(0, -1).join(', ')} ${conjunction} ${items[items.length - 1]}`;
}

function plural(count: number, word: string) {
  return `${count} ${word}${count === 1 ? '' : 's'}`;
}

export function formatDate(date: string) {
  return dayjs(date).format('MMM D, YYYY');
}

const EVENT_PHRASES: Record<TriggerEvent, string> = {
  issue_created: 'an issue is created',
  issue_updated: 'an issue is updated',
  comment_added: 'a comment is added',
  due_date_approaching: 'a due date is approaching',
  status_changed: 'the status of an issue changes',
};

export function describeTrigger(trigger: RuleTrigger) {
  if (!trigger.event) {
    return null;
  }
  if (trigger.event !== 'status_changed') {
    return EVENT_PHRASES[trigger.event];
  }
  const from = trigger.fromStatus ? ` from ${getOptionLabel(STATUSES, trigger.fromStatus)}` : '';
  const to = trigger.toStatus ? ` to ${getOptionLabel(STATUSES, trigger.toStatus)}` : '';
  return `${EVENT_PHRASES.status_changed}${from}${to}`;
}

type Describer = (condition: Condition, noun: string) => string;

function describeOptions(condition: Condition, noun: string) {
  const { options = [], multiple } = FIELDS[condition.field!];
  const names = condition.options.map((value) => getOptionLabel(options, value));
  const list = joinList(names, 'or');

  if (multiple) {
    return condition.operator === 'is_any_of'
      ? `${noun} include ${list}`
      : `${noun} do not include ${list}`;
  }
  if (condition.operator === 'is_any_of') {
    return `${noun} is ${list}`;
  }
  return names.length === 1 ? `${noun} is not ${list}` : `${noun} is none of ${joinList(names)}`;
}

const DESCRIBERS: { [T in FieldType]: Partial<Record<Operator, Describer>> } = {
  text: {
    contains: (c, noun) => `${noun} contains "${c.text.trim()}"`,
    not_contains: (c, noun) => `${noun} does not contain "${c.text.trim()}"`,
    equals: (c, noun) => `${noun} is "${c.text.trim()}"`,
    is_empty: (_, noun) => `${noun} is empty`,
  },
  number: {
    equals: (c, noun) => `${noun} is ${c.number}`,
    not_equals: (c, noun) => `${noun} is not ${c.number}`,
    greater_than: (c, noun) => `${noun} is greater than ${c.number}`,
    less_than: (c, noun) => `${noun} is less than ${c.number}`,
    between: (c, noun) => `${noun} is between ${c.min} and ${c.max}`,
  },
  date: {
    before: (c, noun) => `${noun} is before ${formatDate(c.date!)}`,
    after: (c, noun) => `${noun} is after ${formatDate(c.date!)}`,
    within_next_days: (c, noun) => `${noun} is within the next ${plural(Number(c.days), 'day')}`,
    is_empty: (_, noun) => `${noun} is empty`,
  },
  option: { is_any_of: describeOptions, is_none_of: describeOptions },
  boolean: {
    is_true: (_, noun) => `the issue is ${noun}`,
    is_false: (_, noun) => `the issue is not ${noun}`,
  },
};

/** Plain-language condition, `null` while the condition is incomplete */
export function describeCondition(condition: Condition) {
  if (!isConditionComplete(condition)) {
    return null;
  }
  const { type, noun } = FIELDS[condition.field as FieldKey];
  return DESCRIBERS[type][condition.operator!]!(condition, noun);
}

function describeGroupParts(group: ConditionGroup): string[] {
  const conditions = group.conditions
    .map(describeCondition)
    .filter((text): text is string => text !== null);
  const groups = group.groups
    .map((nested) => ({ parts: describeGroupParts(nested), combinator: nested.combinator }))
    .filter(({ parts }) => parts.length > 0)
    .map(({ parts, combinator }) => {
      const text = parts.join(` ${combinator} `);
      return parts.length > 1 ? `(${text})` : text;
    });

  return [...conditions, ...groups];
}

export function describeGroup(group: ConditionGroup) {
  return describeGroupParts(group).join(` ${group.combinator} `);
}

const ACTION_DESCRIBERS: Record<ActionType, (action: RuleAction) => string> = {
  assign_member: (action) =>
    action.memberId
      ? `assign to ${getOptionLabel(MEMBERS, action.memberId)}`
      : 'assign to a member',
  set_priority: (action) =>
    action.priority
      ? `set priority to ${getOptionLabel(PRIORITIES, action.priority)}`
      : 'set the priority',
  add_labels: (action) => {
    const labels = action.labels.map((label) => getOptionLabel(LABELS, label));
    if (labels.length === 0) {
      return 'add labels';
    }
    return labels.length === 1 ? `add the label ${labels[0]}` : `add labels ${joinList(labels)}`;
  },
  move_to_status: (action) =>
    action.status ? `move to ${getOptionLabel(STATUSES, action.status)}` : 'move to a status',
  post_comment: () => 'post a comment',
  send_slack_message: (action) =>
    action.slackChannel
      ? `send a Slack message to ${getOptionLabel(SLACK_CHANNELS, action.slackChannel)}`
      : 'send a Slack message',
  set_due_date: (action) =>
    isValidDays(action.dueInDays)
      ? `set the due date to ${plural(Number(action.dueInDays), 'day')} from now`
      : 'set the due date',
};

export function describeAction(action: RuleAction) {
  return action.type ? ACTION_DESCRIBERS[action.type](action) : null;
}

export function describeRule(values: {
  trigger: RuleTrigger;
  root: ConditionGroup;
  actions: RuleAction[];
}) {
  const trigger = describeTrigger(values.trigger);
  if (!trigger) {
    return null;
  }
  const conditions = describeGroup(values.root);
  const actions = joinList(
    values.actions.map(describeAction).filter((text): text is string => text !== null)
  );

  return [`When ${trigger}`, conditions && `if ${conditions}`, actions && `then ${actions}`]
    .filter(Boolean)
    .join(', ');
}
