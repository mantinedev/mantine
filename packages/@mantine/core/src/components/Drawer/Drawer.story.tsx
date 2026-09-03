import { useEffect, useRef, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { MantineThemeProvider } from '../../core';
import { Button } from '../Button';
import { Modal, useDrawerStackContext, useModalsStack } from '../Modal';
import { ScrollArea } from '../ScrollArea';
import { Stack as MantineStack } from '../Stack';
import { Tabs } from '../Tabs';
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

export function FullScreen() {
  return (
    <div style={{ padding: 40 }}>
      <Drawer opened onClose={() => {}} title="Just a Drawer" fullScreen>
        Full screen drawer
      </Drawer>
    </div>
  );
}

export function FullScreenBelow() {
  return (
    <div style={{ padding: 40 }}>
      <Drawer opened onClose={() => {}} title="Just a Drawer" size="md" fullScreenBelow="md">
        Full screen below md breakpoint, resize the viewport to see the change
      </Drawer>
    </div>
  );
}

export function FullScreenBelowBottom() {
  return (
    <div style={{ padding: 40 }}>
      <Drawer
        opened
        onClose={() => {}}
        title="Just a Drawer"
        position="bottom"
        size="md"
        fullScreenBelow="md"
      >
        Full screen below md breakpoint, resize the viewport to see the change
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

type StackPosition = 'left' | 'right' | 'top' | 'bottom';

interface StackDemoProps {
  position?: StackPosition;
  sizes?: [string, string, string];
  offset?: number;
  radius?: string;
}

function StackDemo({ position, sizes = ['md', 'md', 'md'], offset, radius }: StackDemoProps) {
  const stack = useModalsStack(['first', 'second', 'third']);
  const shared = { position, offset, radius, overlayProps: { blur: 3 } };

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={() => stack.open('first')}>Open drawer</Button>
      <Drawer.Stack>
        <Drawer {...stack.register('first')} {...shared} size={sizes[0]} title="First drawer">
          First drawer
          {content}
          <Button onClick={() => stack.open('second')} fullWidth mt="md">
            Open second drawer
          </Button>
        </Drawer>

        <Drawer {...stack.register('second')} {...shared} size={sizes[1]} title="Second drawer">
          Second drawer
          <Button onClick={() => stack.open('third')} fullWidth mt="md">
            Open third drawer
          </Button>
        </Drawer>

        <Drawer {...stack.register('third')} {...shared} size={sizes[2]} title="Third drawer">
          Third drawer
          <Button onClick={() => stack.closeAll()} fullWidth mt="md">
            Close all
          </Button>
        </Drawer>
      </Drawer.Stack>
    </div>
  );
}

export function Stack() {
  return <StackDemo />;
}

export function StackRight() {
  return <StackDemo position="right" />;
}

export function StackBottom() {
  return <StackDemo position="bottom" />;
}

export function StackTop() {
  return <StackDemo position="top" />;
}

export function StackMixedSizes() {
  return <StackDemo sizes={['xl', 'md', 'sm']} />;
}

export function StackFloating() {
  return <StackDemo offset={16} radius="md" />;
}

export function StackWithOffset() {
  return <StackDemo offset={5} radius="md" />;
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

function SharedStackDrawers() {
  const [first, firstHandlers] = useDisclosure(false);
  const [second, secondHandlers] = useDisclosure(false);
  const [third, thirdHandlers] = useDisclosure(false);
  const [modal, modalHandlers] = useDisclosure(false);
  const stack = useDrawerStackContext();

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={firstHandlers.open}>Open drawer</Button>
      <p>Opened drawers: {stack.stack.length}</p>

      <Drawer
        opened={first}
        onClose={firstHandlers.close}
        title="First drawer"
        overlayProps={{ blur: 3 }}
      >
        First drawer
        {content}
        <Button onClick={secondHandlers.open} fullWidth mt="md">
          Open second drawer
        </Button>
      </Drawer>

      <Drawer opened={second} onClose={secondHandlers.close} title="Second drawer">
        Second drawer
        <Button onClick={thirdHandlers.open} fullWidth mt="md">
          Open third drawer
        </Button>
        <Button onClick={modalHandlers.open} variant="default" fullWidth mt="md">
          Open modal (separate stack)
        </Button>
      </Drawer>

      <Drawer opened={third} onClose={thirdHandlers.close} title="Third drawer" position="right">
        Third drawer
        <Button onClick={stack.closeAll} fullWidth mt="md">
          Close all
        </Button>
      </Drawer>

      <Modal opened={modal} onClose={modalHandlers.close} title="Modal above drawers" centered>
        Modals and drawers are stacked separately, this modal is not a part of the drawers stack.
      </Modal>
    </div>
  );
}

export function ThemeOverlayStack() {
  return (
    <MantineThemeProvider theme={{ overlayStack: true }}>
      <SharedStackDrawers />
    </MantineThemeProvider>
  );
}
