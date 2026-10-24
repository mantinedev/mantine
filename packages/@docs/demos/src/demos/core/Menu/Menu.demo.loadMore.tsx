import { useState } from 'react';
import { Button, Menu } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Menu } from '@mantine/core';

const PAGE_SIZE = 8;
const TOTAL = 40;

function getUsers(page: number) {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve(
        Array.from({ length: PAGE_SIZE }, (_, index) => \`User \${page * PAGE_SIZE + index + 1}\`)
      );
    }, 800);
  });
}

function Demo() {
  const [users, setUsers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    getUsers(users.length / PAGE_SIZE).then((page) => {
      setUsers((current) => [...current, ...page]);
      setLoading(false);
    });
  };

  return (
    <Menu width={220}>
      <Menu.Target>
        <Button variant="default">Assign to user</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.ScrollArea mah={260}>
          {users.map((user) => (
            <Menu.Item key={user}>{user}</Menu.Item>
          ))}

          {users.length < TOTAL && (
            <Menu.LoadMore onLoadMore={loadMore} loading={loading}>
              {loading ? 'Loading users' : 'Load more users'}
            </Menu.LoadMore>
          )}
        </Menu.ScrollArea>
      </Menu.Dropdown>
    </Menu>
  );
}
`;

const PAGE_SIZE = 8;
const TOTAL = 40;

function getUsers(page: number) {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve(
        Array.from({ length: PAGE_SIZE }, (_, index) => `User ${page * PAGE_SIZE + index + 1}`)
      );
    }, 800);
  });
}

function Demo() {
  const [users, setUsers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    setLoading(true);
    getUsers(users.length / PAGE_SIZE).then((page) => {
      setUsers((current) => [...current, ...page]);
      setLoading(false);
    });
  };

  return (
    <Menu width={220}>
      <Menu.Target>
        <Button variant="default">Assign to user</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.ScrollArea mah={260}>
          {users.map((user) => (
            <Menu.Item key={user}>{user}</Menu.Item>
          ))}

          {users.length < TOTAL && (
            <Menu.LoadMore onLoadMore={loadMore} loading={loading}>
              {loading ? 'Loading users' : 'Load more users'}
            </Menu.LoadMore>
          )}
        </Menu.ScrollArea>
      </Menu.Dropdown>
    </Menu>
  );
}

export const loadMore: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
