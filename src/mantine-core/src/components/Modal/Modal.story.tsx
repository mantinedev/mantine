import React, { useState, useRef, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { Select } from '../Select/Select';
import { Autocomplete } from '../Autocomplete/Autocomplete';
import { Popover } from '../Popover/Popover';
import { ColorInput } from '../ColorInput/ColorInput';
import { Menu } from '../Menu/Menu';
import { Modal } from './Modal';
import { MultiSelect } from '../MultiSelect/MultiSelect';

function PopoverWrapper() {
  const [opened, setOpened] = useState(false);
  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      target={<Button onClick={() => setOpened((o) => !o)}>Toggle popover</Button>}
      styles={{ body: { width: 260 } }}
      position="bottom"
      withArrow
    >
      <div style={{ display: 'flex' }}>
        <Text size="sm">Thanks for stopping by and checking Mantine, you are awesome!</Text>
      </div>
    </Popover>
  );
}

function WrappedModal(
  props: Omit<React.ComponentPropsWithoutRef<typeof Modal>, 'opened' | 'onClose'>
) {
  const [opened, setOpened] = useState(false);

  return (
    <div style={{ padding: 50 }}>
      <Button onClick={() => setOpened(true)}>Open Modal</Button>
      <Modal opened={opened} onClose={() => setOpened(false)} {...props} />
    </div>
  );
}

storiesOf('@mantine/core/Modal/stories', module)
  .add('Content overflow', () => (
    <WrappedModal title="This title is so large that there is no space to fit it all on single line and it will wrap on the second one or may be even on the third one">
      IDecidedToPutSoMuchUnbreakableContentInsideModalSoThatItWillOverflow
    </WrappedModal>
  ))
  .add('Centered with overflow', () => (
    <WrappedModal title="Authentication form" centered overflow="outside">
      {Array(100)
        .fill('REACT IS NOT A FRAMEWORK')
        .map((c) => (
          <Text weight={700}>{c}</Text>
        ))}
    </WrappedModal>
  ))
  .add('With popper components', () => (
    <WrappedModal title="Modal with overlay items">
      <Select data={['react', 'ng']} placeholder="Select" />
      <Autocomplete data={['react', 'ng']} mt="md" placeholder="Autocomplete" />
      <MultiSelect data={['react', 'ng']} mt="md" mb="md" placeholder="MultiSelect" />
      <PopoverWrapper />
      <ColorInput mt="md" mb="md" placeholder="Color input" />
      <Menu>
        <Menu.Item>Hello</Menu.Item>
      </Menu>
    </WrappedModal>
  ))
  .add('Custom target', () => {
    const ref = useRef<HTMLDivElement>();
    const [mount, setMount] = useState(false);
    useEffect(() => {
      setMount(true);
    }, []);
    return (
      <>
        <div ref={ref}>target</div>
        {mount && (
          <WrappedModal title="Modal with overlay items" target="#docs-root">
            targeted
          </WrappedModal>
        )}
      </>
    );
  });
