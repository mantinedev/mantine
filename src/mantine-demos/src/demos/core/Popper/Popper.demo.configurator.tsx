import React, { useState } from 'react';
import { Popper, PopperProps, Button, Paper, Center, Group, useMantineTheme } from '@mantine/core';

function Wrapper(props: PopperProps<HTMLDivElement>) {
  const [referenceElement, setReferenceElement] = useState(null);
  const [visible, setVisible] = useState(true);
  const theme = useMantineTheme();

  return (
    <Group position="center" spacing={0}>
      <Button ref={setReferenceElement} onClick={() => setVisible((m) => !m)}>
        Reference element
      </Button>

      <Popper
        mounted={visible}
        referenceElement={referenceElement}
        transition="pop-top-left"
        transitionDuration={200}
        arrowStyle={{
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        }}
        {...props}
      >
        <Paper
          style={{
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          }}
        >
          <Center style={{ height: 100, width: 200 }}>Popper content</Center>
        </Paper>
      </Popper>
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { useState } from 'react';
import { Popper, Button, Paper, Center, Group, useMantineTheme } from '@mantine/core';

function Demo() {
  const [referenceElement, setReferenceElement] = useState(null);
  const [visible, setVisible] = useState(true);
  const theme = useMantineTheme();

  return (
    <Group position="center">
      <Button ref={setReferenceElement} onClick={() => setVisible((m) => !m)}>
        Reference element
      </Button>

      <Popper
        ${props
          .split('\n')
          .map((part) => `      ${part}`)
          .join('\n')
          .trim()}
        mounted={visible}
        referenceElement={referenceElement}
        transition="pop-top-left"
        transitionDuration={200}
        arrowStyle={{
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        }}
      >
        <Paper
          style={{
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          }}
        >
          <Center style={{ height: 100, width: 200 }}>Popper content</Center>
        </Paper>
      </Popper>
    </Group>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: true },
  configurator: [
    {
      name: 'position',
      type: 'select',
      initialValue: 'bottom',
      defaultValue: 'bottom',
      data: [
        { label: 'Bottom', value: 'bottom' },
        { label: 'Top', value: 'top' },
        { label: 'Right', value: 'right' },
        { label: 'Left', value: 'left' },
      ],
    },
    {
      name: 'placement',
      type: 'segmented',
      initialValue: 'start',
      defaultValue: 'start',
      data: [
        { label: 'Start', value: 'start' },
        { label: 'Center', value: 'center' },
        { label: 'End', value: 'end' },
      ],
    },
    {
      name: 'gutter',
      type: 'number',
      initialValue: 5,
      defaultValue: 5,
      max: 20,
      min: -20,
    },
    {
      name: 'arrowSize',
      type: 'number',
      initialValue: 5,
      defaultValue: 3,
      max: 15,
      min: 0,
    },
    {
      name: 'withArrow',
      type: 'boolean',
      initialValue: true,
      defaultValue: false,
    },
  ],
};
