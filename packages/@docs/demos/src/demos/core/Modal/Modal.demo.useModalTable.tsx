import { Button, Table, Text, useModal } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Table, Text, useModal } from '@mantine/core';

const users = [
  { id: 1, name: 'Ann Smith', email: 'ann@mantine.dev' },
  { id: 2, name: 'John Doe', email: 'john@mantine.dev' },
  { id: 3, name: 'Mary Bright', email: 'mary@mantine.dev' },
];

function UserRow({ user }: { user: (typeof users)[number] }) {
  const modal = useModal({
    title: \`Delete \${user.name}\`,
    children: (
      <>
        <Text mb="md">Are you sure you want to delete {user.name}?</Text>
        <Button color="red" fullWidth onClick={() => modal.close()}>
          Delete
        </Button>
      </>
    ),
  });

  return (
    <Table.Tr>
      <Table.Td>{user.name}</Table.Td>
      <Table.Td>{user.email}</Table.Td>
      <Table.Td>
        <Button size="compact-xs" color="red" variant="light" onClick={() => modal.open()}>
          Delete
        </Button>
      </Table.Td>
    </Table.Tr>
  );
}

function Demo() {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Email</Table.Th>
          <Table.Th />
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {users.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </Table.Tbody>
    </Table>
  );
}
`;

const users = [
  { id: 1, name: 'Ann Smith', email: 'ann@mantine.dev' },
  { id: 2, name: 'John Doe', email: 'john@mantine.dev' },
  { id: 3, name: 'Mary Bright', email: 'mary@mantine.dev' },
];

function UserRow({ user }: { user: (typeof users)[number] }) {
  const modal = useModal({
    title: `Delete ${user.name}`,
    children: (
      <>
        <Text mb="md">Are you sure you want to delete {user.name}?</Text>
        <Button color="red" fullWidth onClick={() => modal.close()}>
          Delete
        </Button>
      </>
    ),
  });

  return (
    <Table.Tr>
      <Table.Td>{user.name}</Table.Td>
      <Table.Td>{user.email}</Table.Td>
      <Table.Td>
        <Button size="compact-xs" color="red" variant="light" onClick={() => modal.open()}>
          Delete
        </Button>
      </Table.Td>
    </Table.Tr>
  );
}

function Demo() {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Email</Table.Th>
          <Table.Th />
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {users.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </Table.Tbody>
    </Table>
  );
}

export const useModalTable: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  defaultExpanded: false,
};
