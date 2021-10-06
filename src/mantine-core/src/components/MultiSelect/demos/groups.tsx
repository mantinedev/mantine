import React from 'react';
import { MultiSelect } from '../MultiSelect';

const code = `
  <MultiSelect
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
    <MultiSelect
      label="MultiSelect with Grouped Items"
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
