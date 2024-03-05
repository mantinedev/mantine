import React, { useState } from 'react';
import { ScrollArea } from './ScrollArea';

export default { title: 'ScrollArea' };

const content = Array(10)
  .fill(0)
  .map((_, index) => (
    <p key={index} style={{ margin: 0, padding: 0 }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam qui minima, voluptates aperiam
      labore delectus consequuntur tempore a sed ullam? Vitae ducimus amet distinctio, fugiat odio
      accusamus veniam sit hic.
    </p>
  ));

export function Usage() {
  return (
    <div style={{ background: 'pink', maxWidth: 300 }}>
      <ScrollArea h={200} type="always" offsetScrollbars scrollbars="y" bg="red" pb={0}>
        <div style={{ width: 600 }}>{content}</div>
      </ScrollArea>
    </div>
  );
}

export function OffsetScrollbars() {
  return (
    <div style={{ background: 'pink', maxWidth: 300 }}>
      <ScrollArea h={200} type="always" offsetScrollbars>
        <div style={{ background: 'pink' }}>{content}</div>
      </ScrollArea>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <ScrollArea h={200} type="always" offsetScrollbars unstyled>
        <div style={{ width: 600 }}>{content}</div>
      </ScrollArea>
    </div>
  );
}

export function OnScrollChange() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });
  return (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <ScrollArea h={200} onScrollPositionChange={onScrollPositionChange}>
        <div style={{ width: 600 }}>{content}</div>
      </ScrollArea>
      <div>
        scroll position x: {scrollPosition.x}, y: {scrollPosition.y}
      </div>
    </div>
  );
}

export function NeverType() {
  return (
    <ScrollArea h={200} type="never">
      <div style={{ width: 600 }}>{content}</div>
    </ScrollArea>
  );
}
