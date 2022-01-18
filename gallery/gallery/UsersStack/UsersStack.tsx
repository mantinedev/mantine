import React from 'react';
import { Avatar, Table, Group, Text, ActionIcon, Menu, ScrollArea } from '@mantine/core';
import { Pencil, Messages, Note, ReportAnalytics, Trash } from 'tabler-icons-react';

interface UsersStackProps {
  data: { avatar: string; name: string; job: string; email: string; rate: number }[];
}

export function UsersStack({ data }: UsersStackProps) {
  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
          <Avatar size={40} src={item.avatar} radius={40} />
          <div>
            <Text size="sm" weight={500}>
              {item.name}
            </Text>
            <Text color="dimmed" size="xs">
              {item.job}
            </Text>
          </div>
        </Group>
      </td>
      <td>
        <Text size="sm">{item.email}</Text>
        <Text size="xs" color="dimmed">
          Email
        </Text>
      </td>
      <td>
        <Text size="sm">${item.rate.toFixed(1)} / hr</Text>
        <Text size="xs" color="dimmed">
          Rate
        </Text>
      </td>
      <td>
        <Group spacing={0} position="right">
          <ActionIcon>
            <Pencil size={16} />
          </ActionIcon>
          <Menu transition="pop" withArrow placement="end">
            <Menu.Item icon={<Messages size={16} />}>Send message</Menu.Item>
            <Menu.Item icon={<Note size={16} />}>Add note</Menu.Item>
            <Menu.Item icon={<ReportAnalytics size={16} />}>Analytics</Menu.Item>
            <Menu.Item icon={<Trash size={16} />} color="red">
              Terminate contract
            </Menu.Item>
          </Menu>
        </Group>
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="md">
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
