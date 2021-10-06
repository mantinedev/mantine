import React from 'react';
import { Select } from '../Select';

const code = `
  <Select
    label="Select with Grouped Items"
    data={[
      { value: 'red', label: 'Red', group: 'Primary Colors' },
      { value: 'green', label: 'Green', group: 'Secondary Colors' },
      { value: 'blue', label: 'Blue', group: 'Primary Colors' },
      { value: 'yellow', label: 'Yellow', group: 'Primary Colors' },
      { value: 'orange', label: 'Orange', group: 'Secondary Colors' },
      { value: 'violet', label: 'Violet', group: 'Secondary Colors' },
    ]}
    placeholder="Select items"
    nothingFound="Nothing found"
  />;
`;

export function Demo() {
  return (
    <Select
      label="Select with Grouped Items"
      data={[
        { value: 'red', label: 'Red', group: 'Primary Colors' },
        { value: 'green', label: 'Green', group: 'Secondary Colors' },
        { value: 'blue', label: 'Blue', group: 'Primary Colors' },
        { value: 'yellow', label: 'Yellow', group: 'Primary Colors' },
        { value: 'orange', label: 'Orange', group: 'Secondary Colors' },
        { value: 'violet', label: 'Violet', group: 'Secondary Colors' },
      ]}
      placeholder="Select items"
      nothingFound="Nothing found"
    />
  );
}

export const groups: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
