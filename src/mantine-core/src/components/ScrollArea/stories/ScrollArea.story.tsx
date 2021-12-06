import React from 'react';
import { storiesOf } from '@storybook/react';
import { ScrollArea } from '../ScrollArea';
import { Content } from '../demos/_content';

storiesOf('@mantine/core/ScrollArea/stories', module).add('Max height', () => (
  <div style={{ padding: 40, maxWidth: 300 }}>
    <div style={{ maxHeight: 300, display: 'flex' }}>
      <ScrollArea style={{ backgroundColor: 'red' }}>
        <Content />
      </ScrollArea>
    </div>

    <div style={{ maxHeight: 300, display: 'flex', marginTop: 30 }}>
      <ScrollArea style={{ backgroundColor: 'red', flex: 1 }}>Not scrollable</ScrollArea>
    </div>
  </div>
));
