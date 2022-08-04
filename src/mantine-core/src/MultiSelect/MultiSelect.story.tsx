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
