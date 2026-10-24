import { Select, Stack, Textarea } from '@mantine/core';
import { SLACK_CHANNELS } from '../constants';
import type { ActionParamsProps } from './types';

export function SlackParams({ form, path }: ActionParamsProps) {
  return (
    <Stack gap="sm">
      <Select
        label="Channel"
        placeholder="Pick a channel"
        data={SLACK_CHANNELS}
        withAsterisk
        {...form.getInputProps(`${path}.channel`)}
      />
      <Textarea
        label="Message"
        placeholder="Message"
        autosize
        minRows={2}
        maxRows={6}
        withAsterisk
        {...form.getInputProps(`${path}.message`)}
      />
    </Stack>
  );
}
