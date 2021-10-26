import React, { forwardRef } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Select } from '../Select';

const code = `
import { forwardRef } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Select } from '@mantine/core';

const CustomScrollbars = forwardRef<any, any>((props: any, ref: any) => (
  <Scrollbars
    {...props}
    universal
    style={{ ...props.style, position: 'absolute', height: 300 }}
    ref={(scrollbars: any) => scrollbars?.view && ref(scrollbars.view)}
  >
    <div style={{ padding: 3 }}>{props.children}</div>
  </Scrollbars>
));

function Demo() {
  return (
    <Select
      data={data}
      label="Select with custom scrollbars"
      placeholder="Dropdown rendered as custom component"
      dropdownComponent={CustomScrollbars}
    />
  );
}
`;

const CustomScrollbars = forwardRef<any, any>((props: any, ref: any) => (
  <Scrollbars
    {...props}
    universal
    style={{ ...props.style, position: 'absolute', height: 300 }}
    ref={(scrollbars: any) => scrollbars?.view && ref(scrollbars.view)}
  >
    <div style={{ padding: 3 }}>{props.children}</div>
  </Scrollbars>
));

const data = Array(50)
  .fill(0)
  .map((_, index) => ({
    value: `${index}`,
    label: `Item ${index}`,
  }));

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        data={data}
        label="Select with custom scrollbars"
        placeholder="Dropdown rendered as custom component"
        dropdownComponent={CustomScrollbars}
      />
    </div>
  );
}

export const scrollbars: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
