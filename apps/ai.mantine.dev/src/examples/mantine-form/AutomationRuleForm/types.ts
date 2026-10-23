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
  | 'is_empty'
  | 'not_equals'
  | 'greater_than'
  | 'less_than'
  | 'between'
  | 'before'
  | 'after'
  | 'within_next_days'
  | 'is_any_of'
  | 'is_none_of'
  | 'is_true'
  | 'is_false';

/** Which input the value of a condition needs */
export type ValueShape = 'text' | 'number' | 'range' | 'date' | 'days' | 'options' | 'none';

export type Combinator = 'and' | 'or';

export interface ConditionValueFields {
  text: string;
  number: number | string;
  min: number | string;
  max: number | string;
  date: string | null;
  days: number | string;
  options: string[];
}

export interface Condition extends ConditionValueFields {
  id: string;
  field: FieldKey | null;
  operator: Operator | null;
}

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

export interface RuleAction {
  id: string;
  type: ActionType | null;
  memberId: string | null;
  priority: string | null;
  labels: string[];
  status: string | null;
  comment: string;
  slackChannel: string | null;
  slackMessage: string;
  dueInDays: number | string;
}

export interface RuleTrigger {
  event: TriggerEvent | null;
  fromStatus: string | null;
  toStatus: string | null;
}

export interface RuleValues {
  name: string;
  description: string;
  enabled: boolean;
  trigger: RuleTrigger;
  root: ConditionGroup;
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
  assignee: string | null;
  labels: string[];
  storyPoints: number;
  dueDate: string | null;
  createdAt: string;
  isBlocked: boolean;
}

export interface ConditionPayload {
  field: FieldKey;
  operator: Operator;
  value?: string | number | string[] | { min: number; max: number };
}

export interface ConditionGroupPayload {
  combinator: Combinator;
  conditions: ConditionPayload[];
  groups: ConditionGroupPayload[];
}

export type ActionPayload = { type: ActionType } & Record<string, unknown>;

export interface RulePayload {
  name: string;
  description: string;
  enabled: boolean;
  trigger: { event: TriggerEvent; fromStatus?: string | null; toStatus?: string | null };
  conditions: ConditionGroupPayload;
  actions: ActionPayload[];
}
