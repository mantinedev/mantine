import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { List, ListProps } from '@mantine/core';

function Wrapper(props: ListProps) {
  return (
    <List {...props}>
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      <List.Item>Submit a pull request once you are done</List.Item>
    </List>
  );
}

const codeTemplate = (props: string) => `
import { List } from '@mantine/core';

function Demo() {
  return (
    <List${props}>
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      <List.Item>Submit a pull request once you are done</List.Item>
    </List>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'type',
      type: 'segmented',
      data: [
        { value: 'unordered', label: 'Unordered' },
        { value: 'ordered', label: 'Ordered' },
      ],
      initialValue: 'unordered',
      defaultValue: 'unordered',
    },
    { name: 'size', type: 'size', defaultValue: 'md', initialValue: 'md' },
    { name: 'withPadding', type: 'boolean', defaultValue: false, initialValue: false },
  ],
};
