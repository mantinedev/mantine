import { useEffect, useRef, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Button } from '../Button';
import { useModalsStack } from '../Modal';
import { ScrollArea } from '../ScrollArea';
import { Tabs } from '../Tabs';
import { Stack as MantineStack } from '../Stack';
import { Drawer } from './Drawer';

export default { title: 'Drawer' };

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tenetur, atque animi ducimus tempora iste distinctio harum nostrum eos tempore voluptatem, voluptas dolorem eveniet fugiat pariatur! Repellendus minus nulla non?';
const content = Array(20)
  .fill(0)
  .map((_, index) => (
    <p key={index} style={{ margin: 0 }}>
      {lorem}
    </p>
  ));

export function Usage() {
  const [opened, { open, close }] = useDisclosure(true);
  return (
    <div style={{ padding: 40 }}>
      <Button onClick={open}>Open modal</Button>
      {content}
      <Button onClick={open}>Open modal</Button>
      <Drawer opened={opened} onClose={close} title="Just a Drawer" size="md" zIndex={73812}>
        <input data-autofocus />
      </Drawer>
    </div>
  );
}

export function ScrollbarWithOffset() {
  const [opened, { open, close }] = useDisclosure(true);
  return (
    <div style={{ padding: 40 }}>
      <Button onClick={open}>Open modal</Button>
      <Button onClick={open}>Open modal</Button>
      <Drawer
        opened={opened}
        onClose={close}
        title="Just a Drawer"
        size="md"
        scrollAreaComponent={ScrollArea.Autosize}
        offset={8}
        radius="md"
      >
        {content}
      </Drawer>
    </div>
  );
}

export function FloatingVariant() {
  const [opened, { open, close }] = useDisclosure(true);
  return (
    <div style={{ padding: 40 }}>
      <Button onClick={open}>Open modal</Button>
      {content}
      <Button onClick={open}>Open modal</Button>
      <Drawer
        opened={opened}
        onClose={close}
        title="Just a Drawer"
        size="md"
        zIndex={73812}
        radius="md"
        offset={8}
        position="right"
      >
        <input data-autofocus />
      </Drawer>
    </div>
  );
}

export function WithTabs() {
  const [opened, { open, close }] = useDisclosure(true);
  return (
    <div style={{ padding: 40 }}>
      <Button onClick={open}>Open drawer</Button>
      <Drawer opened={opened} onClose={close} title="Just a Drawer" zIndex={73812}>
        <Tabs defaultValue="comment">
          <Tabs.List>
            <Tabs.Tab value="comment">Comment</Tabs.Tab>
            <Tabs.Tab value="task">Task</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="comment">
            <input />
          </Tabs.Panel>

          <Tabs.Panel value="task">
            <input />
          </Tabs.Panel>
        </Tabs>
      </Drawer>
    </div>
  );
}

export function Unstyled() {
  const [opened, { open, close }] = useDisclosure(true);
  return (
    <div style={{ padding: 40 }}>
      <Button onClick={open}>Open modal</Button>
      {content}
      <Button onClick={open}>Open modal</Button>
      <Drawer
        opened={opened}
        onClose={close}
        title="Just a Drawer"
        size="md"
        zIndex={73812}
        unstyled
      >
        <input data-autofocus />
      </Drawer>
    </div>
  );
}

export function CustomTransition() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div style={{ padding: 40 }}>
      <Button onClick={open}>Open modal</Button>
      {content}
      <Button onClick={open}>Open modal</Button>
      <Drawer
        opened={opened}
        onClose={close}
        title="Just a Drawer"
        size="md"
        transitionProps={{ transition: 'fade', duration: 200 }}
        overlayProps={{ blur: 10 }}
      >
        Drawer with some content
      </Drawer>
    </div>
  );
}

export function WithScroll() {
  return (
    <div style={{ padding: 40 }}>
      <Drawer opened onClose={() => {}} title="Just a Drawer" size="md">
        {content}
      </Drawer>
    </div>
  );
}

export function AutosizeScrollarea() {
  return (
    <div style={{ padding: 40 }}>
      <Drawer
        opened
        onClose={() => {}}
        title="Just a Drawer"
        size="md"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {content}
      </Drawer>
    </div>
  );
}

export function Stack() {
  const stack = useModalsStack(['first', 'second', 'third']);

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={() => stack.open('first')}>Open modal</Button>
      <Drawer.Stack>
        <Drawer {...stack.register('first')} title="First modal" overlayProps={{ blur: 3 }}>
          First modal
          {content}
          <Button onClick={() => stack.open('second')} fullWidth mt="md">
            Open second modal
          </Button>
        </Drawer>

        <Drawer {...stack.register('second')} title="Second modal" overlayProps={{ blur: 3 }}>
          Second modal
          <Button onClick={() => stack.open('third')} fullWidth mt="md">
            Open third modal
          </Button>
        </Drawer>

        <Drawer {...stack.register('third')} title="Third modal" overlayProps={{ blur: 3 }}>
          Third modal
          <Button onClick={() => stack.closeAll()} fullWidth mt="md">
            Close all
          </Button>
        </Drawer>
      </Drawer.Stack>
    </div>
  );
}

function Timer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div style={{ padding: 10, background: 'rgba(0,0,0,0.05)', borderRadius: 4 }}>
      Timer running: {seconds}s
    </div>
  );
}

export function KeepMountedMode() {
  const [displayNoneOpened, setDisplayNoneOpened] = useState(false);
  const [activityOpened, setActivityOpened] = useState(false);
  const refDisplayNone = useRef<HTMLInputElement>(null);
  const refActivity = useRef<HTMLInputElement>(null);
  const [refDisplayNoneVal, setRefDisplayNoneVal] = useState<string>('null');
  const [refActivityVal, setRefActivityVal] = useState<string>('null');

  useEffect(() => {
    const interval = setInterval(() => {
      setRefDisplayNoneVal(refDisplayNone.current ? 'active input ref' : 'null');
      setRefActivityVal(refActivity.current ? 'active input ref' : 'null');
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <h3>keepMountedMode="display-none"</h3>
      <p style={{ fontSize: 13, color: 'gray' }}>
        Timer keeps running and refs remain active when the drawer is closed.
      </p>
      <Button onClick={() => setDisplayNoneOpened(true)}>Open display-none Drawer</Button>
      <div style={{ marginTop: 10, fontSize: 14 }}>
        <strong>Current ref state:</strong> {refDisplayNoneVal}
      </div>

      <Drawer
        opened={displayNoneOpened}
        onClose={() => setDisplayNoneOpened(false)}
        title="keepMountedMode='display-none'"
        keepMounted
        keepMountedMode="display-none"
      >
        <MantineStack>
          <Timer />
          <input ref={refDisplayNone} placeholder="Type here..." />
        </MantineStack>
      </Drawer>

      <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #ccc' }} />

      <h3>keepMountedMode="activity" (default)</h3>
      <p style={{ fontSize: 13, color: 'gray' }}>
        Timer pauses/resets and refs are set to null when the drawer is closed.
      </p>
      <Button onClick={() => setActivityOpened(true)}>Open activity Drawer</Button>
      <div style={{ marginTop: 10, fontSize: 14 }}>
        <strong>Current ref state:</strong> {refActivityVal}
      </div>

      <Drawer
        opened={activityOpened}
        onClose={() => setActivityOpened(false)}
        title="keepMountedMode='activity'"
        keepMounted
        keepMountedMode="activity"
      >
        <MantineStack>
          <Timer />
          <input ref={refActivity} placeholder="Type here..." />
        </MantineStack>
      </Drawer>
    </div>
  );
}
