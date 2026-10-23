import { Select } from '@mantine/core';
import { MEMBERS } from '../constants';
import type { ActionParamsProps } from './types';

export function MemberParams({ form, path }: ActionParamsProps) {
  return (
    <Select
      label="Member"
      placeholder="Pick a member"
      data={MEMBERS}
      withAsterisk
      {...form.getInputProps(`${path}.memberId`)}
    />
  );
}
