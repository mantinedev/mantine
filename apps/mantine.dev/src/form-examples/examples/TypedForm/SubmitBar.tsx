import { Button, Group } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { Payload, Values } from './types';

interface SubmitBarProps {
  form: UseFormReturnType<Values, Payload>;
}

export function SubmitBar({ form }: SubmitBarProps) {
  return (
    <Group justify="flex-end">
      <Button variant="default" onClick={form.reset}>
        Reset
      </Button>
      <Button type="submit" loading={form.submitting}>
        Submit
      </Button>
    </Group>
  );
}
