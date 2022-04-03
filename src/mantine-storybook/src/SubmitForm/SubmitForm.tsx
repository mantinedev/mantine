import React, { useState } from 'react';
import { Box, Button } from '@mantine/core';

interface SubmitFormProps {
  children: React.ReactNode;
}

export function SubmitForm({ children }: SubmitFormProps) {
  const [value, setValue] = useState(null);
  return (
    <Box sx={{ maxWidth: 500 }} mx="auto" mt="xl">
      <form
        onSubmit={(event: any) => {
          event.preventDefault();
          setValue(event.target.elements.test?.value);
        }}
      >
        {children}
        <Button type="submit" mt="md" mb="md">
          Submit
        </Button>
        <div>{value && `Submitted value: ${value}`}</div>
      </form>
    </Box>
  );
}
