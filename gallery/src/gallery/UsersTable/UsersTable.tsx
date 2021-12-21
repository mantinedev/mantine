import React from 'react';
import { Avatar, Badge, Table, Group, Text, ActionIcon, Anchor, ScrollArea } from '@mantine/core';
import { Pencil, Trash } from 'tabler-icons-react';

interface UsersTableProps {
  data: { avatar: string; name: string; job: string; email: string; phone: string }[];
}

const jobColors = {
  engineer: 'blue',
  manager: 'cyan',
  designer: 'pink',
};

export function UsersTable({ data }: UsersTableProps) {
  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          <Avatar size={30} src={item.avatar} radius={30} />
          <Text size="sm" weight={500}>
            {item.name}
          </Text>
        </Group>
      </td>

      <td>
        <Badge color={jobColors[item.job.toLowerCase()]}>{item.job}</Badge>
      </td>
      <td>
        <Anchor<'a'> size="sm" href="#" onClick={(event) => event.preventDefault()}>
          {item.email}
        </Anchor>
      </td>
      <td>
        <Anchor<'a'> size="sm" href="#" onClick={(event) => event.preventDefault()}>
          {item.phone}
        </Anchor>
      </td>
      <td>
        <Group spacing={0} position="right">
          <ActionIcon>
            <Pencil size={16} />
          </ActionIcon>
          <ActionIcon color="red">
            <Trash size={16} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }}>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Job title</th>
            <th>Email</th>
            <th>Phone</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
