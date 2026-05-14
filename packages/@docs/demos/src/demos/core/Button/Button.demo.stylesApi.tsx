import { AtIcon } from '@phosphor-icons/react';
import { Button } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { ButtonStylesApi } from '@docs/styles-api';

const code = `
import { Button } from '@mantine/core';
import { AtIcon } from '@phosphor-icons/react';

function Demo() {
  return <Button{{props}} leftSection={<AtIcon size={16} />}>Your email</Button>;
}
`;

function Demo(props: any) {
  return (
    <Button leftSection={<AtIcon size={16} />} {...props}>
      Your email
    </Button>
  );
}

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: ButtonStylesApi,
  component: Demo,
  code,
  centered: true,
};
