import { randomId } from '@mantine/hooks';
import type {
  ActionParams,
  ActionType,
  Condition,
  ConditionGroup,
  ConditionValue,
  FieldKey,
  FieldType,
  Operator,
  Option,
  RuleAction,
  RuleValues,
  SampleIssue,
  TriggerEvent,
  ValueShape,
} from './types';

export const FORM_NAME = 'automation-rule';

export const MAX_GROUP_DEPTH = 2;
export const MAX_ACTIONS = 5;
export const MAX_DAYS = 365;

export const EVENTS: { value: TriggerEvent; label: string }[] = [
  { value: 'issue_created', label: 'Issue created' },
  { value: 'issue_updated', label: 'Issue updated' },
  { value: 'comment_added', label: 'Comment added' },
  { value: 'due_date_approaching', label: 'Due date approaching' },
  { value: 'status_changed', label: 'Status changed' },
];

export const STATUSES: Option[] = [
  { value: 'todo', label: 'To do' },
  { value: 'in_progress', label: 'In progress' },
  { value: 'in_review', label: 'In review' },
  { value: 'done', label: 'Done' },
];

export const PRIORITIES: Option[] = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
  { value: 'urgent', label: 'Urgent' },
];

export const MEMBERS: Option[] = [
  { value: 'ada', label: 'Ada Lovelace' },
  { value: 'grace', label: 'Grace Hopper' },
  { value: 'alan', label: 'Alan Turing' },
  { value: 'katherine', label: 'Katherine Johnson' },
  { value: 'linus', label: 'Linus Torvalds' },
];

export const LABELS: Option[] = [
  { value: 'bug', label: 'bug' },
  { value: 'feature', label: 'feature' },
  { value: 'frontend', label: 'frontend' },
  { value: 'backend', label: 'backend' },
  { value: 'docs', label: 'docs' },
  { value: 'security', label: 'security' },
];

export const SLACK_CHANNELS: Option[] = [
  { value: 'engineering', label: '#engineering' },
  { value: 'product', label: '#product' },
  { value: 'support', label: '#support' },
  { value: 'releases', label: '#releases' },
];

export interface FieldDefinition {
  value: FieldKey;
  label: string;
  type: FieldType;
  options?: Option[];
}

export const FIELDS: Record<FieldKey, FieldDefinition> = {
  title: { value: 'title', label: 'Title', type: 'text' },
  description: { value: 'description', label: 'Description', type: 'text' },
  status: { value: 'status', label: 'Status', type: 'option', options: STATUSES },
  priority: { value: 'priority', label: 'Priority', type: 'option', options: PRIORITIES },
  assignee: { value: 'assignee', label: 'Assignee', type: 'option', options: MEMBERS },
  labels: { value: 'labels', label: 'Labels', type: 'option', options: LABELS },
  storyPoints: { value: 'storyPoints', label: 'Story points', type: 'number' },
  dueDate: { value: 'dueDate', label: 'Due date', type: 'date' },
  createdAt: { value: 'createdAt', label: 'Created at', type: 'date' },
  isBlocked: { value: 'isBlocked', label: 'Is blocked', type: 'boolean' },
};

export const FIELD_OPTIONS = Object.values(FIELDS).map(({ value, label }) => ({ value, label }));

export interface OperatorDefinition {
  value: Operator;
  label: string;
  shape: ValueShape;
}

