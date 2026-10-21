import { Alert, Anchor, Stack } from '@mantine/core';
import type { RecurringEventFormType } from './types';

interface ErrorSummaryProps {
  form: RecurringEventFormType;
  onFocusField: (path: string) => void;
}

export function ErrorSummary({ form, onFocusField }: ErrorSummaryProps) {
  const entries = Object.entries(form.errors);

  if (entries.length === 0) {
    return null;
  }

  return (
    <Alert color="red" variant="default" title="There is a problem">
      <Stack gap={4}>
        {entries.map(([path, message]) => (
          <Anchor
            key={path}
            component="button"
            type="button"
            size="sm"
            onClick={() => onFocusField(path)}
          >
            {message}
          </Anchor>
        ))}
      </Stack>
    </Alert>
  );
}
