import React, { useState } from 'react';
import { Button, Group, Code, rem } from '@mantine/core';

export function FormBase({ children, form }) {
  const [values, setValues] = useState({});
  return (
    <form
      style={{ padding: rem(40), maxWidth: rem(400), marginLeft: 'auto', marginRight: 'auto' }}
      onSubmit={form.onSubmit(setValues)}
      onReset={form.onReset}
    >
      {children}

      <Group mt="xl" mb="xl" position="right">
        <Button type="reset" variant="default">
          Reset
        </Button>
        <Button type="submit">Submit</Button>
      </Group>

      <div>Submitted values:</div>
      <Code block mt={5}>
        {JSON.stringify(values, null, 2)}
      </Code>
    </form>
  );
}
