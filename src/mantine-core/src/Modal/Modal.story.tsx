import React, { useState, useRef, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/styles';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';
import { Select } from '../Select/Select';
import { Autocomplete } from '../Autocomplete/Autocomplete';
import { Popover } from '../Popover/Popover';
import { ColorInput } from '../ColorInput/ColorInput';
import { Menu } from '../Menu/Menu';
import { Modal } from './Modal';
import { MultiSelect } from '../MultiSelect/MultiSelect';

const content = Array(20)
  .fill(0)
  .map((_, index) => (
    <p key={index}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eum nihil odit, voluptatem
      quae quibusdam sint omnis corporis beatae quod sunt magni sequi consequatur rem necessitatibus
      quia eos! Accusamus, doloribus!
    </p>
  ));

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

storiesOf('Modal', module)
  .add('Without portal', () => <WrappedModal withinPortal={false}>test</WrappedModal>)
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
  .add('With popover components', () => (
    <WrappedModal title="Modal with overlay items">
      <Select data={['react', 'ng']} placeholder="Select" />
      <Autocomplete data={['react', 'ng']} mt="md" placeholder="Autocomplete" />
      <MultiSelect data={['react', 'ng']} mt="md" mb="md" placeholder="MultiSelect" />
      <Popover position="bottom" withArrow>
        <Popover.Target>
          <Button>Toggle popover</Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Text size="sm">Thanks for stopping by and checking Mantine, you are awesome!</Text>
        </Popover.Dropdown>
      </Popover>
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
  })
  .add('Default radius on MantineProvider', () => (
    <MantineProvider theme={{ defaultRadius: 0 }} inherit>
      <WrappedModal title="Modal with default radius">default radius</WrappedModal>
    </MantineProvider>
  ))
  .add('Fullscreen', () => (
    <>
      <WrappedModal fullScreen>Full screen modal</WrappedModal>
      {content}
    </>
  ));
