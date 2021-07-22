import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Autocomplete } from './Autocomplete';

function DynamicData() {
  const [value, setValue] = useState('');
  const data =
    value.trim().length > 0 && !value.includes('@')
      ? ['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => ({
          value: `${value}@${provider}`,
        }))
      : [];

  return (
    <Autocomplete value={value} onChange={setValue} label="Email" placeholder="Email" data={data} />
  );
}

storiesOf('@mantine/core/Autocomplete', module)
  .add('General usage', () => (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <Autocomplete
        label="Choose your favorite library/framework"
        placeholder="Choose value"
        data={[{ value: 'React' }, { value: 'Angular' }, { value: 'Svelte' }, { value: 'Vue' }]}
      />
    </div>
  ))
  .add('Repetitive data', () => (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <Autocomplete
        label="Choose your favorite library/framework"
        placeholder="Choose value"
        data={[{ value: 'AA' }, { value: 'AAA' }, { value: 'AAAA' }]}
      />
    </div>
  ))
  .add('Fixed value', () => (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <Autocomplete
        label="Choose your favorite library/framework"
        placeholder="Choose value"
        value="React"
        onChange={() => {}}
        data={[{ value: 'React' }, { value: 'Angular' }, { value: 'Svelte' }, { value: 'Vue' }]}
      />
    </div>
  ))
  .add('Dynamic data', () => (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <DynamicData />
    </div>
  ))
  .add('Strings as data', () => (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <Autocomplete
        label="Choose your favorite library/framework"
        placeholder="Choose value"
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
    </div>
  ));
