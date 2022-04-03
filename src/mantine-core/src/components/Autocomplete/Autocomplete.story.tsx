import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { WithinOverlays, SubmitForm, StylesAPIStory } from '@mantine/storybook';
import { MantineProvider } from '@mantine/styles';
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

storiesOf('@mantine/core/Autocomplete/stories', module)
  .add('Styles API', () => (
    <StylesAPIStory
      component={Autocomplete}
      name="Autocomplete"
      withInputProps
      props={{ data: ['React'] }}
    />
  ))
  .add('Repetitive data', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Autocomplete
        label="Choose your favorite library/framework"
        placeholder="Choose value"
        data={[{ value: 'AA' }, { value: 'AAA' }, { value: 'AAAA' }]}
      />
    </div>
  ))
  .add('Fixed value', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
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
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DynamicData />
    </div>
  ))
  .add('Strings as data', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Autocomplete
        label="Choose your favorite library/framework"
        placeholder="Choose value"
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
    </div>
  ))
  .add('Within overlays', () => (
    <WithinOverlays>
      <Autocomplete
        label="Choose your favorite library/framework"
        placeholder="Choose value"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        withinPortal={false}
      />
    </WithinOverlays>
  ))
  .add('Within form', () => (
    <SubmitForm>
      <Autocomplete
        label="Press enter"
        placeholder="Choose value"
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
    </SubmitForm>
  ))
  .add('Default props on MantineProvider', () => (
    <MantineProvider defaultProps={{ Autocomplete: { placeholder: 'Default placeholder' } }}>
      <Autocomplete label="Default props" data={['React', 'Angular', 'Svelte', 'Vue']} />
    </MantineProvider>
  ))
  .add('Default radius on MantineProvider', () => (
    <MantineProvider theme={{ defaultRadius: 0 }}>
      <Autocomplete label="Default radius" data={['React', 'Angular', 'Svelte', 'Vue']} />
    </MantineProvider>
  ));
