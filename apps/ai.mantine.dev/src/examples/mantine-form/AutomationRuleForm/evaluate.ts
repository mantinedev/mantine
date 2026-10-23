import dayjs from 'dayjs';
import { isConditionComplete } from './conditions';
import { FIELDS } from './constants';
import type { Condition, ConditionGroup, FieldType, Operator, SampleIssue } from './types';

export type ConditionStatus = 'matched' | 'not_matched' | 'incomplete';

export interface ConditionResult {
  id: string;
  condition: Condition;
  status: ConditionStatus;
}

export interface GroupResult {
  id: string;
  combinator: ConditionGroup['combinator'];
  matched: boolean;
  conditions: ConditionResult[];
  groups: GroupResult[];
}

type IssueValue = SampleIssue[keyof SampleIssue];
type Evaluator = (value: IssueValue, condition: Condition, today: dayjs.Dayjs) => boolean;

const text = (value: IssueValue) => String(value ?? '').toLowerCase();
const list = (value: IssueValue) =>
  Array.isArray(value) ? value : value === null ? [] : [String(value)];

const EVALUATORS: { [T in FieldType]: Partial<Record<Operator, Evaluator>> } = {
  text: {
    contains: (value, c) => text(value).includes(c.text.trim().toLowerCase()),
    not_contains: (value, c) => !text(value).includes(c.text.trim().toLowerCase()),
    equals: (value, c) => text(value) === c.text.trim().toLowerCase(),
    is_empty: (value) => text(value).trim() === '',
  },
  number: {
    equals: (value, c) => value === c.number,
    not_equals: (value, c) => value !== c.number,
    greater_than: (value, c) => Number(value) > Number(c.number),
    less_than: (value, c) => Number(value) < Number(c.number),
    between: (value, c) => Number(value) >= Number(c.min) && Number(value) <= Number(c.max),
  },
  date: {
    before: (value, c) => value !== null && dayjs(String(value)).isBefore(c.date, 'day'),
    after: (value, c) => value !== null && dayjs(String(value)).isAfter(c.date, 'day'),
    within_next_days: (value, c, today) => {
      if (value === null) {
        return false;
      }
      const date = dayjs(String(value));
      return !date.isBefore(today, 'day') && !date.isAfter(today.add(Number(c.days), 'day'), 'day');
    },
    is_empty: (value) => value === null,
  },
  option: {
    is_any_of: (value, c) => list(value).some((item) => c.options.includes(item)),
    is_none_of: (value, c) => !list(value).some((item) => c.options.includes(item)),
  },
  boolean: {
    is_true: (value) => value === true,
    is_false: (value) => value === false,
  },
};

function evaluateCondition(
  condition: Condition,
  issue: SampleIssue,
  today: dayjs.Dayjs
): ConditionStatus {
  if (!isConditionComplete(condition)) {
    return 'incomplete';
  }
  const field = condition.field!;
  const evaluator = EVALUATORS[FIELDS[field].type][condition.operator!]!;
  return evaluator(issue[field], condition, today) ? 'matched' : 'not_matched';
}

/** Incomplete conditions and empty groups count as not matched */
export function evaluateGroup(
  group: ConditionGroup,
  issue: SampleIssue,
  today = dayjs()
): GroupResult {
  const conditions = group.conditions.map((condition) => ({
    id: condition.id,
    condition,
    status: evaluateCondition(condition, issue, today),
  }));
  const groups = group.groups.map((nested) => evaluateGroup(nested, issue, today));
  const outcomes = [
    ...conditions.map((result) => result.status === 'matched'),
    ...groups.map((result) => result.matched),
  ];
  const matched =
    outcomes.length > 0 &&
    (group.combinator === 'and' ? outcomes.every(Boolean) : outcomes.some(Boolean));

  return { id: group.id, combinator: group.combinator, matched, conditions, groups };
}

export function renderPlaceholders(template: string, issue: SampleIssue, assignee: string) {
  return template
    .replace(/{{\s*issue\.title\s*}}/g, issue.title)
    .replace(/{{\s*issue\.assignee\s*}}/g, assignee);
}
