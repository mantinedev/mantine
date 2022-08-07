import React from 'react';
import { InputBase } from '@mantine/core';
import InputMask from 'react-input-mask';

const code = `
import { InputBase } from '@mantine/core';
import InputMask from 'react-input-mask';

function Demo() {
  return (
    <>
      <InputBase
        label="Input mask"
        placeholder="Your phone"
        component={InputMask}
        mask="+7 (999) 999-99-99"
      />
      <InputBase label="Custom native select" component="select" mt="md">
        <option value="react">React</option>
        <option value="react">Angular</option>
        <option value="svelte">Svelte</option>
      </InputBase>
    </>
  );
}

`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, margin: 'auto' }}>
      <InputBase
        label="Input mask"
        placeholder="Your phone"
        component={InputMask}
        mask="+7 (999) 999-99-99"
      />
      <InputBase label="Custom native select" component="select" mt="md">
        <option value="react">React</option>
        <option value="react">Angular</option>
        <option value="svelte">Svelte</option>
      </InputBase>
    </div>
  );
}

export const inputBase: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
