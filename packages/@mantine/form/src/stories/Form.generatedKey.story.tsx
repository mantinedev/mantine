import { useRef, useState } from 'react';
import { Badge, Button, Code, Group, Stack, Text, TextInput } from '@mantine/core';
import { useForm } from '../use-form';

export default { title: 'Form' };

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

function RenderCount({ label }: { label: string }) {
  const renders = useRef(0);
  renders.current += 1;
  return <Badge variant="light">{`${label} renders: ${renders.current}`}</Badge>;
}

export function GeneratedKey() {
  const form = useForm({
    mode: 'uncontrolled',
    touchTrigger: 'focus',
    initialValues: { name: '', key: '' },
  });

  const keyTouched = form.useTouched('key');
  const [values, setValues] = useState(form.getValues());

  form.watch('name', ({ value }) => {
    if (!form.isTouched('key')) {
      form.setFieldValue('key', slugify(value), { forceUpdate: false });
    }
  });

  return (
    <Stack p={40} maw={520} mx="auto">
      <Group>
        <RenderCount label="form" />
        <Badge color={keyTouched ? 'orange' : 'teal'}>
          {keyTouched ? 'key edited by user' : 'key generated from name'}
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">
        Type a name: the key is generated from it. Focus the key input: generation stops and the key
        keeps the value entered by the user.
      </Text>

      <TextInput label="Name" placeholder="Hello World!" {...form.getInputProps('name')} />
      <TextInput label="Key" placeholder="hello-world" {...form.getInputProps('key')} />

      <Group>
        <Button variant="default" onClick={() => form.setFieldValue('name', 'Set From Code')}>
          Set name
        </Button>
        <Button variant="default" onClick={form.reset}>
          Reset
        </Button>
        <Button onClick={() => setValues(form.getValues())}>Read values</Button>
      </Group>

      <Code block>{JSON.stringify(values, null, 2)}</Code>
    </Stack>
  );
}
