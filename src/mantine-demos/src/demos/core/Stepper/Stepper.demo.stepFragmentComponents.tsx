import React from 'react';
import { IconCheck } from '@tabler/icons-react';
import { MantineDemo } from '@mantine/ds';
import { Group, Stepper, Text } from '@mantine/core';

const code = `
import { Stepper, Group, Text } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

function Label(props: { step: number }) {
  return (
    <>Step {props.step + 1}</>
  );
}

function ProgressIcon(props: { step: number }) {
  return (
    <Text color="blue">{props.step + 1}</Text>
  );
}

function CompletedIcon(props: { step: number }) {
  return (
    <Group spacing={0} noWrap>
      <Text>{props.step + 1}</Text>
      <IconCheck size={16} />
    </Group>
  );
}

function Demo() {
  return (
    <Stepper active={1} breakpoint="sm" progressIcon={ProgressIcon} completedIcon={CompletedIcon}>
      <Stepper.Step label={Label} description="Create an account" />
      <Stepper.Step label={Label} description="Verify email" />
      <Stepper.Step label={Label} description="Get full access" />
    </Stepper>
  );
}
`;

function Label(props: { step: number }) {
  return <>Step {props.step + 1}</>;
}

function ProgressIcon(props: { step: number }) {
  return <Text color="blue">{props.step + 1}</Text>;
}

function CompletedIcon(props: { step: number }) {
  return (
    <Group spacing={0} noWrap>
      <Text>{props.step + 1}</Text>
      <IconCheck size={16} />
    </Group>
  );
}

function Demo() {
  return (
    <Stepper active={1} breakpoint="sm" progressIcon={ProgressIcon} completedIcon={CompletedIcon}>
      <Stepper.Step label={Label} description="Create an account" />
      <Stepper.Step label={Label} description="Verify email" />
      <Stepper.Step label={Label} description="Get full access" />
    </Stepper>
  );
}

export const stepFragmentComponents: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
