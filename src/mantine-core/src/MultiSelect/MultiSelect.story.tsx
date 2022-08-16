import React from 'react';
import { MultiSelect } from './MultiSelect';

export default { title: 'MultiSelect' };

const data = ['React', 'Angular', 'Vue', 'Svelte'];

export function ReadOnly() {
  return (
    <div style={{ padding: 40 }}>
      <MultiSelect data={data} clearable defaultValue={['React']} readOnly searchable />
    </div>
  );
}

export function EmptyGroup() {
  return (
    <MultiSelect
      label="Your favorite Rick and Morty character"
      placeholder="Pick all that you like"
      data={[
        { value: 'rick', label: 'Rick', group: 'Used to be a pickle' },
        { value: 'morty', label: 'Morty', group: '' },
        { value: 'beth', label: 'Beth', group: 'Never was a pickle' },
        { value: 'summer', label: 'Summer', group: 'Never was a pickle' },
      ]}
    />
  );
}

export function Asterisk() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <MultiSelect data={data} label="With required asterisk" withAsterisk />
      <MultiSelect data={data} label="Just required" required />
      <MultiSelect data={data} label="Required asterisk off" required withAsterisk={false} />
      <MultiSelect data={data} label="Required false asterisk on" required={false} withAsterisk />
    </div>
  );
}
