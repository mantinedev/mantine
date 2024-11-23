import { useDisclosure } from '@mantine/hooks';
import { Button } from '../Button';
import { useModalsStack } from '../Modal';
import { ScrollArea } from '../ScrollArea';
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
