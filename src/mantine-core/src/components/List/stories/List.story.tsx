import React from 'react';
import { storiesOf } from '@storybook/react';
import { RtlProvider } from '@mantine/ds/src';
import { List } from '../List';

storiesOf('@mantine/core/List/stories', module).add('RTL', () => (
  <RtlProvider>
    <List style={{ maxWidth: 500 }} mx="auto" mt="xl">
      <List.Item>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      <List.Item>Submit a pull request once you are done</List.Item>
    </List>
  </RtlProvider>
));
