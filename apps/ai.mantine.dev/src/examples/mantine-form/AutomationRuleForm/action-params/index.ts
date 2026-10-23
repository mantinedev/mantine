import type { ActionType } from '../types';
import { CommentParams } from './CommentParams';
import { DueDateParams } from './DueDateParams';
import { LabelsParams } from './LabelsParams';
import { MemberParams } from './MemberParams';
import { PriorityParams } from './PriorityParams';
import { SlackParams } from './SlackParams';
import { StatusParams } from './StatusParams';
import type { ActionParamsProps } from './types';

export const ACTION_PARAMS: Record<ActionType, (props: ActionParamsProps) => React.ReactNode> = {
  assign_member: MemberParams,
  set_priority: PriorityParams,
  add_labels: LabelsParams,
  move_to_status: StatusParams,
  post_comment: CommentParams,
  send_slack_message: SlackParams,
  set_due_date: DueDateParams,
};
