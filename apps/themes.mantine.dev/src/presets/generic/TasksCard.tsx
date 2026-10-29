'use client';

import { useState } from 'react';
import { IconDots, IconFilter, IconPencil, IconTrash } from '@tabler/icons-react';
import {
  ActionIcon,
  Anchor,
  Avatar,
  Badge,
  Button,
  Checkbox,
  Group,
  Menu,
  Pagination,
  Paper,
  Progress,
  Table,
  Tabs,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';
import { STATUS_COLORS, tasks } from './data';

export function TasksCard() {
  const [selected, setSelected] = useState<string[]>(['PRJ-142']);
  const allSelected = selected.length === tasks.length;

  return (
    <Paper withBorder>
      <Group justify="space-between" p="md" pb="xs">
        <div>
          <Title order={3} size="h4">
            Tasks
          </Title>
          <Text size="sm">{selected.length} selected</Text>
        </div>
        <Group gap="xs">
          <Tooltip label="Filter tasks">
            <ActionIcon variant="default" size="input-sm" aria-label="Filter tasks">
              <IconFilter size={18} />
            </ActionIcon>
          </Tooltip>
          <Button variant="default" disabled={selected.length === 0}>
            Assign
          </Button>
        </Group>
      </Group>

      <Tabs defaultValue="all" px="md">
        <Tabs.List>
          <Tabs.Tab value="all">All tasks</Tabs.Tab>
          <Tabs.Tab value="mine">Assigned to me</Tabs.Tab>
          <Tabs.Tab value="blocked">Blocked</Tabs.Tab>
        </Tabs.List>
      </Tabs>

      <Table.ScrollContainer minWidth={760}>
        <Table verticalSpacing="sm" highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th w={40} pl="md">
                <Checkbox
                  aria-label="Select all tasks"
                  checked={allSelected}
                  indeterminate={selected.length > 0 && !allSelected}
                  onChange={() => setSelected(allSelected ? [] : tasks.map((task) => task.id))}
                />
              </Table.Th>
              <Table.Th>Task</Table.Th>
              <Table.Th>Assignee</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Progress</Table.Th>
              <Table.Th w={48} />
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {tasks.map((task) => (
              <Table.Tr key={task.id}>
                <Table.Td pl="md">
                  <Checkbox
                    aria-label={`Select ${task.id}`}
                    checked={selected.includes(task.id)}
                    onChange={(event) =>
                      setSelected((current) =>
                        event.currentTarget.checked
                          ? [...current, task.id]
                          : current.filter((id) => id !== task.id)
                      )
                    }
                  />
                </Table.Td>
                <Table.Td>
                  <Anchor href="#" size="sm" fw={500} onClick={(event) => event.preventDefault()}>
                    {task.title}
                  </Anchor>
                  <Text size="xs">
                    {task.id} · {task.project} · Due {task.due}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Group gap="xs" wrap="nowrap">
                    <Avatar name={task.assignee} color="initials" size="sm" />
                    <Text size="sm">{task.assignee}</Text>
                  </Group>
                </Table.Td>
                <Table.Td>
                  <Badge color={STATUS_COLORS[task.status]} variant="dot">
                    {task.status}
                  </Badge>
                </Table.Td>
                <Table.Td w={120}>
                  <Progress
                    value={task.progress}
                    color={STATUS_COLORS[task.status]}
                    size="sm"
                    aria-label={`${task.progress}% done`}
                  />
                </Table.Td>
                <Table.Td>
                  <Menu position="bottom-end">
                    <Menu.Target>
                      <ActionIcon
                        variant="subtle"
                        color="gray"
                        aria-label={`Actions for ${task.id}`}
                      >
                        <IconDots size={16} />
                      </ActionIcon>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <Menu.Item leftSection={<IconPencil size={16} />}>Edit</Menu.Item>
                      <Menu.Item color="red" leftSection={<IconTrash size={16} />}>
                        Delete
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      <Group justify="space-between" p="md">
        <Text size="sm">Showing 1–5 of 48</Text>
        <Pagination total={10} size="sm" />
      </Group>
    </Paper>
  );
}
