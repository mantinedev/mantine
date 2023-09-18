import React from 'react';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { ThemeIcon, List } from '@mantine/core';

const code = `
import { List, ThemeIcon } from '@mantine/core';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';

function Demo() {
  return (
    <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleCheck size="1rem" />
        </ThemeIcon>
      }
    >
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconCircleDashed size="1rem" />
          </ThemeIcon>
        }
      >
        Submit a pull request once you are done
      </List.Item>
    </List>
  );
}
`;

function Demo() {
  return (
    <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleCheck size="1rem" />
        </ThemeIcon>
      }
    >
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      <List.Item
        icon={
          <ThemeIcon color="blue" size={24} radius="xl">
            <IconCircleDashed size="1rem" />
          </ThemeIcon>
        }
      >
        Submit a pull request once you are done
      </List.Item>
    </List>
  );
}

export const icon: MantineDemo = {
  type: 'code',
  centered: true,
  maxWidth: 500,
  component: Demo,
  code,
};
