import { Select, Textarea } from '@mantine/core';
import { SLACK_CHANNELS } from '../constants';
import type { ActionParamsProps } from './types';

export function SlackParams({ form, path }: ActionParamsProps) {
  return (
    <>
      <Select
        label="Channel"
        placeholder="Pick a channel"
        data={SLACK_CHANNELS}
        withAsterisk
        {...form.getInputProps(`${path}.slackChannel`)}
      />
      <Textarea
        label="Message"
        placeholder="Message"
        withAsterisk
        autosize
        minRows={2}
        maxRows={6}
        {...form.getInputProps(`${path}.slackMessage`)}
      />
    </>
  );
}
