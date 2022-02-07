import React from 'react';
import { Box } from '@mantine/core';

interface SubmitFormProps {
  children: React.ReactNode;
}

export function SubmitForm({ children }: SubmitFormProps) {
  return (
    <Box sx={{ maxWidth: 500 }} mx="auto" mt="xl">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // eslint-disable-next-line no-alert
          alert('Form submitted');
        }}
      >
        {children}
      </form>
    </Box>
  );
}
