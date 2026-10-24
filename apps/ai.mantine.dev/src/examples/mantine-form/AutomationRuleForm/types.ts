import type { UseFormReturnType } from '@mantine/form';

export type TriggerEvent =
  | 'issue_created'
  | 'issue_updated'
  | 'comment_added'
  | 'due_date_approaching'
  | 'status_changed';

export type FieldKey =
  | 'title'
  | 'description'
  | 'status'
  | 'priority'
  | 'assignee'
  | 'labels'
  | 'storyPoints'
  | 'dueDate'
  | 'createdAt'
  | 'isBlocked';

export type FieldType = 'text' | 'number' | 'date' | 'option' | 'boolean';

export type Operator =
  | 'contains'
  | 'not_contains'
  | 'equals'
  | 'not_equals'
  | 'greater_than'
  | 'less_than'
  | 'between'
  | 'before'
  | 'after'
  | 'within_next_days'
  | 'is_empty'
  | 'any_of'
  | 'none_of'
  | 'is_true'
  | 'is_false';

export type ValueShape = 'none' | 'text' | 'number' | 'range' | 'date' | 'days' | 'options';

export interface NumberRange {
  min: number | '';
  max: number | '';
}

export type ConditionValue = string | number | string[] | NumberRange | null;

export interface Condition {
  id: string;
  field: FieldKey | null;
  operator: Operator | null;
  value: ConditionValue;
}

export type Combinator = 'and' | 'or';

export interface ConditionGroup {
  id: string;
  combinator: Combinator;
  conditions: Condition[];
  groups: ConditionGroup[];
}

export type ActionType =
  | 'assign_member'
  | 'set_priority'
  | 'add_labels'
  | 'move_to_status'
  | 'post_comment'
  | 'send_slack_message'
  | 'set_due_date';

export interface ActionParams {
  assign_member: { memberId: string | null };
  set_priority: { priority: string | null };
  add_labels: { labels: string[] };
  move_to_status: { status: string | null };
  post_comment: { body: string };
  send_slack_message: { channel: string | null; message: string };
  set_due_date: { days: number | '' };
}

export type RuleAction =
  | { id: string; type: null; params: Record<string, never> }
  | { [T in ActionType]: { id: string; type: T; params: ActionParams[T] } }[ActionType];

export interface Trigger {
  event: TriggerEvent | null;
  fromStatus: string | null;
  toStatus: string | null;
}

export interface RuleValues {
  name: string;
  description: string;
  trigger: Trigger;
  conditions: ConditionGroup;
  actions: RuleAction[];
}

export type RuleFormType = UseFormReturnType<RuleValues>;

export interface Option {
  value: string;
  label: string;
}

export interface SampleIssue {
  title: string;
  description: string;
  status: string;
  priority: string;
  assignee: string;
  labels: string[];
  storyPoints: number;
  dueDate: string;
  createdAt: string;
  isBlocked: boolean;
}
