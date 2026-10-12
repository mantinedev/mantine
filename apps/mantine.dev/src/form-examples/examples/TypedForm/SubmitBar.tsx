import { Button, Group } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { ProfilePayload, ProfileValues } from './types';

interface SubmitBarProps {
  form: UseFormReturnType<ProfileValues, ProfilePayload>;
}

export function SubmitBar({ form }: SubmitBarProps) {
  return (
    <Group justify="flex-end">
      <Button size="md" variant="default" onClick={form.reset}>
        Reset
      </Button>

      <Button size="md" type="submit" loading={form.submitting}>
        Submit
      </Button>
    </Group>
  );
}
