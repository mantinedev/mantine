import React from 'react';
import { IssueClosedIcon, IssueDraftIcon } from '@primer/octicons-react';
import { ThemeIcon, List } from '@mantine/core';

const code = `
import { List, ThemeIcon } from '@mantine/core';
import { IssueClosedIcon, IssueDraftIcon } from '@primer/octicons-react';

function Demo() {
  return (
    <List
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IssueClosedIcon size={12} />
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
            <IssueDraftIcon size={12} />
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
    <div style={{ maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
      <List
        spacing="xs"
        size="sm"
        center
        icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IssueClosedIcon size={12} />
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
              <IssueDraftIcon size={12} />
            </ThemeIcon>
          }
        >
          Submit a pull request once you are done
        </List.Item>
      </List>
    </div>
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
