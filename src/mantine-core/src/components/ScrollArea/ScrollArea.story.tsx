import React from 'react';
import { storiesOf } from '@storybook/react';
import { useMantineTheme } from '@mantine/styles';
import { Text } from '../Text';
import { ScrollArea, ScrollAreaProps } from './ScrollArea';

function Wrapper(props: ScrollAreaProps) {
  const theme = useMantineTheme();
  return (
    <div
      style={{
        padding: 40,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
      }}
    >
      <ScrollArea
        {...props}
        style={{
          width: 400,
          height: 100,
          background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        }}
      >
        <Text style={{ width: 500 }} align="center">
          Horizontal scrollbars
        </Text>
      </ScrollArea>

      <ScrollArea
        {...props}
        style={{
          width: 400,
          height: 100,
          background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        }}
        mt="xl"
      >
        <Text style={{ height: 500 }} align="center">
          Vertical scrollbars
        </Text>
      </ScrollArea>

      <ScrollArea
        {...props}
        style={{
          width: 400,
          height: 100,
          background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        }}
        mt="xl"
      >
        <Text style={{ height: 500, width: 800 }} align="center">
          Both scrollbars
        </Text>
      </ScrollArea>
    </div>
  );
}

storiesOf('@mantine/core/ScrollArea', module)
  .add('General usage', () => <Wrapper />)
  .add('RTL', () => <Wrapper dir="rtl" />);
