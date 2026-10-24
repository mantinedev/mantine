import { IconPencil } from '@tabler/icons-react';
import { ActionIcon, Table } from '@mantine/core';
import { User } from './types';

interface UsersTableProps {
  users: User[];
  onEdit: (user: User) => void;
}

export function UsersTable({ users, onEdit }: UsersTableProps) {
  const rows = users.map((user) => (
    <Table.Tr key={user.id}>
      <Table.Td>{user.name}</Table.Td>
      <Table.Td>{user.email}</Table.Td>
      <Table.Td>{user.role}</Table.Td>
      <Table.Td>
        <ActionIcon variant="default" aria-label={`Edit ${user.name}`} onClick={() => onEdit(user)}>
          <IconPencil size={16} />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table mt="md">
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Email</Table.Th>
          <Table.Th>Role</Table.Th>
          <Table.Th w={60} />
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
