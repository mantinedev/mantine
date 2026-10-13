import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { useDisclosure } from '@mantine/hooks';
import { MantineThemeProvider } from '../../core';
import { Button } from '../Button';
import { Card } from '../Card';
import { Group } from '../Group';
import { Menu } from '../Menu';
import { ScrollArea } from '../ScrollArea';
import { SegmentedControl } from '../SegmentedControl';
import { Select } from '../Select';
import { Stack } from '../Stack';
import { Table } from '../Table';
import { Tabs } from '../Tabs';
import { Text } from '../Text';
import { TextInput } from '../TextInput';
import { Modal } from './Modal';
import { useModal } from './use-modal';
import { useModalStackContext } from './use-modal-stack-context';
import { useModalsStack } from './use-modals-stack';

export default { title: 'Modal' };

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tenetur, atque animi ducimus tempora iste distinctio harum nostrum eos tempore voluptatem, voluptas dolorem eveniet fugiat pariatur! Repellendus minus nulla non?';

function generateContent(count: number) {
  return Array(count)
    .fill(0)
    .map((_, index) => (
      <p key={index} style={{ margin: 0 }}>
        {lorem}
      </p>
    ));
}

const content = generateContent(20);

export function Usage() {
  const [opened, { open, close }] = useDisclosure(true);
  return (
    <div style={{ padding: 40 }}>
      <Button onClick={open}>Open modal</Button>
      {content}
      <Button onClick={open}>Open modal</Button>
      <Modal
        opened={opened}
        onClose={close}
        title="Just a Modal"
        transitionProps={{ duration: 500, onExited: () => console.log('onExited') }}
        onExitTransitionEnd={() => console.log('onExitTransitionEnd')}
      >
        <input data-autofocus />
      </Modal>
    </div>
  );
}

export function ModalsStack() {
  const stack = useModalsStack(['first', 'second', 'third']);

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={() => stack.open('first')}>Open modal</Button>
      <Modal.Stack>
        <Modal {...stack.register('first')} title="First modal" overlayProps={{ blur: 3 }}>
          First modal
          {content}
          <Button onClick={() => stack.open('second')} fullWidth mt="md">
            Open second modal
          </Button>
        </Modal>

        <Modal {...stack.register('second')} title="Second modal" overlayProps={{ blur: 3 }}>
          Second modal
          <Button onClick={() => stack.open('third')} fullWidth mt="md">
            Open third modal
          </Button>
        </Modal>

        <Modal {...stack.register('third')} title="Third modal" overlayProps={{ blur: 3 }}>
          Third modal
          <Button onClick={() => stack.closeAll()} fullWidth mt="md">
            Close all
          </Button>
        </Modal>
      </Modal.Stack>
    </div>
  );
}

export function ModalsStackCentered() {
  const stack = useModalsStack(['first', 'second', 'third']);

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={() => stack.open('first')}>Open modal</Button>
      <Modal.Stack>
        <Modal {...stack.register('first')} title="First modal" centered>
          {generateContent(3)}
          <Button onClick={() => stack.open('second')} fullWidth mt="md">
            Open second modal
          </Button>
        </Modal>

        <Modal {...stack.register('second')} title="Second modal" centered>
          Second modal
          <Button onClick={() => stack.open('third')} fullWidth mt="md">
            Open third modal
          </Button>
        </Modal>

        <Modal {...stack.register('third')} title="Third modal" centered>
          {generateContent(2)}
          <Button onClick={() => stack.closeAll()} fullWidth mt="md">
            Close all
          </Button>
        </Modal>
      </Modal.Stack>
    </div>
  );
}

export function WithSelect() {
  const [opened, { open, close }] = useDisclosure(true);
  return (
    <div style={{ padding: 40 }}>
      <Button onClick={open}>Open modal</Button>
      <Modal opened={opened} onClose={close} title="Just a Modal">
        <Select data={['React', 'Angular']} searchable />
      </Modal>
    </div>
  );
}

export function WithMenu() {
  const [opened, { open, close }] = useDisclosure(true);
  return (
    <div style={{ padding: 40 }}>
      <Button onClick={open}>Open modal</Button>
      <Modal opened={opened} onClose={close} title="Just a Modal">
        <Menu>
          <Menu.Target>
            <Button>Toggle menu</Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>One</Menu.Item>
            <Menu.Item>Two</Menu.Item>
            <Menu.Item>Three</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Modal>
    </div>
  );
}

