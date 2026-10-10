import { useState } from 'react';
import { Button, Modal } from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { User, UserValues } from './types';
import { UserForm } from './UserForm';
import { UsersTable } from './UsersTable';

function createUser(values: UserValues) {
  return new Promise<User>((resolve) => {
    setTimeout(() => resolve({ ...values, id: Date.now() }), 1000);
  });
}

export function FormInModal() {
  const [opened, { open, close }] = useDisclosure(false);
  const [users, setUsers] = useState<User[]>([]);

  const form = useForm<UserValues>({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '', role: null },
    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
      role: isNotEmpty('Select a role'),
    },
  });

  const handleClose = () => {
    form.reset();
    close();
  };

  const handleSubmit = async (values: UserValues) => {
    const user = await createUser(values);
    setUsers((current) => [...current, user]);
    notifications.show({ title: 'User added', message: `${user.name} added as ${user.role}` });
    handleClose();
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={handleClose}
        title="Add user"
        closeOnClickOutside={!form.submitting}
        closeOnEscape={!form.submitting}
        withCloseButton={!form.submitting}
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <UserForm form={form} onCancel={handleClose} />
        </form>
      </Modal>

      <Button onClick={open}>Add user</Button>
      <UsersTable users={users} />
    </>
  );
}
