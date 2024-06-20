import { IMaskInput } from 'react-imask';
import { InputBase } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { IMaskInput } from 'react-imask';
import { InputBase } from '@mantine/core';

function Demo() {
  return (
    <InputBase
      label="Your phone"
      component={IMaskInput}
      mask="+7 (000) 000-0000"
      placeholder="Your phone"
    />
  );
}
`;

function Demo() {
  return (
    <InputBase
      label="Your phone"
      component={IMaskInput}
      mask="+7 (000) 000-0000"
      placeholder="+7 (XXX) XXX-XXXX"
    />
  );
}

export const InputMask: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
