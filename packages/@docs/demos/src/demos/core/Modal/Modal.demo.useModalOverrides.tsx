import { Button, Group, Text, useModal } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group, Text, useModal } from '@mantine/core';

const users = ['Ann Smith', 'John Doe', 'Mary Bright'];

function Demo() {
  const modal = useModal({ title: 'Delete user', size: 'sm' });

  return (
    <Group justify="center">
      {users.map((user) => (
        <Button
          key={user}
          variant="default"
          onClick={() =>
            modal.open({
              children: (
                <>
                  <Text mb="md">Are you sure you want to delete {user}?</Text>
                  <Button color="red" fullWidth onClick={() => modal.close()}>
                    Delete {user}
                  </Button>
                </>
              ),
            })
          }
        >
          Delete {user}
        </Button>
      ))}
    </Group>
  );
}
`;

const users = ['Ann Smith', 'John Doe', 'Mary Bright'];

function Demo() {
  const modal = useModal({ title: 'Delete user', size: 'sm' });

  return (
    <Group justify="center">
      {users.map((user) => (
        <Button
          key={user}
          variant="default"
          onClick={() =>
            modal.open({
              children: (
                <>
                  <Text mb="md">Are you sure you want to delete {user}?</Text>
                  <Button color="red" fullWidth onClick={() => modal.close()}>
                    Delete {user}
                  </Button>
                </>
              ),
            })
          }
        >
          Delete {user}
        </Button>
      ))}
    </Group>
  );
}

export const useModalOverrides: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
