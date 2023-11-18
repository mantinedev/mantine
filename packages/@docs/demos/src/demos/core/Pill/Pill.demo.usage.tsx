import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Pill } from '@mantine/core';
import classes from './_demo.module.css';

const code = `
import { Pill } from '@mantine/core';

function Demo() {
  return <Pill{{props}}>React</Pill>;
}
`;

function Wrapper(props: any) {
  return (
    <div className={classes.demoWrapper}>
      <Pill {...props}>React</Pill>
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { type: 'size', prop: 'size', initialValue: 'md', libraryValue: 'md' },
    { type: 'boolean', prop: 'withRemoveButton', initialValue: false, libraryValue: false },
  ],
};
