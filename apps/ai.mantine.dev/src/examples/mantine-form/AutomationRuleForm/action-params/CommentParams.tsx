import { Textarea } from '@mantine/core';
import { COMMENT_PLACEHOLDERS } from '../constants';
import type { ActionParamsProps } from './types';

export function CommentParams({ form, path }: ActionParamsProps) {
  return (
    <Textarea
      label="Comment"
      description={`You can use ${COMMENT_PLACEHOLDERS.join(' and ')}`}
      placeholder="Hi {{issue.assignee}}, please take a look at {{issue.title}}"
      autosize
      minRows={3}
      maxRows={8}
      withAsterisk
      {...form.getInputProps(`${path}.body`)}
    />
  );
}
