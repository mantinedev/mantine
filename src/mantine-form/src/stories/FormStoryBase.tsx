import React, { useState } from 'react';
import { Code, Box, Button, Group } from '@mantine/core';

interface FormStoryBaseProps {
  form: any;
  children: any;
}

export function FormStoryBase({ form, children }: FormStoryBaseProps) {
  const [submittedValues, setSubmittedValues] = useState({});

  return (
    <form onSubmit={form.onSubmit(setSubmittedValues)}>
      <Box sx={{ maxWidth: 400 }} mx="auto" mt="xl">
        {children}
        <Group position="right" mt="xl" mb="xl">
          <Button type="submit">Submit</Button>
        </Group>
        <Code>Submitted values: {JSON.stringify(submittedValues)}</Code>
      </Box>
    </form>
  );
}
