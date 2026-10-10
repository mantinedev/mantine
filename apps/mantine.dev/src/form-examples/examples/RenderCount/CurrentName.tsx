import { Text } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';

interface CurrentNameProps {
  form: UseFormReturnType<{ name: string }>;
}

export function CurrentName({ form }: CurrentNameProps) {
  const name = form.useWatchValue('name');

  return (
    <Text size="sm" c="dimmed">
      Signed as {name || '—'}
    </Text>
  );
}
