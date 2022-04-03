import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { ScrollArea } from './ScrollArea';

const content = Array(10)
  .fill(0)
  .map((_, index) => (
    <p key={index}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam qui minima, voluptates aperiam
      labore delectus consequuntur tempore a sed ullam? Vitae ducimus amet distinctio, fugiat odio
      accusamus veniam sit hic.
    </p>
  ));

function OnScrollChange() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });
  return (
    <>
      <ScrollArea style={{ height: 200 }} onScrollPositionChange={onScrollPositionChange}>
        <div style={{ width: 600 }}>{content}</div>
      </ScrollArea>
      <div>
        scroll position x: {scrollPosition.x}, y: {scrollPosition.y}
      </div>
    </>
  );
}

storiesOf('ScrollArea', module)
  .add('Max height', () => (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <div style={{ maxHeight: 300, display: 'flex' }}>
        <ScrollArea style={{ backgroundColor: 'red' }}>{content}</ScrollArea>
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
