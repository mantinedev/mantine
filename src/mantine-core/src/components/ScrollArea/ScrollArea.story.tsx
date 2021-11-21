import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_COLORS } from '@mantine/styles/src/theme/default-colors';
import { DarkStory } from '../../../demos';
import { Text } from '../Text';
import { ScrollArea } from './ScrollArea';

storiesOf('@mantine/core/ScrollArea', module)
  .add('General usage', () => (
    <div style={{ padding: 40, backgroundColor: '#eee' }}>
      <ScrollArea style={{ width: 400, height: 100, background: '#fff' }}>
        <Text style={{ width: 500 }} align="center">
          Horizontal scrollbars
        </Text>
      </ScrollArea>

      <ScrollArea style={{ width: 400, height: 100, background: '#fff' }} mt="xl">
        <Text style={{ height: 500 }} align="center">
          Vertical scrollbars
        </Text>
      </ScrollArea>

      <ScrollArea style={{ width: 400, height: 100, background: '#fff' }} mt="xl">
        <Text style={{ height: 500, width: 800 }} align="center">
          Both scrollbars
        </Text>
      </ScrollArea>
    </div>
  ))
  .add('RTL', () => (
    <div style={{ padding: 40, backgroundColor: '#eee' }}>
      <ScrollArea style={{ width: 400, height: 100, background: '#fff' }} dir="rtl">
        <Text style={{ height: 500, width: 800 }} align="center">
          Both scrollbars
        </Text>
      </ScrollArea>
    </div>
  ))
  .add('Dark theme', () => (
    <DarkStory>
      <div style={{ padding: 40 }}>
        <ScrollArea style={{ width: 400, height: 100, background: DEFAULT_COLORS.dark[8] }}>
          <Text style={{ width: 500 }} align="center">
            Horizontal scrollbars
          </Text>
        </ScrollArea>

        <ScrollArea style={{ width: 400, height: 100, background: DEFAULT_COLORS.dark[8] }} mt="xl">
          <Text style={{ height: 500 }} align="center">
            Vertical scrollbars
          </Text>
        </ScrollArea>

        <ScrollArea style={{ width: 400, height: 100, background: DEFAULT_COLORS.dark[8] }} mt="xl">
          <Text style={{ height: 500, width: 800 }} align="center">
            Both scrollbars
          </Text>
        </ScrollArea>
      </div>
    </DarkStory>
  ));