export function OpenedFromMenu() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div style={{ padding: 40 }}>
      <Button onClick={open} mr="md">
        Open modal directly
      </Button>
      <Menu>
        <Menu.Target>
          <Button>Menu...</Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item onClick={open}>Open modal from menu</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Modal opened={opened} onClose={close} title="Just a Modal">
        <input data-autofocus placeholder="should be focused" />
      </Modal>
    </div>
  );
}

export function ConsistentHeaderHeight() {
  const [opened, { open, close }] = useDisclosure(true);
  const [withCloseButton, handlers] = useDisclosure(true);

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={open}>Open modal</Button>
      {content}
      <Button onClick={open}>Open modal</Button>
      <Modal
        opened={opened}
        onClose={close}
        title="Toggle close button"
        withCloseButton={withCloseButton}
        zIndex={73812}
      >
        <Button onClick={handlers.toggle}>Toggle close button</Button>
      </Modal>
    </div>
  );
}

export function WithTabs() {
  const [opened, { open, close }] = useDisclosure(true);
  return (
    <div style={{ padding: 40 }}>
      <Button onClick={open}>Open modal</Button>
      <Modal opened={opened} onClose={close} title="Just a Modal" zIndex={73812}>
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
      </Modal>
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
      <Modal opened={opened} onClose={close} title="Just a Modal" size="md" zIndex={73812} unstyled>
        <input data-autofocus />
      </Modal>
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
      <Modal
        opened={opened}
        onClose={close}
        title="Just a Modal"
        size="md"
        transitionProps={{ transition: 'fade', duration: 200 }}
        overlayProps={{ blur: 10 }}
      >
        Modal with some content
      </Modal>
    </div>
  );
}

export function Centered() {
  return (
    <div style={{ padding: 40 }}>
      <Modal opened onClose={() => {}} title="Just a Modal" centered>
        Centered modal
      </Modal>
    </div>
  );
}

export function FullScreen() {
  return (
    <div style={{ padding: 40 }}>
      <Modal opened onClose={() => {}} title="Just a Modal" fullScreen>
        Fullscreen modal
      </Modal>
    </div>
  );
}

export function FullScreenBelow() {
  return (
    <div style={{ padding: 40 }}>
      <Modal opened onClose={() => {}} title="Just a Modal" fullScreenBelow="md">
        Full screen below md breakpoint, resize the viewport to see the change
      </Modal>
    </div>
  );
}

export function WithScroll() {
  return (
    <div style={{ padding: 40 }}>
      <Modal opened onClose={() => {}} title="Just a Modal" size="md">
        {content}
      </Modal>
    </div>
  );
}

export function FullscreenWithScroll() {
  return (
    <div style={{ padding: 40 }}>
      <Modal opened onClose={() => {}} title="Just a Modal" size="md" fullScreen>
        {content}
        {content}
        {content}
      </Modal>
    </div>
  );
}

export function FullscreenWithScrollArea() {
  return (
    <div style={{ padding: 40 }}>
      <Modal
        opened
        onClose={() => {}}
        title="Just a Modal"
        size="md"
        fullScreen
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {content}
        {content}
        {content}
      </Modal>
    </div>
  );
}

export function AutosizeScrollarea() {
  return (
    <div style={{ padding: 40 }}>
      <Modal
        opened
        onClose={() => {}}
        title="Just a Modal"
        size="md"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {content}
      </Modal>
    </div>
  );
}

export function NestedModals() {
  const [parentOpened, { open: parentOpen, close: parentClose }] = useDisclosure(false);
  const [nestedOpened, { open: nestedOpen, close: nestedClose }] = useDisclosure(false);

  return (
    <div style={{ padding: 40 }}>
      <Modal opened={parentOpened} onClose={parentClose} title="Parent Modal" size={1400} centered>
        <div>{generateContent(10)}</div>

        <Button onClick={nestedOpen}>Open Nested</Button>

        <Modal opened={nestedOpened} onClose={nestedClose} title="Nested Modal" centered>
          <div>Nested Content</div>
        </Modal>
      </Modal>

      <Button onClick={parentOpen}>Open Parent</Button>
    </div>
  );
}

