import { Button, ButtonProps, ElementProps } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, ButtonProps, ElementProps } from '@mantine/core';

const LinkButton = (props: ButtonProps & ElementProps<'a', keyof ButtonProps>) => (
  <Button {...props} component="a" />
);

function Demo() {
  return (
    <LinkButton href="https://mantine.dev" target="_blank">
      Mantine website
    </LinkButton>
  );
}
`;

const LinkButton = (props: ButtonProps & ElementProps<'a', keyof ButtonProps>) => (
  <Button {...props} component="a" />
);

function Demo() {
  return (
    <LinkButton href="https://mantine.dev" target="_blank">
      Mantine website
    </LinkButton>
  );
}

export const staticPolymorphic: MantineDemo = {
  type: 'code',
  component: Demo,
  centered: true,
  code,
};
