import { createRef, useEffect, useState } from 'react';
import { Box } from '../../core';
import { Button } from '../Button';
import { Code } from '../Code';
import { InputBase } from '../InputBase';
import { MultiSelect } from '../MultiSelect';
import { NumberInput } from '../NumberInput';
import { Paper } from '../Paper';
import { Pill, PillGroup } from '../Pill';
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
      <ScrollArea h={200} type="always" offsetScrollbars="present">
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

export function OverflowIssue() {
  return (
    <div style={{ padding: 40 }}>
      <Box w={200}>
        <MultiSelect
          data={['This is a very long name to demonstrate the bug', 'Option2']}
          defaultValue={['This is a very long name to demonstrate the bug']}
          mb={10}
        />

        <ScrollArea w={200} scrollbars="y">
          <MultiSelect
            data={['This is a very long name to demonstrate the bug', 'Option2']}
            defaultValue={['This is a very long name to demonstrate the bug']}
          />
        </ScrollArea>
      </Box>
    </div>
  );
}

export function AutoOverflowIssue() {
  const [width, setWidth] = useState(150);
  const [height, setHeight] = useState(150);

  return (
    <div style={{ padding: 40 }}>
      <Box w={200}>
        <ScrollArea.Autosize offsetScrollbars type="auto" mah={200} maw={170}>
          <button onClick={() => setWidth((prev) => (prev === 150 ? 300 : 150))} style={{ width }}>
            Horizontal
          </button>

          <button
            onClick={() => setHeight((prev) => (prev === 150 ? 300 : 150))}
            style={{ height }}
          >
            Vertical
          </button>
        </ScrollArea.Autosize>
      </Box>
    </div>
  );
}

export function OnBottomReached() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });
  const [hasReachedBottom, setHasReachedBottom] = useState(false);
  const [customReachedBottom, setCustomReachedBottom] = useState(false);

  const [fsize, setFsize] = useState<string | number>(16);
  const scrollRef = createRef<HTMLDivElement>();

  useEffect(() => {
    setHasReachedBottom(false);
    setCustomReachedBottom(false);
    scrollRef.current?.scrollTo({ top: 0 });
  }, [fsize]);

  return (
    <Stack mt={16} w="100%" align="center" justify="center">
      <Paper withBorder h={100} w={200}>
        <ScrollArea
          w="100%"
          h={100}
          onScrollPositionChange={onScrollPositionChange}
          onBottomReached={() => setHasReachedBottom(true)}
          viewportRef={scrollRef}
          viewportProps={{
            onScroll: (e) => {
              // override viewport onScroll...
              const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
              // current impl:
              // if (scrollTop - (scrollHeight - clientHeight) >= 0) {
              // using math ceiling:
              // if (Math.ceil(scrollTop) + clientHeight >= scrollHeight) {
              // using threshold:
              const threshold = 1; // Allow 1px tolerance
              if (scrollTop + clientHeight >= scrollHeight - threshold) {
                setCustomReachedBottom(true);
              }
            },
          }}
        >
          {Array.from({ length: 7 }).map((_k, i) => (
            <Box h={40.5} key={`example-${i}`}>
              <h1 style={{ fontSize: `${fsize}px` }}>My Example</h1>
            </Box>
          ))}
        </ScrollArea>
      </Paper>
      <NumberInput value={fsize} onChange={setFsize} label="Font size (px)" />
      <div>
        Scroll position: <Code>{`{ x: ${scrollPosition.x}, y: ${scrollPosition.y} }`}</Code>
      </div>
      <div>
        Has Reached Bottom: <Code>{`{ ${hasReachedBottom} }`}</Code>
      </div>
      <div>
        Custom Has Reached Bottom: <Code>{`{ ${customReachedBottom} }`}</Code>
      </div>
    </Stack>
  );
}

export function PillGroupIssue() {
  const [pills, setPills] = useState<string[]>([]);

  const handleAdd = () => {
    const index = pills.length + 1;
    setPills((prev) => [...prev, 'Pill '.repeat(index).trim()]);
  };

  const handleClear = () => {
    setPills([]);
  };

  const handleRemove = (id: string) => {
    setPills((prev) => prev.filter((item) => item !== id));
  };

  return (
    <Stack p="md" w={250}>
      <Button onClick={handleAdd}>Add Pill</Button>
      <Button onClick={handleClear}>Clear</Button>
      <InputBase component="div" multiline>
        <ScrollArea.Autosize mah={120} scrollbars="y" type="always">
          <PillGroup>
            {pills.map((datumId) => (
              <Pill key={datumId} withRemoveButton onRemove={() => handleRemove(datumId)}>
                {datumId}
              </Pill>
            ))}
          </PillGroup>
        </ScrollArea.Autosize>
      </InputBase>
    </Stack>
  );
}
