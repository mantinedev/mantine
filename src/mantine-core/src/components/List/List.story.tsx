import React from 'react';
import { storiesOf } from '@storybook/react';
import { CommentIcon } from '@primer/octicons-react';
import { ThemeIcon } from '../ThemeIcon/ThemeIcon';
import { List } from './List';

storiesOf('@mantine/core/List', module).add('General usage', () => (
  <div style={{ padding: 40, maxWidth: 300 }}>
    <div>
      <List
        spacing="xs"
        withPadding
        icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <CommentIcon size={12} />
          </ThemeIcon>
        }
      >
        <List.Item>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iure ullam dolore
          labore repellat consequuntur libero autem eos ex vitae nihil odit fuga possimus hic,
          dignissimos laboriosam delectus, est voluptas!
        </List.Item>
        <List.Item
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <CommentIcon size={12} />
            </ThemeIcon>
          }
        >
          List item 2
        </List.Item>
        <List.Item>List item 3</List.Item>
      </List>
    </div>
  </div>
));
