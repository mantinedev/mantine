import React, { forwardRef } from 'react';
import { MantineDemo } from '@mantine/ds';
import { createPolymorphicComponent, Button, ButtonProps, Group } from '@mantine/core';

const code = `
import { forwardRef } from 'react';
import { createPolymorphicComponent, Button, ButtonProps, Group } from '@mantine/core';

interface CustomButtonProps extends ButtonProps {
  label: string;
}

// Default root element is 'button', but it can be changed with 'component' prop
const CustomButton = createPolymorphicComponent<'button', CustomButtonProps>(
  forwardRef<HTMLButtonElement, CustomButtonProps>(({ label, ...others }, ref) => (
    <Button {...others} ref={ref}>
      {label}
    </Button>
  ))
);

// Default root element is 'a', but it can be changed with 'component' prop
const CustomButtonAnchor = createPolymorphicComponent<'a', CustomButtonProps>(
  forwardRef<HTMLAnchorElement, CustomButtonProps>(({ label, ...others }, ref) => (
    <Button component="a" {...others} ref={ref}>
      {label}
    </Button>
  ))
);

function Demo() {
  return (
    <Group>
      <CustomButton label="Button by default" color="cyan" />
      <CustomButtonAnchor label="Anchor by default" href="https://mantine.dev" target="_blank" />
    </Group>
  );
}
`;

interface CustomButtonProps extends ButtonProps {
  label: string;
}

const CustomButton = createPolymorphicComponent<'button', CustomButtonProps>(
  forwardRef<HTMLButtonElement, CustomButtonProps>(({ label, ...others }, ref) => (
    <Button {...others} ref={ref}>
      {label}
    </Button>
  ))
);

const CustomButtonAnchor = createPolymorphicComponent<'a', CustomButtonProps>(
  forwardRef<HTMLAnchorElement, CustomButtonProps>(({ label, ...others }, ref) => (
    <Button component="a" {...others} ref={ref}>
      {label}
    </Button>
  ))
);

function Demo() {
  return (
    <Group>
      <CustomButton label="Button by default" color="cyan" />
      <CustomButtonAnchor label="Anchor by default" href="https://mantine.dev" target="_blank" />
    </Group>
  );
}

export const createPolymorphic: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
