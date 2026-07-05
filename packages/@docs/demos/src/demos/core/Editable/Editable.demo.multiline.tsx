import { Editable } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Editable } from '@mantine/core';

function Demo() {
  return (
    <Editable
      multiline
      autosize
      minRows={2}
      activationMode="click"
      defaultValue={'A multiline value.\\nPress Cmd/Ctrl + Enter to commit,\\nEscape to cancel.'}
      style={{ width: 360 }}
    />
  );
}
`;

function Demo() {
  return (
    <Editable
      multiline
      autosize
      minRows={2}
      activationMode="click"
      defaultValue={'A multiline value.\nPress Cmd/Ctrl + Enter to commit,\nEscape to cancel.'}
      style={{ width: 360 }}
    />
  );
}

export const multiline: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
