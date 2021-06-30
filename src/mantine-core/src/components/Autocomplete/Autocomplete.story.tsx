import React from 'react';
import { storiesOf } from '@storybook/react';
import { Autocomplete } from './Autocomplete';

storiesOf('@mantine/core/Autocomplete', module).add('General usage', () => (
  <div style={{ padding: 40, maxWidth: 300 }}>
    <Autocomplete
      label="Choose your favorite library/framework"
      placeholder="Choose value"
      data={[{ value: 'React' }, { value: 'Angular' }, { value: 'Svelte' }, { value: 'Vue' }]}
    />
  </div>
));
