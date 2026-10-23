import type {
  ActionType,
  FieldKey,
  FieldType,
  Operator,
  Option,
  SampleIssue,
  TriggerEvent,
  ValueShape,
} from './types';

export const FORM_NAME = 'automation-rule';
export const MAX_ACTIONS = 5;
/** Nested groups go two levels below the root group */
export const MAX_GROUP_DEPTH = 2;
export const MAX_DAYS = 365;

export const TRIGGER_EVENTS: { value: TriggerEvent; label: string }[] = [
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
  { value: 'security', label: 'security' },
  { value: 'documentation', label: 'documentation' },
];

export const SLACK_CHANNELS: Option[] = [
  { value: 'engineering', label: '#engineering' },
  { value: 'support', label: '#support' },
  { value: 'releases', label: '#releases' },
  { value: 'alerts', label: '#alerts' },
];

interface FieldDefinition {
  label: string;
  /** How the field is named inside the summary sentence */
  noun: string;
  type: FieldType;
  options?: Option[];
  /** The issue holds several values (labels), the summary says "include" instead of "is" */
  multiple?: boolean;
}

export const FIELDS: Record<FieldKey, FieldDefinition> = {
  title: { label: 'Title', noun: 'title', type: 'text' },
  description: { label: 'Description', noun: 'description', type: 'text' },
  status: { label: 'Status', noun: 'status', type: 'option', options: STATUSES },
  priority: { label: 'Priority', noun: 'priority', type: 'option', options: PRIORITIES },
  assignee: { label: 'Assignee', noun: 'assignee', type: 'option', options: MEMBERS },
  labels: { label: 'Labels', noun: 'labels', type: 'option', options: LABELS, multiple: true },
  storyPoints: { label: 'Story points', noun: 'story points', type: 'number' },
  dueDate: { label: 'Due date', noun: 'due date', type: 'date' },
  createdAt: { label: 'Created at', noun: 'creation date', type: 'date' },
  isBlocked: { label: 'Is blocked', noun: 'blocked', type: 'boolean' },
};

export const FIELD_OPTIONS = (Object.keys(FIELDS) as FieldKey[]).map((key) => ({
  value: key,
  label: FIELDS[key].label,
}));

export const OPERATOR_LABELS: Record<Operator, string> = {
  contains: 'Contains',
  not_contains: 'Does not contain',
  equals: 'Equals',
  is_empty: 'Is empty',
  not_equals: 'Not equals',
  greater_than: 'Greater than',
  less_than: 'Less than',
  between: 'Between',
  before: 'Before',
  after: 'After',
  within_next_days: 'Within the next N days',
  is_any_of: 'Is any of',
  is_none_of: 'Is none of',
  is_true: 'Is true',
  is_false: 'Is false',
};

/** Operators of each field type and the value each of them needs */
export const OPERATOR_SHAPES: { [T in FieldType]: Partial<Record<Operator, ValueShape>> } = {
  text: { contains: 'text', not_contains: 'text', equals: 'text', is_empty: 'none' },
  number: {
    equals: 'number',
    not_equals: 'number',
    greater_than: 'number',
    less_than: 'number',
    between: 'range',
  },
  date: { before: 'date', after: 'date', within_next_days: 'days', is_empty: 'none' },
  option: { is_any_of: 'options', is_none_of: 'options' },
  boolean: { is_true: 'none', is_false: 'none' },
};

export const ACTION_TYPES: { value: ActionType; label: string }[] = [
  { value: 'assign_member', label: 'Assign to member' },
  { value: 'set_priority', label: 'Set priority' },
  { value: 'add_labels', label: 'Add labels' },
  { value: 'move_to_status', label: 'Move to status' },
  { value: 'post_comment', label: 'Post comment' },
  { value: 'send_slack_message', label: 'Send Slack message' },
  { value: 'set_due_date', label: 'Set due date' },
];

export const REPEATABLE_ACTIONS: ActionType[] = ['add_labels', 'post_comment'];

export const COMMENT_PLACEHOLDERS = ['{{issue.title}}', '{{issue.assignee}}'];

export const SAMPLE_ISSUE: SampleIssue = {
  title: 'Checkout button does nothing in Safari',
  description: 'Clicking Pay on the checkout page has no effect in Safari 18.',
  status: 'in_progress',
  priority: 'high',
  assignee: 'ada',
  labels: ['bug', 'frontend'],
  storyPoints: 3,
  dueDate: '2026-10-28',
  createdAt: '2026-10-12',
  isBlocked: false,
};

export function getOptionLabel(options: Option[], value: string | null) {
  return options.find((option) => option.value === value)?.label ?? value ?? '';
}
