import React, { useState } from 'react';
import { Avatar, Button, Group, Modal, Stack, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { ModalsProvider, openConfirmModal } from '@mantine/modals';

const code = `
  import React, { useState } from 'react';
  import { Avatar, Button, Group, Modal, Stack, Text, TextInput } from '@mantine/core';
  import { useForm } from '@mantine/form';
  import { openConfirmModal } from '@mantine/modals';

  function Demo() {
    const [open, setOpen] = useState(false);
    const [initialValues, setInitialValues] = useState({
      name: 'John Doe',
      email: 'johndoe@example.com',
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
      if (!dirty) return setOpen(false);
      openConfirmModal({
        title: 'You have unsaved changes',
        children: 'All changes will be lost, Are you sure you want to close?',
        withinPortal: true,
        zIndex: 300,
        onConfirm: () => {
          form.reset();
          setOpen(false)
        },
      });
    };

    const submit = () => {
      const dirty = form.isDirty();
      const { hasErrors } = form.validate();
      if (!dirty && hasErrors) return;
      setInitialValues(form.values);
    };

    return (
      <>
        <Group>
          <Avatar color="blue">{initialValues.name[0]}</Avatar>
          <Stack spacing={0} sx={{ flexGrow: 1 }}>
            <Text weight="bold">{initialValues.name}</Text>
            <Text size="sm">{initialValues.email}</Text>
          </Stack>
          <Button onClick={() => setOpen(true)}>Edit</Button>
        </Group>
        <Modal onClose={close} opened={open} title="Edit user">
          <Stack>
            <TextInput label="Name" {...form.getInputProps('name')} />
            <TextInput label="Email" {...form.getInputProps('email')} />
            <Button onClick={submit}>Submit</Button>
          </Stack>
        </Modal>
      </>
    );
  }
`;

function Demo() {
  const [open, setOpen] = useState(false);
  const [initialValues, setInitialValues] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
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
    if (dirty) return setOpen(false);
    return openConfirmModal({
      title: 'You have unsaved changes',
      children: 'All changes will be lost, Are you sure you want to close?',
      withinPortal: true,
      zIndex: 300,
      onConfirm: () => {
        form.reset();
        setOpen(false);
      },
    });
  };

  const submit = () => {
    const dirty = form.isDirty();
    const { hasErrors } = form.validate();
    if (!dirty && hasErrors) return;
    setInitialValues(form.values);
  };

  return (
    <ModalsProvider
      labels={{
        confirm: 'Confirm',
        cancel: 'Cancel',
      }}
    >
      <Group>
        <Avatar color="blue">{initialValues.name[0]}</Avatar>
        <Stack spacing={0} sx={{ flexGrow: 1 }}>
          <Text weight="bold">{initialValues.name}</Text>
          <Text size="sm">{initialValues.email}</Text>
        </Stack>
        <Button onClick={() => setOpen(true)}>Edit</Button>
      </Group>
      <Modal onClose={close} opened={open} title="Edit user">
        <Stack>
          <TextInput label="Name" {...form.getInputProps('name')} />
          <TextInput label="Email" {...form.getInputProps('email')} />
          <Button onClick={submit}>Submit</Button>
        </Stack>
      </Modal>
    </ModalsProvider>
  );
}

export const isDirty: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