export function WithScrollArea() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Modal with scroll</p>);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Header is sticky">
        <Stack>
          <Card>Top</Card>
          <ScrollArea.Autosize h={200}>{content}</ScrollArea.Autosize>
          <Card>Bottom</Card>
        </Stack>
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
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
        Timer keeps running and refs remain active when the modal is closed.
      </p>
      <Button onClick={() => setDisplayNoneOpened(true)}>Open display-none Modal</Button>
      <div style={{ marginTop: 10, fontSize: 14 }}>
        <strong>Current ref state:</strong> {refDisplayNoneVal}
      </div>

      <Modal
        opened={displayNoneOpened}
        onClose={() => setDisplayNoneOpened(false)}
        title="keepMountedMode='display-none'"
        keepMounted
        keepMountedMode="display-none"
      >
        <Stack>
          <Timer />
          <input ref={refDisplayNone} placeholder="Type here..." />
        </Stack>
      </Modal>

      <hr style={{ margin: '40px 0', border: 'none', borderTop: '1px solid #ccc' }} />

      <h3>keepMountedMode="activity" (default)</h3>
      <p style={{ fontSize: 13, color: 'gray' }}>
        Timer pauses/resets and refs are set to null when the modal is closed.
      </p>
      <Button onClick={() => setActivityOpened(true)}>Open activity Modal</Button>
      <div style={{ marginTop: 10, fontSize: 14 }}>
        <strong>Current ref state:</strong> {refActivityVal}
      </div>

      <Modal
        opened={activityOpened}
        onClose={() => setActivityOpened(false)}
        title="keepMountedMode='activity'"
        keepMounted
        keepMountedMode="activity"
      >
        <Stack>
          <Timer />
          <input ref={refActivity} placeholder="Type here..." />
        </Stack>
      </Modal>
    </div>
  );
}

function SharedStackModals() {
  const [first, firstHandlers] = useDisclosure(false);
  const [second, secondHandlers] = useDisclosure(false);
  const [third, thirdHandlers] = useDisclosure(false);
  const stack = useModalStackContext();

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={firstHandlers.open}>Open modal</Button>
      <p>Opened modals: {stack.stack.length}</p>

      <Modal
        opened={first}
        onClose={firstHandlers.close}
        title="First modal"
        overlayProps={{ blur: 3 }}
      >
        First modal
        {content}
        <Button onClick={secondHandlers.open} fullWidth mt="md">
          Open second modal
        </Button>
      </Modal>

      <Modal opened={second} onClose={secondHandlers.close} title="Second modal">
        Second modal
        <Button onClick={thirdHandlers.open} fullWidth mt="md">
          Open third modal
        </Button>
      </Modal>

      <Modal opened={third} onClose={thirdHandlers.close} title="Third modal">
        Third modal
        <Button onClick={stack.closeAll} fullWidth mt="md">
          Close all
        </Button>
      </Modal>
    </div>
  );
}

export function ThemeOverlayStack() {
  return (
    <MantineThemeProvider theme={{ overlayStack: true }}>
      <SharedStackModals />
    </MantineThemeProvider>
  );
}

export function ThemeOverlayStackWithoutTransform() {
  return (
    <MantineThemeProvider theme={{ overlayStack: { withStackTransform: false } }}>
      <SharedStackModals />
    </MantineThemeProvider>
  );
}

function ScopedStackInfo({ label }: { label: string }) {
  const ctx = useModalStackContext();

  return (
    <Stack gap="xs">
      <div data-testid={`scope-${label}`}>
        Stack {label}: [{ctx.stack.join(', ')}]
      </div>
      <Button variant="default" onClick={ctx.closeAll}>
        Close all in stack {label}
      </Button>
    </Stack>
  );
}

