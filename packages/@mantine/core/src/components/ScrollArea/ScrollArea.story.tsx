/* eslint-disable no-console */
import { useState } from 'react';
import { Box } from '../../core';
import { Code } from '../Code';
import { Paper } from '../Paper';
import { Stack } from '../Stack';
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
      <ScrollArea
        h={200}
        scrollbars="y"
        onBottomReached={() => console.log('bottom')}
        onTopReached={() => console.log('top')}
      >
        <div style={{ width: 600 }}>{content}</div>
      </ScrollArea>
    </div>
  );
}

export function BottomReachedDecimal() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });
  const [hasReachedBottom, setHasReachedBottom] = useState(false);

  return (
    <Stack mt={16} w="100%" align="center" justify="center">
      <Paper withBorder h={100} w={200}>
        <ScrollArea
          w="100%"
          h={100}
          onScrollPositionChange={onScrollPositionChange}
          onBottomReached={() => setHasReachedBottom(true)}
        >
          {Array.from({ length: 7 }).map((_k, i) => (
            <Box h={40.5} key={`example-${i}`}>
              <h1 style={{ fontSize: '50.25px' }}>My Example</h1>
            </Box>
          ))}
        </ScrollArea>
      </Paper>

      <div>
        Scroll position: <Code>{`{ x: ${scrollPosition.x}, y: ${scrollPosition.y} }`}</Code>
      </div>
      <div>
        Has Reached Bottom: <Code>{`{ ${hasReachedBottom} }`}</Code>
      </div>
    </Stack>
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
