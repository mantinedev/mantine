import { Button, ButtonProps, createPolymorphicComponent, Group } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { createPolymorphicComponent, Button, ButtonProps, Group } from '@mantine/core';

interface CustomButtonProps extends ButtonProps {
  label: string;
}

// Default root element is 'button', but it can be changed with 'component' prop
const CustomButton = createPolymorphicComponent<'button', CustomButtonProps>(
  ({ label, ...others }: CustomButtonProps) => <Button {...others}>{label}</Button>
);

// Default root element is 'a', but it can be changed with 'component' prop
const CustomButtonAnchor = createPolymorphicComponent<'a', CustomButtonProps>(
  ({ label, ...others }: CustomButtonProps) => (
    <Button component="a" {...others}>
      {label}
    </Button>
  )
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
  ({ label, ...others }: CustomButtonProps) => <Button {...others}>{label}</Button>
);

const CustomButtonAnchor = createPolymorphicComponent<'a', CustomButtonProps>(
  ({ label, ...others }: CustomButtonProps) => (
    <Button component="a" {...others}>
      {label}
    </Button>
  )
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
