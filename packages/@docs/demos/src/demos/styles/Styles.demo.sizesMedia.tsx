import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { TextInput } from '@mantine/core';
import classes from './Styles.demo.sizesMedia.module.css';

const code = `
import { TextInput } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <>
      <TextInput
        label="My input"
        placeholder="My input"
        size="xs"
        className={classes['input-mobile']}
      />
      <TextInput
        label="My input"
        placeholder="My input"
        size="xl"
        className={classes['input-desktop']}
      />
    </>
  );
}
`;

const cssCode = `
.input-mobile {
  @media (min-width: em(750px)) {
    display: none;
  }
}

.input-desktop {
  display: none;

  @media (min-width: em(750px)) {
    display: block;
  }
}
`;

function Demo() {
  return (
    <>
      <TextInput
        label="My input"
        placeholder="My input"
        size="xs"
        className={classes['input-mobile']}
      />
      <TextInput
        label="My input"
        placeholder="My input"
        size="xl"
        className={classes['input-desktop']}
      />
    </>
  );
}

export const sizesMedia: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'Demo.module.css', code: cssCode, language: 'css' },
  ],
};