export const OPERATORS: Record<FieldType, OperatorDefinition[]> = {
  text: [
    { value: 'contains', label: 'contains', shape: 'text' },
    { value: 'not_contains', label: 'does not contain', shape: 'text' },
    { value: 'equals', label: 'equals', shape: 'text' },
    { value: 'is_empty', label: 'is empty', shape: 'none' },
  ],
  number: [
    { value: 'equals', label: 'equals', shape: 'number' },
    { value: 'not_equals', label: 'not equals', shape: 'number' },
    { value: 'greater_than', label: 'greater than', shape: 'number' },
    { value: 'less_than', label: 'less than', shape: 'number' },
    { value: 'between', label: 'between', shape: 'range' },
  ],
  date: [
    { value: 'before', label: 'before', shape: 'date' },
    { value: 'after', label: 'after', shape: 'date' },
    { value: 'within_next_days', label: 'within the next N days', shape: 'days' },
    { value: 'is_empty', label: 'is empty', shape: 'none' },
  ],
  option: [
    { value: 'any_of', label: 'is any of', shape: 'options' },
    { value: 'none_of', label: 'is none of', shape: 'options' },
  ],
  boolean: [
    { value: 'is_true', label: 'is true', shape: 'none' },
    { value: 'is_false', label: 'is false', shape: 'none' },
  ],
};

export function getOperator(field: FieldKey | null, operator: Operator | null) {
  if (!field || !operator) {
    return undefined;
  }
  return OPERATORS[FIELDS[field].type].find((item) => item.value === operator);
}

export function getShape(field: FieldKey | null, operator: Operator | null): ValueShape | null {
  return getOperator(field, operator)?.shape ?? null;
}

const EMPTY_VALUES: Record<ValueShape, () => ConditionValue> = {
  none: () => null,
  text: () => '',
  number: () => '',
  range: () => ({ min: '', max: '' }),
  date: () => null,
  days: () => '',
  options: () => [],
};

export function emptyValue(shape: ValueShape | null): ConditionValue {
  return shape ? EMPTY_VALUES[shape]() : null;
}

export const ACTION_TYPES: { value: ActionType; label: string; repeatable: boolean }[] = [
  { value: 'assign_member', label: 'Assign to member', repeatable: false },
  { value: 'set_priority', label: 'Set priority', repeatable: false },
  { value: 'add_labels', label: 'Add labels', repeatable: true },
  { value: 'move_to_status', label: 'Move to status', repeatable: false },
  { value: 'post_comment', label: 'Post comment', repeatable: true },
  { value: 'send_slack_message', label: 'Send Slack message', repeatable: false },
  { value: 'set_due_date', label: 'Set due date', repeatable: false },
];

export const COMMENT_PLACEHOLDERS = ['{{issue.title}}', '{{issue.assignee}}'];

const EMPTY_PARAMS: { [T in ActionType]: () => ActionParams[T] } = {
  assign_member: () => ({ memberId: null }),
  set_priority: () => ({ priority: null }),
  add_labels: () => ({ labels: [] }),
  move_to_status: () => ({ status: null }),
  post_comment: () => ({ body: '' }),
  send_slack_message: () => ({ channel: null, message: '' }),
  set_due_date: () => ({ days: '' }),
};

export function createAction(type: ActionType | null = null, id = randomId()): RuleAction {
  if (type === null) {
    return { id, type: null, params: {} };
  }
  return { id, type, params: EMPTY_PARAMS[type]() } as RuleAction;
}

export function createCondition(): Condition {
  return { id: randomId(), field: null, operator: null, value: null };
}

export function createGroup(withCondition = true): ConditionGroup {
  return {
    id: randomId(),
    combinator: 'and',
    conditions: withCondition ? [createCondition()] : [],
    groups: [],
  };
}

export function createInitialValues(): RuleValues {
  return {
    name: '',
    description: '',
    trigger: { event: null, fromStatus: null, toStatus: null },
    conditions: createGroup(),
    actions: [createAction()],
  };
}

export const SAMPLE_ISSUE: SampleIssue = {
  title: 'Checkout button does not respond on Safari',
  description: 'Clicking Pay now on Safari 17 does nothing, no error in the console.',
  status: 'in_progress',
  priority: 'high',
  assignee: 'ada',
  labels: ['bug', 'frontend'],
  storyPoints: 3,
  dueDate: '2026-10-30',
  createdAt: '2026-10-12',
  isBlocked: false,
};

export function optionLabel(options: Option[], value: string | null) {
  return options.find((option) => option.value === value)?.label ?? value ?? '';
}
