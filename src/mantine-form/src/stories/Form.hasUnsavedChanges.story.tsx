import React, { useState } from 'react';
import { TextInput, Text, Modal, Button, Center, Stack, Group, Code, Box } from '@mantine/core';
import { useForm } from '../use-form';

export default { title: 'Form' };

export function HasUnsavedChanges() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [initialValues, setInitialValues] = useState({
    name: 'username',
    email: 'user@example.com',
  });
  const form = useForm({
    initialValues,
    validate: {
      name: (value) => (value.length < 6 ? 'Less than 6' : null),
      email: (value) => (!/^.*@*/.test(value) ? 'Not a valid email' : null),
    },
  });

  const close = () => {
    const dirty = form.isDirty();
    if (!dirty) {
      setMessage('');
      setOpen(false);
      return;
    }
    setMessage('You have unsaved changes.');
  };

  const save = () => {
    const { hasErrors } = form.validate();
    if (!form.isDirty() && hasErrors) return;
    setInitialValues(form.values);
  };

  return (
    <>
      <Center py={24}>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
      </Center>
      <Modal onClose={close} opened={open}>
        {message && <Text align="center">{message}</Text>}
        <Stack>
          <TextInput label="Name" {...form.getInputProps('name')} />
          <TextInput label="Email" {...form.getInputProps('email')} />
          <Group grow>
            <Button onClick={form.reset} variant="default">
              Reset
            </Button>
            <Button onClick={save}>Save</Button>
          </Group>
          <Box>
            <Text>Initial/Submitted Values</Text>
            <Code block mt={5}>
              {JSON.stringify(initialValues, null, 2)}
            </Code>
            <Text>Form Values</Text>
            <Code block mt={5}>
              {JSON.stringify(form.values, null, 2)}
            </Code>
          </Box>
        </Stack>
      </Modal>
    </>
  );
}