function ScopedStacksContent() {
  const a = useModalsStack(['first', 'second']);
  const b = useModalsStack(['first', 'second']);

  return (
    <div style={{ padding: 40 }}>
      <Stack align="flex-start">
        <Button onClick={() => a.open('first')}>Open A first</Button>
        <Button onClick={() => b.open('first')}>Open B first</Button>
      </Stack>

      <Modal.Stack>
        <Modal {...a.register('first')} title="A: first">
          <Stack>
            <Button onClick={() => a.open('second')}>Open A second</Button>
            <Button onClick={() => b.open('first')}>Open B first</Button>
            <ScopedStackInfo label="A" />
          </Stack>
        </Modal>
        <Modal {...a.register('second')} title="A: second">
          <Stack>
            <Button onClick={() => b.open('first')}>Open B first</Button>
            <ScopedStackInfo label="A" />
          </Stack>
        </Modal>
      </Modal.Stack>

      <Modal.Stack>
        <Modal {...b.register('first')} title="B: first">
          <Stack>
            <Button onClick={() => b.open('second')}>Open B second</Button>
            <Button onClick={() => a.open('second')}>Open A second</Button>
            <ScopedStackInfo label="B" />
          </Stack>
        </Modal>
        <Modal {...b.register('second')} title="B: second">
          <ScopedStackInfo label="B" />
        </Modal>
      </Modal.Stack>
    </div>
  );
}

export function ThemeOverlayStackScopedStacks() {
  return (
    <MantineThemeProvider theme={{ overlayStack: true }}>
      <ScopedStacksContent />
    </MantineThemeProvider>
  );
}

function UseModalCounter() {
  const [count, setCount] = useState(0);
  const modal = useModal({
    title: `Count: ${count}`,
    children: (
      <Stack>
        <div>Count inside modal: {count}</div>
        <Button onClick={() => setCount((c) => c + 1)}>Increment from modal</Button>
      </Stack>
    ),
  });

  return (
    <Stack align="flex-start">
      <Button onClick={() => modal.open()}>Open managed modal</Button>
      <Button variant="default" onClick={() => setCount((c) => c + 1)}>
        Increment outside ({count})
      </Button>
    </Stack>
  );
}

export function UseModalHook() {
  return (
    <div style={{ padding: 40 }}>
      <UseModalCounter />
    </div>
  );
}

export function UseModalKeepMounted() {
  const modal = useModal({
    title: 'Kept mounted',
    keepMounted: true,
    children: <TextInput label="Name" placeholder="Type, close, reopen" data-autofocus />,
  });

  return (
    <div style={{ padding: 40 }}>
      <Button onClick={() => modal.open()}>Open keepMounted modal</Button>
    </div>
  );
}

function UseModalStackedItem({ label }: { label: string }) {
  const modal = useModal({
    title: label,
    children: (
      <Stack>
        <Select data={['React', 'Vue', 'Svelte']} label="Framework" />
        <UseModalStackedButton label={`${label} / nested`} />
      </Stack>
    ),
  });

  return <Button onClick={() => modal.open()}>Open {label}</Button>;
}

function UseModalStackedButton({ label }: { label: string }) {
  const modal = useModal({ title: label, children: 'Nested managed modal' });
  return (
    <Button variant="default" onClick={() => modal.open({ size: 'xs' })}>
      Open {label}
    </Button>
  );
}

export function UseModalStacked() {
  return (
    <div style={{ padding: 40 }}>
      <Stack align="flex-start">
        <UseModalStackedItem label="First" />
        <UseModalStackedItem label="Second" />
      </Stack>
    </div>
  );
}

export function UseModalSharedStack() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <MantineThemeProvider theme={{ overlayStack: true }}>
      <Modal.Outlet />
      <div style={{ padding: 40 }}>
        <Stack align="flex-start">
          <Button onClick={open}>Open regular modal</Button>
          <UseModalStackedItem label="Managed" />
        </Stack>
        <Modal opened={opened} onClose={close} title="Regular modal">
          <UseModalStackedButton label="Managed from regular" />
        </Modal>
      </div>
    </MantineThemeProvider>
  );
}

export function UseModalExplicitOutlet() {
  return (
    <div style={{ padding: 40 }}>
      <Modal.Outlet />
      <UseModalStackedItem label="Rendered in Modal.Outlet" />
    </div>
  );
}

