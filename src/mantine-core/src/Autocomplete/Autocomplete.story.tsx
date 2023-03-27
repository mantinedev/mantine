import React from 'react';
import { Autocomplete } from './Autocomplete';

export default { title: 'Autocomplete' };

const data = ['React', 'Angular', 'Svelte', 'Vue'];

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Autocomplete label="Autocomplete" placeholder="Autocomplete" data={data} />
    </div>
  );
}

export function ReadOnly() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Autocomplete label="Autocomplete" placeholder="Autocomplete" data={data} readOnly />
    </div>
  );
}
