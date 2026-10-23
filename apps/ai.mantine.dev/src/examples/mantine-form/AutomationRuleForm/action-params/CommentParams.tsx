import { Textarea } from '@mantine/core';
import { COMMENT_PLACEHOLDERS } from '../constants';
import type { ActionParamsProps } from './types';

export function CommentParams({ form, path }: ActionParamsProps) {
  return (
    <Textarea
      label="Comment"
      description={`Placeholders: ${COMMENT_PLACEHOLDERS.join(', ')}`}
      placeholder="Thanks for the report, {{issue.assignee}} is looking into it"
      withAsterisk
      autosize
      minRows={3}
      maxRows={8}
      {...form.getInputProps(`${path}.comment`)}
    />
  );
}
