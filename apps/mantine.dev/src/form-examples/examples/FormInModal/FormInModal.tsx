import { useState } from 'react';
import { Button, useModal } from '@mantine/core';
import { FormErrors, isEmail, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { User, UserValues } from './types';
import { UserForm } from './UserForm';
import { UsersTable } from './UsersTable';

function createUser(values: UserValues) {
  return new Promise<User>((resolve) => {
    setTimeout(() => {
      resolve({
        ...values,
        id: Date.now(),
      });
    }, 1000);
  });
}

export function FormInModal() {
  const [users, setUsers] = useState<User[]>([]);

  const form = useForm<UserValues>({
    initialValues: {
      name: '',
      email: '',
      role: null,
    },
    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
      role: isNotEmpty('Select a role'),
    },
  });

  const handleSubmit = async (values: UserValues) => {
    const user = await createUser(values);
    setUsers((current) => [...current, user]);
    notifications.show({
      title: 'User added',
      message: `${user.name} added as ${user.role}`,
    });
    modal.close();
  };

  const handleErrors = (errors: FormErrors) => {
    form.getInputNode(Object.keys(errors)[0])?.focus();
  };

  // onClose runs for every way the modal is closed, including a successful submit
  const modal = useModal({
    title: 'Add user',
    onClose: form.reset,
    closeOnClickOutside: !form.submitting,
    closeOnEscape: !form.submitting,
    withCloseButton: !form.submitting,
    children: (
      <form onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
        <UserForm form={form} onCancel={() => modal.close()} />
      </form>
    ),
  });

  return (
    <>
      <Button onClick={() => modal.open()}>Add user</Button>
      <UsersTable users={users} />
    </>
  );
}
