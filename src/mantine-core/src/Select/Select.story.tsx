import React from 'react';
import { Select } from './Select';

export default { title: 'Select' };

const data = ['React', 'Angular', 'Vue', 'Svelte'];

export function ReadOnly() {
  return (
    <div style={{ padding: 40 }}>
      <Select data={data} clearable defaultValue="React" readOnly searchable />
    </div>
  );
}

export function CreatableWithNoFilter() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        creatable
        searchable
        getCreateLabel={() => 'createLabel'}
        shouldCreate={() => true}
        data={['8.0.0', '8.1.0']}
        value="8.0.0"
      />
    </div>
  );
}
