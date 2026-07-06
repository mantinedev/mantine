import { Editable } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Editable } from '@mantine/core';

function Demo() {
  return (
    <Editable
      activationMode="click"
      placeholder={{ preview: 'Click to add a description', edit: 'Type a description...' }}
    />
  );
}
`;

function Demo() {
  return (
    <Editable
      activationMode="click"
      placeholder={{ preview: 'Click to add a description', edit: 'Type a description...' }}
    />
  );
}

export const placeholder: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
