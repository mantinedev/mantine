import { useState } from 'react';
import { Button, useModal } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { User } from './types';
import { UserForm } from './UserForm';
import { UsersTable } from './UsersTable';

const INITIAL_USERS: User[] = [
  { id: 'ann', name: 'Ann Smith', email: 'ann@mantine.dev', role: 'Admin' },
  { id: 'john', name: 'John Doe', email: 'john@mantine.dev', role: 'Editor' },
];

function createUser(): User {
  return {
    id: randomId(),
    name: '',
    email: '',
    role: null,
  };
}

export function FormInModal() {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const modal = useModal({ closeOnClickOutside: false });

  // Handlers passed to modal.open are captured at click time: update through the current state
  const handleSave = (user: User) => {
    setUsers((current) =>
      current.some((item) => item.id === user.id)
        ? current.map((item) => (item.id === user.id ? user : item))
        : [...current, user]
    );
    notifications.show({
      title: 'User saved',
      message: `${user.name} · ${user.role}`,
    });
    modal.close();
  };

  // Modal content is remounted on every open, so the form always starts from the opened user
  const openEditor = (user: User | null) => {
    modal.open({
      title: user ? 'Edit user' : 'Add user',
      children: <UserForm user={user ?? createUser()} isNew={!user} onSave={handleSave} />,
    });
  };

  return (
    <>
      <Button onClick={() => openEditor(null)}>Add user</Button>
      <UsersTable users={users} onEdit={openEditor} />
    </>
  );
}
