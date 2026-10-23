import type { ReactNode } from 'react';
import { Alert, Anchor, Stack } from '@mantine/core';

interface StepErrorSummaryProps {
  errors: { path: string; message: ReactNode }[];
  onSelect: (path: string) => void;
}

export function StepErrorSummary({ errors, onSelect }: StepErrorSummaryProps) {
  if (errors.length === 0) {
    return null;
  }

  return (
    <Alert color="red" variant="default" title="There is a problem">
      <Stack gap={4} align="flex-start">
        {errors.map(({ path, message }) => (
          <Anchor
            key={path}
            component="button"
            type="button"
            size="sm"
            onClick={() => onSelect(path)}
          >
            {message}
          </Anchor>
        ))}
      </Stack>
    </Alert>
  );
}
