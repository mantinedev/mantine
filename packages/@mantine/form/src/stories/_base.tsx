import { useState } from 'react';
import { Box, Button, Code, Group, rem } from '@mantine/core';

function WatchedValue({ form, path }: { form: any; path: string }) {
  const value = form.useWatchValue(path);
  return <div>{`${path}: ${JSON.stringify(value)}`}</div>;
}

function FormValues({ form }: { form: any }) {
  const [paths] = useState(() => Object.keys(form.getValues()));

  return (
    <Code block mt={5}>
      {paths.map((path) => (
        <WatchedValue key={path} form={form} path={path} />
      ))}
    </Code>
  );
}

export function FormBase({ children, form }: any) {
  const [values, setValues] = useState({});
  return (
    <form
      style={{ padding: rem(40), maxWidth: rem(400), marginLeft: 'auto', marginRight: 'auto' }}
      onSubmit={form.onSubmit(setValues)}
      onReset={form.onReset}
    >
      {children}

      <Group mt="xl" mb="xl" justify="right">
        <Button type="reset" variant="default">
          Reset
        </Button>
        <Button type="submit">Submit</Button>
      </Group>

      <div>Submitted values:</div>
      <Code block mt={5}>
        {JSON.stringify(values, null, 2)}
      </Code>

      <Box mt="md">Form values:</Box>
      <FormValues form={form} />
    </form>
  );
}