const perfUsers = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user-${index + 1}@mantine.dev`,
}));

type PerfUser = (typeof perfUsers)[number];
type PerfMode = 'use-modal' | 'inline' | 'none';

function DeleteModalContent({ user, onClose }: { user: PerfUser; onClose: () => void }) {
  return (
    <Stack>
      <Text size="sm">Are you sure you want to delete {user.name}?</Text>
      <Button color="red" onClick={onClose}>
        Delete {user.name}
      </Button>
    </Stack>
  );
}

function UseModalRow({ user, tick }: { user: PerfUser; tick: number }) {
  const modal = useModal({
    title: `Delete ${user.name}`,
    children: <DeleteModalContent user={user} onClose={() => modal.close()} />,
  });

  return (
    <Table.Tr>
      <Table.Td>{user.name}</Table.Td>
      <Table.Td>{user.email}</Table.Td>
      <Table.Td>{tick}</Table.Td>
      <Table.Td>
        <Button size="compact-xs" color="red" variant="light" onClick={() => modal.open()}>
          Delete
        </Button>
      </Table.Td>
    </Table.Tr>
  );
}

function InlineModalRow({ user, tick }: { user: PerfUser; tick: number }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Table.Tr>
      <Table.Td>{user.name}</Table.Td>
      <Table.Td>{user.email}</Table.Td>
      <Table.Td>{tick}</Table.Td>
      <Table.Td>
        <Modal opened={opened} onClose={close} title={`Delete ${user.name}`}>
          <DeleteModalContent user={user} onClose={close} />
        </Modal>
        <Button size="compact-xs" color="red" variant="light" onClick={open}>
          Delete
        </Button>
      </Table.Td>
    </Table.Tr>
  );
}

function NoModalRow({ user, tick }: { user: PerfUser; tick: number }) {
  return (
    <Table.Tr>
      <Table.Td>{user.name}</Table.Td>
      <Table.Td>{user.email}</Table.Td>
      <Table.Td>{tick}</Table.Td>
      <Table.Td>
        <Button size="compact-xs" color="red" variant="light">
          Delete
        </Button>
      </Table.Td>
    </Table.Tr>
  );
}

const perfRows: Record<PerfMode, React.FC<{ user: PerfUser; tick: number }>> = {
  'use-modal': UseModalRow,
  inline: InlineModalRow,
  none: NoModalRow,
};

export function UseModalTablePerf() {
  const [mode, setMode] = useState<PerfMode>('use-modal');
  const [tick, setTick] = useState(0);
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const Row = perfRows[mode];
  const rows = perfUsers.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()));

  const measure = async (runs: number) => {
    const durations: number[] = [];
    for (let i = 0; i < runs; i += 1) {
      await new Promise((resolve) => requestAnimationFrame(resolve));
      const start = performance.now();
      flushSync(() => setTick((t) => t + 1));
      durations.push(performance.now() - start);
    }
    const sorted = [...durations].sort((a, b) => a - b);
    const median = sorted[Math.floor(sorted.length / 2)];
    const avg = durations.reduce((a, b) => a + b, 0) / durations.length;
    setResult(
      `${mode}: median ${median.toFixed(1)}ms, avg ${avg.toFixed(1)}ms, min ${sorted[0].toFixed(1)}ms, max ${sorted[sorted.length - 1].toFixed(1)}ms (${runs} runs)`
    );
  };

  return (
    <div style={{ padding: 40 }}>
      <Group mb="md" align="flex-end">
        <SegmentedControl
          value={mode}
          onChange={(value) => setMode(value as PerfMode)}
          data={[
            { label: 'useModal per row', value: 'use-modal' },
            { label: 'Inline Modal per row', value: 'inline' },
            { label: 'No modal', value: 'none' },
          ]}
        />
        <TextInput
          label="Filter"
          placeholder="Type to re-render rows"
          value={query}
          onChange={(event) => setQuery(event.currentTarget.value)}
        />
        <Button onClick={() => setTick((t) => t + 1)}>Re-render rows</Button>
        <Button variant="default" onClick={() => measure(20)}>
          Measure 20 re-renders
        </Button>
      </Group>
      <Text size="sm" mb="md" data-testid="perf-result">
        {result || 'No measurement yet'}
      </Text>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Tick</Table.Th>
            <Table.Th />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows.map((user) => (
            <Row key={user.id} user={user} tick={tick} />
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
}
