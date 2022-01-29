import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { ScrollArea } from '../ScrollArea';
import { Content } from '../demos/_content';

function OnScrollChange() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });
  return (
    <>
      <ScrollArea style={{ height: 200 }} onScrollPositionChange={onScrollPositionChange}>
        <div style={{ width: 600 }}>
          <Content />
        </div>
      </ScrollArea>
      <div>
        scroll position x: {scrollPosition.x}, y: {scrollPosition.y}
      </div>
    </>
  );
}

storiesOf('@mantine/core/ScrollArea/stories', module)
  .add('Max height', () => (
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
  ))
  .add('On scroll position change', () => (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <OnScrollChange />
    </div>
  ));
