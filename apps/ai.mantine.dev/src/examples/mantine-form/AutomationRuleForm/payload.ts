import { getValueShape } from './conditions';
import type {
  ActionPayload,
  ActionType,
  Condition,
  ConditionGroup,
  ConditionGroupPayload,
  ConditionPayload,
  RuleAction,
  RulePayload,
  RuleValues,
  ValueShape,
} from './types';

const VALUE_PAYLOADS: Record<ValueShape, (condition: Condition) => ConditionPayload['value']> = {
  text: (condition) => condition.text.trim(),
  number: (condition) => Number(condition.number),
  range: (condition) => ({ min: Number(condition.min), max: Number(condition.max) }),
  date: (condition) => condition.date!,
  days: (condition) => Number(condition.days),
  options: (condition) => condition.options,
  none: () => undefined,
};

function toConditionPayload(condition: Condition): ConditionPayload {
  const shape = getValueShape(condition.field, condition.operator);
  return {
    field: condition.field!,
    operator: condition.operator!,
    ...(shape === 'none' ? {} : { value: VALUE_PAYLOADS[shape](condition) }),
  };
}

function toGroupPayload(group: ConditionGroup): ConditionGroupPayload {
  return {
    combinator: group.combinator,
    conditions: group.conditions.map(toConditionPayload),
    groups: group.groups.map(toGroupPayload),
  };
}

const ACTION_PARAMS: Record<ActionType, (action: RuleAction) => Record<string, unknown>> = {
  assign_member: (action) => ({ memberId: action.memberId }),
  set_priority: (action) => ({ priority: action.priority }),
  add_labels: (action) => ({ labels: action.labels }),
  move_to_status: (action) => ({ status: action.status }),
  post_comment: (action) => ({ comment: action.comment.trim() }),
  send_slack_message: (action) => ({
    channel: action.slackChannel,
    message: action.slackMessage.trim(),
  }),
  set_due_date: (action) => ({ daysFromNow: Number(action.dueInDays) }),
};

function toActionPayload(action: RuleAction): ActionPayload {
  const type = action.type!;
  return { type, ...ACTION_PARAMS[type](action) };
}

/** The submitted rule: only the fields of the chosen event, operators and action types */
export function toRulePayload(values: RuleValues): RulePayload {
  const { event, fromStatus, toStatus } = values.trigger;

  return {
    name: values.name.trim(),
    description: values.description.trim(),
    enabled: values.enabled,
    trigger: event === 'status_changed' ? { event, fromStatus, toStatus } : { event: event! },
    conditions: toGroupPayload(values.root),
    actions: values.actions.map(toActionPayload),
  };
}
