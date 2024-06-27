import { List, ListProps } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

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

const code = `
import { List } from '@mantine/core';

function Demo() {
  return (
    <List{{props}}>
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
  code,
  controls: [
    {
      prop: 'type',
      type: 'segmented',
      data: [
        { value: 'unordered', label: 'Unordered' },
        { value: 'ordered', label: 'Ordered' },
      ],
      initialValue: 'unordered',
      libraryValue: 'unordered',
    },
    { prop: 'size', type: 'size', libraryValue: 'md', initialValue: 'md' },
    { prop: 'withPadding', type: 'boolean', libraryValue: false, initialValue: false },
  ],
};
