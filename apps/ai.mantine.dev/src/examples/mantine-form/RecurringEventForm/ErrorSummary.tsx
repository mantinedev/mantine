import { Alert, Anchor, Stack } from '@mantine/core';
import { focusField } from './focusField';
import type { RecurringEventFormType } from './types';

export function ErrorSummary({ form }: { form: RecurringEventFormType }) {
  const entries = Object.entries(form.errors);

  if (entries.length === 0) {
    return null;
  }

  return (
    <Alert variant="default" color="red" title="There is a problem">
      <Stack gap={4} align="flex-start">
        {entries.map(([path, message]) => (
          <Anchor
            key={path}
            component="button"
            type="button"
            size="sm"
            onClick={() => focusField(form, path)}
          >
            {message}
          </Anchor>
        ))}
      </Stack>
    </Alert>
  );
}
