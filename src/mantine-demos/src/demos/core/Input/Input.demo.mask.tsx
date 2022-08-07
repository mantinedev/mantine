import React from 'react';
import { Input } from '@mantine/core';
import { useId } from '@mantine/hooks';
import InputMask from 'react-input-mask';

const code = `
import { Input } from '@mantine/core';
import { useId } from '@mantine/hooks';
import InputMask from 'react-input-mask';

function Demo() {
  const id = useId();
  return (
    <Input.Wrapper id={id} label="Your phone" required>
      <Input component={InputMask} mask="+7 (999) 999-99-99" id={id} placeholder="Your phone" />
    </Input.Wrapper>
  );
}
`;

function Demo() {
  const id = useId();
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Input.Wrapper id={id} label="Your phone" required>
        <Input component={InputMask} mask="+7 (999) 999-99-99" id={id} placeholder="Your phone" />
      </Input.Wrapper>
    </div>
  );
}

export const mask: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
