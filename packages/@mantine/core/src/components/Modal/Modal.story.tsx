/* eslint-disable no-console */
import { useDisclosure } from '@mantine/hooks';
import { Button } from '../Button';
import { Menu } from '../Menu';
import { ScrollArea } from '../ScrollArea';
import { Select } from '../Select';
import { Tabs } from '../Tabs';
import { Modal } from './Modal';
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

export function Stack() {
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
      <Modal
        opened={opened}
        onClose={close}
        title="Just a Modal"
        size="md"
        zIndex={73812}
        radius="md"
        unstyled
      >
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
